const clock=document.getElementById("clock");




// console.log(date.toLocaleTimeString());

setInterval(()=>{

    let date=new Date();
    clock.innerText=date.toLocaleTimeString();

},1000)
