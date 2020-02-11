import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby';

import { getFirebase } from './config/fbConfig';

const User = (props) => {

  const user = props.user;

  const handleClick = (e) => {
    props.handleThanks(user, parseInt(user.thanks_count) + 1)
  }

  return (
    <div className="flex flex-col justify-center items-center mx-2 md:mx-3 mb-8">
      <img className="h-20 w-20 rounded-full" src={user.profile_url} alt="" />
      <h2 className="text-xl mt-2">{user.name}</h2>
      <div>
        {user
          .links
          .map(link => {
            let key = Object.keys(link);
            return <a
              key={key}
              className="mx-1 text-secondary lowercase"
              href={link[key]}
              target="__new">{key}</a>
          })
        }
      </div>
      <button
        onClick={handleClick}
        className="bg-black px-3 py-1 text-white rounded uppercase text-sm mt-4">{`Say Thanks `}
        <span role="img" aria-label="Thank you emoji">🙌</span>
      </button>
      <p className="text-sm text-center mt-2">
        <span className="font-bold">{user.thanks_count}</span>
        {` thanks received so far`}</p>
    </div>
  )
}

const Index = () => {

  const [users,
    setUsers] = useState();

  const [fdb, setFdb] = useState();

  const handleThanks = (user, thanks_count) => {
    let obj = {
      ...users,
      [user.id]: {
        ...users[user.id],
        thanks_count
      }
    }
    setUsers(obj);
    updateUser(user.id, thanks_count);
  }

  const updateUser = (userId, thanks_count) => {
    fdb
      .collection('users')
      .doc(userId)
      .update({ thanks_count })
  }

  useEffect(() => {

    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/firestore')

    Promise
      .all([lazyApp, lazyDatabase])
      .then(([firebase]) => {
        const db = getFirebase(firebase).firestore();

        setFdb(db);

        db
          .collection('users')
          .orderBy('thanks_count', 'desc')
          .get()
          .then(querySnapshot => {
            let users = {};
            querySnapshot.forEach(function (doc) {
              users[doc.id] = {
                id: doc.id,
                ...doc.data()
              }
            })
            return users;
          })
          .then(data => {
            setUsers(data);
          })
      })

  }, [])

  const getUserComponent = (users) => {
    const userComp = [];
    for (const key in users) {
      userComp.push(<User key={key} handleThanks={handleThanks} user={users[key]} />)
    }
    return userComp;
  }

  return (
    <section className="px-2 max-w-4xl mx-auto">
      <Helmet>
        <html lang="en" />
        <title>{`Say Thanks to your favourite Creator`}</title>
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
        <meta
          name="description"
          content="Take challenges created by experts in design, photography, writing and your favorite creative skills. Get Inspired and earn rewards on the Go." />
        <meta name="image" content="https://getgosocial.ap/img/web_preview.png" />

        <meta
          itemprop="name"
          content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta
          itemprop="description"
          content="Take challenges created by experts in design, photography, writing and your favorite creative skills. Get Inspired and earn rewards on the Go." />
        <meta
          name="keywords"
          content="go, gosocial, challenges, contests, rewards, win, earn, creative, design, photography, writing, learn, hapramp studio, best, social media, community, skills, creative journey, self-challenges" />
        <meta itemprop="image" content="https://getgosocial.app/img/web_preview.png" />

        <meta
          property="og:title"
          content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta
          property="og:description"
          content="Take challenges created by experts in design, photography, writing and your favorite creative skills. Get Inspired and earn rewards on the Go." />
        <meta
          property="og:image"
          content="https://getgosocial.app/img/web_preview.png" />
        <meta property="og:url" content="https://getgosocial.app/" />
        <meta property="og:site_name" content="GoSocial" />
        <meta property="og:type" content="website" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="GoSocial" />
        <meta
          property="twitter:title"
          content="GoSocial: Creative Challenges - Exciting Rewards" />
        <meta
          property="twitter:description"
          content="Take challenges created by experts in design, photography, writing and your favorite creative skills. Get Inspired and earn rewards on the Go." />
        <meta
          property="twitter:image"
          content="https://getgosocial.app/img/web_preview.png" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,900i&display=swap"
          rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-124845462-6" />
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'UA-124845462-6');`}</script>
      </Helmet>
      <div className="mt-12 md:mt-20">
        <div className="text-3xl italic font-bold text-center leading-tight">
          Say Thanks to your
          <span className="text-primary">{` favourite `}</span>
          Creator
        </div>
      </div>
      <div className="mt-10 md:mt-20 flex flex-wrap justify-center">
        {users
          ? getUserComponent(users)
          : <div>Loading...</div>
        }

      </div>
    </section>
  );
};

export default Index;