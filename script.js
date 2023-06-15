// Variables
let workTitle = document.getElementById('work');
let breakTitle = document.getElementById('break');
let progress = document.querySelector('circle');
let circleElement = document.getElementById('progressCircle');


let workTime = 25*60; // Converted to seconds
let breakTime = 5 * 60; // Converted to seconds

// Helper function to format time
function playSound () {
	let hector = new Audio('./assets/hector.mp3');
	hector.play();
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
// Displays

console.log(workTitle);

window.onload = () => {
    document.getElementById('timeleft').innerHTML = formatTime(workTime);
    workTitle.classList.add('active');
}

// start timer

function startTimer() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
  

    let workMinutes = workTime;
    let breakMinutes = breakTime;

    breakCount = 0;

    setInterval(() => {
        document.getElementById('timeleft').innerHTML = formatTime(workMinutes);
        workMinutes--;

            if (workMinutes === -1){
                if(breakCount % 2 === 0){
                    workMinutes = breakMinutes;
                    breakCount++;
                    playSound();
                    workTitle.classList.remove('active');
                    breakTitle.classList.add('active');
                }else{
                    workMinutes = workTime;
                    breakCount++;
                    playSound();
                    breakTitle.classList.remove('active');
                    workTitle.classList.add('active');
                }
            }

            
        }
    , 1000);
}