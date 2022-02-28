
/** VARIABLES **/
const cancelBtn = document.querySelector('#cancel-btn');
const noBtn = document.querySelector('#no-btn');
const yesBtn = document.querySelector('#yes-btn');
let tbody = document.querySelector('tbody');

const modalContainer = document.querySelector('.modal-container');
const modalBody = document.querySelector('.modal-body');

let content = modalBody.firstElementChild;


/** EVENT LISTENERS **/
cancelBtn.addEventListener('click', () =>{
    modalContainer.style.visibility = 'visible';
});

noBtn.addEventListener('click', () =>{
    modalContainer.style.visibility = 'hidden';
});

yesBtn.addEventListener('click', () =>{
    content.textContent = 'Subscription successfully cancelled!';

    setTimeout(() => {
        modalContainer.style.visibility = 'hidden';
        content.textContent = 'Are you sure you want to cancel your subscription?'
        tbody.firstElementChild.lastElementChild.innerHTML = '<p>Cancelled</p>';
    }, 2000)

});

