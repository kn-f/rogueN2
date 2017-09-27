# rogueN2
Arena MMO
# Setup
npm install

# DB Setup for testing
Already part of the start process
Currently every restart of the server resets HPs for players and enemies

# Data structure
## Player
- name
- arenaName (FK)
- ATK
- DEF
- maxHP
- actualHP

## Enemy
- name
- arenaName (FK)
- ATK
- DEF
- maxHP *
- actualHP *

## Arena
- name (PK)
