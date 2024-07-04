//
console.log(process.argv);
console.log(process.argv[3]);

// process.env
console.log(process.env);

// pid
console.log(process.pid)

//cwd
console.log(process.cwd());

// title
console.log(process.title);

//memoryUsage
console.log(process.memoryUsage);

//update
console.log(process.uptime);

process.on('exit', (code) => {
    console.log(`About to exit with ${code}`);
});

//exit()
process.exit(0);

console.log('hello from exit');