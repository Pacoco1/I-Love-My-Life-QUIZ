// Quiz Application Script

// Quiz questions and answers
const quizData = [
    // Q1 - Control Orientation
    {
        question: "How often do you celebrate yourself or your wins?",
        options: [
            "Celebrate? I usually skip to what's next", // A=1
            "I downplay it so I don't seem full of myself", // B=2
            "I give myself a high five and then apologize to the air for being 'too much'", // C=3
            "I celebrate like I'm throwing a party for my soul" // D=4
        ]
    },
    // Q2 - Image Maintenance (Ego Grip)
    {
        question: "How often do you feel proud of who you are becoming?",
        options: [
            "Proud? I mostly feel like I'm stumbling in slow motion, hoping no one's watching", // A=1
            "I'm proud for about 3 minutes, then start Googling 'Why don't I ever feel enough?'", // B=2
            "I'm still arriving—but damn, I'd want to be friends with who I'm becoming", // C=3
            "I feel proud—this is exactly who I always knew I could be" // D=4
        ]
    },
    // Q3 - Intimacy Capacity
    {
        question: "How often do you feel safe being your full, honest self with others?",
        options: [
            "I'm entirely myself... in group chats with no one else in them", // A=1
            "I test the waters but rarely feel genuinely safe", // B=2
            "I can be real with a few people, but I still hold back the parts that feel too tender", // C=3
            "I feel safe enough to be all of me—and that's non-negotiable" // D=4
        ]
    },
    // Q4 - Intimacy Capacity
    {
        question: "How do you usually feel in your closest relationships?",
        options: [
            "Like I'm too much or not enough—sometimes both", // A=1
            "I try to show up, but half the time it feels like we're tuned to different radio stations", // B=2
            "Emotionally intimate, but still ask if they like me every 3 days", // C=3
            "I feel safe, accepted, and entirely free to be myself" // D=4
        ]
    },
    // Q5 - Control Orientation
    {
        question: "How do you usually handle conflict or confrontation?",
        options: [
            "I avoid it like it's a haunted house—I'd rather disappear", // A=1
            "I write a monologue in my head, rehearse it for 2 hours, then send a meme instead", // B=2
            "I bring things up when I can, but I overthink every word", // C=3
            "I show up for myself when I need to, even if it's uncomfortable" // D=4
        ]
    },
    // Q6 - Intimacy Capacity
    {
        question: "How do you feel about your ability to say \"no\" to others?",
        options: [
            "I say yes when I want to say no—just to avoid tension", // A=1
            "The only times I say 'no' are when my plants are the only ones listening—and even then, I apologize after", // B=2
            "I can say no when I need to, but it still makes me uncomfortable", // C=3
            "I always say no when I need to, and it feels like self-respect" // D=4
        ]
    },
    // Q7 - Emotional Avoidance and Repression
    {
        question: "How do you handle disappointment or setbacks?",
        options: [
            "I avoid it until it's too much to handle—then I'm all over the place", // A=1
            "I try to manage it, but I usually spiral into frustration", // B=2
            "I write dramatic poetry in my head, then eat snacks I don't even like", // C=3
            "I process it with compassion and learn from it every time" // D=4
        ]
    },
    // Pause after question 7
    // Q8 - Control Orientation
    {
        question: "How do you feel about the risks you take in life?",
        options: [
            "I avoid them unless there's absolutely no other option", // A=1
            "I take risks—as long as they're reversible, refundable, and come with a safety net", // B=2
            "I still crave deeper roots, but I take risks when I feel ready", // C=3
            "I take bold steps that challenge me and align with my growth" // D=4
        ]
    },
    // Q9 - Control Orientation
    {
        question: "How do you feel about change in your life?",
        options: [
            "I resist it with everything I've got", // A=1
            "I love change—unless it's in my routine, my relationships, or the location of my favorite mug", // B=2
            "I try to embrace it, but it still throws me off at times", // C=3
            "I see it as growth—even if it's messy" // D=4
        ]
    },
    // Q10 - Control Orientation
    {
        question: "How do you feel about the future?",
        options: [
            "I try not to think about it—it's too overwhelming", // A=1
            "I think about the future just enough to panic and then scroll through memes until it goes away", // B=2
            "I think it holds good things, even if I'm still scared", // C=3
            "I feel grounded and excited, like I'm creating something meaningful" // D=4
        ]
    },
    // Q11 - Self-Deception vs. Self-Honesty
    {
        question: "How do you feel about the decisions you make?",
        options: [
            "I'm always second-guessing or regretting them", // A=1
            "I try to make the right ones, but I tend to overanalyze them", // B=2
            "I usually feel fine, then immediately text three friends to double-check reality", // C=3
            "I feel confident—I almost always know what the right choice is for me" // D=4
        ]
    },
    // Q12 - Intimacy Capacity
    {
        question: "How do you feel about the relationships you currently have?",
        options: [
            "I often feel alone, even when I'm with others", // A=1
            "I have people, but sometimes I still feel like I'm the extra in someone else's movie", // B=2
            "I have meaningful connections, but I still long for more depth", // C=3
            "I feel deeply seen, supported, and connected" // D=4
        ]
    },
    // Q13 - Control Orientation
    {
        question: "How do you feel about the way you manage your time?",
        options: [
            "I usually avoid thinking about it until it's a mess", // A=1
            "I manage time mostly by reacting to what screams loudest", // B=2
            "I manage it decently, though I still crave more ease", // C=3
            "I'm always intentional with my time—it reflects what I care about" // D=4
        ]
    },
    // Q14 - Image Maintenance (Ego Grip)
    {
        question: "How do you feel about your personal growth?",
        options: [
            "I avoid self-work unless life forces me into it", // A=1
            "I've read the book, underlined everything, and still haven't done the exercises", // B=2
            "I'm making progress and becoming more self-aware", // C=3
            "I actively invest in my growth—it excites and empowers me" // D=4
        ]
    },
    // Pause after question 14
    // Q15 - Image Maintenance (Ego Grip)
    {
        question: "How do you treat your body physically—food, rest, exercise?",
        options: [
            "I mostly ignore it unless it starts yelling at me", // A=1
            "I try... but my old habits keep showing up like exes with opinions", // B=2
            "I treat it like a garden—some days I water it well, other days I forget", // C=3
            "I care for it like a temple—rest, high-vibe food, and movement" // D=4
        ]
    },
    // Q16 - Self-Deception vs. Self-Honesty
    {
        question: "How do you speak your truth in everyday life?",
        options: [
            "I stay quiet and hope people understand me without asking", // A=1
            "I sometimes speak up—but only if it feels really safe", // B=2
            "I speak up when it matters, even if my voice shakes", // C=3
            "I always speak my truth, even if there are confetti and fireworks involved" // D=4
        ]
    },
    // Q17 - Emotional Avoidance and Repression
    {
        question: "How do you hold yourself when you're struggling?",
        options: [
            "I criticize or try to fix myself as fast as I can", // A=1
            "I try to slow down, but I still feel like a mess", // B=2
            "I'm learning to hold space for myself—with care that's still finding its footing", // C=3
            "I always offer myself love and empathy—no matter how messy I am" // D=4
        ]
    },
    // Q18 - Intimacy Capacity
    {
        question: "How do you relate to your boundaries?",
        options: [
            "I usually only notice my boundaries after they've already been crossed", // A=1
            "I try to set them—then immediately second-guess myself", // B=2
            "I try to say what I need, even if it still feels shaky", // C=3
            "I set clear boundaries, built on hard-earned experience and rooted in self-respect" // D=4
        ]
    },
    // Q19 - Emotional Avoidance and Repression
    {
        question: "How do you treat yourself when you're feeling small or insecure?",
        options: [
            "I spiral, self-judge, and then give myself a TED Talk in the mirror", // A=1
            "I slap on a smile, keep busy, and hope no one notices the storm", // B=2
            "I try to remind myself this is part of being human", // C=3
            "I offer myself the kind of support I'd give someone I love" // D=4
        ]
    },
    // Q20 - Emotional Avoidance and Repression
    {
        question: "How do you feel about being seen—really seen—for who you are?",
        options: [
            "It feels like standing naked in a spotlight... with a room full of people holding comment cards", // A=1
            "Sometimes I let myself be seen, but I still wear armor just in case", // B=2
            "I show up mostly as I am—even if I still feel exposed", // C=3
            "Being seen or not doesn't shake me—I trust the home I've built inside" // D=4
        ]
    },
    // Q21 - Intimacy Capacity
     {
        question: "How do you feel about your ability to express love?",
        options: [
            "I overthink it and hold back so I won't get hurt", // A=1
            "I try, but I still feel clumsy and unsure if it's landing", // B=2
            "I express it when I can, but I still crave deeper connection", // C=3
            "I express love openly and fully—in my own true way" // D=4
        ]
    },
    // Pause after question 21
    // Q22 - Emotional Avoidance and Repression
    {
        question: "How do you usually respond to failure?",
        options: [
            "I panic-delete everything and then doubt my whole existence", // A=1
            "I try to move on quickly, but the sting lingers", // B=2
            "I give myself grace and try to learn from it", // C=3
            "I see failure as part of my growth—it's not personal" // D=4
        ]
    },
    // Q23 - Image Maintenance (Ego Grip)
    {
        question: "How do you handle criticism or feedback?",
        options: [
            "I immediately spiral—it echoes the inner voice that's been criticizing me for years", // A=1
            "I act cool, but I replay it for a week", // B=2
            "I try to see what's true without beating myself up", // C=3
            "I receive it with gratitude—without identifying with it" // D=4
        ]
    },
    // Q24 - Image Maintenance (Ego Grip)
    {
        question: "How do you usually feel in social situations?",
        options: [
            "Anxious—I wonder if I said the wrong thing the entire time", // A=1
            "I show up, but I still feel like I need a user manual for being a human", // B=2
            "I'm comfortable with my close people, but larger groups still make me nervous", // C=3
            "I feel fully at ease—in my body and with others" // D=4
        ]
    },
    // Q25 - Self-Deception vs. Self-Honesty
    {
        question: "How aware are you of your own patterns and triggers?",
        options: [
            "I usually only see them after they've already taken over", // A=1
            "I can see them in hindsight, but not always in the moment", // B=2
            "I'm starting to recognize them as they're happening", // C=3
            "I'm deeply aware and rarely caught off guard by them" // D=4
        ]
    },
    // Q26 - Control Orientation
    {
        question: "How do you relate to your emotions?",
        options: [
            "I try to ignore them until they go away or explode", // A=1
            "I acknowledge them, but I still struggle to just be with them", // B=2
            "I'm learning to listen to them and give them space", // C=3
            "I welcome them all—they're like wise messengers" // D=4
        ]
    },
    // Pause after question 26
    // Q27 - Self-Deception vs. Self-Honesty
    {
        question: "How do you feel about the pace of your growth?",
        options: [
            "I feel stuck in the same patterns and stories", // A=1
            "I'm making some progress, but not as much as I'd like", // B=2
            "I'm growing steadily, learning from my experiences", // C=3
            "I'm expanding in all the ways that matter to me" // D=4
        ]
    },
    // Q28 - Image Maintenance (Ego Grip)
    {
        question: "How do you feel about your ability to receive help?",
        options: [
            "I refuse it until I absolutely can't do it alone", // A=1
            "I'll accept it, but I still feel like I'm failing", // B=2
            "I'm learning to receive support—but it still makes me squirm", // C=3
            "I receive it with grace, knowing we're meant to support each other" // D=4
        ]
    },
    // Q29 - Self-Deception vs. Self-Honesty
    {
        question: "How do you relate to your past?",
        options: [
            "I spend a lot of my life haunted by it", // A=1
            "I try to move forward, but I still react from my old stories", // B=2
            "I'm mostly at peace with it, though some areas still feel tender", // C=3
            "I've made peace with all of it—it's like a sacred part of my story" // D=4
        ]
    },
    // Q30 - Self-Deception vs. Self-Honesty
    {
        question: "How do you usually feel when you're completely alone?",
        options: [
            "I feel anxious and avoid it at all costs", // A=1
            "I get lost in screens and busywork—solitude still feels heavy", // B=2
            "It's getting easier—I actually enjoy my own company", // C=3
            "It's when I feel freest and most connected to myself" // D=4
        ]
    }
];

