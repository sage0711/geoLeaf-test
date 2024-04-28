import { Helmet } from 'react-helmet-async';

import { AboutView } from 'src/sections/about/view';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title> About | GeoLeaf </title>
      </Helmet>

      <AboutView />
    </>
  );
}
