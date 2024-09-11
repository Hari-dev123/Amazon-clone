
const imgs = document.querySelectorAll(".header-slider ul img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let i=0;

function slidechange(){
    for(let it=0;it<imgs.length;it++){
        imgs[it].style.display="none";
   }
   imgs[i].style.display="block";
}
slidechange();
next.addEventListener('click',(e)=>{
    e.preventDefault();
    if(i<imgs.length-1){
        i++;
    }
   slidechange();
 
})
prev.addEventListener('click',(e)=>{
    e.preventDefault();
    if(i>0){
        i--;
    }
   slidechange();
 
})

const scrollContainer = document.querySelectorAll('.products');
for(let item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}

