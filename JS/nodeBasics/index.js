"use strict ";
import chalk from 'chalk';

const log = console.log;

log(chalk.bgGreen.italic("\n Основні команди npm \n"));
log(chalk.magenta('npm -v') + chalk.blackBright(' - версія npm \n'));
log(chalk.magenta('npm install') + chalk.blackBright(' - Встановлює всі залежності, перераховані у файлі package.json \n'));
log(chalk.magenta('npm install <package-name>') + chalk.blackBright(' - Встановлює пакет за назвою. Приклад: npm install axios \n'));
log(chalk.magenta('npm uninstall <package-name>') + chalk.blackBright(' - Видаляє пакет з вашого проекту \n'));
log(chalk.magenta('npm update') + chalk.blackBright(' - Оновлює всі залежності до останніх версій \n'));
log(chalk.magenta('npm run <script-name>') + chalk.blackBright(' - Виконує кастомний скрипт, визначений у розділі "scripts" вашого package.json \n'));
log(chalk.magenta('npm test') + chalk.blackBright(' - Запускає команду для тестування, визначену як "test" у розділі "scripts" вашого package.json \n'));
log(chalk.magenta('nnpm start') + chalk.blackBright(' - Запускає команду, визначену як "start" у розділі "scripts" вашого package.json \n'));