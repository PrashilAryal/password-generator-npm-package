import prompts from "prompts";
import chalkAnimation from "chalk-animation";

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMONPQRSTURVXYZ";
const numbers = "0123456789";
const symbols = "!@#$%&*";
let characters = alphabets;
let password = "";

const passwordRequirements = [
  {
    type: "number",
    name: "length",
    message: "Length of Password: ",
  },
  {
    type: "confirm",
    name: "containNumber",
    message: "Should contain numbers: ",
  },
  {
    type: "confirm",
    name: "containSymbol",
    message: "Should contain symbols: ",
  },
];

const passwordGenerator = (length, containNumber, containSymbol) => {
  if (containNumber) {
    characters += numbers;
  }
  if (containSymbol) {
    characters += symbols;
  }
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
};

prompts(passwordRequirements).then((response) => {
  passwordGenerator(
    response.length,
    response.containNumber,
    response.containSymbol
  );
  chalkAnimation.rainbow(`Password: ${password}`);
});
