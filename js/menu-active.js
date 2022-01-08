export default function initMenuActive() {
  // Menu home: start
  let menuHome = document.querySelectorAll('.nav-home');
  let navegation = document.querySelectorAll('.nav-bar-menu');

  // Change active item: start
  function changeItemHome(event) {
    for (let i = 0; i < menuHome.length; i++) {
      menuHome[i].classList.remove('active');
    }
    event.target.classList.add('active');
    return event;
  }

  for (let item of menuHome) {
    item.addEventListener('mouseover', changeItemHome);
  }
  // Change active item: end
  // Change active item default: start
  function changeItemHomeDefault() {
    for (let i = 0; i < menuHome.length; i++) {
      menuHome[i].classList.remove('active');
    }
    menuHome[0].classList.add('active');
  }

  for (let menus of navegation) {
    menus.addEventListener('mouseleave', changeItemHomeDefault);
  }
  // Change active item default: end
  // Menu home: end
  // Menu services: start
  let menuServices = document.querySelectorAll('.nav-services');

  // Change active item: start
  function changeItemService(event) {
    for (let i = 0; i < menuServices.length; i++) {
      menuServices[i].classList.remove('active');
    }
    event.target.classList.add('active');
    return event;
  }

  for (let item of menuServices) {
    item.addEventListener('mouseover', changeItemService);
  }
  // Change active item: end
  // Change active item default: start
  function changeItemServiceDefault() {
    for (let i = 0; i < menuServices.length; i++) {
      menuServices[i].classList.remove('active');
    }
    menuServices[1].classList.add('active');
  }

  for (let menus of navegation) {
    menus.addEventListener('mouseleave', changeItemServiceDefault);
  }
  // Change active item default: end
  // Menu services: end
  // Menu contacts: start
  let menuContacts = document.querySelectorAll('.nav-contacts');

  // Change active item: start
  function changeItemContacts(event) {
    for (let i = 0; i < menuContacts.length; i++) {
      menuContacts[i].classList.remove('active');
    }
    event.target.classList.add('active');
    return event;
  }

  for (let item of menuContacts) {
    item.addEventListener('mouseover', changeItemContacts);
  }
  // Change active item: end
  // Change active item default: start
  function changeItemContactsDefault() {
    for (let i = 0; i < menuContacts.length; i++) {
      menuContacts[i].classList.remove('active');
    }
    menuContacts[2].classList.add('active');
  }

  for (let menus of navegation) {
    menus.addEventListener('mouseleave', changeItemContactsDefault);
  }
  // Change active item default: start
  // Menu contacts: end
}
