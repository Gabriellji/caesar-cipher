const chalk = require('chalk');

const Errors = {
    INVALID_SHIFT_ARG:  new Error(chalk.yellow('The value of shift should be positive integer')),
    INVALID_ACTION_ARG: new Error(chalk.green('The value of action argument shoud be encode|decode')),
    INVALID_INPUT_FILE: new Error(chalk.red('Cannot read input file ' + chalk.yellow('=(') )),
    INVALID_OUTPUT_FILE: new Error(chalk.blue('Something wrong with the output file or path =(')),
    NO_ARGUMENT_SHIFT: new Error(chalk.yellow('There is no the following required argument: --shift')),
    NO_ARGUMENT_ACTION: new Error(chalk.green('There is no the following required argument: --action')),
}

module.exports = { Errors };