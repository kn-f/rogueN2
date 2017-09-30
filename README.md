# rogueN2
Arena MMO
# Setup
npm install
# DB Setup for testing
meteor mongo
db.arenas.insert({name: "Base", createdAt: new Date()});
db.players.insert({ name: "Player One", arenaName: "Base", ATK: 2, DEF: 2, maxHP: 100, actualHP: 100, createdAt: new Date() });
db.players.insert({ name: "Weak Player", arenaName: "Base", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date() });
db.enemies.insert({ name: "Cookie Monster", arenaName: "Base", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date() });
db.enemies.insert({ name: "Oooommm", arenaName: "PIco", ATK: 2, DEF: 1, maxHP: 100, actualHP: 100, createdAt: new Date()});

# Player
- name
- arenaName
- ATK
- DEF
- maxHP
- actualHP

#enemy
- name
- arenaName
- ATK
- DEF
- maxHP *
- actualHP *

#arena
- name (PK)
