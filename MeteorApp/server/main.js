import { Meteor } from 'meteor/meteor';
import publications from './publications';
import methods from './methods';

Meteor.startup(() => {
  // code to run on server at startup
});

publications();
methods();
