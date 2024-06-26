
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

document.querySelectorAll('.playlist').forEach(function(song) {
    song.addEventListener('click', function() {
        let audioPlayer = document.getElementById('audioPlayer');
        let audioSource = document.getElementById('audioSource');
        audioSource.src = this.getAttribute('data-src');
        audioPlayer.load();
        audioPlayer.play();
    });
});