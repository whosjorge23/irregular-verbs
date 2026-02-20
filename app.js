// ===== Application State =====
let currentDifficulty = 'easy';
let currentVerbs = [];
let currentQuestionIndex = 0;
let score = 0;
let answers = [];

// New State for Timer and Study Mode
let timerEnabled = false;
let timerLimit = 15;
let timerInterval = null;
let timeLeft = 0;
let studyVerbs = [];
let currentStudyIndex = 0;
let missedVerbs = [];
let masteryData = {};

// ===== DOM Elements =====
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const baseFormElement = document.getElementById('baseForm');
const examplePastElement = document.getElementById('examplePast');
const exampleParticipleElement = document.getElementById('exampleParticiple');

const pastSimpleInput = document.getElementById('pastSimple');
const pastParticipleInput = document.getElementById('pastParticiple');
const submitBtn = document.getElementById('submitBtn');
const nextBtn = document.getElementById('nextBtn');
const feedbackCard = document.getElementById('feedbackCard');

const currentQuestionElement = document.getElementById('currentQuestion');
const totalQuestionsElement = document.getElementById('totalQuestions');
const currentScoreElement = document.getElementById('currentScore');
const progressFill = document.getElementById('progressFill');

const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackMessage = document.getElementById('feedbackMessage');
const correctAnswerElement = document.getElementById('correctAnswer');

const resultsIcon = document.getElementById('resultsIcon');
const resultsTitle = document.getElementById('resultsTitle');
const scorePercentage = document.getElementById('scorePercentage');
const scoreRingFill = document.getElementById('scoreRingFill');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const accuracyRate = document.getElementById('accuracyRate');
const retryBtn = document.getElementById('retryBtn');
const homeBtn = document.getElementById('homeBtn');

// New DOM Elements
const studyScreen = document.getElementById('studyScreen');
const studyModeBtn = document.getElementById('studyModeBtn');
const exitStudyBtn = document.getElementById('exitStudyBtn');
const prevStudyBtn = document.getElementById('prevStudyBtn');
const nextStudyBtn = document.getElementById('nextStudyBtn');
const flashcard = document.getElementById('flashcard');
const studyBaseFront = document.getElementById('studyBaseFront');
const studyBase = document.getElementById('studyBase');
const studyPast = document.getElementById('studyPast');
const studyParticiple = document.getElementById('studyParticiple');
const studyExamplePast = document.getElementById('studyExamplePast');
const studyExampleParticiple = document.getElementById('studyExampleParticiple');
const studyCurrentIndex = document.getElementById('studyCurrentIndex');
const studyTotalTotal = document.getElementById('studyTotalTotal');

const timerToggle = document.getElementById('timerToggle');
const timerLimitSelect = document.getElementById('timerLimit');
const timerLimitContainer = document.getElementById('timerLimitContainer');
const timerContainer = document.getElementById('timerContainer');

// Mastery & Mistakes Elements
const masteredCount = document.getElementById('masteredCount');
const learningCount = document.getElementById('learningCount');
const needsPracticeCount = document.getElementById('needsPracticeCount');
const mistakesBtn = document.getElementById('mistakesBtn');
const timerBar = document.getElementById('timerBar');
const timerText = document.getElementById('timerText');

// ===== Event Listeners =====
difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        currentDifficulty = btn.dataset.difficulty;
        startQuiz();
    });
});

submitBtn.addEventListener('click', checkAnswers);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', () => startQuiz());
homeBtn.addEventListener('click', showStartScreen);

// New Event Listeners
studyModeBtn.addEventListener('click', startStudyMode);
exitStudyBtn.addEventListener('click', showStartScreen);
prevStudyBtn.addEventListener('click', prevStudyVerb);
nextStudyBtn.addEventListener('click', nextStudyVerb);
flashcard.addEventListener('click', flipFlashcard);

timerToggle.addEventListener('change', (e) => {
    timerEnabled = e.target.checked;
    timerLimitContainer.style.opacity = timerEnabled ? '1' : '0.5';
    timerLimitContainer.style.pointerEvents = timerEnabled ? 'all' : 'none';
});

timerLimitSelect.addEventListener('change', (e) => {
    timerLimit = parseInt(e.target.value);
});

// Handle Enter key for inputs
pastSimpleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        pastParticipleInput.focus();
    }
});

pastParticipleInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !submitBtn.disabled) {
        checkAnswers();
    }
});

// ===== Screen Management =====
function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}


function showStartScreen(updateHistory = true) {
    if (updateHistory) {
        history.pushState({ screen: 'startScreen' }, '', '');
    }
    showScreen(startScreen);
    // Removed resetQuiz() to preserve state during navigation
}

