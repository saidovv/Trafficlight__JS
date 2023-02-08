let redCnt=10, yellowCnt=5, greenCnt=10;

setInterval(() => {
    let red=document.querySelector('.red')
    let yellow=document.querySelector('.yellow')
    let green=document.querySelector('.green')
   if (redCnt>0){
    red.style.opacity=.9
    red.innerHTML=redCnt<10 ? "0" + redCnt : redCnt
    console.log(redCnt)
    redCnt--;
   } 
   else if (redCnt===0 && yellowCnt>0){
    red.style.opacity=0.3
    red.innerHTML="";
       yellow.style.opacity=.9
       yellow.innerHTML=yellowCnt
    console.log(yellowCnt)
    yellowCnt--;
   }
   else if (yellowCnt===0 && greenCnt>0){
    yellow.style.opacity=0.3
    yellow.innerHTML="";
       green.style.opacity=.9
       green.innerHTML=greenCnt < 10 ? "0" +greenCnt : greenCnt
    console.log(greenCnt)
    greenCnt--;
   }
   else
   {
    green.style.opacity=0.3
    green.innerHTML="";
    redCnt=10;
    yellowCnt=5;
    greenCnt=10;
   }
}, 1000);


