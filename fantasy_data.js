// fantasy_data.js

// --- 1. Scoring Rules ---
const SCORING_RULES = {
    overallWinnerBonus: 20 // Bonus points for correctly picking the overall winning team
};

// --- 2. Full Player Roster (12 USA, 12 Europe) ---
// Note: IDs should be unique and match the keys in playerScores below.
const PLAYERS = [
    // USA TEAM
    { id: 'sscheffler', name: 'Scottie Scheffler', team: 'USA' },
    { id: 'pcantlay', name: 'Patrick Cantlay', team: 'USA' },
    { id: 'jjspaun', name: 'J.J. Spaun', team: 'USA' },
    { id: 'xschauffele', name: 'Xander Schauffele', team: 'USA' },
    { id: 'sburns', name: 'Sam Burns', team: 'USA' },
    { id: 'cyoung', name: 'Cameron Young', team: 'USA' },
    { id: 'bgriffin', name: 'Ben Griffin', team: 'USA' },
    { id: 'cmorikawa', name: 'Collin Morikawa', team: 'USA' },
    { id: 'jthomas', name: 'Justin Thomas', team: 'USA' },
    { id: 'henglish', name: 'Harris English', team: 'USA' },
    { id: 'bdechambeau', name: 'Bryson DeChambeau', team: 'USA' },
    { id: 'rhenley', name: 'Russell Henley', team: 'USA' },

    // EUROPE TEAM
    { id: 'rmcilroy', name: 'Rory McIlroy', team: 'EUR' },
    { id: 'rmacintyre', name: 'Robert MacIntyre', team: 'EUR' },
    { id: 'tfleetwood', name: 'Tommy Fleetwood', team: 'EUR' },
    { id: 'jrose', name: 'Justin Rose', team: 'EUR' },
    { id: 'rhojgaard', name: 'Rasmus Højgaard', team: 'EUR' },
    { id: 'thatton', name: 'Tyrrell Hatton', team: 'EUR' },
    { id: 'slowry', name: 'Shane Lowry', team: 'EUR' },
    { id: 'sstraka', name: 'Sepp Straka', team: 'EUR' },
    { id: 'laberg', name: 'Ludvig Åberg', team: 'EUR' },
    { id: 'vhovland', name: 'Viktor Hovland', team: 'EUR' },
    { id: 'mfitzpatrick', name: 'Matt Fitzpatrick', team: 'EUR' },
    { id: 'jrahm', name: 'Jon Rahm', team: 'EUR' }
];


// --- 3. Match and Player Score Data (Update these values as the event progresses) ---
const LEAGUE_DATA = {
    // Current match scores (Team vs Team)
    matchScores: {
        'USA': {
            'Friday': 2.5,  // Total points scored by USA team on Friday
            'Saturday': 3.0,
            'Sunday': 4.5
        },
        'EUR': {
            'Friday': 5.5,  // Total points scored by Europe team on Friday
            'Saturday': 5.0,
            'Sunday': 3.5
        }
    },

    // Player specific scores (used for Fantasy Scoring)
    // Player points are 1 point per win, 0.5 per tie.
    // Daily scores are crucial for the Day Winner multiplier.
    playerScores: {
        // Example USA Player Scores (Update all 24 players)
        'sscheffler': { 'Friday': 1.0, 'Saturday': 0.5, 'Sunday': 0.0, 'total': 1.5 },
        'pcantlay':   { 'Friday': 0.0, 'Saturday': 1.0, 'Sunday': 1.0, 'total': 2.0 },
        'jjspaun':    { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.0 }, // Rookie/Non-playing example
        'xschauffele':{ 'Friday': 1.0, 'Saturday': 0.5, 'Sunday': 0.0, 'total': 1.5 },
        'sburns':     { 'Friday': 0.0, 'Saturday': 1.0, 'Sunday': 0.0, 'total': 1.0 },
        'cyoung':     { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 1.0, 'total': 1.0 },
        'bgriffin':   { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.0 },
        'cmorikawa':  { 'Friday': 0.5, 'Saturday': 1.0, 'Sunday': 0.0, 'total': 1.5 },
        'jthomas':    { 'Friday': 1.0, 'Saturday': 0.0, 'Sunday': 1.0, 'total': 2.0 },
        'henglish':   { 'Friday': 0.5, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.5 },
        'bdechambeau':{ 'Friday': 0.0, 'Saturday': 0.5, 'Sunday': 0.5, 'total': 1.0 },
        'rhenley':    { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 1.0, 'total': 1.0 },

        // Example Europe Player Scores (Update all 24 players)
        'rmcilroy':   { 'Friday': 1.0, 'Saturday': 1.0, 'Sunday': 1.0, 'total': 3.0 },
        'rmacintyre': { 'Friday': 0.5, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.5 },
        'tfleetwood': { 'Friday': 1.0, 'Saturday': 1.0, 'Sunday': 0.0, 'total': 2.0 },
        'jrose':      { 'Friday': 0.0, 'Saturday': 0.5, 'Sunday': 0.0, 'total': 0.5 },
        'rhojgaard':  { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.0 },
        'thatton':    { 'Friday': 1.0, 'Saturday': 0.5, 'Sunday': 1.0, 'total': 2.5 },
        'slowry':     { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 1.0, 'total': 1.0 },
        'sstraka':    { 'Friday': 0.0, 'Saturday': 1.0, 'Sunday': 0.0, 'total': 1.0 },
        'laberg':     { 'Friday': 0.0, 'Saturday': 0.0, 'Sunday': 1.0, 'total': 1.0 },
        'vhovland':   { 'Friday': 1.0, 'Saturday': 0.5, 'Sunday': 1.0, 'total': 2.5 },
        'mfitzpatrick':{ 'Friday': 0.5, 'Saturday': 0.0, 'Sunday': 0.0, 'total': 0.5 },
        'jrahm':      { 'Friday': 1.0, 'Saturday': 0.5, 'Sunday': 1.0, 'total': 2.5 }
    },

    // Example Fantasy Teams (for testing/initial load)
    fantasyTeams: [
        {
            name: 'Test Team 1',
            overallPick: 'EUR', // Overall Winner Pick
            roster: ['rmcilroy', 'jrahm', 'tfleetwood', 'sscheffler', 'xschauffele', 'pcantlay', 'vhovland', 'jthomas'], // 8 players
            dayWinners: {
                'Friday': 'jrahm',    // Player ID for double points on Friday
                'Saturday': 'rmcilroy', 
                'Sunday': 'xschauffele'
            },
            totalPoints: 0
        },
        {
            name: 'Test Team 2',
            overallPick: 'USA',
            roster: ['pcantlay', 'sscheffler', 'cmorikawa', 'sburns', 'thatton', 'slowry', 'laberg', 'rhenley'],
            dayWinners: {
                'Friday': 'sscheffler',
                'Saturday': 'cmorikawa', 
                'Sunday': 'laberg'
            },
            totalPoints: 0
        }
    ]
};