// ===== History Management =====
window.addEventListener('popstate', (event) => {
    const state = event.state;
    if (state && state.screen) {
        if (state.screen === 'startScreen') {
            showStartScreen(false);
        } else if (state.screen === 'quizScreen') {
            // Check if we need to restore a specific difficulty session
            if (state.difficulty && state.difficulty !== currentDifficulty) {
                currentDifficulty = state.difficulty;
                startQuiz(false);
            } else {
                showScreen(quizScreen);
                // If the DOM is empty (e.g. forward navigation), reload the question
                if (currentVerbs.length > 0 && !baseFormElement.textContent) {
                    loadQuestion();
                }
            }
        } else if (state.screen === 'studyScreen') {
            showScreen(studyScreen);
            if (studyVerbs.length === 0) {
                startStudyMode(false);
            }
        } else if (state.screen === 'resultsScreen') {
            showScreen(resultsScreen);
        }
    } else {
        // Fallback to start screen if no state
        showStartScreen(false);
    }
});

// ===== Quiz Logic =====
function startQuiz(updateHistory = true) {
    // Only push state if requested
    if (updateHistory) {
        history.pushState({ screen: 'quizScreen', difficulty: currentDifficulty }, '', '');
    }

    resetQuiz();
    currentVerbs = getVerbsByDifficulty(currentDifficulty);
    totalQuestionsElement.textContent = currentVerbs.length;
    showScreen(quizScreen);

    // Timer UI Visibility
    if (timerEnabled) {
        timerContainer.classList.remove('hidden');
    } else {
        timerContainer.classList.add('hidden');
    }

    loadQuestion();
}

function startMistakesQuiz() {
    if (missedVerbs.length === 0) return;

    currentVerbs = [...missedVerbs];
    missedVerbs = []; // Clear for the new session

    score = 0;
    currentQuestionIndex = 0;
    answers = [];

    totalQuestionsElement.textContent = currentVerbs.length;
    showScreen(quizScreen);

    if (timerEnabled) {
        timerContainer.classList.remove('hidden');
    } else {
        timerContainer.classList.add('hidden');
    }

    loadQuestion();

    // Update history
    history.pushState({ screen: 'quizScreen', type: 'mistakes' }, '', '');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    updateScore();
    feedbackCard.classList.add('hidden');
    clearInputs();
    stopTimer();
}

function generateHint(answer) {
    // Handle multiple answers (e.g. "was/were" -> use "was")
    const mainAnswer = answer.split('/')[0].trim();
    if (mainAnswer.length <= 1) return '_';
    return mainAnswer[0] + '_'.repeat(mainAnswer.length - 1);
}

function loadQuestion() {
    if (currentQuestionIndex >= currentVerbs.length) {
        showResults();
        return;
    }

    const verb = currentVerbs[currentQuestionIndex];
    baseFormElement.textContent = verb.base;
    examplePastElement.textContent = verb.examplePast;
    exampleParticipleElement.textContent = verb.exampleParticiple;

    clearInputs();
    feedbackCard.classList.add('hidden');
    submitBtn.disabled = false;

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    updateProgressBar();

    // Start Timer if enabled
    if (timerEnabled) {
        startTimer();
    }

    // Focus on first input
    setTimeout(() => pastSimpleInput.focus(), 100);
}

function clearInputs() {
    pastSimpleInput.value = '';
    pastParticipleInput.value = '';
    pastSimpleInput.classList.remove('correct', 'incorrect');
    pastParticipleInput.classList.remove('correct', 'incorrect');

    // Clear feedback
    const feedbacks = document.querySelectorAll('.input-feedback');
    feedbacks.forEach(f => {
        f.textContent = '';
        f.classList.remove('correct', 'incorrect');
    });
}

