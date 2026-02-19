// Comprehensive list of irregular verbs
const irregularVerbs = [
    // Common irregular verbs (Easy)
    { base: "be", past: "was/were", participle: "been", examplePast: "I ___ happy yesterday.", exampleParticiple: "I have ___ to Paris twice." },
    { base: "go", past: "went", participle: "gone", examplePast: "She ___ to the store an hour ago.", exampleParticiple: "He has ___ out for lunch." },
    { base: "do", past: "did", participle: "done", examplePast: "He ___ his homework last night.", exampleParticiple: "I have ___ my best." },
    { base: "have", past: "had", participle: "had", examplePast: "We ___ a great time at the party.", exampleParticiple: "I have ___ this car for years." },
    { base: "make", past: "made", participle: "made", examplePast: "She ___ a delicious cake for my birthday.", exampleParticiple: "I have ___ a mistake." },
    { base: "say", past: "said", participle: "said", examplePast: "He ___ goodbye before leaving.", exampleParticiple: "She has ___ that before." },
    { base: "get", past: "got", participle: "got/gotten", examplePast: "I ___ a new phone for Christmas.", exampleParticiple: "It has ___ cold outside." },
    { base: "see", past: "saw", participle: "seen", examplePast: "I ___ a movie last weekend.", exampleParticiple: "Have you ___ my keys?" },
    { base: "come", past: "came", participle: "come", examplePast: "They ___ to visit us yesterday.", exampleParticiple: "She has ___ a long way." },
    { base: "take", past: "took", participle: "taken", examplePast: "He ___ the bus to work this morning.", exampleParticiple: "Taken? No, I have ___ it." },
    { base: "know", past: "knew", participle: "known", examplePast: "I ___ the answer to the question.", exampleParticiple: "I have ___ him for years." },
    { base: "think", past: "thought", participle: "thought", examplePast: "I ___ it was going to rain.", exampleParticiple: "I have ___ about it." },
    { base: "give", past: "gave", participle: "given", examplePast: "She ___ me a present.", exampleParticiple: "He has ___ up smoking." },
    { base: "find", past: "found", participle: "found", examplePast: "I ___ my keys under the sofa.", exampleParticiple: "I have ___ a solution." },
    { base: "tell", past: "told", participle: "told", examplePast: "He ___ me a funny story.", exampleParticiple: "I have ___ you a thousand times." },

    // Intermediate irregular verbs
    { base: "become", past: "became", participle: "become", examplePast: "The caterpillar ___ a butterfly.", exampleParticiple: "He has ___ a doctor." },
    { base: "leave", past: "left", participle: "left", examplePast: "We ___ the house early this morning.", exampleParticiple: "She has ___ her bag on the bus." },
    { base: "feel", past: "felt", participle: "felt", examplePast: "I ___ sick yesterday.", exampleParticiple: "I have never ___ this way before." },
    { base: "bring", past: "brought", participle: "brought", examplePast: "She ___ some snacks to the party.", exampleParticiple: "I have ___ my own lunch." },
    { base: "begin", past: "began", participle: "begun", examplePast: "The movie ___ at 8 PM.", exampleParticiple: "The show has already ___." },
    { base: "keep", past: "kept", participle: "kept", examplePast: "He ___ his promise.", exampleParticiple: "I have ___ this secret for years." },
    { base: "hold", past: "held", participle: "held", examplePast: "She ___ the baby in her arms.", exampleParticiple: "The meeting was ___ in the conference room." },
    { base: "write", past: "wrote", participle: "written", examplePast: "Shakespeare ___ many plays.", exampleParticiple: "I have ___ a letter to my friend." },
    { base: "stand", past: "stood", participle: "stood", examplePast: "He ___ in line for two hours.", exampleParticiple: "I have ___ here for too long." },
    { base: "hear", past: "heard", participle: "heard", examplePast: "I ___ a strange noise outside.", exampleParticiple: "Have you ___ the news?" },
    { base: "let", past: "let", participle: "let", examplePast: "She ___ him borrow her car.", exampleParticiple: "They have ___ us down." },
    { base: "mean", past: "meant", participle: "meant", examplePast: "I didn't ___ to hurt your feelings.", exampleParticiple: "It was ___ to be a surprise." },
    { base: "set", past: "set", participle: "set", examplePast: "He ___ the table for dinner.", exampleParticiple: "The sun has ___." },
    { base: "meet", past: "met", participle: "met", examplePast: "We ___ at a coffee shop.", exampleParticiple: "Have we ___ before?" },
    { base: "run", past: "ran", participle: "run", examplePast: "He ___ a marathon last year.", exampleParticiple: "I have ___ out of milk." },
    { base: "pay", past: "paid", participle: "paid", examplePast: "I ___ for the tickets online.", exampleParticiple: "Have you ___ the bill?" },
    { base: "sit", past: "sat", participle: "sat", examplePast: "We ___ in the front row.", exampleParticiple: "He has ___ there all day." },
    { base: "speak", past: "spoke", participle: "spoken", examplePast: "She ___ clearly during the presentation.", exampleParticiple: "I have ___ to him about it." },
    { base: "lie", past: "lay", participle: "lain", examplePast: "He ___ on the beach all day.", exampleParticiple: "The snow has ___ on the ground for weeks." },
    { base: "lead", past: "led", participle: "led", examplePast: "The guide ___ us through the forest.", exampleParticiple: "This road has ___ to nowhere." },

    // Advanced irregular verbs
    // Advanced irregular verbs
    { base: "understand", past: "understood", participle: "understood", examplePast: "I ___ the instructions clearly.", exampleParticiple: "He has not ___ the gravity of the situation." },
    { base: "read", past: "read", participle: "read", examplePast: "I ___ three books last month.", exampleParticiple: "I have ___ that book already." },
    { base: "bear", past: "bore", participle: "borne/born", examplePast: "She ___ the pain bravely.", exampleParticiple: "He has ___ the burden for too long." },
    { base: "lose", past: "lost", participle: "lost", examplePast: "I ___ my wallet on the bus.", exampleParticiple: "We have ___ contact with them." },
    { base: "send", past: "sent", participle: "sent", examplePast: "He ___ an email to his boss.", exampleParticiple: "The letter was ___ yesterday." },
    { base: "build", past: "built", participle: "built", examplePast: "They ___ a new house.", exampleParticiple: "Rome was not ___ in a day." },
    { base: "fall", past: "fell", participle: "fallen", examplePast: "The leaves ___ from the trees.", exampleParticiple: "He has ___ asleep." },
    { base: "cut", past: "cut", participle: "cut", examplePast: "She ___ her finger while cooking.", exampleParticiple: "I have ___ the cake." },
    { base: "rise", past: "rose", participle: "risen", examplePast: "The sun ___ at 6 AM.", exampleParticiple: "Prices have ___ significantly." },
    { base: "drive", past: "drove", participle: "driven", examplePast: "We ___ all the way to the coast.", exampleParticiple: "I have never ___ a sports car." },
    { base: "buy", past: "bought", participle: "bought", examplePast: "I ___ a new shirt yesterday.", exampleParticiple: "She has ___ a new house." },
    { base: "wear", past: "wore", participle: "worn", examplePast: "She ___ a beautiful dress to the prom.", exampleParticiple: "I have ___ this shirt many times." },
    { base: "break", past: "broke", participle: "broken", examplePast: "He ___ his leg skiing.", exampleParticiple: "The window was ___ by a ball." },
    { base: "choose", past: "chose", participle: "chosen", examplePast: "I ___ the blue one.", exampleParticiple: "They have ___ a new leader." },
    { base: "throw", past: "threw", participle: "thrown", examplePast: "He ___ the ball to the dog.", exampleParticiple: "I have ___ away my old clothes." },
    { base: "fly", past: "flew", participle: "flown", examplePast: "We ___ to Paris last summer.", exampleParticiple: "I have never ___ in a helicopter." },
    { base: "forget", past: "forgot", participle: "forgotten", examplePast: "I ___ to lock the door.", exampleParticiple: "I have ___ his name." },
    { base: "grow", past: "grew", participle: "grown", examplePast: "The plants ___ quickly in the sun.", exampleParticiple: "He has ___ a beard." },
    { base: "hide", past: "hid", participle: "hidden", examplePast: "The child ___ behind the sofa.", exampleParticiple: "The treasure was ___ in a cave." },
    { base: "catch", past: "caught", participle: "caught", examplePast: "He ___ the ball with one hand.", exampleParticiple: "I have ___ a cold." },
    { base: "draw", past: "drew", participle: "drawn", examplePast: "She ___ a picture of her cat.", exampleParticiple: "He has ___ a map." },
    { base: "spend", past: "spent", participle: "spent", examplePast: "We ___ a lot of money on vacation.", exampleParticiple: "I have ___ all my savings." },
    { base: "teach", past: "taught", participle: "taught", examplePast: "My father ___ me how to drive.", exampleParticiple: "She has ___ English for ten years." },
    { base: "win", past: "won", participle: "won", examplePast: "Our team ___ the championship.", exampleParticiple: "He has ___ many awards." },
    { base: "sell", past: "sold", participle: "sold", examplePast: "He ___ his old car.", exampleParticiple: "They have ___ their house." },
    { base: "fight", past: "fought", participle: "fought", examplePast: "They ___ bravely for their country.", exampleParticiple: "He has ___ many battles." },
    { base: "sing", past: "sang", participle: "sung", examplePast: "She ___ a beautiful song.", exampleParticiple: "I have never ___ in public." },
    { base: "swim", past: "swam", participle: "swum", examplePast: "We ___ in the lake all afternoon.", exampleParticiple: "He has ___ across the channel." },
    { base: "drink", past: "drank", participle: "drunk", examplePast: "He ___ a glass of water.", exampleParticiple: "I have ___ too much coffee." },
    { base: "ring", past: "rang", participle: "rung", examplePast: "The phone ___ loudly.", exampleParticiple: "The bell has ___." },
    { base: "sink", past: "sank", participle: "sunk", examplePast: "The ship ___ to the bottom of the ocean.", exampleParticiple: "My heart has ___." },
    { base: "blow", past: "blew", participle: "blown", examplePast: "The wind ___ hard last night.", exampleParticiple: "He has ___ out the candles." },
    { base: "shake", past: "shook", participle: "shaken", examplePast: "He ___ my hand firmly.", exampleParticiple: "I am ___ by the news." },
    { base: "ride", past: "rode", participle: "ridden", examplePast: "She ___ her bike to school.", exampleParticiple: "I have never ___ a horse." },
    { base: "bite", past: "bit", participle: "bitten", examplePast: "The dog ___ the postman.", exampleParticiple: "He was ___ by a spider." },
    { base: "tear", past: "tore", participle: "torn", examplePast: "I accidentally ___ my shirt.", exampleParticiple: "The paper was ___ in half." },
    { base: "steal", past: "stole", participle: "stolen", examplePast: "Someone ___ my bike.", exampleParticiple: "My wallet has been ___." },
    { base: "wake", past: "woke", participle: "woken", examplePast: "I ___ up late this morning.", exampleParticiple: "I have ___ up early." },
    { base: "freeze", past: "froze", participle: "frozen", examplePast: "The water ___ in the pipes.", exampleParticiple: "The lake has ___ over." },
    { base: "seek", past: "sought", participle: "sought", examplePast: "They ___ shelter from the storm.", exampleParticiple: "He has ___ advice from experts." },
    { base: "shoot", past: "shot", participle: "shot", examplePast: "He ___ an arrow at the target.", exampleParticiple: "The film was ___ in London." },
    { base: "feed", past: "fed", participle: "fed", examplePast: "She ___ the cat this morning.", exampleParticiple: "Have you ___ the dog?" },
    { base: "bind", past: "bound", participle: "bound", examplePast: "They ___ the prisoner's hands.", exampleParticiple: "The books were ___ in leather." },
    { base: "swing", past: "swung", participle: "swung", examplePast: "The monkey ___ from branch to branch.", exampleParticiple: "The door has ___ open." },
    { base: "strike", past: "struck", participle: "struck/stricken", examplePast: "Lightning ___ the tree.", exampleParticiple: "He was ___ by an idea." },
    { base: "stick", past: "stuck", participle: "stuck", examplePast: "The stamp ___ to the envelope.", exampleParticiple: "The car got ___ in the mud." },
    { base: "slide", past: "slid", participle: "slid", examplePast: "The children ___ down the hill.", exampleParticiple: "The glass has ___ off the table." },
    { base: "split", past: "split", participle: "split", examplePast: "He ___ the wood for the fire.", exampleParticiple: "The group has ___ up." },
    { base: "spread", past: "spread", participle: "spread", examplePast: "She ___ jam on the toast.", exampleParticiple: "The news has ___ quickly." },
    { base: "bend", past: "bent", participle: "bent", examplePast: "He ___ down to tie his shoelace.", exampleParticiple: "The metal was ___ out of shape." },
    { base: "lend", past: "lent", participle: "lent", examplePast: "She ___ me her pen.", exampleParticiple: "I have ___ him my car." },
    { base: "shine", past: "shone", participle: "shone", examplePast: "The sun ___ brightly.", exampleParticiple: "Assuming the sun has ___ all day." },
    { base: "weep", past: "wept", participle: "wept", examplePast: "She ___ when she heard the news.", exampleParticiple: "Many tears were ___." },
    { base: "sweep", past: "swept", participle: "swept", examplePast: "He ___ the floor.", exampleParticiple: "The dust was ___ away." },
    { base: "dig", past: "dug", participle: "dug", examplePast: "The dog ___ a hole in the garden.", exampleParticiple: "They have ___ a deep pit." },
    { base: "hang", past: "hung", participle: "hung", examplePast: "She ___ her coat on the hook.", exampleParticiple: "The picture was ___ on the wall." },
    { base: "spin", past: "spun", participle: "spun", examplePast: "The wheel ___ around.", exampleParticiple: "The spider has ___ a web." },
    { base: "spit", past: "spat", participle: "spat", examplePast: "He ___ out the bad food.", exampleParticiple: "He has ___ on the ground." },
    { base: "forbid", past: "forbade", participle: "forbidden", examplePast: "My parents ___ me from going out.", exampleParticiple: "Smoking is ___ here." },
    { base: "forgive", past: "forgave", participle: "forgiven", examplePast: "She ___ him for his mistake.", exampleParticiple: "He has been ___." },
    { base: "arise", past: "arose", participle: "arisen", examplePast: "A problem ___ during the meeting.", exampleParticiple: "A new situation has ___." },
    { base: "awake", past: "awoke", participle: "awoken", examplePast: "I ___ early to catch the flight.", exampleParticiple: "I have ___ from a bad dream." },
    { base: "broadcast", past: "broadcast", participle: "broadcast", examplePast: "The news was ___ live.", exampleParticiple: "They have ___ the show worldwide." },
    { base: "burst", past: "burst", participle: "burst", examplePast: "The balloon ___ loudly.", exampleParticiple: "He has ___ into tears." },
    { base: "cast", past: "cast", participle: "cast", examplePast: "He ___ a fishing line into the water.", exampleParticiple: "The die is ___." },
    { base: "cling", past: "clung", participle: "clung", examplePast: "The child ___ to her mother.", exampleParticiple: "He has ___ to hope." },
    { base: "creep", past: "crept", participle: "crept", examplePast: "The cat ___ up on the bird.", exampleParticiple: "Doubt has ___ into his mind." },
    { base: "deal", past: "dealt", participle: "dealt", examplePast: "He ___ the cards.", exampleParticiple: "I have ___ with this before." },
    { base: "flee", past: "fled", participle: "fled", examplePast: "The thief ___ the scene.", exampleParticiple: "They have ___ the country." },
    { base: "fling", past: "flung", participle: "flung", examplePast: "She ___ her coat onto the chair.", exampleParticiple: "He has ___ the door open." },
    { base: "grind", past: "ground", participle: "ground", examplePast: "He ___ the coffee beans.", exampleParticiple: "The corn was ___ into flour." },
    { base: "kneel", past: "knelt", participle: "knelt", examplePast: "He ___ down to propose.", exampleParticiple: "They have ___ in prayer." },
    { base: "leap", past: "leapt", participle: "leapt", examplePast: "The frog ___ into the pond.", exampleParticiple: "He has ___ at the opportunity." },
    { base: "light", past: "lit", participle: "lit", examplePast: "He ___ the candles.", exampleParticiple: "The fire was ___." },
    { base: "prove", past: "proved", participle: "proven/proved", examplePast: "He ___ his innocence.", exampleParticiple: "It has been ___ effective." },
    { base: "quit", past: "quit", participle: "quit", examplePast: "He ___ his job.", exampleParticiple: "She has ___ smoking." },
    { base: "shrink", past: "shrank", participle: "shrunk", examplePast: "My shirt ___ in the wash.", exampleParticiple: "The market has ___." },
    { base: "slay", past: "slew", participle: "slain", examplePast: "Ideally, knights ___ dragons.", exampleParticiple: "The dragon was ___." },
    { base: "sling", past: "slung", participle: "slung", examplePast: "He ___ his bag over his shoulder.", exampleParticiple: "I have ___ the hammock." },
    { base: "slink", past: "slunk", participle: "slunk", examplePast: "The fox ___ away into the bushes.", exampleParticiple: "He has ___ away in shame." },
    { base: "sow", past: "sowed", participle: "sown", examplePast: "The farmer ___ the seeds.", exampleParticiple: "He has ___ doubt in my mind." },
    { base: "spring", past: "sprang", participle: "sprung", examplePast: "Usually, the cat ___ onto the table.", exampleParticiple: "He has ___ a surprise on us." },
    { base: "sting", past: "stung", participle: "stung", examplePast: "A bee ___ me.", exampleParticiple: "I was ___ by a wasp." },
    { base: "stink", past: "stank", participle: "stunk", examplePast: "The garbage ___ terribly.", exampleParticiple: "This place has ___ for days." },
    { base: "stride", past: "strode", participle: "stridden", examplePast: "He ___ confidently into the room.", exampleParticiple: "He has ___ ahead of the competition." },
    { base: "strive", past: "strove", participle: "striven", examplePast: "She ___ to do her best.", exampleParticiple: "We have ___ for excellence." },
    { base: "swear", past: "swore", participle: "sworn", examplePast: "He ___ to tell the truth.", exampleParticiple: "I have ___ an oath." },
    { base: "swell", past: "swelled", participle: "swollen", examplePast: "His ankle ___ after the injury.", exampleParticiple: "The river has ___." },
    { base: "tread", past: "trod", participle: "trodden", examplePast: "Don't ___ on the flowers.", exampleParticiple: "He has ___ on my toes." },
    { base: "undergo", past: "underwent", participle: "undergone", examplePast: "The company ___ a major restructuring.", exampleParticiple: "She has ___ surgery." },
    { base: "uphold", past: "upheld", participle: "upheld", examplePast: "The judge ___ the law.", exampleParticiple: "We have ___ the tradition." },
    { base: "weave", past: "wove", participle: "woven", examplePast: "She ___ a beautiful basket.", exampleParticiple: "A complex web has been ___." },
    { base: "withdraw", past: "withdrew", participle: "withdrawn", examplePast: "He ___ money from the bank.", exampleParticiple: "The troops were ___." },
    { base: "withstand", past: "withstood", participle: "withstood", examplePast: "The house ___ the storm.", exampleParticiple: "It has ___ the test of time." },
    { base: "wring", past: "wrung", participle: "wrung", examplePast: "She ___ out the wet towel.", exampleParticiple: "He has ___ every drop." }
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