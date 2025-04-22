
function updateClock() {
  const now = new Date();
  
  // Get hours, minutes, seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  
  // AM or PM
  const amPm = hours >= 12 ? 'PM' : 'AM';
  
  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Add zero padding
  const strHours = hours.toString().padStart(2, '0');
  const strMinutes = minutes.toString().padStart(2, '0');
  const strSeconds = seconds.toString().padStart(2, '0');

  const timeString = `${strHours}:${strMinutes}:${strSeconds} ${amPm}`;
  document.getElementById('clock').textContent = timeString;

  // Get date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString(undefined, options);
  document.getElementById('date').textContent = dateString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock(); // Run initially








const openBtn = document.getElementById('openFullscreen');
const closeBtn = document.getElementById('closeFullscreen');

openBtn.onclick = () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }
  openBtn.style.display = 'none';
  closeBtn.style.display = 'inline';
};

closeBtn.onclick = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  closeBtn.style.display = 'none';
  openBtn.style.display = 'inline';
};






/* Get the element you want displayed in fullscreen */ 
var elem = document.documentElement;

/* Function to open fullscreen mode */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem = window.top.document.body; //To break out of frame in IE
    elem.msRequestFullscreen();
  }
}

/* Function to close fullscreen mode */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    window.top.document.msExitFullscreen();
  }
}

// Events
var output = document.getElementById("myP");
document.addEventListener("fullscreenchange", function() {
  output.innerHTML = "fullscreenchange event fired!";
});
document.addEventListener("mozfullscreenchange", function() {
  output.innerHTML = "mozfullscreenchange event fired!";
});
document.addEventListener("webkitfullscreenchange", function() {
  output.innerHTML = "webkitfullscreenchange event fired!";
});
document.addEventListener("msfullscreenchange", function() {
  output.innerHTML = "msfullscreenchange event fired!";
});













// alarm page

    // Home Page Navigation
function goToAlarmPage() {
  window.location.href = 'alarmpage/index.html';
}

// Alarm Page Navigation (Back to Home)
function goBackHome() {
  window.location.href = 'index.html';
}

// Alarm Logic for the Alarm Page
let alarmTime = null;
let alarmSound = document.getElementById("alarmSound");

function setAlarm() {
  alarmTime = document.getElementById('alarmTime').value;
  alert(`Alarm set for ${alarmTime}`);
  document.getElementById('status').textContent = `Alarm set for: ${alarmTime}`;
  
  // Start the clock checking every second to see if it's time to play the alarm
  setInterval(checkAlarm, 1000);
}

function checkAlarm() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  if (alarmTime === `${hours}:${minutes}`) {
    alarmSound.play();
    document.getElementById('status').textContent = "ALARM! Time's up!";
    alarmTime = null; // Reset alarm after it rings
  }
}

