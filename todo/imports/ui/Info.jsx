import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {

  //useTracker is a high order function that consumes callback fn
  //
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });



  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map( //link is al ist of objects
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
