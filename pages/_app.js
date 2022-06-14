import React, { Fragment } from 'react';
import Router from 'next/router';
import { wrapper } from '../store';

// global styles
import 'swiper/swiper.scss';
import 'rc-slider/assets/index.css';
import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

import * as gtag from './../utils/gtag';

// console.log(
//   '🚀 -- node_env:',
//   { env: process.env.NODE_ENV }
// );
// console.log(
//   '🚀 -- app_env:',
//   { env: process.env.APP_ENV }
// );
if (process.env.NODE_ENV === "development") {
  console.log('Version: ', process.env.NEXT_PUBLIC_DEVELOPMENT_ENV_VARIABLE);
}
if (process.env.NODE_ENV === "production") {
  console.log('🚀 -- TEST --:', process.env);
  console.log('Version: ', process.env.NEXT_PUBLIC_PRODUCTION_ENV_VARIABLE);
}
if (process.env.NODE_ENV === "test") {
  console.log('Version: ', process.env.NEXT_PUBLIC_TEST_ENV_VARIABLE);
}
// if (process.env.APP_ENV === "staging") {
//   console.log('Version: ', process.env.NEXT_PUBLIC_STAGING_ENV_VARIABLE);
// }

console.log('🚀 Staging: ', process.env.STAGING);


const isProduction = process.env.NODE_ENV === 'production';
// console.log(
//   '🚀 -- isProduction:',
//   { isProduction }
// );


// only events on production
if (isProduction) {

  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);