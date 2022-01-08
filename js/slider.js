export default async function initSlider() {
  //Comsuming the API: start
  async function requisition(api) {
    const response = await fetch(api);
    const json = await response.json();
    return json;
  }
  //Consuming the API: end

  let sliderContainer = document.querySelector('.slider-container');
  let contentTitle = document.querySelectorAll('.home-content');
  let sliderItems = document.querySelectorAll('.slider-item');
  let objectCarousel = await requisition('../json/carousel.json');
  let activeDot = [...document.querySelectorAll('.dot')];

  //Interacting with API: start
  let listImage = [];
  let listTitle = [];

  for (let element of objectCarousel) {
    listImage.push(element['imagem']);
    listTitle.push(element['titulo']);
  }
  //Interacting with API: end

  const arrowPrev = document.querySelector('.prev');
  const arrowNext = document.querySelector('.next');

  //Init items API: start
  for (let i = 0; i < sliderItems.length; i++) {
    contentTitle[i].innerHTML = `<p>${listTitle[i]}</p>`;
    sliderItems[i].style.backgroundImage = `url('${listImage[i]}')`;
    activeDot[i].addEventListener('click', handleDot);
  }
  //Init items API: end

  // Start point
  let i = 0;

  //Handle dot active: start
  function handleDot(event) {
    console.log(event.target.dataset.href);
    activeDot[i].classList.remove('active-dot');
    i = event.target.dataset.href;

    sliderContainer.style.transform = `translateX(${
      -i * (sliderContainer.clientWidth / 3)
    }px)`;

    activeDot[i].classList.add('active-dot');
  }
  //Handle dot active: end
  //Handle next slider: start
  function changeNext() {
    activeDot[i].classList.remove('active-dot');
    // Set i equal number image
    if (i < sliderItems.length - 1) {
      // Add i
      i++;
    } else {
      // Reset i
      i = 0;
    }
    sliderContainer.style.transform = `translateX(${
      -i * (sliderContainer.clientWidth / sliderItems.length + 1)
    }px)`;
    activeDot[i].classList.add('active-dot');
  }
  //Handle next slider: start
  //Handle prev slider: start
  function changePrev() {
    activeDot[i].classList.remove('active-dot');
    // Set i equal number image
    if (i > 0) {
      // Add i
      i--;
    } else {
      // Reset i
      i = sliderItems.length - 1;
    }
    sliderContainer.style.transform = `translateX(${
      -i * (sliderContainer.clientWidth / sliderItems.length + 1)
    }px)`;
    activeDot[i].classList.add('active-dot');
  }
  //Handle prev slider: end
  // Interval time handle slider: start
  let time = 6000;
  setInterval(changeNext, time);
  // Interval time handle slider: end

  arrowNext.addEventListener('click', changeNext);
  arrowPrev.addEventListener('click', changePrev);
}
