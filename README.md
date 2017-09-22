# rogueN2
Arena MMO
# Setup
npm install
# DB Setup for testing
meteor mongo
db.players.insert({ name: "Player One", createdAt: new Date() });
db.enemies.insert({ name: "Cookie Monster", actual_hp: 20, max_hp: 100, createdAt: new Date() });
db.enemies.insert({ name: "Oooommm", actual_hp: 20, max_hp: 100, createdAt: new Date() });

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