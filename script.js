let currentSongIndex;
let first = true;

const masterPlayBox = document.querySelector('.master-play');
const songCoverImg = document.querySelector('#play-song-img');
const songCoverName = document.querySelector('#play-song-name');

//Sliding song albums
let leftArrows = document.querySelectorAll('.left-arrow');
let rightArrows = document.querySelectorAll('.right-arrow');

//Slide left
leftArrows.forEach(left => {
    left.addEventListener('click', (e) => {
        const list = e.currentTarget.parentElement.parentElement.nextElementSibling;
        list.scrollLeft -= 900;
    })
});

//Slide right
rightArrows.forEach(left => {
    left.addEventListener('click', (e) => {
        const list = e.currentTarget.parentElement.parentElement.nextElementSibling;
        list.scrollLeft += 900;
    })
});


const songList1 = [
    {
      title: 'Bollywood Butter',
      song: [
        {
          id: 1,
          img: 'img/kesariya.jpg',
          name: 'Kesariyan',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/Kesariya.mp3',
        },
        {
          id: 2,
          img: 'img/kabira.jpg',
          name: 'Kabira',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/Kabira.mp3',

        },
        {
          id: 3,
          img: 'img/raataanLambiya.jpg',
          name: 'Raataan Lambiyaan',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/RaataanLambiyan.mp3',

        },
        {
          id: 4,
          img: 'img/ghungaroo.jpg',
          name: 'Ghungaroo',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/Ghungroo.mp3',

        },
        {
          id: 5,
          img: 'img/rangisari.jpg',
          name: 'RangiSari',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/RangiSari.mp3',

        },
        {
          id: 6,
          img: 'img/terePyaarMein.jpg',
          name: 'Tere Pyaar Mein',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/TerePyaarMein.mp3',
        },
        {
          id: 7,
          img: 'img/ranjha.jpg',
          name: 'Ranjha',
          singer: 'Lorem lorem lorem lorem lorem klorem',
        },
        {
          id: 8,
          img: 'img/kabira.jpg',
          name: 'Kabira',
          singer: 'Lorem lorem lorem lorem lorem klorem',
          audioPath:'audio/Kabira.mp3',
        },
      ],                      
    },
    {
      title: "All Out 00's Hindi",
      song: [
          {
              id: 1,
              img: 'img/ajabSi.jpg',
              name: 'Ajab SI',
              singer: 'KK',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 2,
              img: 'img/kabhiKabhiAditi.jpg',
              name: 'Kabhi Kabhi Aditi',
              singer: 'Rashid Ali',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 3,
              img: 'img/teraHoneLagaHoon.jpg',
              name: 'Tera Hone Laga Hoon',
              singer: 'Atif Aslam, Alisha Chinai, Pritam',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 4,
              img: 'img/radhaKaiseNaJale.jpg',
              name: 'Radha Ksise Na Jale',
              singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 5,
              img: 'img/mitwa.jpg',
              name: 'Mitwa',
              singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 6,
              img: 'img/tumseMilkeDilKa.jpg',
              name: 'Tumse Milke Dil Ka',
              singer: 'Sonu Nigam, Sabri Brothers',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 7,
              img: 'img/zaraZara.jpg',
              name: 'Ranjha',
              singer: 'Vishal Shekhar, Shankar Mahadevan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 8,
              img: 'img/kalHoNaHo.jpg',
              name: 'Kal Ho Na Ho',
              singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
              audioPath:'audio/Kabira.mp3',
            },
      ]
    },  {
      title: "All Out 00's Hindi",
      song: [
          {
              id: 1,
              img: 'img/ajabSi.jpg',
              name: 'Ajab SI',
              singer: 'KK',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 2,
              img: 'img/kabhiKabhiAditi.jpg',
              name: 'Kabhi Kabhi Aditi',
              singer: 'Rashid Ali',          
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 3,
              img: 'img/teraHoneLagaHoon.jpg',
              name: 'Tera Hone Laga Hoon',
              singer: 'Atif Aslam, Alisha Chinai, Pritam',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 4,
              img: 'img/radhaKaiseNaJale.jpg',
              name: 'Radha Ksise Na Jale',
              singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 5,
              img: 'img/mitwa.jpg',
              name: 'Mitwa',
              singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 6,
              img: 'img/tumseMilkeDilKa.jpg',
              name: 'Tumse Milke Dil Ka',
              singer: 'Sonu Nigam, Sabri Brothers',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 7,
              img: 'img/zaraZara.jpg',
              name: 'Ranjha',
              singer: 'Vishal Shekhar, Shankar Mahadevan',
              audioPath:'audio/Kabira.mp3',
            },
            {
              id: 8,
              img: 'img/kalHoNaHo.jpg',
              name: 'Kal Ho Na Ho',
              singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
              audioPath:'audio/Kabira.mp3',
            },
      ]
    },
  ];

