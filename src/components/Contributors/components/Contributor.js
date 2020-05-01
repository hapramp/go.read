import React from 'react';

const Contributor = (props) => {
  return (
    <div className="mx-2 sm:mx-4 mb-6 md:mb-10">
      <a className="flex flex-col items-center" href={props.link} target="__blank">
        <img className="h-20 w-20 rounded-full" src={props.img} alt="Kunal"/>
        <span className="mt-2 text-center text-lg">{props.name}</span>
      </a>
    </div>
  );
};

export default Contributor;