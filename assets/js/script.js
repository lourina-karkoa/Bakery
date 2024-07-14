
const headEl = document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    if (window.scrollY > 50){
        headEl.classList.add('head-scrol');
    }else if(window.scrollY <= 50){
        headEl.classList.remove('head-scrol');
    }

});

const bar = document.querySelector('.bar')
bar.addEventListener('click', ()=>{
    const ulList = document.querySelector('.ul-onMbile')
    ulList.style.display='flex';
})
const nexter = document.querySelector('.nexter2')
nexter.addEventListener('click', ()=>{
    const scrol = document.querySelector('.scroler')
    scrol.classList.replace('scroler','.scrol2');
    setTimeout( () =>{
        scrol.style.display='none'
    },5000) 
})

 
function change() {
    const ulList = document.querySelector('.ul-onMbile')
    ulList.style.display='none';
}


function show() {
    const showing = document.querySelector('.scrol')
    showing.style.display='flex'
    setTimeout( () =>{
        showing.style.display='none'
    },5000) 

}