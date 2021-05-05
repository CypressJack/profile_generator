const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  name: "What's your name? Nicknames are also acceptable :)",
  activity: "What's an activity you like doing?",
  music: "What do you listen to while doing that?",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  food: "What's your favourite thing to eat for that meal",
  sport: "Which sport is your absolute favourite?",
  power: "What is your superpower? In a few words, tell us what you are amazing at"
};

const answers = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  power: ""
}


const askAQuestion = function (questionList) {
    rl.question(questionList.name + " ", (answer) => {
      answers.name = answer;
      rl.question(questionList.activity + " ", (answer1) => {
        answers.activity = answer1;
        rl.question(questionList.music + " ", (answer2) => {
          answers.music = answer2;
          rl.question(questionList.meal + " ", (answer3) => {
            answers.meal = answer3;
            rl.question(questionList.food + " ", (answer4) => {
              answers.food = answer4;
              rl.question(questionList.sport + " ", (answer5) => {
                answers.sport = answer5;
                rl.question(questionList.power + " ", (answer6) => {
                  answers.power = answer6;
                  console.log(`\n\nWell, well, well ${answers.name}!\nYou like to ${answers.activity} while listening to ${answers.music}!\nYou like to eat ${answers.food} for ${answers.meal}! And you love to play ${answers.sport} because ${answers.power} is your superpower!!!!!!`);
                  rl.close();
                });
              });
            });
          });
        });
      });
  });
}

console.log(askAQuestion(questions));


