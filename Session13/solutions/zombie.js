var cp = require('child_process');

if(process.send){ //this is a child process
    process.exit();
}

//spawn a child process
cp.fork(__filename);

//this keeps the main process busy and unable to respond to child's exit, making child defunct
while(true){};