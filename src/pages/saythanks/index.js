import React, { useEffect, useState } from 'react';

import { db } from './config/fbConfig';


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
        {
          user.links.map(link => {
            let key = Object.keys(link);
            return <a key={key} className="mx-1 text-secondary" href={link[key]} target="__new">{key}</a>
          })
        }
      </div>
      <button onClick={handleClick} className="bg-black px-3 py-1 text-white rounded uppercase text-sm mt-4">Say Thanks <span role="img" aria-label="Thank you emoji">🙌</span> </button>
      <p className="text-sm text-center mt-2"><span className="font-bold">{user.thanks_count}</span> thanks received so far</p>
    </div>
  )
}

const Index = () => {

  const [users, setUsers] = useState();

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
    db
      .collection('users')
      .doc(userId)
      .update({
        thanks_count
      })
  }

  useEffect(() => {
    db
      .collection('users')
      .get()
      .then(querySnapshot => {
        let users = {};
        querySnapshot.forEach(function (doc) {
          users[doc.id] = { id: doc.id, ...doc.data() }
        })
        return users;
      })
      .then(data => {
        setUsers(data);
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
      <div className="mt-12 md:mt-20">
        <div className="text-3xl italic font-bold text-center leading-tight">
          Say Thanks to your <span className="text-primary">favourite</span> Creator
        </div>
      </div>
      <div className="mt-10 md:mt-20 flex flex-wrap justify-center">
        {
          users ? getUserComponent(users) : <div>Loading...</div>
        }

      </div>
    </section>
  );
};

export default Index;