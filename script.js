var choices=["rock","paper","scissors"];
let rock=document.getElementById("rock");
let paper=document.getElementById("paper");
let scissors=document.getElementById("scissors");
var compscore=0;
var userscore=0
;

rock.addEventListener("click",() =>{
    user=rock.getAttribute("data-choice");
    document.getElementById("rock").style.animation="glowboxpink 1.5s infinite";
    document.getElementById("paper").style.animation="glowboxred 100s infinite";
    document.getElementById("scissors").style.animation="glowboxred 100s infinite";
    playgame(user);
});
paper.addEventListener("click",() =>{
    user=paper.getAttribute("data-choice");
    document.getElementById("paper").style.animation="glowboxblue 1.5s infinite";
    document.getElementById("rock").style.animation="glowboxred 100s infinite";
    document.getElementById("scissors").style.animation="glowboxred 100s infinite";
    playgame(user);
});
scissors.addEventListener("click",() =>{
    user=scissors.getAttribute("data-choice");
    document.getElementById("scissors").style.animation="glowboxyellow 1.5s infinite";
    document.getElementById("rock").style.animation="glowboxred 100s infinite";
    document.getElementById("paper").style.animation="glowboxred 100s infinite";
    playgame(user);
});
const compchoice=()=>{
      comp=Math.floor(Math.random() * 3);
    return comp;
    }
const playgame =(user)=>{
     n=compchoice();
     console.log(user,n);
    if((user==0&&n==2)||(user==1&&n==0)||(user==2&&n==1)){
    document.getElementById("command").innerText=`You have selected ${choices[user]}\ncomputer has selected ${choices[n]}\n so YOU WON`;
    document.getElementById("command").style.animation="glowgreen 1.5s infinite";
       userscore++;
       document.getElementById("num1").innerText=`${userscore}`;
       document.getElementById("yours").style.animation="glowyellow 1.5s infinite";
       document.getElementById("comp").style.animation="glowwhite 1.5s infinite";

    }
else if((user==0&&n==1)||(user==1&&n==2)||(user==2&&n==0)){
    document.getElementById("command").innerText=`You have selected ${choices[user]}\ncomputer has selected ${choices[n]}\n so YOU LOST`;
    document.getElementById("command").style.animation="glowred 1.5s infinite";
    compscore++;
    document.getElementById("num2").innerText=`${compscore}`;
    document.getElementById("yours").style.animation="glowwhite 1.5s infinite";
    document.getElementById("comp").style.animation="glowyellow 1.5s infinite";
}
else{
    document.getElementById("command").innerText=`You have selected ${choices[user]}\ncomputer has selected ${choices[n]}\n so ITS DRAW`;
    document.getElementById("command").style.animation="glowyellow 1.5s infinite";
    document.getElementById("yours").style.animation="glowwhite 1.5s infinite";
    document.getElementById("comp").style.animation="glowwhite 1.5s infinite";
}
}

