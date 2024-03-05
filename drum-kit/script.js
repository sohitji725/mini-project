const key1 = document.querySelector(".key-1");
const key2 = document.querySelector(".key-2");
const key3 = document.querySelector(".key-3");
const key4 = document.querySelector(".key-4");
const key5 = document.querySelector(".key-5");
const key6 = document.querySelector(".key-6");

key1.addEventListener('click', () => playSound('sound-1'));
key2.addEventListener('click', () => playSound('sound-2'));
key3.addEventListener('click', () => playSound('sound-3'));
key4.addEventListener('click', () => playSound('sound-4'));
key5.addEventListener('click', () => playSound('sound-5'));
key6.addEventListener('click', () => playSound('sound-6'));

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Reset the audio to the beginning
    sound.play();

    // Stop the sound after 3 seconds (3000 milliseconds)
    setTimeout(() => {
        sound.pause();
    }, 3000);
}
