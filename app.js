// ===== Application State =====
let currentDifficulty = 'easy';
let currentVerbs = [];
let currentQuestionIndex = 0;
let score = 0;
let answers = [];

// ===== DOM Elements =====
const startScreen = document.getElementById('startScreen');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');

const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const baseFormElement = document.getElementById('baseForm');
const examplePastElement = document.getElementById('examplePast');
const exampleParticipleElement = document.getElementById('exampleParticiple');
const hintPastElement = document.getElementById('hintPast');
const hintParticipleElement = document.getElementById('hintParticiple');
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
    loadQuestion();
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answers = [];
    updateScore();
    feedbackCard.classList.add('hidden');
    clearInputs();
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

    // Generate and set hints
    hintPastElement.textContent = generateHint(verb.past);
    hintParticipleElement.textContent = generateHint(verb.participle);

    clearInputs();
    feedbackCard.classList.add('hidden');
    submitBtn.disabled = false;

    currentQuestionElement.textContent = currentQuestionIndex + 1;
    updateProgressBar();

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
}

// ===== Initialize =====
function init() {
    // Set initial state
    history.replaceState({ screen: 'startScreen' }, '', '');
    showScreen(startScreen);
}

// Start the app
init();
