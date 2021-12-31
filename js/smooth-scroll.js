export class SmoothScroll {
  constructor(links) {
    this.linkElements = document.querySelectorAll(links);
  }
  //Handle smooth scrool: start
  handleClick(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }
  //Handle smooth scrool: end
  //Add event: start
  addClickEvent() {
    this.linkElements.forEach((link) => {
      link.addEventListener('click', this.handleClick);
    });
  }
  //Add event: end
  //Starting add event: start
  init() {
    this.addClickEvent();
    return this;
  }
  //Starting add event: end
}
