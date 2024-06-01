/*
 * Copyright for Bob "Shibdib" Sardinia - See license file for more information,(c) 2023.
 */

// BACKUP THIS FILE BETWEEN UPDATES!!!!!!!
// Use this to modify how your overlord bot runs


// General Settings
global.STATUS_COOLDOWN = 180; // Seconds between console status reports
global.SIGN_CLEANER = true; // Clean room signs away with explorers
global.AVOID_ALLIED_SECTORS = true; // Try not to claim rooms in allied sectors
global.GENERATE_PIXELS = true; // Generate pixels when feasible (not in war)
global.PIXEL_FARM = false; // Use this on spawn ins, bot will do nothing but farm pixels and keep the room from decaying
global.PIXEL_BUFFER = 1000; // Sell any pixels above this amount
global.DESIRED_LOGGING_LEVEL = 4; //Set level 1-5 (5 being most info)
global.TOWER_FIRST = false; // Set to true to have towers built before spawns
global.UPGRADER_BASE = 20; // upgraders per room - room level is subtracted from this number for the actual number of upgraders

// Diplomacy
global.COMBAT_SERVER = []; // Insert the Game.shard.name of servers you'd like to declare everyone hostile
global.HOSTILES = []; // Manually set players as hostile
global.MANUAL_FRIENDS = ['Dejeezel', 'donzel2', 'Donzel20', 'donzel20', 'Banzai', 'TTATTCC']; // Manually set players as friends (overrides COMBAT_SERVER)
global.RAMPART_ACCESS = true // Allow friends and allies access through ramparts. Having this disabled does save CPU.
global.NAP_ALLIANCE = []; // Do not attack members of this alliance

// Combat Settings
global.OFFENSIVE_OPERATIONS = true; // Offensive Combat, disabling this will disable all offensive operations
global.HOLD_SECTOR = false; // Attack rooms in sectors you have rooms
global.ATTACK_LOCALS = false; // Attacks targets within range indiscriminately. Bot will still attack aggressors.
global.NEW_SPAWN_DENIAL = false; // Crush new spawns immediately
global.NCP_HOSTILE = false; // Always attack users of open source bots
global.ATTACK_COOLDOWN = 4500; //Time between attacks on a room
global.AVOID_ATTACKING_ALLIANCES = false; // Check LOAN and avoid attacking people in alliances

// Market Settings
global.BUY_ENERGY = true; // If true it will buy energy when above the buffer
global.BUY_ENERGY_CREDIT_BUFFER = 500000; // Stay above this to buy energy
global.CREDIT_BUFFER = 5000; // Stay above this amount
global.MINERAL_TRADE_AMOUNT = 10000;  // Hold this much of a mineral before selling
global.BOOST_TRADE_AMOUNT = 15000;  // Hold this much of a boost before selling
global.REACTION_AMOUNT = 10000; // Minimum amount we aim for base minerals
global.TERMINAL_ENERGY_BUFFER = 10000; // Keep this much in terminal (Needed for trade)
global.STORAGE_ENERGY_BUFFER = 50000; // Keep this much in storage (useful for sieges but may slow down praising if too high)
global.BOOST_AMOUNT = 10000; // Try to have this much of all applicable boosts
global.DUMP_AMOUNT = 40000; // Fills buys (or if overflowing it will offload to other terminals)

// Room Ramparts
global.RAMPARTS_ONLY = false; // Only build ramparts and not a checkered pattern
global.PROTECT_CONTROLLER = true; // Include controller in the bunker algorithm
global.PROTECT_MINERAL = true; // Include mineral in the bunker algorithm
global.PROTECT_SOURCES = true; // Include sources in the bunker algorithm

