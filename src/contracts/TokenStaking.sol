// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract StakingContract is ReentrancyGuard, Ownable {
  IERC20 public stakingToken;
  IERC20 public rewardToken;

  uint256 public startTime;
  uint256 public endTime;
  uint256 public rewardRate; // daily reward rate
  uint256 public totalRewards;
  uint256 public totalStaked;

  struct Staker {
    uint256 stakedAmount;
    uint256 rewardDebt;
  }

  mapping(address => Staker) public stakers;

  constructor(
    address _stakingToken,
    address _rewardToken,
    uint256 _startTime,
    uint256 _endTime,
    uint256 _dailyRewardRate,
    uint256 _totalRewards
  ) Ownable(msg.sender) {
    require(_startTime < _endTime, 'Start time must be before end time');
    stakingToken = IERC20(_stakingToken);
    rewardToken = IERC20(_rewardToken);
    startTime = _startTime;
    endTime = _endTime;
    rewardRate = _dailyRewardRate;
    totalRewards = _totalRewards;
  }

  function stake(uint256 amount) external nonReentrant {
    require(block.timestamp >= startTime, 'Staking has not started yet');
    require(block.timestamp <= endTime, 'Staking has ended');

    Staker storage staker = stakers[msg.sender];
    staker.stakedAmount += amount;
    totalStaked += amount;

    // Transfer staking tokens to this contract
    stakingToken.transferFrom(msg.sender, address(this), amount);
  }

  function claimRewards() external nonReentrant {
    Staker storage staker = stakers[msg.sender];
    uint256 rewards = calculateRewards(msg.sender);

    // Update reward debt
    staker.rewardDebt += rewards;

    // Transfer reward tokens to staker
    rewardToken.transfer(msg.sender, rewards);
  }

  function calculateRewards(address stakerAddress) public view returns (uint256) {
    Staker storage staker = stakers[stakerAddress];
    uint256 stakingDuration = block.timestamp - startTime;
    uint256 dailyStakingTime = 86400; // seconds in a day

    return ((staker.stakedAmount * stakingDuration) / dailyStakingTime) * rewardRate;
  }

  function withdraw(uint256 amount) external nonReentrant {
    Staker storage staker = stakers[msg.sender];
    require(staker.stakedAmount >= amount, 'Insufficient staked amount');

    staker.stakedAmount -= amount;
    totalStaked -= amount;

    // Transfer staking tokens back to the staker
    stakingToken.transfer(msg.sender, amount);
  }

  // Owner can add more rewards
  function addRewards(uint256 additionalRewards) external onlyOwner {
    totalRewards += additionalRewards;
    rewardToken.transferFrom(msg.sender, address(this), additionalRewards);
  }
}

contract StakingFactory is Ownable {
  // Event to emit the address of new staking contract
  event NewStakingContract(address indexed stakingContract);

  constructor() Ownable(msg.sender) {} // pass msg.sender as initialOwner

  function createStakingContract(
    address _stakingToken,
    address _rewardToken,
    uint256 _startTime,
    uint256 _endTime,
    uint256 _dailyRewardRate,
    uint256 _totalRewards
  ) public {
    StakingContract newContract = new StakingContract(
      _stakingToken,
      _rewardToken,
      _startTime,
      _endTime,
      _dailyRewardRate,
      _totalRewards
    );
    newContract.transferOwnership(msg.sender);
    emit NewStakingContract(address(newContract));
  }
}
