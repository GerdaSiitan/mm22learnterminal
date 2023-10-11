import chalk from 'chalk';
import boxen from 'boxen';

function write(text) {
    process.stdout.write(text);
}

console.log(boxen(chalk.bgGreen.magenta('Ma'), {borderStyle:'round'}));

console.log(boxen(chalk.magenta('Tahan nii'), {padding: 1, margin: 1, borderStyle: 'double'}));

console.log(boxen(chalk.bgRed.green('koju magama,'), {padding: 10, margin: 12, title: 'väga', titleAlignment: 'center', borderColor: 'cyanBright'}));

console.log(boxen(chalk.cyan('Süüa ja'), {padding: 5, margin: 30, borderStyle:'arrow', borderColor: 'redBright'}));

console.log(boxen(chalk.bgGreen.inverse('voodis lebada'), {padding: 1, margin: 10, borderStyle:'classic'}));

console.log(boxen(chalk.bgCyan.strikethrough('Thanks #2'), {padding: 5, margin: 1, borderStyle:'bold'}));