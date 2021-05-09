
const { Transform } = require('stream');
const { args } = require('./args.js');
const { caesar } = require('./caesar.js');

class DataTransformation extends Transform {
    _transform(chunck, encoding, callback) {
        try {
            callback(false, caesar(chunck.toString('utf-8'), args.shift, args.action));
        } catch (err) {
            callback(err);
        }
    }
}

module.exports = { DataTransformation }