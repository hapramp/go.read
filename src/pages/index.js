import React from 'react';
import Home from '../components/Home';
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby';
import '../styles/global.css';

const Index = () => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{`GoSocial: Photography, Writing, Art, & Design Challenges`}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="32x32" />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16" />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.png`}
          color="#ff4400" />


        <meta name="theme-color" content="#264BBB" />
        <meta name="description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
        <meta name="image" content="https://getgosocial.ap/img/web_preview.png" />

        <meta itemprop="name" content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta itemprop="description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
        <meta name="keywords" content="go, gosocial, challenges, contests, rewards, win, earn, creative, design, photography, writing, learn, hapramp studio, best, social media, community, skills, creative journey, self-challenges" />
        <meta itemprop="image" content="https://getgosocial.app/img/web_preview.png" />


        <meta property="og:title" content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta property="og:description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
        <meta property="og:image" content="https://getgosocial.app/img/web_preview.png" />
        <meta property="og:url" content="https://getgosocial.app/" />
        <meta property="og:site_name" content="GoSocial" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" /> 
        <meta property="twitter:site" content="GoSocial" />
        <meta property="twitter:title" content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta property="twitter:description" content="Take creative challenges designed by experts in design, photography, writing and art. Learn, win, and create on the go!" />
        <meta property="twitter:image" content="https://getgosocial.app/img/web_preview.png" />
        
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,900i&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124845462-6" />
        <script>
         { `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-124845462-6');`}
        </script>
      </Helmet>
      <Home />
    </div>
  );
};

export default Index;