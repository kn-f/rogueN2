import { Players } from '../imports/api/players.js';
import { Enemies } from '../imports/api/enemies.js';
import { Arenas } from '../imports/api/arenas.js';

const TURN_DURATION = 1000;
 
Meteor.startup(
  function() {
    initWorld();
    Meteor.setInterval(processTurn,TURN_DURATION);
});

function processTurn() {
  //For each arena get all players and monsters
  console.log("------Inizio-----");
  Arenas.find().forEach(function(arena) {
    console.log("Processing Arena:", arena.name);
    currentEnemy = Enemies.findOne({arenaName: arena.name});
    Players.find({arenaName: arena.name}).forEach(function(player) {
      console.log("Processing player:", player.name," - ", currentEnemy.name);
      currentEnemy.actualHP = currentEnemy.actualHP - Math.max(player.ATK-currentEnemy.DEF,0); 
      console.log("Attack Enemy:", Math.max(player.ATK-currentEnemy.DEF,0));
      actualPlayerHP = player.actualHP - Math.max(currentEnemy.ATK-player.DEF,0);
      console.log("Attack Player:", Math.max(currentEnemy.ATK-player.DEF,0));
      Enemies.update(currentEnemy._id, {
        $set: {'actualHP': currentEnemy.actualHP},
      });
      Players.update(player._id, {
        $set: {'actualHP': actualPlayerHP},
      }); 
      if (actualPlayerHP<=0) {
        Players.update(player._id, {
          $set: {'arenaName': 'lobby'},
        }); 
      }
    });
  });
  console.log("------Fine------");
}

function initWorld() {
  Arenas.update({name: "Base"}, {name: "Base", createdAt: new Date()}, {upsert: true});
  Players.update({name: "Player One"}, { name: "Player One", arenaName: "Base", ATK: 2, DEF: 2, maxHP: 100, actualHP: 100, createdAt: new Date() }, {upsert: true});
  Players.update({name: "Weak Player"}, { name: "Weak Player", arenaName: "Base", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date() }, {upsert: true});
  Enemies.update({name: "Cookie Monster"}, { name: "Cookie Monster", arenaName: "Base", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date() }, {upsert: true});
  Enemies.update({name: "Oooommm"}, { name: "Oooommm", arenaName: "PIco", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date() }, {upsert: true});
}
