// HTML Structure for the app
const appHtml = `
  <div id="app">
    <h1>Cricket Quest</h1>
    <p>Complete your first challenge: "Practice Bowling"</p>
    <button id="completeChallengeButton">Mark as Completed</button>
    <div id="reward" class="hidden">
      <h2>Congratulations!</h2>
      <p>You completed the challenge!</p>
      <div id="animation">🎉🎊🎉</div>
      <button id="nextLevelButton">Proceed to Next Level</button>
    </div>
  </div>
`;

// Inject HTML into the app container
document.getElementById('appContainer').innerHTML = appHtml;

// JavaScript functionality
const completeChallengeButton = document.getElementById("completeChallengeButton");
const rewardDiv = document.getElementById("reward");
const nextLevelButton = document.getElementById("nextLevelButton");

completeChallengeButton.addEventListener("click", () => {
  // Show reward animation and progression to the next level
  rewardDiv.classList.remove("hidden");
});

nextLevelButton.addEventListener("click", () => {
  // Very basic next level transition
  alert("Next challenge coming soon!");
});
