// const {exec} = require('child_process');
const {spawn} = require('child_process');

// const childProcess=exec('dir',(err, stdout, stderr)=>{
//     if(err){
//         console.error(err.message);
//     }

//     console.log(`stdout : ${stdout}`);
//     console.log(`stdout : ${stderr}`);
// });
const childProcess=spawn('dir');


childProcess.on('exit', (code)=>{
    console.log(`'Exit code : ${code}`);
});
childProcess.stdout.on('data', (data)=>{
    console.log(`'stdout: ${data}`);
});
childProcess.stderr.on('data', (data)=>{
    console.log(`'stderr : ${data}`);
});