#! /usr/bin/env node

import inquirer from "inquirer"

async function quiz(){
    const questions = await inquirer.prompt([
        {
            name: "Q1",
            type: "list",
            message: "What is the file extension of TypeScript?",
            choices: ["A) .js", "B) .ts", "C) .html", "D) .txt"],
        },
        {
            name: "Q2",
            type: "list",
            message: "What is the file extension of JavaScript?",
            choices: ["A) .js", "B) .ts", "C) .html", "D) .txt"],
        },
        {
            name: "Q3",
            type: "list",
            message: "Which command is used to install TypeScript globally?",
            choices: ["A) npm i typeScript", "B) npm i -g typescript", "C) npm i -global typescript", "D) both (B)&(C)"],
        },
        {
            name: "Q4",
            type: "list",
            message: "What command compiles typescript file in a project?",
            choices: ["A) tsc", "B) ts", "C) compile", "D) ts -compile"],
        },
        {
            name: "Q5",
            type: "list",
            message: "Which npm command is use to initialize a new package.json file?",
            choices: ["A) npm init", "B) npm init -y", "C) npm init -f", "D) npm init -n"],
        },
        {
            name: "Q6",
            type: "list",
            message: "Which command is use to initialize a new tsconfig.json file?",
            choices: ["A) tsc init", "B) tsc --init", "C) tsc init", "D) tsc install -g"],
        }
    ]);

    let score = 0

    if(questions.Q1 === "B) .ts"){
        score++;
        console.log("CORRECT ANSWER")
    }else{
        console.log("INCORRECT ANSWER")
    }
    if(questions.Q2 === "A) .js"){
        score++;
        console.log("CORRECT ANSWER")
    }else{
        console.log("INCORRECT ANSWER")
    }
    if(questions.Q3 === "D) both (B)&(C)"){
        score++;
        console.log("CORRECT ANSWER")
    }else{
        console.log("INCORRECT ANSWER")
    }
    if(questions.Q4 === "A) tsc"){
        score++;
        console.log("CORRECT ANSWER")
    }else{
        console.log("INCORRECT ANSWER")
    }
    if(questions.Q5 === "B) npm init -y"){
        score++;
        console.log("CORRECT ANSWER")
    }else{
        console.log("INCORRECT ANSWER")
    }
    if(questions.Q6 === "B) tsc --init"){
        score++;
        console.log("CORRECT ANSWER")
    }
    else{
        console.log("INCORRECT ANSWER")
    }

    console.log(`Your score is ${score} out of 6`)

    if(score >= 3){
        console.log("Congratulation! You Passed this Quiz")
    }else{
        console.log("Sorry! You failed this Quiz Try Again")
    }
}

quiz()