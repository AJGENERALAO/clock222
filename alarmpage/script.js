
let alarmTime = null;
let alarmSound = document.getElementById("alarmSound");
let alarmInterval = null;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  
  const strHours = hours.toString().padStart(2, '0');
  const strMinutes = minutes.toString().padStart(2, '0');
  const strSeconds = seconds.toString().padStart(2, '0');

  const timeString = `${strHours}:${strMinutes}:${strSeconds} ${amPm}`;
  document.getElementById('clock').textContent = timeString;

  if (alarmTime) {
    const alarmHour = parseInt(alarmTime.split(":")[0]);
    const alarmMinute = parseInt(alarmTime.split(":")[1]);
    
    if (hours === alarmHour && minutes === alarmMinute && seconds === 0) {
      playAlarm(); // Play alarm when current time matches alarm time
    }
  }
}

setInterval(updateClock, 1000);
updateClock(); // Run initially

function setAlarm() {
  alarmTime = document.getElementById('alarmTime').value;
  if (alarmTime) {
    alert(`Alarm set for ${alarmTime}`);
    document.getElementById('stopButton').style.display = 'inline-block'; // Show Stop button
    document.getElementById('alertBox').style.display = 'block';
    setTimeout(() => document.getElementById('alertBox').style.display = 'none', 3000); // Hide alert after 3 seconds
  } else {
    alert("Please set a valid alarm time!");
  }
}

function playAlarm() {
  alarmSound.loop = true;  // Set the alarm sound to loop
  alarmSound.play();
  document.getElementById('stopButton').style.display = 'inline-block'; // Show Stop button
}

function stopAlarm() {
  alarmSound.loop = false;  // Stop the sound from looping
  alarmSound.pause(); // Stop the alarm sound
  alarmSound.currentTime = 0; // Reset the sound to the beginning
  document.getElementById('stopButton').style.display = 'none'; // Hide Stop button
  alert('Alarm stopped!');
}

function changeSound() {
  document.getElementById("soundFile").click(); // Trigger the file input dialog
}

function loadNewSound(event) {
  const file = event.target.files[0]; // Get the selected file
  if (file) {
    const objectURL = URL.createObjectURL(file); // Create a URL for the file
    alarmSound.src = objectURL; // Set the new sound source
    alert("Alarm sound changed!");
  }
}




// fullscreen closescreen
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