// Pause screen content
const pauseScreens = [
    {
        quote: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.",
        author: "Brené Brown",
        image: "images/authenticity.jpg"
    },
    {
        quote: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
        author: "Marcel Proust",
        image: "images/connection.jpg"
    },
    {
        quote: "Gratitude turns what we have into enough, and more. It turns denial into acceptance, chaos into order, confusion into clarity.",
        author: "Melody Beattie",
        image: "images/gratitude.jpg"
    },
    {
        quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
        author: "Ralph Waldo Emerson",
        image: "images/right-path.jpg"
    }
];

// DOM elements
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const quizContainer = document.getElementById('quiz-container');
const pauseContainer = document.getElementById('pause-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const answerOptions = document.getElementById('answer-options');
const backButton = document.getElementById('back-btn');
const pauseQuote = document.getElementById('pause-quote');
const pauseImage = document.getElementById('pause-image');
const continueButton = document.getElementById('continue-btn');
const reflectionText = document.getElementById('reflection-text');

// Quiz state
let currentQuestionIndex = 0;
let userResponses = [];
let pausePoints = [7, 14, 21, 26]; // Questions after which to show pause screens

// Initialize the quiz
function initQuiz() {
    // Set up event listeners
    backButton.addEventListener('click', goToPreviousQuestion);
    continueButton.addEventListener('click', continuePastPause);
    
    // Start with first question
    showQuestion(0);
    updateProgressBar();
}

// Show current question
function showQuestion(index) {
    const currentQuestion = quizData[index];
    
    // Set question text
    questionText.textContent = currentQuestion.question;
    
    // Clear previous answer options
    answerOptions.innerHTML = '';
    
    // Generate answer buttons
    currentQuestion.options.forEach((option, i) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('answer-button');
        button.setAttribute('aria-label', `Option ${i + 1}: ${option}`);
        
        // Select button if already answered
        if (userResponses[index] === i) {
            button.classList.add('selected-persistent');
        }
        
        // Set click handler
        button.addEventListener('click', () => selectAnswer(i));
        
        answerOptions.appendChild(button);
    });
    
    // Show back button if not on first question
    if (index > 0) {
        backButton.classList.remove('hidden');
    } else {
        backButton.classList.add('hidden');
    }
    
    // Show appropriate container
    pauseContainer.classList.add('hidden');
    resultsContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
}