// Signing and whatnot
global.OWNED_ROOM_SIGNS = ["Skibbity"];
global.RESERVE_ROOM_SIGNS = ["KEEP BACK"];
global.EXPLORED_ROOM_SIGNS = [
    //'Evil does seek to maintain power by suppressing the truth. Or by misleading the inoccent. - Spock and Dr. McCoy',
    //'Improve a mecanical device and you may double productivity. But improve man, you gain a thousandfold. - Noonien Singh',
    //'Compassion: that’s the one thing no machine ever had. Maybe it’s the one thing that keeps men ahead of them. - Dr. McCoy',
    //'It is possible to commit no errors and still lose. That is not a weakness. That is life. - Jean-Luc Picard',
    //'I am pleased to see that we have differences. May we together become greater than the sum of both of us. - Surak',
    //'Humans do have an amazing capacity for believing what they choose — and excluding that which is painful. - Spock',
    //'With the first link, the chain is forged. The first speech censored, the first thought forbidden, the first freedom denied, chains us all irrevocably. - Jean-Luc Picard',
     //'Human beings do not survive on bread alone … but on the nourishments of liberty. For what indeed is a man without freedom … naught but a mechanism, trapped in the cogwheels of eternity. - Harry Mudd',
    //'Your will to survive, your love of life, your passion to know … Everything that is truest and best in all species of beings has been revealed to you. Those are the qualities that make a civilization worthy to survive. - Lai the Vian',
    //'There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it. - Jean-Luc Picard',
    //'You may find that having is not so pleasing a thing as wanting. This is not logical, but it is often true. - Spock',
    //'I speak of rights! A machine has none; a man must. If you do not grant him that right, you have brought us down to the level of the machine; indeed, you have elevated that machine above us! - Samuel T. Cogley',
    //'When you eliminate the impossible, whatever remains, however improbable, must be the truth. - Spock',
    //'When a child is taught, it’s programmed with simple instructions, and at some point, if its mind develops properly, it exceeds the sum of what it was taught, thinks independently. - Dr. Daystrom',
    //'I would be delighted to offer any advice I can on understanding women. When I have some, I’ll let you know. - Jean-Luc Picard',
    //'It’s hard to believe that something which is neither seen nor felt can do so much harm. That’s true. But an idea can’t be seen or felt. - Vanna and James Kirk',
 
    //'To all mankind — may we never find space so vast, planets so cold, heart and mind so empty that we cannot fill them with love and warmth. - Garth',
    //'May I point out that I have gotten a chance to examine your counterparts closely. They are brutal, savage, uncivilized and illogical. They are in every way examples of Homo sapiens, the very flower of humanity. - Spock',
    //'There’s only one kind of woman ... Or man, for that matter. You either believe in yourself or you don’t. - James Kirk and Harry Mudd',
    //'This is why one must be careful with life ... her father had said, in very controlled wrath. Death is the most hateful thing. Don’t allow the destruction of what you can never restore. - Diane Duane',
    //'Can you imagine how life could be improved if we could do away with jealousy, greed, hate …  It can also be improved by eliminating love, tenderness, sentiment — the other side of the coin. - Dr. Roger Corby and Captain James. T Kirk',
    //'Look at these three words written larger than all the rest, and with special pride never written before or since — tall words, proudly saying ... We the people  … these words and the words that follow … must apply to everyone or they mean nothing. - James Kirk',
    //'Our species can only survive if we have obstacles to overcome. You remove those obstacles. Without them to strengthen us, we will weaken and die. - James Kirk',
    //'We prefer to help ourselves. We make mistakes, but we’re human — and maybe that’s the word that best explains us. - James Kirk',
    //'Now, I don’t pretend to tell you how to find happiness and love, when every day is a struggle to survive. But I do insist that you do survive, because the days and the years ahead are worth living for! - Edith Keeler',
    //'Leave bigotry in your quarters; there’s no room for it on the bridge. - James Kirk',
    //'The release of emotion is what keeps us healthy. Emotionally healthy. That may be, Doctor. However, I have noted that the healthy release of emotion is frequently unhealthy for those closest to you. - Dr. McCoy and Spock',
    //'We’re a most promising species, Mr. Spock, as predators go. Did you know that? I frequently have my doubts. I don’t. Not any more. And maybe in a thousand years or so, we’ll be able to prove it. - James Kirk',




    'You can use logic to justify almost anything. That’s its power. And its flaw. - Cathryn Janeway',
    'Logic is the beginning of wisdom, not the end. - Spock',
    'Things are only impossible until they’re not. - Jean-Luc Picard',
    'Without followers, evil cannot spread. - Spock',
    'The prejudices people feel about each other disappear when they get to know each other. - James Kirk',
    'Time is fluid…like a river with currents, eddies, backwash. - Spock',
    'A library serves no purpose unless someone is using it. - Mr. Atoz',
    'Live now; make now always the most precious time. Now will never come again. - Jean-Luc Picard',
    'Change is the essential process of all existence. - Spock',
    'Without freedom of choice there is no creativity. - James Kirk',
    'Live long, and prosper. - Spock',
    'If we’re going to be damned, let’s be damned for what we really are. - Jean-Luc Picard',
    'Sometimes a feeling is all we humans have to go on. - CaptainJames T. Kirk',
    'Those who want war will find causes, no matter how many of them you take away. - Diane Duane',
    'A little suffering is good for the soul. - James Kirk',
    'The heart is not a logical organ. - Dr. Janet Wallace',
    'Pain is a thing of the mind. The mind can be controlled. - Spock',
    'It can be argued that a human is ultimately the sum of his experiences. - Benjamin Sisko',
    'It would seem that evil retreats when forcibly confronted. - Yarnek of Excalbia',
    'When governments murder those who speak the truth, it is time to get new governments. - Diane Duane',
    'Believing oneself to be perfect is often the sign of a delusional mind. - Data',
    'Intuition, however illogical, is recognized as a command prerogative. - James Kirk',
    'Violence in reality is quite different from theory. - Spock',
    'I object to intellect without discipline; I object to power without constructive purpose. - Spock',
    'Time is the fire in which we burn. - Malcolm McDowell',
    'Men don’t talk peace unless they’re ready to back it up with war. - Col. Green',
    'It’s time you learned that freedom is never a gift. It has to be earned. - James Kirk',
   'Life and death are seldom logical. But attaining a desired goal always is. - Dr. McCoy and Spock',
    'I fail to comprehend your indignation, sir. I have simply made the logical deduction that you are a liar. - Spock',
    'Many Myths are based on truth. - Spock',
    'To be human is to be complex. You can’t avoid a little ugliness – from within – and from without. - James Kirk',
    'Every living thing wants to survive. - Spock',
    'Superior ability breeds superior ambition. - Spock',
    'A lie is a very poor way to say hello. - Edith Keeler',
    'To boldly go where no man has gone before. - James Kirk',
    'It is necessary to have purpose. - Alice #1',
    'Madness has no purpose. Or reason. But it may have a goal. - Spock',
    'When the personality of a human is involved, exact predictions are hazardous. - Dr. McCoy',
    'If I can have honesty, it’s easier to overlook mistakes. - James Kirk',
    'A father doesn’t destroy his children. - Lt. Carolyn Palamas',
   'Behind every great man, there is a woman — urging him on. - Harry Mudd',
    'Another dream that failed. There’s nothing sadder. - James Kirk',
    'One man cannot summon the future. But one man can change the present! - Alternate Mr. Spock',
    'Curious, how often you humans manage to obtain that which you do not want. - Spock',
    'How we deal with death is at least as important as how we deal with life. - James Kirk',
    'Insults are effective only where emotion is present. - Spock',
    'Too much of anything, even love, isn’t necessarily a good thing. - James Kirk'






















];
    
global.ATTACK_ROOM_SIGNS = ["ALL YOUR BASE ARE BELONG TO US"];
global.EXPLORER_SPAM = ['I need HUGS!'];

// The boosts you want labs to focus on first (resources permitted)
global.LAB_PRIORITY = [RESOURCE_GHODIUM, RESOURCE_CATALYZED_GHODIUM_ACID, RESOURCE_CATALYZED_UTRIUM_ACID, RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE, RESOURCE_CATALYZED_KEANIUM_ALKALIDE, RESOURCE_CATALYZED_LEMERGIUM_ACID];
// If credits permit, buy these boosts
global.BUY_THESE_BOOSTS = [RESOURCE_GHODIUM_ACID, RESOURCE_KEANIUM_ALKALIDE, RESOURCE_LEMERGIUM_ACID];