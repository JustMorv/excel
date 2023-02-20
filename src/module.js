console.log("module")

async function start(){
   return await Promise.resolve("async workingIIIII")

}
start().then(console.log);