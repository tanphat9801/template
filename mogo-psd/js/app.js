const menubtn = document.querySelector('#bars');
const menu = document.querySelector('.mobile-menu');

menubtn.onclick = () => {

menubtn.classList.toggle('fa-times');
menu.classList.toggle('active');
}