const chk =  ()=>{
    return (
        ((Math.floor ( Math.random()*10)%2)===0) ? true : false
    )
}

function resolve (){ console.log ("success")}
function reject (){ console.log("failure")}

const chkPromise = new Promise ((resolve,reject)=>
{
    setTimeout(()=>{chk()? resolve() : reject()},2000)
})

chkPromise.then(resolve).catch(reject);

console.log("hello world");