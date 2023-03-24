const featuredSpeakers = [
  {
    n: 0,
    portrait: './Images/Speakers/sp1.png',
    name: 'Jhon Perez',
    position: 'Director of the Science Museum of Arts at Vienna\'s University of Applied Sciences.',
    resume: 'Jhon is an archeologist devolted to find the true about fossils and relates from ancients cultures. He spent many years study civilizations in the middle east.',
    class: 'speaker1',
  },
  {
    n: 1,
    portrait: './Images/Speakers/sp2.png',
    name: 'Myeong-Suk',
    position: 'Head of IT of the General Observatory of Seul.',
    resume: 'Myeong is an Pdh in Applied Physics, she has written a wide amount of articles related to the begginers of human being and how ancients cultures spread all over the world.',
    class: 'speaker2',
  },
  {
    n: 2,
    portrait: './Images/Speakers/sp3.png',
    name: 'Petra Yurinz',
    position: 'Dean of the Faculty of Humanities at University of Munich.',
    resume: 'Petra did an extensive research about the spread of the languajes in the world. She can explain how all languajes in the world. She made a lot of articles in scientific magazzines explain that languaje is an unique ability for manking',
    class: 'speaker3',
  },
  {
    n: 3,
    portrait: './Images/Speakers/sp4.png',
    name: 'Clint Eatswood',
    position: 'Lietenant Astronaut',
    resume: 'Clint is a retired astronaut that was in many space missions outside the Earth. He was several months in the international space station with astronauts from other countries.',
    class: 'speaker4',
  },
  {
    n: 4,
    portrait: './Images/Speakers/sp5.png',
    name: 'Lorena Jalek',
    position: 'Phd. Head of the Physician Laboratory in Norwey.',
    resume: 'Lorena believes a fundamental law in the all Universe. Matter is neither created nor destroyed, it\'s only transformed. But if matter can be created, How it starting everything?',
    class: 'speaker5',
  },
  {
    n: 5,
    portrait: './Images/Speakers/sp6.png',
    name: 'Malek Nahan',
    position: 'Philosopher and Economist, Head of the National Bank of Bangladesh.',
    resume: 'Maleks is a Truth Lover, wants to explain to the people how he got an incredible background. He spent many years of his life trought books and psicologist studies related to find the truth.',
    class: 'speaker6',
  },
];

// Dinamic Section Speakers
const speakersCard = document.querySelector('.grid-container');

featuredSpeakers.forEach((postData) => {
  const card = document.createElement('div');
  if (postData.n > 1) {
    card.classList = 'card card-hidden';
  } else {
    card.classList = 'card';
  }
  // card.classList.add('card', postData.class);
  card.innerHTML = `
    <div class="featuredSpeakers">
      <img class="cardImg" src="${postData.portrait}" alt="Speaker Image">
      <div class="speakersInfo">
        <h5 class="speakerName">${postData.name}</h5>
        <h6 class="speakerPosition">${postData.position}</h6>
        <div class="speakerBar"></div>
        <p class="speakerExperience">${postData.resume}</p>
      </div>
    </div>
  `;
  speakersCard.appendChild(card);
});

// more button

const speakersButton = document.getElementById('mbutton');
const textSpeakersButton = document.querySelector('.more-button-p');

speakersButton.addEventListener('click', () => {
  const hiddenCards = document.querySelectorAll('.card-hidden');
  hiddenCards.forEach((card) => {
    card.classList.toggle('show');
    card.classList.toggle('card-hidden');
  });
  if (textSpeakersButton.innerText === 'MORE') {
    textSpeakersButton.innerText = 'LESS';
  } else {
    textSpeakersButton.innerText = 'MORE';
    const showCards = document.querySelectorAll('.show');
    showCards.forEach((card) => {
      card.classList.remove('show');
      card.classList.toggle('card-hidden');
    });
  }
});

// hamburguer menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBarMenu = document.querySelector('.navbar-menu');
const logo = document.querySelector('.logo');
const main = document.querySelector('.main');
const closeButton = document.createElement('button');
const body = document.querySelector('body');

hamburger.addEventListener('click', () => {
  closeButton.classList.add('xButton');
  navMenu.appendChild(closeButton);
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  main.classList.toggle('active');
  navBarMenu.classList.add('display');
  logo.classList.add('hidden');
  body.classList.add('overFlow');
  const closeButtonAction = document.querySelector('.xButton');
  closeButtonAction.addEventListener('click', () => {
    window.location.reload();
  });
});

document.querySelectorAll('.link-menu').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  main.classList.remove('active');
  body.classList.remove('overFlow');
}));