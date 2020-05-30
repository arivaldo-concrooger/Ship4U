//
// daysCountDown(7);
//
// function daysCountDown(days){
//   var h =[];
//   h=document.querySelectorAll(".countdown-h3")[1];
//   if(days<10){ document.querySelectorAll(".countdown-h3")[1].textContent=("0"+days);}
//   else{document.querySelectorAll(".countdown-h3")[1].textContent=(days);}
//
// for(var i=days;i>=0;i--){
//   for(var j=23;j>=0;j--){
//     for(var k=59;k>=0;k--){
//       for(var l=59;l>=0;l--){
//         setTimeout(function(){
//           if(l<10){ document.querySelectorAll(".countdown-h3")[4].textContent=("0"+l);}
//           else{document.querySelectorAll(".countdown-h3")[4].textContent=(l);}
//         },1000);
//       }
//       if(k<10){document.querySelectorAll(".countdown-h3")[3].textContent=("0"+k);}
//       else{document.querySelectorAll(".countdown-h3")[3].textContent=(k);}
//     }
//     if(j<10){document.querySelectorAll(".countdown-h3")[2].textContent=("0"+j);}
//     else{document.querySelectorAll(".countdown-h3")[2].textContent=(j);}
//
//   }
//   if(i<10){document.querySelectorAll(".countdown-h3")[1].textContent=("0"+i);}
//   else{document.querySelectorAll(".countdown-h3")[1].textContent=(i);}
// }
// }
