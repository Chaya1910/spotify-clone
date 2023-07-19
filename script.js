let currentSongIndex;
let first = true;
let songIndex = 0;
let songDuration;
let progress;

// static data
const songList = [
  {
    id: 0,
    img: 'img/kesariya.jpg',
    name: 'Kesariyan',
    singer: 'Pritam, Arjit Singh, Amitabh Bhattacharya',
    audioPath: 'audio/Kesariya.mp3',
  },
  {
    id: 1,
    img: 'img/kabira.jpg',
    name: 'Kabira',
    singer: 'Pritam, Tochi Raina, Rekha Bhardwaj',
    audioPath: 'audio/Kabira.mp3',
  },
  {
    id: 2,
    img: 'img/raataanLambiya.jpg',
    name: 'Raataan Lambiyaan',
    singer: 'Tanishk Bagchi, Jubin Nautiyal, Asees Kaur',
    audioPath: 'audio/RaataanLambiyan.mp3',
  },
  {
    id: 3,
    img: 'img/ghungaroo.jpg',
    name: 'Ghungaroo',
    singer: 'Vishal-Shekhar, Arjit Singh, Shilpa Rao, Kumaar',
    audioPath: 'audio/Ghungroo.mp3',
  },
  {
    id: 4,
    img: 'img/rangisari.jpg',
    name: 'RangiSari',
    singer: 'Kanishk Seth, Kavita Seth',
    audioPath: 'audio/RangiSari.mp3',
  },
  {
    id: 5,
    img: 'img/terePyaarMein.jpg',
    name: 'Tere Pyaar Mein',
    singer: 'Pritam, Arjit Singh, Amitabh Bhattacharya, Nikhita Gandhi',
    audioPath: 'audio/TerePyaarMein.mp3',
  },
  {
    id: 6,
    img: 'img/ranjha.jpg',
    name: 'Ranjha',
    singer: 'Jasleen Royal, B Praak, Romy, Anvita Dutt',
    audioPath: 'audio/Ranjha.mp3',
  },
  {
    id: 7,
    img: 'img/tereVaaste.jpg',
    name: 'Tere Vaaste',
    singer: 'Varun Jain, Sachin-Jigar, Amitabh Bhattacharya',
    audioPath: 'audio/TereVaaste.mp3',
  },
  {
    id: 8,
    img: 'img/ajabSi.jpg',
    name: 'Ajab Si',
    singer: 'KK',
    audioPath: 'audio/AjabSi.mp3',
  },
  {
    id: 9,
    img: 'img/kabhiKabhiAditi.jpg',
    name: 'Kabhi Kabhi Aditi',
    singer: 'Rashid Ali',
    audioPath: 'audio/KabhiKabhiAditi.mp3',
  },
  {
    id: 10,
    img: 'img/teraHoneLagaHoon.jpg',
    name: 'Tera Hone Laga Hoon',
    singer: 'Atif Aslam, Alisha Chinai, Pritam',
    audioPath: 'audio/TeraHoneLagaHoon.mp3',
  },
  {
    id: 11,
    img: 'img/radhaKaiseNaJale.jpg',
    name: 'Radha Kaise Na Jale',
    singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
    audioPath: 'audio/RadhaKaiseNaJale.mp3',
  },
  {
    id: 12,
    img: 'img/mitwa.jpg',
    name: 'Mitwa',
    singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
    audioPath: 'audio/Mitwa.mp3',
  },
  {
    id: 13,
    img: 'img/tumseMilkeDilKa.jpg',
    name: 'Tumse Milke Dil Ka',
    singer: 'Sonu Nigam, Sabri Brothers',
    audioPath: 'audio/TumseMilkeDilKa.mp3',
  },
  {
    id: 14,
    img: 'img/zaraZara.jpg',
    name: 'Zara Zara',
    singer: 'Vishal Shekhar, Shankar Mahadevan',
    audioPath: 'audio/ZaraZara.mp3',
  },
  {
    id: 15,
    img: 'img/kalHoNaHo.jpg',
    name: 'Kal Ho Na Ho',
    singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
    audioPath: 'audio/KalHoNaHo.mp3',
  },
  {
    id: 16,
    img: 'img/ajabSi.jpg',
    name: 'Ajab Si',
    singer: 'KK',
    audioPath: 'audio/AjabSi.mp3',
  },
  {
    id: 17,
    img: 'img/kabhiKabhiAditi.jpg',
    name: 'Kabhi Kabhi Aditi',
    singer: 'Rashid Ali',
    audioPath: 'audio/KabhiKabhiAditi.mp3',
  },
  {
    id: 18,
    img: 'img/teraHoneLagaHoon.jpg',
    name: 'Tera Hone Laga Hoon',
    singer: 'Atif Aslam, Alisha Chinai, Pritam',
    audioPath: 'audio/TeraHoneLagaHoon.mp3',
  },
  {
    id: 19,
    img: 'img/radhaKaiseNaJale.jpg',
    name: 'Radha Kaise Na Jale',
    singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
    audioPath: 'audio/RadhaKaiseNaJale.mp3',
  },
  {
    id: 20,
    img: 'img/mitwa.jpg',
    name: 'Mitwa',
    singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
    audioPath: 'audio/Mitwa.mp3',
  },
  {
    id: 21,
    img: 'img/tumseMilkeDilKa.jpg',
    name: 'Tumse Milke Dil Ka',
    singer: 'Sonu Nigam, Sabri Brothers',
    audioPath: 'audio/TumseMilkeDilKa.mp3',
  },
  {
    id: 22,
    img: 'img/zaraZara.jpg',
    name: 'Zara Zara',
    singer: 'Vishal Shekhar, Shankar Mahadevan',
    audioPath: 'audio/ZaraZara.mp3',
  },
  {
    id: 23,
    img: 'img/kalHoNaHo.jpg',
    name: 'Kal Ho Na Ho',
    singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
    audioPath: 'audio/KalHoNaHo.mp3',
  },
];

