import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import {FoodCollection} from '../imports/api/Food'

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

//function to insert food data
function insertFood({name,price}){
   FoodCollection.insert({name,price, createdAt:new Date()})
}

Meteor.startup(() => {

  //working with the food collection



  if(FoodCollection.find().count()=== 0){
    
    insertFood({
      name:"Matooke",
      price:"5000ugx"
     });
  }



  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {


    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
  }
});
