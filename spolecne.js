const crossNav = () => {
  const menuItems = document.querySelector('#menu-polozky');
  menuItems.classList.toggle('show');
  const cross = document.querySelector('#menu-tlacitko .fas');

  if (cross.classList.contains('fa-bars')) {
    cross.classList.remove('fa-bars');
    cross.classList.add('fa-xmark');
  } else if (cross.classList.contains('fa-xmark')) {
    cross.classList.remove('fa-xmark');
    cross.classList.add('fa-bars');
  }
};

const lookingForButton = document
  .querySelector('#menu-tlacitko')
  .addEventListener('click', crossNav);