// Handle selecting an answer
function selectAnswer(optionIndex) {
    // Store the response
    userResponses[currentQuestionIndex] = optionIndex;
    
    // Add visual feedback
    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, i) => {
        if (i === optionIndex) {
            button.classList.add('selected-briefly');
        } else {
            button.classList.remove('selected-briefly');
        }
    });
    
    // Slight delay before moving to next question
    setTimeout(() => {
        // Check if we need to show a pause screen
        if (pausePoints.includes(currentQuestionIndex)) {
            showPauseScreen(pausePoints.indexOf(currentQuestionIndex));
        } else if (currentQuestionIndex === quizData.length - 1) {
            // If last question, show results
            showResults();
        } else {
            // Otherwise, go to next question
            goToNextQuestion();
        }
    }, 300);
}

// Show pause screen
function showPauseScreen(pauseIndex) {
    // Set quote, author and image
    pauseQuote.textContent = pauseScreens[pauseIndex].quote;
    document.getElementById('pause-author').textContent = "— " + pauseScreens[pauseIndex].author;
    pauseImage.src = pauseScreens[pauseIndex].image;
    
    // Hide quiz, show pause screen
    quizContainer.classList.add('hidden');
    pauseContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
}

// Continue after pause
function continuePastPause() {
    goToNextQuestion();
}

