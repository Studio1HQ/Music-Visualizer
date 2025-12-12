const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const startBtn = document.getElementById('startBtn');

let audioContext;
let analyser;
let dataArray;
let source;
let animationId;

// Resize canvas to full screen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

async function startVisualizer() {
    if (audioContext) return;

    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256; // Controls the resolution / number of bars

        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        // Get microphone input
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser); // Connect source to analyser
        // Note: We don't connect to destination (speakers) to avoid feedback loop

        startBtn.style.display = 'none'; // Hide button after start
        animate();
    } catch (err) {
        console.error('Error accessing microphone:', err);
        alert('Could not access microphone. Please allow permissions.');
    }
}

function animate() {
    animationId = requestAnimationFrame(animate);

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / dataArray.length) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] * 2; // Scale height

        // Dynamic color based on frequency
        const r = barHeight + (25 * (i/dataArray.length));
        const g = 250 * (i/dataArray.length);
        const b = 50;

        ctx.fillStyle = `rgb(${r},${g},${b})`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
    }
}

startBtn.addEventListener('click', () => {
    // AudioContext must be resumed or created after a user gesture
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    } else {
        startVisualizer();
    }
});