const songList = [
    { id: 0,
      img: 'img/kesariya.jpg',
      name: 'Kesariyan',
      singer: 'Pritam, Arjit Singh, Amitabh Bhattacharya',
      audioPath:'audio/Kesariya.mp3',
    },
    {
      id: 1,
      img: 'img/kabira.jpg',
      name: 'Kabira',
      singer: 'Pritam, Tochi Raina, Rekha Bhardwaj',
      audioPath:'audio/Kabira.mp3',

    },
    {
      id: 2,
      img: 'img/raataanLambiya.jpg',
      name: 'Raataan Lambiyaan',
      singer: 'Tanishk Bagchi, Jubin Nautiyal, Asees Kaur',
      audioPath:'audio/RaataanLambiyan.mp3',

    },
    {
      id: 3,
      img: 'img/ghungaroo.jpg',
      name: 'Ghungaroo',
      singer: 'Vishal-Shekhar, Arjit Singh, Shilpa Rao, Kumaar',
      audioPath:'audio/Ghungroo.mp3',

    },
    {
      id: 4,
      img: 'img/rangisari.jpg',
      name: 'RangiSari',
      singer: 'Kanishk Seth, Kavita Seth',
      audioPath:'audio/RangiSari.mp3',

    },
    {
      id: 5,
      img: 'img/terePyaarMein.jpg',
      name: 'Tere Pyaar Mein',
      singer: 'Pritam, Arjit Singh, Amitabh Bhattacharya, Nikhita Gandhi',
      audioPath:'audio/TerePyaarMein.mp3',
    },
    {
      id: 6,
      img: 'img/ranjha.jpg',
      name: 'Ranjha',
      singer: 'Jasleen Royal, B Praak, Romy, Anvita Dutt',
      audioPath:'audio/Ranjha.mp3',

    },
    {
      id: 7,
      img: 'img/tereVaaste.jpg',
      name: 'Tere Vaaste',
      singer: 'Varun Jain, Sachin-Jigar, Amitabh Bhattacharya',
      audioPath:'audio/TereVaaste.mp3',
    },
     {
          id: 8,
          img: 'img/ajabSi.jpg',
          name: 'Ajab Si',
          singer: 'KK',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 9,
          img: 'img/kabhiKabhiAditi.jpg',
          name: 'Kabhi Kabhi Aditi',
          singer: 'Rashid Ali',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 10,
          img: 'img/teraHoneLagaHoon.jpg',
          name: 'Tera Hone Laga Hoon',
          singer: 'Atif Aslam, Alisha Chinai, Pritam',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 11,
          img: 'img/radhaKaiseNaJale.jpg',
          name: 'Radha Ksise Na Jale',
          singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 12,
          img: 'img/mitwa.jpg',
          name: 'Mitwa',
          singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 13,
          img: 'img/tumseMilkeDilKa.jpg',
          name: 'Tumse Milke Dil Ka',
          singer: 'Sonu Nigam, Sabri Brothers',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 14,
          img: 'img/zaraZara.jpg',
          name: 'Ranjha',
          singer: 'Vishal Shekhar, Shankar Mahadevan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 15,
          img: 'img/kalHoNaHo.jpg',
          name: 'Kal Ho Na Ho',
          singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
          audioPath:'audio/Kabira.mp3',
        },
      {
          id: 16,
          img: 'img/ajabSi.jpg',
          name: 'Ajab SI',
          singer: 'KK',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 17,
          img: 'img/kabhiKabhiAditi.jpg',
          name: 'Kabhi Kabhi Aditi',
          singer: 'Rashid Ali',          
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 18,
          img: 'img/teraHoneLagaHoon.jpg',
          name: 'Tera Hone Laga Hoon',
          singer: 'Atif Aslam, Alisha Chinai, Pritam',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 19,
          img: 'img/radhaKaiseNaJale.jpg',
          name: 'Radha Ksise Na Jale',
          singer: 'A. R Rehman, Asha Bhosle, Udit Narayan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 20,
          img: 'img/mitwa.jpg',
          name: 'Mitwa',
          singer: 'Shankar-Ehsaan-Loy, Shankar Mahadevan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 21,
          img: 'img/tumseMilkeDilKa.jpg',
          name: 'Tumse Milke Dil Ka',
          singer: 'Sonu Nigam, Sabri Brothers',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 22,
          img: 'img/zaraZara.jpg',
          name: 'Ranjha',
          singer: 'Vishal Shekhar, Shankar Mahadevan',
          audioPath:'audio/Kabira.mp3',
        },
        {
          id: 23,
          img: 'img/kalHoNaHo.jpg',
          name: 'Kal Ho Na Ho',
          singer: 'Shankar-Ehsaan-Loy, Sonu Nigam',
          audioPath:'audio/Kabira.mp3',
        },
];
  

