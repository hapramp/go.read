import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/global.css';
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description, tags } = useSiteMetadata()
  return (
    <div className="antialiased">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.png`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#264BBB" />
        <meta name="description" content={description} />
        <meta name="image" content="https://getgosocial.app/img/web_preview.png" />

        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta name="keywords" content={tags} />
        <meta itemprop="image" content="https://getgosocial.app/img/web_preview.png" />


        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://getgosocial.app/img/web_preview.png" />
        <meta property="og:url" content="https://getgosocial.app/" />
        <meta property="og:site_name" content="GoSocial Blog" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" /> 
        <meta property="twitter:site" content="GoSocial Blog" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://getgosocial.app/img/web_preview.png" />


        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700,700i,900i|Roboto+Mono&display=swap" rel="stylesheet" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124845462-6" />
        <script>
         { `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-124845462-6');`}
        </script>
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 content">{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
