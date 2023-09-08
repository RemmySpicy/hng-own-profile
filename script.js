const currDayOutput = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currUTCOutput = document.querySelector('[data-testid="currentUTCTime"]');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Set date output
currDayOutput.textContent = days[new Date().getDay()]

// Set milliseconds output
setInterval(() => {
    currUTCOutput.textContent = Date.now();
}, 100) 