function checkAnswers() {
    const verb = currentVerbs[currentQuestionIndex];
    const userPastSimple = pastSimpleInput.value.trim();
    const userPastParticiple = pastParticipleInput.value.trim();

    if (!userPastSimple || !userPastParticiple) {
        // Show validation message
        if (!userPastSimple) {
            pastSimpleInput.focus();
        } else {
            pastParticipleInput.focus();
        }
        return;
    }

    stopTimer();

    const pastSimpleCorrect = checkAnswer(userPastSimple, verb.past);
    const pastParticipleCorrect = checkAnswer(userPastParticiple, verb.participle);
    const bothCorrect = pastSimpleCorrect && pastParticipleCorrect;

    // Update input styles
    pastSimpleInput.classList.add(pastSimpleCorrect ? 'correct' : 'incorrect');
    pastParticipleInput.classList.add(pastParticipleCorrect ? 'correct' : 'incorrect');

    // Show inline feedback
    const pastSimpleFeedback = pastSimpleInput.parentElement.querySelector('.input-feedback');
    const pastParticipleFeedback = pastParticipleInput.parentElement.querySelector('.input-feedback');

    if (pastSimpleCorrect) {
        pastSimpleFeedback.textContent = '✓ Correct!';
        pastSimpleFeedback.classList.add('correct');
    } else {
        pastSimpleFeedback.textContent = `✗ Correct: ${verb.past}`;
        pastSimpleFeedback.classList.add('incorrect');
    }

    if (pastParticipleCorrect) {
        pastParticipleFeedback.textContent = '✓ Correct!';
        pastParticipleFeedback.classList.add('correct');
    } else {
        pastParticipleFeedback.textContent = `✗ Correct: ${verb.participle}`;
        pastParticipleFeedback.classList.add('incorrect');
    }

    // Update score
    if (bothCorrect) {
        score++;
        updateScore();
    }

    // Store answer
    answers.push({
        verb: verb.base,
        correct: bothCorrect,
        userPastSimple,
        userPastParticiple,
        correctPastSimple: verb.past,
        correctPastParticiple: verb.participle
    });

    if (!bothCorrect) {
        if (!missedVerbs.find(v => v.base === verb.base)) {
            missedVerbs.push(verb);
        }
    }

    // Update Mastery Data
    updateVerbMastery(verb.base, bothCorrect);

    // Show feedback card
    showFeedback(bothCorrect, verb);

    // Disable submit button
    submitBtn.disabled = true;
}

function showFeedback(isCorrect, verb) {
    feedbackCard.classList.remove('hidden');

    if (isCorrect) {
        feedbackIcon.textContent = '🎉';
        feedbackMessage.textContent = 'Perfect!';
        feedbackMessage.className = 'feedback-message correct';
        correctAnswerElement.textContent = 'You got it right!';
    } else {
        feedbackIcon.textContent = '💡';
        feedbackMessage.textContent = 'Not quite right';
        feedbackMessage.className = 'feedback-message incorrect';
        correctAnswerElement.innerHTML = `
            The correct forms are:<br>
            <strong>${verb.base}</strong> → <strong>${verb.past}</strong> → <strong>${verb.participle}</strong>
        `;
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function updateScore() {
    currentScoreElement.textContent = score;
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex) / currentVerbs.length) * 100;
    progressFill.style.width = `${progress}%`;
}

// ===== Results =====
function showResults() {
    // Replace state so back button goes to start screen, not back to quiz
    history.replaceState({ screen: 'resultsScreen' }, '', '');
    showScreen(resultsScreen);

    const totalQuestions = currentVerbs.length;
    const correctAnswers = score;
    const incorrectAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Update results
    scorePercentage.textContent = `${percentage}%`;
    correctCount.textContent = correctAnswers;
    incorrectCount.textContent = incorrectAnswers;
    accuracyRate.textContent = `${percentage}%`;

    // Animate score ring
    const circumference = 2 * Math.PI * 54; // radius is 54
    const offset = circumference - (percentage / 100) * circumference;

    setTimeout(() => {
        scoreRingFill.style.strokeDashoffset = offset;
    }, 100);

    // Update icon and title based on performance
    if (percentage === 100) {
        resultsIcon.textContent = '🏆';
        resultsTitle.textContent = 'Perfect Score!';
    } else if (percentage >= 80) {
        resultsIcon.textContent = '🎉';
        resultsTitle.textContent = 'Excellent Work!';
    } else if (percentage >= 60) {
        resultsIcon.textContent = '👏';
        resultsTitle.textContent = 'Good Job!';
    } else if (percentage >= 40) {
        resultsIcon.textContent = '💪';
        resultsTitle.textContent = 'Keep Practicing!';
    } else {
        resultsIcon.textContent = '📚';
        resultsTitle.textContent = 'Keep Learning!';
    }

    // Show/Hide Review Mistakes button
    if (missedVerbs.length > 0) {
        mistakesBtn.classList.remove('hidden');
    } else {
        mistakesBtn.classList.add('hidden');
    }

    // Save mastery data after quiz
    saveMasteryData();
    updateMasteryOverview();
}


// ===== Study Mode Logic =====
function startStudyMode(updateHistory = true) {
    if (updateHistory) {
        history.pushState({ screen: 'studyScreen' }, '', '');
    }

    studyVerbs = [...irregularVerbs].sort(() => Math.random() - 0.5);
    currentStudyIndex = 0;
    studyTotalTotal.textContent = studyVerbs.length;

    showScreen(studyScreen);
    loadStudyVerb();
}

function loadStudyVerb() {
    const verb = studyVerbs[currentStudyIndex];
    flashcard.classList.remove('flipped');

    // Update contents
    studyBaseFront.textContent = verb.base;
    studyBase.textContent = verb.base;
    studyPast.textContent = verb.past;
    studyParticiple.textContent = verb.participle;

    studyExamplePast.textContent = verb.examplePast.replace('___', verb.past);
    studyExampleParticiple.textContent = verb.exampleParticiple.replace('___', verb.participle);

    studyCurrentIndex.textContent = currentStudyIndex + 1;
}

