import { Template } from 'meteor/templating';
import { Players } from '../api/players.js';
import { Enemies } from '../api/enemies.js';

import './body.html';

 
Template.body.helpers({
  players() {
    return Players.find({});
  },
});


Template.body.helpers({
  enemies() {
    return Enemies.find({});
  },
});