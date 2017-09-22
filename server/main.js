import { Players } from '../imports/api/players.js';
import { Enemies } from '../imports/api/enemies.js';

const TURN_DURATION = 1000;
 
Meteor.startup(
  function() {
    Meteor.setInterval(processTurn,TURN_DURATION);
});

function processTurn() {
  Enemies.find({}).forEach(function (element) {
    Enemies.update(element._id, {
      $set: {'actual_hp': element.actual_hp-1},
      });
  });
}