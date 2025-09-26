{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* fantasy_data.js */\
\
// --- SCORING RULES (As Agreed) ---\
const SCORING_RULES = \{\
    // Points for Foursomes/Four-ball (Day 1 & 2)\
    TEAM_MATCH_WIN: 2.0,\
    TEAM_MATCH_HALVE: 1.0,\
    // Points for Singles (Day 3)\
    SINGLES_MATCH_WIN: 3.0,\
    SINGLES_MATCH_HALVE: 1.5,\
    // Individual Stat Bonus (All Days)\
    BIRDIE_BONUS: 0.25, // Placeholder for data entry; requires manual tracking/input\
    DECISIVE_WIN_BONUS: 1.0, // For a win 4&3 or greater\
    // Final Bonuses\
    OVERALL_WINNER_BONUS: 15.0,\
    DAILY_WINNER_MULTIPLIER: 2.0 // Multiplies player's points for that day\
\};\
\
// --- INITIAL PLAYER LIST ---\
// Using predicted/current top players for demonstration. You will update this.\
const PLAYERS = [\
    // Team USA\
    \{ id: 'sscheffler', name: 'Scottie Scheffler', team: 'USA', birdies: 0, points: 0 \},\
    \{ id: 'xschauffele', name: 'Xander Schauffele', team: 'USA', birdies: 0, points: 0 \},\
    \{ id: 'jthomas', name: 'Justin Thomas', team: 'USA', birdies: 0, points: 0 \},\
    \{ id: 'pcantlay', name: 'Patrick Cantlay', team: 'USA', birdies: 0, points: 0 \},\
    \{ id: 'bdechambeau', name: 'B. DeChambeau', team: 'USA', birdies: 0, points: 0 \},\
    \{ id: 'cmorikawa', name: 'Collin Morikawa', team: 'USA', birdies: 0, points: 0 \},\
    // Team Europe\
    \{ id: 'rmcilroy', name: 'Rory McIlroy', team: 'EUR', birdies: 0, points: 0 \},\
    \{ id: 'jrahm', name: 'Jon Rahm', team: 'EUR', birdies: 0, points: 0 \},\
    \{ id: 'vhovland', name: 'Viktor Hovland', team: 'EUR', birdies: 0, points: 0 \},\
    \{ id: 'tfleetwood', name: 'Tommy Fleetwood', team: 'EUR', birdies: 0, points: 0 \},\
    \{ id: 'thatton', name: 'Tyrrell Hatton', team: 'EUR', birdies: 0, points: 0 \},\
    \{ id: 'lrory', name: 'Ludvig \'c5berg', team: 'EUR', birdies: 0, points: 0 \},\
];\
\
// --- LEAGUE DATA (The "Database") ---\
// This will be stored and updated by the Commissioner Input Page.\
// For the initial build, this is the starting state:\
\
const LEAGUE_DATA = \{\
    leagueCode: 'RYDER2025', // The shared secret code for entry\
    overallWinner: null, // 'USA', 'EUR', or null until decided\
    \
    // FANTASY TEAMS (Initial structure, will be populated on first entry)\
    fantasyTeams: [\
        // Example structure for a team:\
        // \{\
        //     name: "Fantasy Name",\
        //     overallPick: "USA", // "USA" or "EUR"\
        //     roster: ['sscheffler', 'jthomas', 'rmcilroy', 'vhovland', 'tfleetwood'], // Player IDs\
        //     dayWinners: \{\
        //         'Friday': 'sscheffler',\
        //         'Saturday': 'rmcilroy',\
        //         'Sunday': null\
        //     \},\
        //     totalPoints: 0\
        // \}\
    ],\
    \
    // MATCH RESULTS (Admin will update this)\
    matchResults: \{\
        'Friday': [\
            // Example match result structure:\
            // \{ match: 'Foursomes 1', players: ['sscheffler', 'xschauffele', 'rmcilroy', 'jrahm'], winner: 'USA', margin: '4&3', winnerIDs: ['sscheffler', 'xschauffele'], loserIDs: ['rmcilroy', 'jrahm'] \}\
        ],\
        'Saturday': [],\
        'Sunday': []\
    \},\
    \
    // PLAYER SCORING TRACKER (To track individual points per day)\
    playerScores: \{\
        'sscheffler': \{ total: 0, Friday: 0, Saturday: 0, Sunday: 0, birdies: 0 \},\
        'xschauffele': \{ total: 0, Friday: 0, Saturday: 0, Sunday: 0, birdies: 0 \},\
        // ... all other players\
    \}\
\};}