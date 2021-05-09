const fs = require('fs');
const { errors } = require('../constants/errors');

try {
    const { args } = require('./args.js');
    const { DataTransformation } = require('./data-transformation.js');

    if(args.input_file) {
        try {
            fs.accessSync(args.input_file, fs.constants.R_OK)
        } catch {
            throw errors.INVALID_INPUT_FILE;
        }
    }

    if(args.output_file) {
        try {
            fs.accessSync(args.output_file, fs.constants.W_OK)
        } catch {
            throw errors.INVALID_OUTPUT_FILE;
        }
    }

    const input = (args.input_file) ? fs.createReadStream(args.input_file) : process.stdin;
    const transform  = new DataTransformation();
    const output = (args.output_file) ? fs.createWriteStream(args.output_file, {flags: 'a+'}) : process.stdout;

    module.exports = {input, transform, output};
} catch(err) {
    throw err;
}

