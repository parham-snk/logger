import chalk from "chalk";
const nowDate = () => {
    let date = new Date(Date.now());
    return `${date.getFullYear()}/${date.getMonth()}/${date.getUTCDate()}`;
};
const logger = (type, msg) => {
    let date = nowDate();
    switch (type) {
        case "danger":
            console.log(chalk.bgRed(`[DANGER] ${date} : `), msg);
            break;
        case "error":
            console.log(chalk.bgYellow(`[ERROR]  ${date} : `), msg);
            break;
        case "succes":
            console.log(chalk.bgGreen(`[SUCCES] ${date} : `), msg);
            break;
        case "info":
            console.log(chalk.bgBlue(`[ INFO ] ${date} : `), msg);
            break;
    }
};
export default logger;
