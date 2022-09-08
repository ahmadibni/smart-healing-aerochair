const next1 = document.querySelector('#next1');


let tdee = localStorage.getItem('kalori');
tdee = parseFloat(tdee);
const rekKalori = document.querySelector('#rekKalori');
rekKalori.textContent = (tdee.toFixed())/1000;

const formCheck1 = document.querySelector('#quest1 .form-check:nth-child(1)');
const formCheck2 = document.querySelector('#quest1 .form-check:nth-child(2)');
const formCheck3 = document.querySelector('#quest1 .form-check:nth-child(3)');
const formCheck4 = document.querySelector('#quest1 .form-check:nth-child(4)');
const formCheck5 = document.querySelector('#quest1 .form-check:nth-child(5)');
const formCheck6 = document.querySelector('#quest1 .form-check:nth-child(6)');
const formCheck7 = document.querySelector('#quest1 .form-check:nth-child(7)');
const formCheck8 = document.querySelector('#quest1 .form-check:nth-child(8)');

formCheck1.addEventListener('click', ()=>{
    formCheck1.classList.toggle('formCheckActive');
});
formCheck2.addEventListener('click', ()=>{
    formCheck2.classList.toggle('formCheckActive');
});
formCheck3.addEventListener('click', ()=>{
    formCheck3.classList.toggle('formCheckActive');
});
formCheck4.addEventListener('click', ()=>{
    formCheck4.classList.toggle('formCheckActive');
});
formCheck5.addEventListener('click', ()=>{
    formCheck5.classList.toggle('formCheckActive');
});
formCheck6.addEventListener('click', ()=>{
    formCheck6.classList.toggle('formCheckActive');
});
formCheck7.addEventListener('click', ()=>{
    formCheck7.classList.toggle('formCheckActive');
});
formCheck8.addEventListener('click', ()=>{
    formCheck8.classList.toggle('formCheckActive');
});

next1.addEventListener('click', function(e){
    document.querySelector('#quest1').style.display = 'none';
    document.querySelector('#rekGizi').style.display = 'block';
    
    e.preventDefault();
});
