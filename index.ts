#!/usr/bin/env node 


import { select } from '@inquirer/prompts';

import chalk from "chalk";

let score = 0;

let correctAnswerCount = 0;     // Total number of correct answers

let totalQuestion = 5          // Total number of Queation

let totalMarks = 50;

       
console.log(chalk.bold.bgBlue('\n\t Multiple Choice Questions \n'));


const questionsAndAnswer = [
    {
        message:"What does CPU stand for?", 
        choices:[
                    {name: "Central Processing Unit", value: "central processing unit" },
                    {name: "Central Program Unit", value: "central program unit"},
                    {name: "Central Print Unit", value: "central print unit" }
                ],
                answer: "central processing unit"

    },
    
    {
        message:"Which of the following is an input device?",
        choices:[
                    {name: "Monitor", value: "monitor"},
                    {name: "Printer", value: "printer"},
                    {name: "Keyboard", value: "keyboard"}
                ],
                answer: "keyboard"
        
    },

    {
        message: "Which component is considered the brain of the computer?",
        choices:[
                    {name: "Hard Drive", value: "hard drive"},
                    {name: "RAM", value: "ram"},
                    {name: "CPU", value: "cpu"}
                ],
                answer: "cpu"
    },

    {
        message: "Which of the following is not an operating system?",
        choices:[
                    {name: "Windows", value: "windows"},
                    {name: "Linux", value: "linux"},
                    {name: "Microsoft Office", value: "microsoft office"}
                ],
                answer: "microsoft office"
    },

    {
        message: "What is the main function of the operating system?",
        choices:[
                    {name: "To manage Hardware and Software Resources", value: "to manage hardware and software resources"},
                    {name: "To design Graphics", value: "to design graphics"},
                    {name: "To connect to the Internet", value: "to connect to the internet"}
                ],
                answer:  "to manage hardware and software resources"
    }
]

async function runQuiz() {
    
    for(let qa of questionsAndAnswer){

        const userAnswer = await select({
            message: qa.message,
            choices: qa.choices
        })

        if (userAnswer === qa.answer){
            score += 10;
            correctAnswerCount++;

        }

    } 
        console.log(chalk.bold.bgBlue(`\n\t Your score is ${score} out of  ${totalMarks} `));

        console.log(chalk.bold.bgBlue(`\n\t You answered ${correctAnswerCount} questions correctly out of ${totalQuestion} questions} `));

        if (score == totalMarks){

            console.log(chalk.bold.redBright("\n\t congratulations you got full marks"));
            
        }
    }

runQuiz();   