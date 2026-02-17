// Comprehensive list of irregular verbs
const irregularVerbs = [
    // Common irregular verbs (Easy)
    { base: "be", past: "was/were", participle: "been", example: "I ___ happy yesterday." },
    { base: "go", past: "went", participle: "gone", example: "She ___ to the store an hour ago." },
    { base: "do", past: "did", participle: "done", example: "He ___ his homework last night." },
    { base: "have", past: "had", participle: "had", example: "We ___ a great time at the party." },
    { base: "make", past: "made", participle: "made", example: "She ___ a delicious cake for my birthday." },
    { base: "say", past: "said", participle: "said", example: "He ___ goodbye before leaving." },
    { base: "get", past: "got", participle: "got/gotten", example: "I ___ a new phone for Christmas." },
    { base: "see", past: "saw", participle: "seen", example: "I ___ a movie last weekend." },
    { base: "come", past: "came", participle: "come", example: "They ___ to visit us yesterday." },
    { base: "take", past: "took", participle: "taken", example: "He ___ the bus to work this morning." },
    { base: "know", past: "knew", participle: "known", example: "I ___ the answer to the question." },
    { base: "think", past: "thought", participle: "thought", example: "I ___ it was going to rain." },
    { base: "give", past: "gave", participle: "given", example: "She ___ me a present." },
    { base: "find", past: "found", participle: "found", example: "I ___ my keys under the sofa." },
    { base: "tell", past: "told", participle: "told", example: "He ___ me a funny story." },

    // Intermediate irregular verbs
    { base: "become", past: "became", participle: "become", example: "The caterpillar ___ a butterfly." },
    { base: "leave", past: "left", participle: "left", example: "We ___ the house early this morning." },
    { base: "feel", past: "felt", participle: "felt", example: "I ___ sick yesterday." },
    { base: "bring", past: "brought", participle: "brought", example: "She ___ some snacks to the party." },
    { base: "begin", past: "began", participle: "begun", example: "The movie ___ at 8 PM." },
    { base: "keep", past: "kept", participle: "kept", example: "He ___ his promise." },
    { base: "hold", past: "held", participle: "held", example: "She ___ the baby in her arms." },
    { base: "write", past: "wrote", participle: "written", example: "Shakespeare ___ many plays." },
    { base: "stand", past: "stood", participle: "stood", example: "He ___ in line for two hours." },
    { base: "hear", past: "heard", participle: "heard", example: "I ___ a strange noise outside." },
    { base: "let", past: "let", participle: "let", example: "She ___ him borrow her car." },
    { base: "mean", past: "meant", participle: "meant", example: "I didn't ___ to hurt your feelings." },
    { base: "set", past: "set", participle: "set", example: "He ___ the table for dinner." },
    { base: "meet", past: "met", participle: "met", example: "We ___ at a coffee shop." },
    { base: "run", past: "ran", participle: "run", example: "He ___ a marathon last year." },
    { base: "pay", past: "paid", participle: "paid", example: "I ___ for the tickets online." },
    { base: "sit", past: "sat", participle: "sat", example: "We ___ in the front row." },
    { base: "speak", past: "spoke", participle: "spoken", example: "She ___ clearly during the presentation." },
    { base: "lie", past: "lay", participle: "lain", example: "He ___ on the beach all day." },
    { base: "lead", past: "led", participle: "led", example: "The guide ___ us through the forest." },

    // Advanced irregular verbs
    { base: "understand", past: "understood", participle: "understood", example: "I ___ the instructions clearly." },
    { base: "read", past: "read", participle: "read", example: "I ___ three books last month." },
    { base: "bear", past: "bore", participle: "borne/born", example: "She ___ the pain bravely." },
    { base: "lose", past: "lost", participle: "lost", example: "I ___ my wallet on the bus." },
    { base: "send", past: "sent", participle: "sent", example: "He ___ an email to his boss." },
    { base: "build", past: "built", participle: "built", example: "They ___ a new house." },
    { base: "fall", past: "fell", participle: "fallen", example: "The leaves ___ from the trees." },
    { base: "cut", past: "cut", participle: "cut", example: "She ___ her finger while cooking." },
    { base: "rise", past: "rose", participle: "risen", example: "The sun ___ at 6 AM." },
    { base: "drive", past: "drove", participle: "driven", example: "We ___ all the way to the coast." },
    { base: "buy", past: "bought", participle: "bought", example: "I ___ a new shirt yesterday." },
    { base: "wear", past: "wore", participle: "worn", example: "She ___ a beautiful dress to the prom." },
    { base: "break", past: "broke", participle: "broken", example: "He ___ his leg skiing." },
    { base: "choose", past: "chose", participle: "chosen", example: "I ___ the blue one." },
    { base: "throw", past: "threw", participle: "thrown", example: "He ___ the ball to the dog." },
    { base: "fly", past: "flew", participle: "flown", example: "We ___ to Paris last summer." },
    { base: "forget", past: "forgot", participle: "forgotten", example: "I ___ to lock the door." },
    { base: "grow", past: "grew", participle: "grown", example: "The plants ___ quickly in the sun." },
    { base: "hide", past: "hid", participle: "hidden", example: "The child ___ behind the sofa." },
    { base: "catch", past: "caught", participle: "caught", example: "He ___ the ball with one hand." },
    { base: "draw", past: "drew", participle: "drawn", example: "She ___ a picture of her cat." },
    { base: "spend", past: "spent", participle: "spent", example: "We ___ a lot of money on vacation." },
    { base: "teach", past: "taught", participle: "taught", example: "My father ___ me how to drive." },
    { base: "win", past: "won", participle: "won", example: "Our team ___ the championship." },
    { base: "sell", past: "sold", participle: "sold", example: "He ___ his old car." },
    { base: "fight", past: "fought", participle: "fought", example: "They ___ bravely for their country." },
    { base: "sing", past: "sang", participle: "sung", example: "She ___ a beautiful song." },
    { base: "swim", past: "swam", participle: "swum", example: "We ___ in the lake all afternoon." },
    { base: "drink", past: "drank", participle: "drunk", example: "He ___ a glass of water." },
    { base: "ring", past: "rang", participle: "rung", example: "The phone ___ loudly." },
    { base: "sink", past: "sank", participle: "sunk", example: "The ship ___ to the bottom of the ocean." },
    { base: "blow", past: "blew", participle: "blown", example: "The wind ___ hard last night." },
    { base: "shake", past: "shook", participle: "shaken", example: "He ___ my hand firmly." },
    { base: "ride", past: "rode", participle: "ridden", example: "She ___ her bike to school." },
    { base: "bite", past: "bit", participle: "bitten", example: "The dog ___ the postman." },
    { base: "tear", past: "tore", participle: "torn", example: "I accidentally ___ my shirt." },
    { base: "steal", past: "stole", participle: "stolen", example: "Someone ___ my bike." },
    { base: "wake", past: "woke", participle: "woken", example: "I ___ up late this morning." },
    { base: "freeze", past: "froze", participle: "frozen", example: "The water ___ in the pipes." },
    { base: "seek", past: "sought", participle: "sought", example: "They ___ shelter from the storm." },
    { base: "shoot", past: "shot", participle: "shot", example: "He ___ an arrow at the target." },
    { base: "feed", past: "fed", participle: "fed", example: "She ___ the cat this morning." },
    { base: "bind", past: "bound", participle: "bound", example: "They ___ the prisoner's hands." },
    { base: "swing", past: "swung", participle: "swung", example: "The monkey ___ from branch to branch." },
    { base: "strike", past: "struck", participle: "struck/stricken", example: "Lightning ___ the tree." },
    { base: "stick", past: "stuck", participle: "stuck", example: "The stamp ___ to the envelope." },
    { base: "slide", past: "slid", participle: "slid", example: "The children ___ down the hill." },
    { base: "split", past: "split", participle: "split", example: "He ___ the wood for the fire." },
    { base: "spread", past: "spread", participle: "spread", example: "She ___ jam on the toast." },
    { base: "bend", past: "bent", participle: "bent", example: "He ___ down to tie his shoelace." },
    { base: "lend", past: "lent", participle: "lent", example: "She ___ me her pen." },
    { base: "shine", past: "shone", participle: "shone", example: "The sun ___ brightly." },
    { base: "weep", past: "wept", participle: "wept", example: "She ___ when she heard the news." },
    { base: "sweep", past: "swept", participle: "swept", example: "He ___ the floor." },
    { base: "dig", past: "dug", participle: "dug", example: "The dog ___ a hole in the garden." },
    { base: "hang", past: "hung", participle: "hung", example: "She ___ her coat on the hook." },
    { base: "spin", past: "spun", participle: "spun", example: "The wheel ___ around." },
    { base: "spit", past: "spat", participle: "spat", example: "He ___ out the bad food." },
    { base: "forbid", past: "forbade", participle: "forbidden", example: "My parents ___ me from going out." },
    { base: "forgive", past: "forgave", participle: "forgiven", example: "She ___ him for his mistake." },
    { base: "arise", past: "arose", participle: "arisen", example: "A problem ___ during the meeting." },
    { base: "awake", past: "awoke", participle: "awoken", example: "I ___ early to catch the flight." },
    { base: "broadcast", past: "broadcast", participle: "broadcast", example: "The news was ___ live." },
    { base: "burst", past: "burst", participle: "burst", example: "The balloon ___ loudly." },
    { base: "cast", past: "cast", participle: "cast", example: "He ___ a fishing line into the water." },
    { base: "cling", past: "clung", participle: "clung", example: "The child ___ to her mother." },
    { base: "creep", past: "crept", participle: "crept", example: "The cat ___ up on the bird." },
    { base: "deal", past: "dealt", participle: "dealt", example: "He ___ the cards." },
    { base: "flee", past: "fled", participle: "fled", example: "The thief ___ the scene." },
    { base: "fling", past: "flung", participle: "flung", example: "She ___ her coat onto the chair." },
    { base: "grind", past: "ground", participle: "ground", example: "He ___ the coffee beans." },
    { base: "kneel", past: "knelt", participle: "knelt", example: "He ___ down to propose." },
    { base: "leap", past: "leapt", participle: "leapt", example: "The frog ___ into the pond." },
    { base: "light", past: "lit", participle: "lit", example: "He ___ the candles." },
    { base: "prove", past: "proved", participle: "proven/proved", example: "He ___ his innocence." },
    { base: "quit", past: "quit", participle: "quit", example: "He ___ his job." },
    { base: "shrink", past: "shrank", participle: "shrunk", example: "My shirt ___ in the wash." },
    { base: "slay", past: "slew", participle: "slain", example: "Ideally, knights ___ dragons." },
    { base: "sling", past: "slung", participle: "slung", example: "He ___ his bag over his shoulder." },
    { base: "slink", past: "slunk", participle: "slunk", example: "The fox ___ away into the bushes." },
    { base: "sow", past: "sowed", participle: "sown", example: "The farmer ___ the seeds." },
    { base: "spring", past: "sprang", participle: "sprung", example: "Usually, the cat ___ onto the table." },
    { base: "sting", past: "stung", participle: "stung", example: "A bee ___ me." },
    { base: "stink", past: "stank", participle: "stunk", example: "The garbage ___ terribly." },
    { base: "stride", past: "strode", participle: "stridden", example: "He ___ confidently into the room." },
    { base: "strive", past: "strove", participle: "striven", example: "She ___ to do her best." },
    { base: "swear", past: "swore", participle: "sworn", example: "He ___ to tell the truth." },
    { base: "swell", past: "swelled", participle: "swollen", example: "His ankle ___ after the injury." },
    { base: "tread", past: "trod", participle: "trodden", example: "Don't ___ on the flowers." },
    { base: "undergo", past: "underwent", participle: "undergone", example: "The company ___ a major restructuring." },
    { base: "uphold", past: "upheld", participle: "upheld", example: "The judge ___ the law." },
    { base: "weave", past: "wove", participle: "woven", example: "She ___ a beautiful basket." },
    { base: "withdraw", past: "withdrew", participle: "withdrawn", example: "He ___ money from the bank." },
    { base: "withstand", past: "withstood", participle: "withstood", example: "The house ___ the storm." },
    { base: "wring", past: "wrung", participle: "wrung", example: "She ___ out the wet towel." }
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
