import chalk from "chalk";


const getDate = () => {
    let date = new Date(Date.now())
    let d = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay()
    return d
}

const infoLogger = msg => {
    console.log(chalk.bgBlue.white(`[ INFO ] [${getDate()}] : `), ` ${msg}`)
}

const dangerLogger = msg => {
    console.log(chalk.bgRed.white(`[Danger] [${getDate()}] : `) + `  ${msg}`)
}

const succesLogger = msg => {
    console.log(chalk.bgGreen.white(`[Danger] [${getDate()}] : `) + `  ${msg}`)

}

const errorLogger = msg => {
    console.log(chalk.bgYellow.white(`[Danger] [${getDate()}] : `) + `  ${msg}`)

}

export { infoLogger,dangerLogger, errorLogger, succesLogger }