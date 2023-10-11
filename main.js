import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

console.log(boxen(chalk.bgGreen.magenta('Ma'), {borderStyle:'round'}));

console.log(boxen(chalk.magenta('Tahan nii'), {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen(chalk.bgRed.green('koju magama,'), {title: 'väga', titleAlignment: 'center', borderColor: 'cyanBright'}));

console.log(boxen(chalk.magenta('Süüa ja'), {borderStyle:'arrow', borderColor: 'redBright'}));

console.log(boxen(chalk.bgGreen.inverse('voodis lebada'), {borderStyle:'classic'}));