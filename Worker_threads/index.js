const crypto=require('crypto');
const start= performance.now();

for (let i = 0; i < 50; i++) {
    crypto.pbkdf2('test', 'salt',10000,64,'sha512',()=>{
        console.log(performance.now()-start);
    })
}