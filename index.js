function myGreet (msg,greet){
    greet(msg);
}

function greet (msg)
{
    alert (msg);
}


myGreet("hello world",greet);