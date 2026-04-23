console.log("hey this my clock it is running
            ")

let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")
 //hey buddy whats wrong
setInterval(()=>{
    let now=new Date();
    hrs.innerHTML=(now.getHours()<10?"0":"")+now.getHours();
    min.innerHTML=(now.getMinutes()<10?"0":"")+now.getMinutes();
    sec.innerHTML=(now.getSeconds()<10?"0":"")+now.getSeconds();
},1000)
