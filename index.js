// console.log(i);


// var i='hello '+'to';

// var j=`${2+'you'}`;//backtick

// console.log(j);.
flag='';

// var a= document.querySelector(".ball");
// n=0;
// a.addEventListener("click",function (){
//     if(n==0){
//     a.style.backgroundColor="green";
//     n=1
//     a.innerHTML=Math.floor(Math.random()*10);
// }
// else{
//     a.style.backgroundColor="red";
//     a.innerHTML=Math.floor(Math.random()*10);
//     n=0;
// }

// })

for(i=1;i<=100;i++){
    flag+=`<div class="ball">
    <p>${Math.floor(Math.random()*10)}</p>
</div>`;

}
document.querySelector(".ball1").innerHTML=flag;
                    //parent only...


var timer=60;
var a=document.querySelector(".timer");
n=0;
function settimer(){
    var timerint=setInterval(() => {
        if(timer>0){
        timer--;
        document.querySelector(".timer").innerHTML=timer;
        
        // a.addEventListener("click" , function(){
        //     if(timer>0){
        //     timer=settimer();
        //     a.style.color="blue";
        // alert("paused")}
        //     }) ..................//Need more work
         
        }
        else{
            clearInterval(timerint);//it is important to destroy the above setinterval so that it cannt take the extra space
            a.style.backgroundColor="red";
            alert("Time is up!!");
        }


    }, 1000);
}

var s=0;
var b=document.querySelector(".score");
var c=document.querySelector(".hscore");
function getscore( s){

   b.innerHTML =s;
   console.log(s);
   if(s==1)
   c.innerHTML=50;
   else if(s==2)
   c.innerHTML=40;

else
c.innerHTML=Math.floor(Math.random()*10);

}



d=document.querySelector(".ball1");


document.querySelector(".ball1").addEventListener("click",function(details){
var sr=Number(details.target.innerHTML);

// getscore(sr);
getscore(Math.floor(Math.random(sr)*10));


// console.log(s); //Just to see whether the number is as String or Integer
})









settimer();
