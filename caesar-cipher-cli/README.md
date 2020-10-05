# caesar-cipher-cli-tool

## Run app

#### 1. Install dependencies
```
npm install
```

#### 2. Run caesar-cli-tool
*use stdin/stdout (ctrl + c to exit)*
```
node caesar-cli.js -s 4 -a encode
```
*use given input and/or output file*
``` 
node caesar-cli.js -s 4 -a encode -i ./index.txt -o ./output.txt
node caesar-cli.js --shift 4 --action decode --input ./index.txt --output ./output.txt
```    
*use your own input/output file on a computer*
```
node caesar-cli.js -a encode -s 5 -i './input.txt' -o '/Users/gabriellji/file.txt'
```
### [Task description](https://github.com/rolling-scopes-school/nodejs-course-template/blob/master/TASKS.md)