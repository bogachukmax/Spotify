
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

// document.addEventListener('DOMContentLoaded', () => {
//     const data = JSON.parse(localStorage.getItem('userData'))
//     console.log(data);
//     const userName = document.getElementById('userNameUp')
//     const userDate = document.getElementById('userDateUp')
//     const exit = document.getElementById('exitFromAcc')
//     const deleteAcc = document.getElementById('deleteAcc')
//     const confDel = document.getElementById('confirmDelete')
//     const delPage = `../html/deleteAcc.html`
//     const logPage = `../html/logIn.html`
//     const name = data.userName
//     const date = data.dateOfBirth
//     if(true){
//         userName.textContent = name
//         userDate.textContent = date
//     }

//     exit.addEventListener('click', () => {
//         if(true){
//             location.href = logPage
//         }
//     })

//     deleteAcc.addEventListener('click', () => {
//         if(true){
//             location.href = delPage
//             return
//         }
//     })
// })


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = document.getElementById('searchQuery').value.toLowerCase();
        const response = await fetch('main.html');
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const songs = doc.querySelectorAll('.playlist');
        let songFound = false;

        songs.forEach(song => {
            const songName = song.querySelector('span').textContent.toLowerCase();
            if (songName.includes(query)) {
                const songUrl = song.getAttribute('data-src');
                document.getElementById('player').src = songUrl;
                document.getElementById('player').play();
                songFound = true;
            }
        });

        if (!songFound) {
            alert('Пісню не знайдено');
        }
    });
});

document.querySelectorAll('.playlist').forEach(function(song) {
    song.addEventListener('click', function() {
        let audioPlayer = document.getElementById('audioPlayer');
        let audioSource = document.getElementById('audioSource');
        audioSource.src = this.getAttribute('data-src');
        audioPlayer.load();
        audioPlayer.addEventListener('canplay', function() {
            audioPlayer.play();
        }, { once: true });
    });
});