var audio = new Audio('audio/Kesariya.mp3');
let durationBar = document.getElementById('duration-bar');

//Sliding songs in albums
let leftArrows = document.querySelectorAll('.left-arrow');
let rightArrows = document.querySelectorAll('.right-arrow');

//Slide left
leftArrows.forEach((left) => {
  left.addEventListener('click', (e) => {
    const list = e.currentTarget.parentElement.parentElement.nextElementSibling;
    list.scrollLeft -= 900;
  });
});

//Slide right
rightArrows.forEach((left) => {
  left.addEventListener('click', (e) => {
    const list = e.currentTarget.parentElement.parentElement.nextElementSibling;
    list.scrollLeft += 900;
  });
});


//Initial songs rendering
let lists = document.querySelectorAll('.song-list');
let listCount = 0;
lists.forEach((list) => {
  renderSongs(list, listCount++);
});

function renderSongs(list) {
  let j = 0;
  while (j < 8) {
    let str = '';

    str += `<li class="song-item" id=${songIndex}>
        <div class="song-item-img">
          <img src="${songList[songIndex].img}" alt="">
          <span class="fa-solid fa-play img-play-btn" style="color: #35e029;"></span>
          <span class="song-audio hide">${songList[songIndex].audioPath}</span>
        </div>
        <h5>${songList[songIndex].name}</h5>
        <div class="singer">${songList[songIndex].singer}</div>
      </li>`;

    list.innerHTML += str;
    j++;
    songIndex++;
  }
}

//closing preview bar
const previewBar = document.querySelector('.preview-bar');
const previewCloseBtn = document.getElementById('close-preview-btn');

previewCloseBtn.addEventListener('click', () => {
  previewBar.style.display = 'none';
});

// Initalize a new audio and get the duration
function initializeAudio() {
  audio = new Audio(songList[currentSongIndex].audioPath);

  // Getting the song duration
  audio.addEventListener('loadedmetadata', function () {
    songDuration = audio.duration;
    playMusic();
  });
}

// Music play-pause
const playBtn = document.querySelector('.play');

// Play or Pause song from masterplay tab
playBtn.addEventListener('click', () => {
  if (audio.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
});

//funtion to play the Music
function playMusic() {
  audio.play();
  playBtn.classList.remove('fa-play');
  playBtn.classList.add('fa-pause');

  // Getting current time of audio and progress calculation
  audio.addEventListener('timeupdate', () => {
    progress = parseInt((audio.currentTime / songDuration) * 100);
    durationBar.value = progress;
  });

  // Update the song current time based on progress bar change
  durationBar.addEventListener('change', () => {
    audio.currentTime = (durationBar.value / 100) * songDuration;
  });

  // check if current song ended
  audio.addEventListener('ended', () => {
    nextSong();
    setMasterPlay();
  });
}

// function to pause the music
function pauseMusic() {
  audio.pause();
  playBtn.classList.remove('fa-pause');
  playBtn.classList.add('fa-play');
}

//function to play a clicked song
function songPlay() {
  if (audio.paused || audio.currentTime < 0) {
    initializeAudio();
  } else {
    pauseMusic();
    initializeAudio();
    playMusic();
  }
}

//Update the master play box
const masterPlayBox = document.querySelector('.master-play');
const songCoverImg = document.querySelector('#play-song-img');
const songCoverName = document.querySelector('#play-song-name');

//function to update the master play box
function setMasterPlay() {
  songCoverImg.src = songList[currentSongIndex].img;
  songCoverName.textContent = songList[currentSongIndex].name;
  songPlay();
}

// Listening to click on song item
const songItems = document.querySelectorAll('.song-item');

songItems.forEach((songItem) => {
  songItem.addEventListener('click', (e) => {
    // Displaying Master Play Box for the first time
    if (first) {
      masterPlayBox.classList.remove('hide');
      first = false;
    }
    currentSongIndex = e.currentTarget.id;
    setMasterPlay();
  });
});

// Fast forward & backward
const prevSongBtn = document.querySelector('.backward-step');
const nextSongBtn = document.querySelector('.forward-step');

// To move to Previous song
prevSongBtn.addEventListener('click', () => {
  if (currentSongIndex == 0) {
    currentSongIndex = 7;
  } else if (currentSongIndex == 8) {
    currentSongIndex = 15;
  } else if (currentSongIndex == 16) {
    currentSongIndex = 23;
  } else {
    currentSongIndex--;
  }
  setMasterPlay();
});

// Next song function

function nextSong() {
  if (currentSongIndex == 7) {
    currentSongIndex = 0;
  } else if (currentSongIndex == 15) {
    currentSongIndex = 8;
  } else if (currentSongIndex == 23) {
    currentSongIndex = 16;
  } else {
    currentSongIndex++;
  }
}

//To move to Next song
nextSongBtn.addEventListener('click', () => {
  nextSong();
  setMasterPlay();
});
