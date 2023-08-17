import '@fortawesome/fontawesome-free/css/all.css'


import './CSS/style.css';

const modal = document.getElementById("modal")

const modalBtn = document.getElementById("modal-btn")

modalBtn.addEventListener('click',open)

//open modal
function open(){
    modal.style.display = "block";
}


//close modal
function close(){
    modal.style.display = "none";
}