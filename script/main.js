
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

document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('userData'))
    console.log(data);
    const userName = document.getElementById('userNameUp')
    const userDate = document.getElementById('userDateUp')
    const exit = document.getElementById('exitFromAcc')
    const deleteAcc = document.getElementById('deleteAcc')
    const confDel = document.getElementById('confirmDelete')
    const delPage = `../html/deleteAcc.html`
    const logPage = `../html/logIn.html`
    const name = data.userName
    const date = data.dateOfBirth
    if(true){
        userName.textContent = name
        userDate.textContent = date
    }

    exit.addEventListener('click', () => {
        if(true){
            location.href = logPage
        }
    })

    deleteAcc.addEventListener('click', () => {
        if(true){
            location.href = delPage
            return
        }
    })
})


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


//*  ==============  Для кнопок сортування  ==============
const MusicSpan = document.getElementById("MusicSpan");
const MusicPlayLists = document.getElementById("MusicPlayLists");

const ForYou = document.getElementById("ForYou");
const SpanForYou = document.getElementById("SpanForYou");

const AllBtn = document.getElementById("AllBtn");
const MusicBtn = document.getElementById("MusicBtn");
const PodcastsBtn = document.getElementById("PodcastsBtn");
const LikedBtn = document.getElementById("LikedBtn");
const LikeHeart = document.getElementById("LikeHeart");

const stars = document.querySelectorAll('.star');

stars.forEach(star => {
    const playlist = star.closest('.playlist');
    const id = playlist.getAttribute('data-id');
    const isFilled = localStorage.getItem(`star-${id}`);
    if (isFilled === 'true') {
        star.classList.add('filled');
    }
});

stars.forEach(star => {
    star.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('filled');
            
        const playlist = this.closest('.playlist');
        const id = playlist.getAttribute('data-id');
        const isFilled = this.classList.contains('filled');
        localStorage.setItem(`star-${id}`, isFilled);
    });
});

AllBtn.addEventListener('click', ()=>{
    AllBtn.classList.add("active");

    MusicBtn.classList.remove("active");
    PodcastsBtn.classList.remove("active");
    LikedBtn.classList.remove("active");

    MusicPlayLists.style.display = "grid";
    MusicSpan.style.display = "block";
    ForYou.style.display = "block";
    SpanForYou.style.display = "block";

    document.querySelectorAll('.playlist').forEach(playlist => {
        playlist.style.display = 'block';
    });
})


MusicBtn.addEventListener('click', ()=>{
    MusicBtn.classList.add("active");

    AllBtn.classList.remove("active");
    PodcastsBtn.classList.remove("active");
    LikedBtn.classList.remove("active");
    
    MusicPlayLists.style.display = "grid";
    MusicSpan.style.display = "none";
    ForYou.style.display = "none";

    document.querySelectorAll('.playlist').forEach(playlist => {
        playlist.style.display = 'block';
    });
})

PodcastsBtn.addEventListener('click', ()=>{
    PodcastsBtn.classList.add("active");

    MusicBtn.classList.remove("active");
    AllBtn.classList.remove("active");
    LikedBtn.classList.remove("active");

    MusicPlayLists.style.display = "none";
    SpanForYou.style.display = "none";
    ForYou.style.display = "block";

    document.querySelectorAll('.playlist').forEach(playlist => {
        playlist.style.display = 'block';
    });
})

LikedBtn.addEventListener('click', ()=>{
    LikedBtn.classList.add("active");

    MusicBtn.classList.remove("active");
    AllBtn.classList.remove("active");
    PodcastsBtn.classList.remove("active");

    MusicPlayLists.style.display = "grid";
    SpanForYou.style.display = "none";
    ForYou.style.display = "none";
    MusicSpan.style.display = "none";

    document.querySelectorAll('.playlist').forEach(playlist => {
        const star = playlist.querySelector('button');
        if (!star.classList.contains('filled')) {
            playlist.style.display = 'none';
        }
    });
})

const TableOfBtn = document.getElementById("TableOfBtn");

LikeHeart.addEventListener('click', ()=>{
    document.querySelectorAll('.playlist').forEach(playlist => {
        const star = playlist.querySelector('button');
        if (!star.classList.contains('filled')) {
            playlist.style.display = 'none';
        }
    });

    TableOfBtn.style.display = "none";
    SpanForYou.style.display = "none";
    ForYou.style.display = "none";
    MusicPlayLists.style.display = "grid";
    MusicSpan.style.display = "none";
})