// Go to next question
function goToNextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    } else {
        showResults();
    }
}

// Go to previous question
function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    }
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentQuestionIndex) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    progressText.textContent = `${currentQuestionIndex} of ${quizData.length}`;
}

// Show results
function showResults() {
    // Generate reflection based on answers
    generateReflection();
    
    // Hide quiz, show results
    quizContainer.classList.add('hidden');
    pauseContainer.classList.add('hidden');
    resultsContainer.classList.remove('hidden');
    
    // Update progress to 100%
    progressBar.style.width = '100%';
    progressBar.setAttribute('aria-valuenow', 100);
    progressText.textContent = `30 of 30`;
}

// Reflection options based on score
const reflections = {
    "Level 1": `Right now, life may feel like something you're managing more than living.\nThere's effort, yes—but it's mostly in holding things together, keeping up appearances, avoiding the silence. You move through the world with parts of yourself tucked away—your truth, your grief, your softness, your joy.\nIt's not because you're weak. It's because life taught you to survive first, feel later. But somewhere in you, the real you hasn't given up. The one who wants to feel, love, connect, and mean it.\nThat's the part this quiz has gently stirred awake.\nIf you feel inspired to receive simple but powerful tools to improve your life, I'm offering a free 6-day mini-course designed to fit easily into a busy day.`,
    "Level 2": `You're in motion now. Something inside you has started to stir.\nYou've begun noticing the little betrayals—when you say yes but mean no, when you smile while something aches, when you long for connection but still guard the door.\nYou're not sleepwalking anymore. You're aware that there's more to life than the version you've been living—and that awareness is the beginning of everything.\nYou're not lost. You're just in the in-between. That tender space where change begins.\nIf you feel inspired to receive simple but powerful tools to improve your life, I'm offering a free 6-day mini-course designed to fit easily into a busy day.`,
    "Level 3": `You're standing between two worlds—the life you've known and the one you're learning how to live.\nSome days you feel connected, honest, present. Other days you slip back into old patterns. That's not failure—it's the rhythm of transformation. You've begun letting go of control. You've started feeling instead of avoiding. You've shown parts of yourself you used to hide.\nThere's still fear, yes. Still resistance. But you're no longer stuck—you're evolving.\nThis middle place is uncomfortable, but it's sacred. It means the old version of you is dissolving, and something truer is on its way.\nIf you feel inspired to receive simple but powerful tools to improve your life, I'm offering a free 6-day mini-course designed to fit easily into a busy day.`,
    "Level 4": `You're beginning to live in alignment with what matters most.\nYou speak more honestly, even when it's vulnerable. You feel your emotions rather than suppressing them. You're letting people in without losing yourself. Life isn't something you perform anymore—it's something you're inhabiting.\nIt's not perfect, and it's not supposed to be. But it's real. And more often than not, it feels good to be you.\nThat's what it means to love your life—not all the time, but more and more often, without pretending.\nIf you feel inspired to receive simple but powerful tools to improve your life, I'm offering a free 6-day mini-course designed to fit easily into a busy day.`,
    "Level 5": `You are living in truth. And it shows.\nNot because everything is easy, but because you no longer run from what's real. You're honest with yourself. Open with others. Grounded in your body. Soft where you used to be guarded.\nYou don't just say you love your life—you mean it. You've earned that sentence. Through every hard moment you met with presence, every fear you faced with courage, every truth you chose over performance.\nThis is what embodiment looks like.\nIf you feel inspired to explore more tools to help you stay connected or go even deeper, I'm offering a free 6-day mini-course designed to fit easily into a busy day.`
};

