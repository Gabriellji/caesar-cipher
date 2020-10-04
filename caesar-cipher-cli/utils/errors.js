const Errors = {
    INVALID_SHIFT_ARG:  new Error('The value of shift shoud be positive integer'),
    INVALID_ACTION_ARG: new Error('The value of action argument shoud be encode|decode'),
    INVALID_INPUT_FILE: new Error('Cannot read input file =('),
    INVALID_OUTPUT_FILE: new Error('Something wrong with the output file or path =('),
}

module.exports = { Errors };