const data = [
    {
        id: 1,
        image: 'img/kesariya.jpg',
        title: 'Kesariyan',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 2,
        image: 'img/kabira.jpg',
        title: 'Kabira',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 3,
        image: 'img/raataanLambiya.jpg',
        title: 'Raataan Lambiyaan',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 4,
        image: 'img/ghungaroo.jpg',
        title: 'Ghungaroo',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 5,
        image: 'img/rangisari.jpg',
        title: 'RangiSari',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 6,
        image: 'img/terePyaarMein.jpg',
        title: 'Tere Pyaar Mein',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 7,
        image: 'img/ranjha.jpg',
        title: 'Ranjha',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',

    },
    {
        id: 8,
        image: 'img/kabira.jpg',
        title: 'Kabira',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',
    },
    {
        id: 8,
        image: 'img/kabira.jpg',
        title: 'Kabira',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',
    },
    {
        id: 8,
        image: 'img/kabira.jpg',
        title: 'Kabira',
        subtitle: 'Lorem lorem lorem lorem lorem klorem',
    },
];

let songIndex = 0;
//Initial song rendering
let lists = document.querySelectorAll('.song-list');
let listCount = 0;
lists.forEach(list => {
    renderSongs(list, listCount++);
});

function renderSongs(list){
let j = 0;
    while( j < 8){
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
      console.log(songIndex);
    }

}



//closing preview bar

const previewBar = document.querySelector('.preview-bar');

const previewCloseBtn = document.getElementById('close-preview-btn');

previewCloseBtn.addEventListener('click', () => {
    previewBar.style.display = 'none';
})

//Music play-pause

const playBtn = document.querySelector('.play');


var audio = new Audio('audio/Kesariya.mp3');

// Play or Pause song from masterplay tab
playBtn.addEventListener('click', () =>{
  console.log('play');
  if(audio.paused){
    playMusic();
  }
  else{
    pauseMusic();
  }
});


//function playMusic

function playMusic(){
    audio.play();
    playBtn.classList.remove('fa-play');
    playBtn.classList.add('fa-pause');  
}


function pauseMusic(){
  audio.pause();
    playBtn.classList.remove('fa-pause');
    playBtn.classList.add('fa-play');
}


function songPlay(){
  if(audio.paused){
    audio = new Audio(songList[currentSongIndex].audioPath)
    playMusic();
  }
  else{
    pauseMusic();
    audio = new Audio(songList[currentSongIndex].audioPath)
    playMusic();
  }

}

function setMasterPlay(){
  songCoverImg.src = songList[currentSongIndex].img;
  songCoverName.textContent = songList[currentSongIndex].name;
  songPlay();
}



// Play song by clicking on each song item
const songItems = document.querySelectorAll('.song-item');

songItems.forEach((songItem) => {
  songItem.addEventListener('click',(e) => {
    // Displaying Master Play Box for the first time
    if(first){
      masterPlayBox.classList.remove('hide');
      first = false;
    }

    currentSongIndex = e.currentTarget.id;
    setMasterPlay();
    console.log(currentSongIndex);
    console.log('song item clicked');

})

})




const prevSongBtn = document.querySelector('.backward-step');
const nextSongBtn = document.querySelector('.forward-step');


// Previous song
prevSongBtn.addEventListener('click', () => {
  if(currentSongIndex <= 0){
    currentSongIndex = 7;
  }
  else{
    currentSongIndex--;
  }
  setMasterPlay();
})




//Next song
nextSongBtn.addEventListener('click', () => {
  if(currentSongIndex == 7){
    currentSongIndex = 0;
  }
  else{
    currentSongIndex++;
  }
  setMasterPlay();
})