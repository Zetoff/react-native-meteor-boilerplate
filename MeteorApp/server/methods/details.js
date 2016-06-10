import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Details } from '/lib/collections';

export default function() {
  Meteor.methods({
    'details.new' () {
      let count = Details.find().count();
      Details.insert({ name: `Test ${count + 1}` });
    }
  });
}
