const { Actions } = require('../utils/const.js');
const { Errors } = require('../utils/errors.js');

const Args = {
    SHIFT: ['s', 'shift'], 
    INPUT: ['i', 'input'],
    OUTPUT: ['o', 'output'],
    ACTION: ['a', 'action'],
}
    

let argv = require('minimist')(process.argv.slice(2));

function getArg(arg)  {
    return argv[arg[0]] || argv[arg[1]];
}

function getShift() {
    const shift = getArg(Args.SHIFT);

    if(shift && typeof shift === 'number') {
        return shift;
    } else {
        throw Errors.INVALID_SHIFT_ARG;
    }
}

function getAction()  {
    const action = Actions[getArg(Args.ACTION)];
    if(action) {
        return action;
    } else {
        throw Errors.INVALID_ACTION_ARG;
    }
}

try {
    const args = {
        shift: getShift(),
        action: getAction(),
    };
    
    const inputFile = getArg(Args.INPUT);
    if(inputFile) {
        args.input_file = inputFile;
    } 
    
    const outputFile = getArg(Args.OUTPUT);
    if(outputFile) {
        args.output_file = outputFile;
    } 
    module.exports = { args }
} catch(err) {
    throw err;
}