function flipFlashcard() {
    flashcard.classList.toggle('flipped');
}

function nextStudyVerb() {
    if (currentStudyIndex < studyVerbs.length - 1) {
        currentStudyIndex++;
        loadStudyVerb();
    } else {
        currentStudyIndex = 0; // Loop back
        loadStudyVerb();
    }
}

function prevStudyVerb() {
    if (currentStudyIndex > 0) {
        currentStudyIndex--;
        loadStudyVerb();
    } else {
        currentStudyIndex = studyVerbs.length - 1; // Loop back
        loadStudyVerb();
    }
}

// ===== Timer Logic =====
function startTimer() {
    stopTimer();
    timeLeft = timerLimit;
    updateTimerDisplay();

    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            timeLeft = 0;
            updateTimerDisplay();
            handleTimeUp();
        } else {
            updateTimerDisplay();
        }
    }, 100);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const percentage = (timeLeft / timerLimit) * 100;
    timerBar.style.width = `${percentage}%`;
    timerText.textContent = `${Math.ceil(timeLeft)}s`;

    // Change color as it gets low
    if (timeLeft < 5) {
        timerBar.style.background = 'var(--error-gradient)';
        timerText.style.color = 'var(--error-color)';
    } else {
        timerBar.style.background = 'var(--success-gradient)';
        timerText.style.color = 'var(--text-secondary)';
    }
}

function handleTimeUp() {
    stopTimer();

    // Mark as incorrect if not already submitted
    if (!submitBtn.disabled) {
        const userPastSimple = pastSimpleInput.value.trim() || "(No answer)";
        const userPastParticiple = pastParticipleInput.value.trim() || "(No answer)";

        const verb = currentVerbs[currentQuestionIndex];

        // Update input styles to show they are wrong
        pastSimpleInput.classList.add('incorrect');
        pastParticipleInput.classList.add('incorrect');

        // Show incorrect messages
        const pastSimpleFeedback = pastSimpleInput.parentElement.querySelector('.input-feedback');
        const pastParticipleFeedback = pastParticipleInput.parentElement.querySelector('.input-feedback');

        pastSimpleFeedback.textContent = `✗ Time's up! Correct: ${verb.past}`;
        pastSimpleFeedback.classList.add('incorrect');
        pastParticipleFeedback.textContent = `✗ Time's up! Correct: ${verb.participle}`;
        pastParticipleFeedback.classList.add('incorrect');

        // Store answer
        answers.push({
            verb: verb.base,
            correct: false,
            userPastSimple,
            userPastParticiple,
            correctPastSimple: verb.past,
            correctPastParticiple: verb.participle
        });

        if (!missedVerbs.find(v => v.base === verb.base)) {
            missedVerbs.push(verb);
        }

        updateVerbMastery(verb.base, false);

        showFeedback(false, verb);
        submitBtn.disabled = true;
    }
}

// ===== Mastery Logic =====
function loadMasteryData() {
    const saved = localStorage.getItem('verbMastery');
    if (saved) {
        masteryData = JSON.parse(saved);
    }
}

function saveMasteryData() {
    localStorage.setItem('verbMastery', JSON.stringify(masteryData));
}

function updateVerbMastery(verbBase, isCorrect) {
    if (!masteryData[verbBase]) {
        masteryData[verbBase] = { correct: 0, attempts: 0 };
    }

    masteryData[verbBase].attempts++;
    if (isCorrect) {
        masteryData[verbBase].correct++;
    }
}

function updateMasteryOverview() {
    let mastered = 0;
    let learning = 0;
    let practice = 0;

    // Use irregularVerbs from verbs.js to get all possible verbs
    irregularVerbs.forEach(verb => {
        const data = masteryData[verb.base];
        if (!data || data.attempts === 0) {
            practice++;
        } else {
            const accuracy = data.correct / data.attempts;
            if (accuracy >= 0.8 && data.attempts >= 3) {
                mastered++;
            } else if (accuracy >= 0.5) {
                learning++;
            } else {
                practice++;
            }
        }
    });

    masteredCount.textContent = mastered;
    learningCount.textContent = learning;
    needsPracticeCount.textContent = practice;
}

// ===== Initialize =====
function init() {
    loadMasteryData();
    updateMasteryOverview();

    // Set initial state
    history.replaceState({ screen: 'startScreen' }, '', '');
    showScreen(startScreen);
}

// New Event Listeners
mistakesBtn.addEventListener('click', startMistakesQuiz);

// Start the app
init();
