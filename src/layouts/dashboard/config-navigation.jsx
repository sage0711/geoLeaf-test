import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: icon('ic_analytics'),
    arrow: icon('ic_leftarrow'),
  },
  {
    title: 'About',
    path: '/about',
    icon: icon('ic_user'),
    arrow: icon('ic_leftarrow'),
  },
  {
    title: 'How to Use?',
    path: '/howtouse',
    icon: icon('ic_cart'),
    arrow: icon('ic_leftarrow'),
  },
  {
    title: 'Create Pool',
    path: '/createpool',
    icon: icon('ic_blog'),
    arrow: icon('ic_leftarrow'),
  }
];

export default navConfig;
