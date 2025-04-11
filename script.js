/* ==================== script.js ==================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Data Structures ---

    const quizData = [
         // Q1 - Control Orientation
        {
            question: "How often do you celebrate yourself or your wins?",
            answers: [
                "Celebrate? I usually skip to what’s next", // A=1
                "I downplay it so I don’t seem full of myself", // B=2
                "I give myself a high five and then apologize to the air for being “too much”", // C=3
                "I celebrate like I’m throwing a party for my soul" // D=4
            ],
            domain: "Control Orientation"
        },
        // Q2 - Image Maintenance (Ego Grip)
        {
            question: "How often do you feel proud of who you are becoming?",
            answers: [
                "Proud? I mostly feel like I’m stumbling in slow motion, hoping no one’s watching", // A=1
                "I’m proud for about 3 minutes, then start Googling “Why don’t I ever feel enough?”", // B=2
                "I’m still arriving—but damn, I’d want to be friends with who I’m becoming", // C=3
                "I feel proud—this is exactly who I always knew I could be" // D=4
            ],
            domain: "Image Maintenance (Ego Grip)"
        },
        // Q3 - Intimacy Capacity
        {
            question: "How often do you feel safe being your full, honest self with others?",
            answers: [
                "I’m entirely myself... in group chats with no one else in them", // A=1
                "I test the waters but rarely feel genuinely safe", // B=2
                "I can be real with a few people, but I still hold back the parts that feel too tender", // C=3
                "I feel safe enough to be all of me—and that’s non-negotiable" // D=4
            ],
            domain: "Intimacy Capacity"
        },
         // Q4 - Intimacy Capacity
        {
            question: "How do you usually feel in your closest relationships?",
            answers: [
                "Like I’m too much or not enough—sometimes both", // A=1
                "I try to show up, but half the time it feels like we’re tuned to different radio stations", // B=2
                "Emotionally intimate, but still ask if they like me every 3 days", // C=3
                "I feel safe, accepted, and entirely free to be myself" // D=4
            ],
            domain: "Intimacy Capacity"
        },
        // Q5 - Control Orientation
        {
            question: "How do you usually handle conflict or confrontation?",
            answers: [
                "I avoid it like it’s a haunted house—I’d rather disappear", // A=1
                "I write a monologue in my head, rehearse it for 2 hours, then send a meme instead", // B=2
                "I bring things up when I can, but I overthink every word", // C=3
                "I show up for myself when I need to, even if it’s uncomfortable" // D=4
            ],
            domain: "Control Orientation"
        },
        // Q6 - Intimacy Capacity
        {
            question: "How do you feel about your ability to say \"no\" to others?",
            answers: [
                "I say yes when I want to say no—just to avoid tension", // A=1
                "The only times I say “no” are when my plants are the only ones listening—and even then, I apologize after", // B=2
                "I can say no when I need to, but it still makes me uncomfortable", // C=3
                "I always say no when I need to, and it feels like self-respect" // D=4
            ],
            domain: "Intimacy Capacity"
        },
        // Q7 - Emotional Avoidance and Repression
        {
            question: "How do you handle disappointment or setbacks?",
            answers: [
                "I avoid it until it’s too much to handle—then I’m all over the place", // A=1
                "I try to manage it, but I usually spiral into frustration", // B=2
                "I write dramatic poetry in my head, then eat snacks I don’t even like", // C=3
                "I process it with compassion and learn from it every time" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
         // Q8 - Control Orientation
        {
            question: "How do you feel about the risks you take in life?",
            answers: [
                "I avoid them unless there’s absolutely no other option", // A=1
                "I take risks—as long as they’re reversible, refundable, and come with a safety net", // B=2
                "I still crave deeper roots, but I take risks when I feel ready", // C=3
                "I take bold steps that challenge me and align with my growth" // D=4
            ],
            domain: "Control Orientation"
        },
        // Q9 - Control Orientation
        {
            question: "How do you feel about change in your life?",
            answers: [
                "I resist it with everything I’ve got", // A=1
                "I love change—unless it’s in my routine, my relationships, or the location of my favorite mug", // B=2
                "I try to embrace it, but it still throws me off at times", // C=3
                "I see it as growth—even if it’s messy" // D=4
            ],
            domain: "Control Orientation"
        },
        // Q10 - Control Orientation
        {
            question: "How do you feel about the future?",
            answers: [
                "I try not to think about it—it’s too overwhelming", // A=1
                "I think about the future just enough to panic and then scroll through memes until it goes away", // B=2
                "I think it holds good things, even if I’m still scared", // C=3
                "I feel grounded and excited, like I’m creating something meaningful" // D=4
            ],
            domain: "Control Orientation"
        },
        // Q11 - Self-Deception vs. Self-Honesty
        {
            question: "How do you feel about the decisions you make?",
            answers: [
                "I’m always second-guessing or regretting them", // A=1
                "I try to make the right ones, but I tend to overanalyze them", // B=2
                "I usually feel fine, then immediately text three friends to double-check reality", // C=3
                "I feel confident—I almost always know what the right choice is for me" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        },
        // Q12 - Intimacy Capacity
        {
            question: "How do you feel about the relationships you currently have?",
            answers: [
                "I often feel alone, even when I’m with others", // A=1
                "I have people, but sometimes I still feel like I’m the extra in someone else’s movie", // B=2
                "I have meaningful connections, but I still long for more depth", // C=3
                "I feel deeply seen, supported, and connected" // D=4
            ],
            domain: "Intimacy Capacity"
        },
        // Q13 - Control Orientation
        {
            question: "How do you feel about the way you manage your time?",
            answers: [
                "I usually avoid thinking about it until it’s a mess", // A=1
                "I manage time mostly by reacting to what screams loudest", // B=2
                "I manage it decently, though I still crave more ease", // C=3
                "I’m always intentional with my time—it reflects what I care about" // D=4
            ],
            domain: "Control Orientation"
        },
         // Q14 - Image Maintenance (Ego Grip)
        {
            question: "How do you feel about your personal growth?",
            answers: [
                "I avoid self-work unless life forces me into it", // A=1
                "I’ve read the book, underlined everything, and still haven’t done the exercises", // B=2
                "I’m making progress and becoming more self-aware", // C=3
                "I actively invest in my growth—it excites and empowers me" // D=4
            ],
            domain: "Image Maintenance (Ego Grip)"
        },
        // Q15 - Image Maintenance (Ego Grip)
        {
            question: "How do you treat your body physically—food, rest, exercise?",
            answers: [
                "I mostly ignore it unless it starts yelling at me", // A=1
                "I try... but my old habits keep showing up like exes with opinions", // B=2
                "I treat it like a garden—some days I water it well, other days I forget", // C=3
                "I care for it like a temple—rest, high-vibe food, and movement" // D=4
            ],
            domain: "Image Maintenance (Ego Grip)"
        },
        // Q16 - Self-Deception vs. Self-Honesty
        {
            question: "How do you speak your truth in everyday life?",
            answers: [
                "I stay quiet and hope people understand me without asking", // A=1
                "I sometimes speak up—but only if it feels really safe", // B=2
                "I speak up when it matters, even if my voice shakes", // C=3
                "I always speak my truth, even if there are confetti and fireworks involved" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        },
        // Q17 - Emotional Avoidance and Repression
        {
            question: "How do you hold yourself when you're struggling?",
            answers: [
                "I criticize or try to fix myself as fast as I can", // A=1
                "I try to slow down, but I still feel like a mess", // B=2
                "I’m learning to hold space for myself—with care that’s still finding its footing", // C=3
                "I always offer myself love and empathy—no matter how messy I am" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
        // Q18 - Intimacy Capacity
        {
            question: "How do you relate to your boundaries?",
            answers: [
                "I usually only notice my boundaries after they’ve already been crossed", // A=1
                "I try to set them—then immediately second-guess myself", // B=2
                "I try to say what I need, even if it still feels shaky", // C=3
                "I set clear boundaries, built on hard-earned experience and rooted in self-respect" // D=4
            ],
            domain: "Intimacy Capacity"
        },
        // Q19 - Emotional Avoidance and Repression
        {
            question: "How do you treat yourself when you're feeling small or insecure?",
            answers: [
                "I spiral, self-judge, and then give myself a TED Talk in the mirror", // A=1
                "I slap on a smile, keep busy, and hope no one notices the storm", // B=2
                "I try to remind myself this is part of being human", // C=3
                "I offer myself the kind of support I’d give someone I love" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
        // Q20 - Emotional Avoidance and Repression
        {
            question: "How do you feel about being seen—really seen—for who you are?",
            answers: [
                "It feels like standing naked in a spotlight... with a room full of people holding comment cards", // A=1
                "Sometimes I let myself be seen, but I still wear armor just in case", // B=2
                "I show up mostly as I am—even if I still feel exposed", // C=3
                "Being seen or not doesn’t shake me—I trust the home I’ve built inside" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
        // Q21 - Intimacy Capacity
         {
            question: "How do you feel about your ability to express love?",
            answers: [
                "I overthink it and hold back so I won't get hurt", // A=1
                "I try, but I still feel clumsy and unsure if it’s landing", // B=2
                "I express it when I can, but I still crave deeper connection", // C=3
                "I express love openly and fully—in my own true way" // D=4
            ],
            domain: "Intimacy Capacity"
        },
        // Q22 - Emotional Avoidance and Repression
        {
            question: "How do you usually respond to failure?",
            answers: [
                "I panic-delete everything and then doubt my whole existence", // A=1
                "I try to move on quickly, but the sting lingers", // B=2
                "I give myself grace and try to learn from it", // C=3
                "I see failure as part of my growth—it’s not personal" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
         // Q23 - Image Maintenance (Ego Grip)
        {
            question: "How do you approach joy?",
            answers: [
                "Like it’s a surprise guest, and I’m scared he will leave too soon", // A=1
                "I try to enjoy it, but part of me waits for the crash", // B=2
                "I let it in slowly, still unsure if it’s real or just a fleeting moment", // C=3
                "I celebrate it fully and find it in many places" // D=4
            ],
            domain: "Image Maintenance (Ego Grip)"
        },
        // Q24 - Emotional Avoidance and Repression
        {
            question: "How do you approach your emotions?",
            answers: [
                "I mostly ignore them and hope they go away", // A=1
                "I let them in sometimes, but they still overwhelm me", // B=2
                "I feel them and name them, but I still get stuck", // C=3
                "I listen to them like messengers with something to teach me" // D=4
            ],
            domain: "Emotional Avoidance and Repression"
        },
        // Q25 - Self-Deception vs. Self-Honesty
        {
            question: "How do you feel about your relationship with your inner critic?",
            answers: [
                "It runs the show, and I just nod along", // A=1
                "I try to ignore it, but it still gets to me", // B=2
                "I catch it more often and choose different voices", // C=3
                "It can speak, but it doesn’t shape my choices, values, or voice" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        },
        // Q26 - Intimacy Capacity
         {
             question: "How do you show up in relationships (romantic or otherwise)?",
             answers: [
                 "I lose myself trying to be what others want", // A=1
                 "I try to show up, but my vulnerable parts usually wait in the car", // B=2
                 "I try to show up with care, even when it’s messy", // C=3
                 "I bring my full self—boundaries, love, weirdness, and all" // D=4
             ],
             domain: "Intimacy Capacity"
         },
        // Q27 - Image Maintenance (Ego Grip)
        {
            question: "How do you feel about your creativity or self-expression?",
            answers: [
                "I don’t really express myself—it feels pointless or risky", // A=1
                "I share little pieces, but rarely the whole of me", // B=2
                "I express myself more and more—it feels freeing", // C=3
                "I create and share myself nonstop because it’s my way of being fully me—raw, creative, and awake" // D=4
            ],
            domain: "Image Maintenance (Ego Grip)"
        },
        // Q28 - Self-Deception vs. Self-Honesty
        {
            question: "How do you connect with your inner wisdom or intuition?",
            answers: [
                "Inner wisdom? It might be in there, but it’s buried under overthinking and to-do lists", // A=1
                "I try, but my fear usually drowns it out", // B=2
                "I follow it more and more, even if it scares me", // C=3
                "I hear it clearly and let it guide my choices" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        },
         // Q29 - Self-Deception vs. Self-Honesty
        {
            question: "How do you feel about your role in your own healing journey?",
            answers: [
                "I’ve avoided it, hoping life would just fix itself around me", // A=1
                "I’ve dipped a toe in, but I keep checking the temperature", // B=2
                "I’m in it—messy, brave, and still figuring it out", // C=3
                "My healing is a top priority—because I know everything starts there" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        },
        // Q30 - Self-Deception vs. Self-Honesty
        {
            question: "Do you love your life?",
            answers: [
                "Not really—it often feels heavy and disconnected", // A=1
                "I like parts of it, but I wouldn’t say I love it", // B=2
                "I’m learning to love it more—I see the light coming through", // C=3
                "Hell yes—loudly, proudly, and sometimes with a boogie move" // D=4
            ],
            domain: "Self-Deception vs. Self-Honesty"
        }
    ];

    const reflections = {
        "Level 1": `Right now, life may feel like something you're managing more than living.\nThere’s effort, yes—but it’s mostly in holding things together, keeping up appearances, avoiding the silence. You move through the world with parts of yourself tucked away—your truth, your grief, your softness, your joy.\nIt’s not because you’re weak. It’s because life taught you to survive first, feel later. But somewhere in you, the real you hasn’t given up. The one who wants to feel, love, connect, and mean it.\nThat’s the part this quiz has gently stirred awake.\nIf you feel inspired to receive simple but powerful tools to improve your life, I’m offering a free 6-day mini-course designed to fit easily into a busy day.`,
        "Level 2": `You’re in motion now. Something inside you has started to stir.\nYou’ve begun noticing the little betrayals—when you say yes but mean no, when you smile while something aches, when you long for connection but still guard the door.\nYou’re not sleepwalking anymore. You’re aware that there’s more to life than the version you’ve been living—and that awareness is the beginning of everything.\nYou're not lost. You're just in the in-between. That tender space where change begins.\nIf you feel inspired to receive simple but powerful tools to improve your life, I’m offering a free 6-day mini-course designed to fit easily into a busy day.`,
        "Level 3": `You’re standing between two worlds—the life you’ve known and the one you’re learning how to live.\nSome days you feel connected, honest, present. Other days you slip back into old patterns. That’s not failure—it’s the rhythm of transformation. You’ve begun letting go of control. You’ve started feeling instead of avoiding. You've shown parts of yourself you used to hide.\nThere’s still fear, yes. Still resistance. But you’re no longer stuck—you’re evolving.\nThis middle place is uncomfortable, but it’s sacred. It means the old version of you is dissolving, and something truer is on its way.\nIf you feel inspired to receive simple but powerful tools to improve your life, I’m offering a free 6-day mini-course designed to fit easily into a busy day.`,
        "Level 4": `You’re beginning to live in alignment with what matters most.\nYou speak more honestly, even when it’s vulnerable. You feel your emotions rather than suppressing them. You’re letting people in without losing yourself. Life isn’t something you perform anymore—it’s something you’re inhabiting.\nIt’s not perfect, and it’s not supposed to be. But it’s real. And more often than not, it feels good to be you.\nThat’s what it means to love your life—not all the time, but more and more often, without pretending.\nIf you feel inspired to receive simple but powerful tools to improve your life, I’m offering a free 6-day mini-course designed to fit easily into a busy day.`,
        "Level 5": `You are living in truth. And it shows.\nNot because everything is easy, but because you no longer run from what’s real. You’re honest with yourself. Open with others. Grounded in your body. Soft where you used to be guarded.\nYou don’t just say you love your life—you mean it. You’ve earned that sentence. Through every hard moment you met with presence, every fear you faced with courage, every truth you chose over performance.\nThis is what embodiment looks like.\nIf you feel inspired to explore more tools to help you stay connected or go even deeper, I’m offering a free 6-day mini-course designed to fit easily into a busy day.`
    };

    const levelThresholds = {
        "Level 1": { min: 1.0, max: 1.5 },
        "Level 2": { min: 1.6, max: 2.2 },
        "Level 3": { min: 2.3, max: 2.9 },
        "Level 4": { min: 3.0, max: 3.5 },
        "Level 5": { min: 3.6, max: 4.0 }
    };

    const domains = [
        "Control Orientation",
        "Image Maintenance (Ego Grip)",
        "Intimacy Capacity",
        "Emotional Avoidance and Repression",
        "Self-Deception vs. Self-Honesty"
    ];

    // --- State Variables ---
    let currentQuestionIndex = 0;
    let userAnswers = {}; // Stores { questionIndex: score }
    let lowestScoringDomain = null; // To be stored on form submit
    let formSubmitted = false; // Prevent multiple submissions

    // --- DOM References ---
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const questionTextEl = document.getElementById('question-text');
    const answerOptionsEl = document.getElementById('answer-options');
    const backBtn = document.getElementById('back-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const reflectionTextEl = document.getElementById('reflection-text');
    const ctaForm = document.getElementById('cta-form');
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const emailErrorEl = document.getElementById('email-error');
    const ctaSubmitBtn = document.getElementById('cta-submit-btn');
    const successMessageEl = document.getElementById('success-message');

    // --- Functions ---

    function updateProgressBar() {
        const progress = ((currentQuestionIndex) / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${currentQuestionIndex} of ${quizData.length}`;
    }

    function loadQuestion(index) {
        if (index < 0 || index >= quizData.length) return; // Boundary check

        currentQuestionIndex = index;
        const questionData = quizData[index];

        questionTextEl.textContent = questionData.question;
        answerOptionsEl.innerHTML = ''; // Clear previous options

        questionData.answers.forEach((answer, i) => {
            const score = i + 1; // Answers A=1, B=2, C=3, D=4
            const button = document.createElement('button');
            button.textContent = answer;
            button.classList.add('answer-button');
            button.dataset.score = score; // Store score in data attribute

            // Check if this answer was previously selected for this question
            if (userAnswers[index] === score) {
                button.classList.add('selected-persistent'); // Style for back navigation
            }

            button.addEventListener('click', () => handleAnswerSelection(score, index, button));
            answerOptionsEl.appendChild(button);
        });

        // Update progress bar (based on the question *about* to be answered)
        const displayIndex = index; // Show progress *before* answering current question
        const progress = ((displayIndex) / quizData.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${displayIndex} of ${quizData.length}`;


        // Show/Hide Back button
        backBtn.classList.toggle('hidden', index === 0);
    }

    function handleAnswerSelection(score, questionIndex, selectedButton) {
        // Store the selected score
        userAnswers[questionIndex] = score;

        // Brief highlight effect
        selectedButton.classList.add('selected-briefly');
        // Disable all buttons during transition
        Array.from(answerOptionsEl.children).forEach(btn => btn.disabled = true);


        // Auto-advance after a short delay
        setTimeout(() => {
             // Update progress bar to reflect *completed* question
            const progress = ((questionIndex + 1) / quizData.length) * 100;
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${questionIndex + 1} of ${quizData.length}`;

            if (questionIndex < quizData.length - 1) {
                loadQuestion(questionIndex + 1);
            } else {
                calculateResults();
            }
            // Remove highlight and re-enable buttons (in case of back navigation) - though loadQuestion clears anyway
             selectedButton.classList.remove('selected-briefly');

        }, 400); // 0.4 second delay
    }

    function goBack() {
        if (currentQuestionIndex > 0) {
            // No need to remove score from userAnswers, just load previous question
            loadQuestion(currentQuestionIndex - 1);
        }
    }

    function calculateResults() {
        let domainTotals = {};
        let domainCounts = {};
        domains.forEach(domain => {
            domainTotals[domain] = 0;
            domainCounts[domain] = 0;
        });

        // Sum scores per domain
        quizData.forEach((question, index) => {
            const score = userAnswers[index];
            if (score !== undefined) { // Ensure question was answered
                const domain = question.domain;
                domainTotals[domain] += score;
                domainCounts[domain]++;
            }
        });

        // Calculate domain averages
        let domainAverages = {};
        let sumOfAverages = 0;
        let minScore = 5; // Start higher than max possible score
        lowestScoringDomain = domains[0]; // Default

        domains.forEach(domain => {
             // Use 6 as the fixed number of questions per domain per spec
            const average = domainCounts[domain] > 0 ? domainTotals[domain] / 6 : 0;
            domainAverages[domain] = average;
            sumOfAverages += average;

            // Track lowest scoring domain
            if (average < minScore) {
                minScore = average;
                lowestScoringDomain = domain;
            } else if (average === minScore) {
                 // Tie-breaking: keep the first one found or implement specific logic if needed
                 // Current logic keeps the first encountered domain with the minimum score.
            }
        });

        // Calculate final composite score
        // Divide by 5 (number of domains)
        const compositeScore = sumOfAverages / 5;

        // Determine result level
        let resultLevel = "Level 1"; // Default
        for (const level in levelThresholds) {
            const { min, max } = levelThresholds[level];
            // Use a small epsilon for floating point comparisons if needed, but direct check should be okay here.
            // Rounding compositeScore might be safer: compositeScore.toFixed(1)
            const roundedScore = parseFloat(compositeScore.toFixed(1));
            if (roundedScore >= min && roundedScore <= max) {
                resultLevel = level;
                break;
            }
        }

         console.log("Domain Totals:", domainTotals);
         console.log("Domain Averages:", domainAverages);
         console.log("Composite Score:", compositeScore.toFixed(2));
         console.log("Result Level:", resultLevel);
         console.log("Lowest Scoring Domain:", lowestScoringDomain);


        displayResults(resultLevel);
    }

    function displayResults(level) {
        quizContainer.classList.add('hidden');
        backBtn.classList.add('hidden'); // Hide back button on results
        resultsContainer.classList.remove('hidden');

        // Display the reflection text - use innerText to handle line breaks correctly
        reflectionTextEl.innerText = reflections[level];

        // Setup form listeners ONLY after results are displayed
        setupFormValidation();
    }

     function setupFormValidation() {
         // Add listeners for input to enable/disable submit button
        nameInput.addEventListener('input', validateForm);
        emailInput.addEventListener('input', validateForm);

        ctaForm.addEventListener('submit', handleFormSubmit);
    }

    function validateForm() {
        const isNameValid = nameInput.value.trim() !== '';
        const isEmailValid = emailInput.checkValidity() && emailInput.value.trim() !== ''; // Basic HTML5 validation

        ctaSubmitBtn.disabled = !(isNameValid && isEmailValid);

        // Show/hide custom email error message
        if (emailInput.value.trim() !== '' && !emailInput.checkValidity()) {
            emailErrorEl.classList.remove('hidden');
        } else {
            emailErrorEl.classList.add('hidden');
        }
    }

    async function handleFormSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        if (formSubmitted || ctaSubmitBtn.disabled) return; // Prevent multi-submit

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        // Disable form elements after valid submission attempt
        ctaSubmitBtn.disabled = true;
        ctaSubmitBtn.textContent = 'Submitting...';
        nameInput.disabled = true;
        emailInput.disabled = true;
        formSubmitted = true;

        // --- !!! Integration Point !!! ---
        // Here you would send the data (name, email, lowestScoringDomain)
        // to your backend or directly to your Email Marketing Platform (ESP) API
        // (e.g., Mailchimp, ConvertKit).

        const payload = {
            name: name,
            email: email,
            weakest_domain: lowestScoringDomain // Use the field name expected by your ESP
        };

        console.log("Submitting data:", payload);

        // Example using Fetch API (replace with your actual endpoint and method)
        try {
            /*
            const response = await fetch('YOUR_ESP_API_ENDPOINT', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary Authorization headers (API keys etc.)
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.statusText}`);
            }

            console.log("Submission successful:", await response.json());
            */

            // --- SIMULATE SUCCESS ---
             await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
             console.log("Simulated submission successful.");
            // --- END SIMULATION ---


            // Show success message and hide form on successful submission
            ctaForm.classList.add('hidden');
            successMessageEl.classList.remove('hidden');

        } catch (error) {
            console.error("Submission failed:", error);
            // Re-enable form if submission fails, show error message to user
            ctaSubmitBtn.disabled = false;
             ctaSubmitBtn.textContent = 'Sign me up for the free I Love My Life in Six Days mini-course'; // Reset text
            nameInput.disabled = false;
            emailInput.disabled = false;
            formSubmitted = false;
            // Optionally display an error message near the form
             emailErrorEl.textContent = "Submission failed. Please try again."; // Example error display
             emailErrorEl.classList.remove('hidden');
        }
        // --- End Integration Point ---
    }


    // --- Initial Load ---
    loadQuestion(currentQuestionIndex); // Load the first question (index 0)
    backBtn.addEventListener('click', goBack); // Add listener for back button

}); // End DOMContentLoaded