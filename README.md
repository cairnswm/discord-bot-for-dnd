# Discord bot for Dungeons and dragons

## Apps

All apps are run from the same code base. React is served through the express application. I have deployed the application on cPanel as a node app.

Discord Bot
Rest API
React Front end

### Discord Bot

Characters and Dungeon Master can interact with the Bot

### Rest API

Used to maange actions that cannot be done easily through the Discord system. For example displaying comprehensive character sheets to players. Enabling the Dungeon Master to create Campaigns and Characters.

### React Front End

Supplies a user interface to access data. Players can use the system to view and manage their character sheets. Dungeon master can access to all character sheets

## Features

### Die Rolling
command !roll or !r

In discord type 
!r <die>

e.g. 
!r 3d20 
withh roll and total 3 20 sided die

simple additions and subtractiosn will work
!r d20+2

The ability to drop lowest die is possible
!r 2d20-L

TODO: allow custom type die rolls
!r attack advantage
!r attack disadvantage
!r strength
!r perception

### join
Command !join or !j

use the join command to join a campaing. Only once in a campaign can you claim a character

!join <campaign>

The DM will ggive you the campaign name

### Character
Command !character or !char or !ch or !c

The structure of the command is
<command> <action> <details>

#### Action claim
action: claim

!character claim <characterid>

This will allocate the character to you and other commands will be actions as for this character - eg display will display this characters name

#### Action sheet
action: sheet or sh

!character sheet

Will display a short summary in the current chanel of your character, basic information sucg as name, race, gender, class, level will be displayed

#### Action expanded
action exampanded or ex

!character expanded

Will display in a private chat window with the Bot your full character sheet

#### Action link
action: link

!character link

Will post a link to your characer sheet in the private message channel, use this to open and view your character in a browser window

#### Action release
action: release

@character release

This will remove the relationship between yourself and the charater, this will then allow somone else to claim the character instead


### Dungeon Master

!dm <command> <action> <detail>

#### Campaign Create

!dm campaign create <campaign Name>

Will create a new campaign with Name in the system. Will return (in private chat) a link to the campaign page. 

#### Campaign Claim

#### Campaign Release

More to Come
* Create NPC
* Create Town/City
* Get Names
* Character cast spells

