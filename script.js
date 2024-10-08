// Assume we are working in the Unify environment, utilizing HTML, CSS, and JavaScript.
// This prototype will be very basic to give a simple challenge and show a reward animation.

// HTML Structure for Unify (UI is simplified for the prototype)
const appHtml = `
  <div id="app">
    <h1>Cricket Quest</h1>
    <img id="taskImage" src="https://crickquesttaskimages.s3.amazonaws.com/Mitchell_Johnson_bowling_7.jpg" alt="Practice Bowling Image">
    <p id="challengeText">Complete your first challenge: "Practice Bowling"</p>
    <p id="progressText">Tasks Completed: 0 / 3</p>
    <button id="completeChallengeButton">Mark as Completed</button>
    <div id="reward" class="hidden">
      <h2>Congratulations!</h2>
      <p id="rewardMessage"></p>
      <div id="animation">🎉🎊🎉</div>
      <button id="nextLevelButton">Proceed to Next Level</button>
      <button id="restartButton" class="hidden">Return to Beginning</button>
    </div>
  </div>
`;

// Inject HTML into the app container in Unify
document.getElementById('appContainer').innerHTML = appHtml;

// JavaScript functionality
let tasksCompleted = 0;
const totalTasks = 3;

const completeChallengeButton = document.getElementById("completeChallengeButton");
const rewardDiv = document.getElementById("reward");
const nextLevelButton = document.getElementById("nextLevelButton");
const restartButton = document.getElementById("restartButton");
const challengeText = document.getElementById("challengeText");
const progressText = document.getElementById("progressText");
const taskImage = document.getElementById("taskImage");

completeChallengeButton.addEventListener("click", () => {
  // Disable the button to prevent multiple clicks
  completeChallengeButton.disabled = true;
  completeChallengeButton.classList.add("hidden");

  // Show reward animation and progression to the next level
  rewardDiv.classList.remove("hidden");
  

  // Update reward message with task number
  const rewardMessage = document.getElementById("rewardMessage");
  rewardMessage.textContent = `You have completed Task ${tasksCompleted}`;
  tasksCompleted++;
  progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;

  // Update next level button text if it is the last task
  if (tasksCompleted === totalTasks) {
    nextLevelButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }
  }
);

nextLevelButton.addEventListener("click", () => {
  if (tasksCompleted === 1) {
    // Update to the next challenge
    rewardDiv.classList.add("hidden");
    challengeText.textContent = "Next challenge: Attend a Cricket Match";
    progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;
    
    // Update the image for the next challenge
    taskImage.src = "https://crickquesttaskimages.s3.amazonaws.com/images-2.jpeg";
    taskImage.alt = "Attend a Cricket Match Image";
  } else if (tasksCompleted === 2) {
    // Update to the third challenge
    rewardDiv.classList.add("hidden");
    challengeText.textContent = "Next challenge: Go to a store to purchase cricket equipment";
    progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;
    
    // Update the image for the third challenge
    taskImage.src = "https://crickquesttaskimages.s3.amazonaws.com/store.jpeg";
    taskImage.alt = "Purchase Cricket Equipment Image";
  }
  
  // Enable the complete challenge button for the next task
  completeChallengeButton.disabled = false;
  completeChallengeButton.classList.remove("hidden");
});

restartButton.addEventListener("click", () => {
  // Reset to the beginning
  tasksCompleted = 0;
  rewardDiv.classList.add("hidden");
  completeChallengeButton.classList.remove("hidden");
  nextLevelButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  nextLevelButton.textContent = "Proceed to Next Level";
  challengeText.textContent = "Complete your first challenge: \"Practice Bowling\"";
  progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;
  taskImage.src = "https://crickquesttaskimages.s3.amazonaws.com/Mitchell_Johnson_bowling_7.jpg";
  taskImage.alt = "Practice Bowling Image";
  completeChallengeButton.disabled = false;
});
  completeChallengeButton.classList.remove("hidden");
  nextLevelButton.classList.remove("hidden");
  restartButton.classList.add("hidden");
  nextLevelButton.textContent = "Proceed to Next Level";
  challengeText.textContent = "Complete your first challenge: \"Practice Bowling\"";
  progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;
  taskImage.src = "https://crickquesttaskimages.s3.amazonaws.com/Mitchell_Johnson_bowling_7.jpg";
  taskImage.alt = "Practice Bowling Image";
  completeChallengeButton.disabled = false;
;

  progressText.textContent = `Tasks Completed: ${tasksCompleted} / ${totalTasks}`;
  taskImage.src = "https://crickquesttaskimages.s3.amazonaws.com/Mitchell_Johnson_bowling_7.jpg";
  taskImage.alt = "Attend a Cricket Match Image";
  completeChallengeButton.disabled = false;
;