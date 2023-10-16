import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

import inquirer from 'inquirer';

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
write('kaboom');