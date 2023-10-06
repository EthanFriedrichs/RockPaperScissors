var userOption = ""
let userScore = 1

function paper()
{
    userOption = "paper"
    mainFunction()
}

let computerOption = Math.floor(Math.random() * 3); // Gets computerOption, 0 = Rock | 1 = Paper | 2 = Scissors

let score = document.getElementById("score")
score.innerHTML = userScore

function computerTranslate(input)
{
    if (input == 0)
    {return("Rock")}

    else if (input == 1)
    {return("Paper")}

    else
    {return "Scissors"}
}