

        let you=0;
        let computer=0;

        let result=document.querySelector(".btn");
        let userscore=document.querySelector("#user");
        let computerscore=document.querySelector("#computer");

        const drawGame=(userChoice,comp)=>{
            result.innerText=`Game Draw, user:${userChoice} & computer:${comp}`;
            result.style.backgroundColor="orange";
        }

        
        const genComputer=()=>{
            const options=["rock","paper","scissor"];
            const randomchoice=Math.floor(Math.random()*3);
            return options[randomchoice];
        }

        const showWinner=(userwin,userChoice,comp)=>{
            if(userwin){
                you++;
                userscore.innerText=you;
                result.innerText=`you win, user:${userChoice} & computer:${comp}`;
                result.style.backgroundColor="green";

            }else{
                computer++;
                computerscore.innerText=computer;
                result.innerText=`computer win, user:${userChoice} & computer:${comp}`;
                result.style.backgroundColor="red";

            }
        }

        const playGame=(userChoice)=>{
            const comp=genComputer();
            if(userChoice===comp){
                drawGame(userChoice,comp);
            }else{
                let userwin=true;

                if(userChoice==="rock"){
                   userwin=comp==="paper"?false:true;

                }else if(userChoice==="paper"){
                    userwin=comp==="scissor"?false:true;

                }else{
                    userwin=comp==="rock"?false:true;
                }

                showWinner(userwin,userChoice,comp);
            }
        }
        const choices=document.querySelectorAll(".choice");

       choices.forEach((choice)=>{
            choice.addEventListener("click",()=>{
                    const userChoice=choice.getAttribute("id");
                    playGame(userChoice);
                })
        })


