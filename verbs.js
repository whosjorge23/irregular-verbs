// Comprehensive list of irregular verbs
const irregularVerbs = [
    // Common irregular verbs (Easy)
    { base: "be", past: "was/were", participle: "been" },
    { base: "go", past: "went", participle: "gone" },
    { base: "do", past: "did", participle: "done" },
    { base: "have", past: "had", participle: "had" },
    { base: "make", past: "made", participle: "made" },
    { base: "say", past: "said", participle: "said" },
    { base: "get", past: "got", participle: "got/gotten" },
    { base: "see", past: "saw", participle: "seen" },
    { base: "come", past: "came", participle: "come" },
    { base: "take", past: "took", participle: "taken" },
    { base: "know", past: "knew", participle: "known" },
    { base: "think", past: "thought", participle: "thought" },
    { base: "give", past: "gave", participle: "given" },
    { base: "find", past: "found", participle: "found" },
    { base: "tell", past: "told", participle: "told" },

    // Intermediate irregular verbs
    { base: "become", past: "became", participle: "become" },
    { base: "leave", past: "left", participle: "left" },
    { base: "feel", past: "felt", participle: "felt" },
    { base: "bring", past: "brought", participle: "brought" },
    { base: "begin", past: "began", participle: "begun" },
    { base: "keep", past: "kept", participle: "kept" },
    { base: "hold", past: "held", participle: "held" },
    { base: "write", past: "wrote", participle: "written" },
    { base: "stand", past: "stood", participle: "stood" },
    { base: "hear", past: "heard", participle: "heard" },
    { base: "let", past: "let", participle: "let" },
    { base: "mean", past: "meant", participle: "meant" },
    { base: "set", past: "set", participle: "set" },
    { base: "meet", past: "met", participle: "met" },
    { base: "run", past: "ran", participle: "run" },
    { base: "pay", past: "paid", participle: "paid" },
    { base: "sit", past: "sat", participle: "sat" },
    { base: "speak", past: "spoke", participle: "spoken" },
    { base: "lie", past: "lay", participle: "lain" },
    { base: "lead", past: "led", participle: "led" },

    // Advanced irregular verbs
    { base: "understand", past: "understood", participle: "understood" },
    { base: "read", past: "read", participle: "read" },
    { base: "bear", past: "bore", participle: "borne/born" },
    { base: "lose", past: "lost", participle: "lost" },
    { base: "send", past: "sent", participle: "sent" },
    { base: "build", past: "built", participle: "built" },
    { base: "fall", past: "fell", participle: "fallen" },
    { base: "cut", past: "cut", participle: "cut" },
    { base: "rise", past: "rose", participle: "risen" },
    { base: "drive", past: "drove", participle: "driven" },
    { base: "buy", past: "bought", participle: "bought" },
    { base: "wear", past: "wore", participle: "worn" },
    { base: "break", past: "broke", participle: "broken" },
    { base: "choose", past: "chose", participle: "chosen" },
    { base: "throw", past: "threw", participle: "thrown" },
    { base: "fly", past: "flew", participle: "flown" },
    { base: "forget", past: "forgot", participle: "forgotten" },
    { base: "grow", past: "grew", participle: "grown" },
    { base: "hide", past: "hid", participle: "hidden" },
    { base: "catch", past: "caught", participle: "caught" },
    { base: "draw", past: "drew", participle: "drawn" },
    { base: "spend", past: "spent", participle: "spent" },
    { base: "teach", past: "taught", participle: "taught" },
    { base: "win", past: "won", participle: "won" },
    { base: "sell", past: "sold", participle: "sold" },
    { base: "fight", past: "fought", participle: "fought" },
    { base: "sing", past: "sang", participle: "sung" },
    { base: "swim", past: "swam", participle: "swum" },
    { base: "drink", past: "drank", participle: "drunk" },
    { base: "ring", past: "rang", participle: "rung" },
    { base: "sink", past: "sank", participle: "sunk" },
    { base: "blow", past: "blew", participle: "blown" },
    { base: "shake", past: "shook", participle: "shaken" },
    { base: "ride", past: "rode", participle: "ridden" },
    { base: "bite", past: "bit", participle: "bitten" },
    { base: "tear", past: "tore", participle: "torn" },
    { base: "steal", past: "stole", participle: "stolen" },
    { base: "wake", past: "woke", participle: "woken" },
    { base: "freeze", past: "froze", participle: "frozen" },
    { base: "seek", past: "sought", participle: "sought" },
    { base: "shoot", past: "shot", participle: "shot" },
    { base: "feed", past: "fed", participle: "fed" },
    { base: "bind", past: "bound", participle: "bound" },
    { base: "swing", past: "swung", participle: "swung" },
    { base: "strike", past: "struck", participle: "struck/stricken" },
    { base: "stick", past: "stuck", participle: "stuck" },
    { base: "slide", past: "slid", participle: "slid" },
    { base: "split", past: "split", participle: "split" },
    { base: "spread", past: "spread", participle: "spread" },
    { base: "bend", past: "bent", participle: "bent" },
    { base: "lend", past: "lent", participle: "lent" },
    { base: "shine", past: "shone", participle: "shone" },
    { base: "weep", past: "wept", participle: "wept" },
    { base: "sweep", past: "swept", participle: "swept" },
    { base: "dig", past: "dug", participle: "dug" },
    { base: "hang", past: "hung", participle: "hung" },
    { base: "spin", past: "spun", participle: "spun" },
    { base: "spit", past: "spat", participle: "spat" },
    { base: "forbid", past: "forbade", participle: "forbidden" },
    { base: "forgive", past: "forgave", participle: "forgiven" },
    { base: "arise", past: "arose", participle: "arisen" },
    { base: "awake", past: "awoke", participle: "awoken" },
    { base: "broadcast", past: "broadcast", participle: "broadcast" },
    { base: "burst", past: "burst", participle: "burst" },
    { base: "cast", past: "cast", participle: "cast" },
    { base: "cling", past: "clung", participle: "clung" },
    { base: "creep", past: "crept", participle: "crept" },
    { base: "deal", past: "dealt", participle: "dealt" },
    { base: "flee", past: "fled", participle: "fled" },
    { base: "fling", past: "flung", participle: "flung" },
    { base: "grind", past: "ground", participle: "ground" },
    { base: "kneel", past: "knelt", participle: "knelt" },
    { base: "leap", past: "leapt", participle: "leapt" },
    { base: "light", past: "lit", participle: "lit" },
    { base: "prove", past: "proved", participle: "proven/proved" },
    { base: "quit", past: "quit", participle: "quit" },
    { base: "shrink", past: "shrank", participle: "shrunk" },
    { base: "slay", past: "slew", participle: "slain" },
    { base: "sling", past: "slung", participle: "slung" },
    { base: "slink", past: "slunk", participle: "slunk" },
    { base: "sow", past: "sowed", participle: "sown" },
    { base: "spring", past: "sprang", participle: "sprung" },
    { base: "sting", past: "stung", participle: "stung" },
    { base: "stink", past: "stank", participle: "stunk" },
    { base: "stride", past: "strode", participle: "stridden" },
    { base: "strive", past: "strove", participle: "striven" },
    { base: "swear", past: "swore", participle: "sworn" },
    { base: "swell", past: "swelled", participle: "swollen" },
    { base: "tread", past: "trod", participle: "trodden" },
    { base: "undergo", past: "underwent", participle: "undergone" },
    { base: "uphold", past: "upheld", participle: "upheld" },
    { base: "weave", past: "wove", participle: "woven" },
    { base: "withdraw", past: "withdrew", participle: "withdrawn" },
    { base: "withstand", past: "withstood", participle: "withstood" },
    { base: "wring", past: "wrung", participle: "wrung" }
];

// Function to get verbs by difficulty
function getVerbsByDifficulty(difficulty) {
    let count;
    switch (difficulty) {
        case 'easy':
            count = 10;
            break;
        case 'medium':
            count = 20;
            break;
        case 'hard':
            count = 30;
            break;
        default:
            count = 10;
    }

    // Shuffle and return the specified number of verbs
    const shuffled = [...irregularVerbs].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// Function to check if answer is correct (handles multiple acceptable answers)
function checkAnswer(userAnswer, correctAnswer) {
    // Normalize answers: lowercase and trim
    const normalizedUser = userAnswer.toLowerCase().trim();
    const correctAnswers = correctAnswer.toLowerCase().split('/').map(a => a.trim());

    return correctAnswers.includes(normalizedUser);
}
