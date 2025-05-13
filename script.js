document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const welcomeScreen = document.getElementById('welcome-screen');
  const introScreen = document.getElementById('introduction-screen');
  const questionArea = document.getElementById('question-area');
  const progressHeader = document.getElementById('progress-header');
  const progressBarFill = document.getElementById('progress-bar-fill');
  const progressIndicator = document.getElementById('progress-indicator');
  const questionText = document.getElementById('question-text');
  const answerOptions = document.getElementById('answer-options');
  const quotePauseScreen = document.getElementById('quote-pause-screen');
  const quoteImage = document.getElementById('quote-image');
  const quoteText = document.getElementById('quote-text');
  const quoteAuthor = document.getElementById('quote-author');
  const continueBtn = document.getElementById('continue-btn');
  const backBtn = document.getElementById('back-btn');
  const resultsContainer = document.getElementById('results-container');
  const reflectionText = document.getElementById('reflection-text');
  const logoFooter = document.getElementById('logo-footer');
  const emailField = document.getElementById('user-email');
  const emailError = document.getElementById('email-error');
  const form = document.getElementById('mc-embedded-subscribe-form');
  const successMessage = document.getElementById('success-message');
  
  // State variables
  let currentQuestionIndex = 0;
  let userResponses = [];
  let showingPauseScreen = false;
  
  // Initialize the quiz
  function init() {
    document.getElementById('show-instructions-btn').addEventListener('click', showInstructions);
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
    backBtn.addEventListener('click', goToPreviousQuestion);
    continueBtn.addEventListener('click', continueFromPauseScreen);
    form.addEventListener('submit', handleFormSubmit);
    
    // Initialize the user responses array with nulls
    userResponses = Array(quizData.length).fill(null);
  }
  
  // Show instructions screen
  function showInstructions() {
    welcomeScreen.style.display = 'none';
    introScreen.style.display = 'block';
  }
  
  // Start the quiz
  function startQuiz() {
    introScreen.style.display = 'none';
    progressHeader.style.display = 'flex';
    questionArea.style.display = 'block';
    logoFooter.style.display = 'block';
    loadQuestion(0);
  }
  
  // Load a question
  function loadQuestion(index) {
    currentQuestionIndex = index;
    
    // Show back button if not on first question
    backBtn.style.display = index > 0 ? 'block' : 'none';
    
    // Update progress
    updateProgress();
    
    // Set question text
    questionText.textContent = quizData[index].question;
    
    // Clear previous answer options
    answerOptions.innerHTML = '';
    
    // Add answer buttons
    quizData[index].answers.forEach((answer, ansIndex) => {
      const button = document.createElement('button');
      button.className = 'answer-button';
      button.textContent = answer;
      button.addEventListener('click', () => selectAnswer(ansIndex));
      answerOptions.appendChild(button);
    });
  }
  
  // Handle answer selection
  function selectAnswer(answerIndex) {
    // Store the response
    userResponses[currentQuestionIndex] = answerIndex;
    
    // Visual feedback - add selected class
    const buttons = answerOptions.querySelectorAll('.answer-button');
    buttons.forEach((btn, idx) => {
      btn.classList.remove('selected-briefly');
      if (idx === answerIndex) {
        btn.classList.add('selected-briefly');
      }
    });
    
    // Wait briefly before moving to next question or pause screen
    setTimeout(() => {
      // Check if we've reached the end
      if (currentQuestionIndex >= quizData.length - 1) {
        showResults();
        return;
      }
      
      // Check if the next question should show a pause screen
      const nextIndex = currentQuestionIndex + 1;
      const pauseScreen = pauseScreenData.find(data => data.questionIndex === nextIndex);
      
      if (pauseScreen) {
        showPauseScreen(pauseScreen);
      } else {
        loadQuestion(nextIndex);
      }
    }, 500);
  }
  
  // Show pause screen
  function showPauseScreen(pauseScreenInfo) {
    currentQuestionIndex = pauseScreenInfo.questionIndex;
    showingPauseScreen = true;
    
    // Set pause screen content
    quoteImage.src = pauseScreenInfo.image;
    quoteText.textContent = pauseScreenInfo.quote;
    quoteAuthor.textContent = '— ' + pauseScreenInfo.author;
    
    // Hide question area and show pause screen
    questionArea.style.display = 'none';
    quotePauseScreen.style.display = 'block';
    
    // Add visible class after a short delay for animation
    setTimeout(() => {
      quotePauseScreen.classList.add('visible');
    }, 50);
  }
  
  // Continue from pause screen
  function continueFromPauseScreen() {
    // Remove visible class for fade-out animation
    quotePauseScreen.classList.remove('visible');
    
    // After animation, hide pause screen and show next question
    setTimeout(() => {
      quotePauseScreen.style.display = 'none';
      questionArea.style.display = 'block';
      showingPauseScreen = false;
      loadQuestion(currentQuestionIndex + 1);
    }, 500);
  }
  
  // Go to previous question
  function goToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
      const newIndex = currentQuestionIndex - 1;
      
      // If showing pause screen, hide it
      if (showingPauseScreen) {
        quotePauseScreen.classList.remove('visible');
        setTimeout(() => {
          quotePauseScreen.style.display = 'none';
          questionArea.style.display = 'block';
          showingPauseScreen = false;
          loadQuestion(newIndex);
        }, 500);
      } else {
        loadQuestion(newIndex);
      }
    }
  }
  
  // Update progress bar and indicator
  function updateProgress() {
    const progressPercent = (currentQuestionIndex / quizData.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;
    progressIndicator.textContent = `${currentQuestionIndex + 1} of ${quizData.length}`;
  }
  
  // Show results
  function showResults() {
    questionArea.style.display = 'none';
    progressHeader.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Calculate and display reflection
    reflectionText.textContent = calculateReflection();
  }
  
  // Calculate reflection text based on answers
  function calculateReflection() {
    // This is a placeholder reflection. In a real implementation, 
    // this would analyze the responses in a more sophisticated way.
    return `Thank you for taking the time to reflect on these 30 questions. Your answers reveal your current relationship with yourself and your life.

Based on your responses, it seems you're on a journey of self-discovery. Some areas of your life feel aligned and purposeful, while others might benefit from more attention and care.

Remember that self-growth is a continuous process. Every small step you take toward authenticity and self-love creates ripples of transformation in your life.`;
  }
  
  // Handle form submission
  function handleFormSubmit(e) {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailField.value)) {
      emailError.style.display = 'block';
      return;
    }
    
    // Hide error if previously shown
    emailError.style.display = 'none';
    
    // In a real implementation, you would submit the form data to a server here
    
    // Redirect to the thank you page
    window.location.href = 'https://ilovemylife.me/welcome';
  }
  
  // Initialize the quiz
  init();
});