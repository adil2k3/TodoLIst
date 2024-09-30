let timerDisplay=document.querySelector(".timer");
let am=document.querySelector(".am");


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const displayTime=()=>{
    let date = new Date();
    let day=daysOfWeek[date.getDay()];
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

      if(hh>=12){
        am.textContent="PM";
     }else{
        am.textContent="AM";
     }

     hh = hh % 12 || 12;


     let hhString = hh<10 ? `0${hh}`:hh;
     let ssString = ss<10 ? `0${ss}`:ss;
     let mmString = mm<10 ? `0${mm}`:mm;

     let daySpan =`<span style="color:Yellow;">${day}</span>`;

     timerDisplay.innerHTML=`${daySpan} : ${hhString} : ${mmString} : ${ssString}`;
}

setInterval(displayTime,1000);
