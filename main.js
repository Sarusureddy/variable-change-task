var Score=0;
   
 function decrease(){
     Score=Score-10;
     document.getElementById("img").textContent=Score;
 }

function increase(){
    Score=Score+10;
    document.getElementById("img").textContent=Score;
}