// Thresholds for determining which reflection to show
const levelThresholds = {
    "Level 1": { min: 1.0, max: 1.5 },
    "Level 2": { min: 1.6, max: 2.2 },
    "Level 3": { min: 2.3, max: 2.9 },
    "Level 4": { min: 3.0, max: 3.5 },
    "Level 5": { min: 3.6, max: 4.0 }
};

// Generate reflection text based on user's answers
function generateReflection() {
    // Calculate score based on answers (simple average for now)
    let totalScore = 0;
    let answeredQuestions = 0;
    
    userResponses.forEach((response, index) => {
        if (response !== undefined) {
            // Score is based on the option selected (0-based index + 1)
            totalScore += (response + 1);
            answeredQuestions++;
        }
    });
    
    // Calculate average score (1-4 range)
    const averageScore = answeredQuestions > 0 ? totalScore / answeredQuestions : 0;
    
    // Determine level based on score thresholds
    let level = "Level 3"; // Default level
    
    for (const [levelName, threshold] of Object.entries(levelThresholds)) {
        if (averageScore >= threshold.min && averageScore <= threshold.max) {
            level = levelName;
            break;
        }
    }
    
    // Set reflection text based on level
    reflectionText.innerHTML = reflections[level].replace(/\n/g, '<br><br>');
}

// Set up form validation
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('user-email');
    const submitButton = document.getElementById('cta-submit-btn');
    const emailError = document.getElementById('email-error');
    const form = document.getElementById('mc-embedded-subscribe-form');
    const successMessage = document.getElementById('success-message');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    emailInput.addEventListener('input', function() {
        if (emailRegex.test(emailInput.value)) {
            emailError.classList.add('hidden');
            submitButton.disabled = false;
        } else {
            emailError.classList.remove('hidden');
            submitButton.disabled = true;
        }
    });
    
    form.addEventListener('submit', function(e) {
        // Let the form submit to Mailchimp but redirect to the welcome page after submission
        setTimeout(function() {
            window.location.href = "https://ilovemylife.me/welcome";
        }, 500);
    });
});

// Start the quiz when the page loads
window.addEventListener('DOMContentLoaded', initQuiz);
