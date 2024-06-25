
// document.addEventListener("DOMContentLoaded", () => {
//     const icons = document.querySelectorAll('.icon');

//     icons.forEach(icon => {
//         icon.addEventListener('click', () => {
//             icons.forEach(i => i.classList.remove('active'));
//             icon.classList.add('active');
//             icon.querySelector('i').style.color = '#fff';
//             icons.forEach(i => {
//                 if (i !== icon) {
//                     i.querySelector('i').style.color = '#1DB954'
//                 }
//             });
//             alert(`Вибрано: ${icon.CDATA_SECTION_NODE.type}`);
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("audioPlayer");
    var seekBar = document.getElementById("seekBar");
    var volumeBar = document.getElementById("volumeBar");
    var currentTimeDisplay = document.getElementById("currentTime");
    var durationDisplay = document.getElementById("duration");
    // Оновлення seekBar при відтворенні
    audio.addEventListener("timeupdate", function() {
        var value = (audio.currentTime / audio.duration) * 100;
        seekBar.value = value;
        updateCurrentTimeDisplay();
    });

    // Оновлення загальної тривалості
    audio.addEventListener("loadedmetadata", function() {
        updateDurationDisplay();
    });

    // Функції керування відтворенням
    window.playAudio = function() {
        audio.play();
    };

    window.pauseAudio = function() {
        audio.pause();
    };

    window.stopAudio = function() {
        audio.pause();
        audio.currentTime = 0;
        seekBar.value = 0;
        updateCurrentTimeDisplay();
    };

    window.seekAudio = function() {
        var seekTo = audio.duration * (seekBar.value / 100);
        audio.currentTime = seekTo;
    };

    window.setVolume = function() {
        audio.volume = volumeBar.value / 100;
    };

    // Оновлення дисплеїв часу
    function updateCurrentTimeDisplay() {
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    }

    function updateDurationDisplay() {
        durationDisplay.textContent = formatTime(audio.duration);
    }

    // Форматування часу у хвилини:секунди
    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = Math.floor(seconds % 60);
        return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
});