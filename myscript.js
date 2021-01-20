 
function addcom(){
    var inp=document.getElementById("in1");
    inp.addEventListener("keyup", function(event) {
       if (event.key === "Enter") {
           
        var textv=document.getElementById("in1").value;
        
        var para=document.createElement("p");
       

    //     para.style.border="2px solid blue";
    // para.style.width="100%";
    //para.style.overflowY="scroll";

        para.append(textv);

        var ins =document.getElementsByClassName("comments")[0];

        ins.append(para);

       }
       
   });
}
 
 
 
 function likefn () {

    var back = document.getElementsByClassName("like")[0].style.color;
    

if(back=='black')
{
document.getElementsByClassName("like")[0].style.color='blue';      
}
else
    { 
        document.getElementsByClassName("like")[0].style.color='black';

    }
}


function commentc () {

var dis=document.getElementsByClassName("comments")[0].style.display;
console.log(dis);
if(dis==='none'){
    document.getElementsByClassName("comments")[0].style.display='block';
}
    else{

    document.getElementsByClassName("comments")[0].style.display='none';
}
}


;
