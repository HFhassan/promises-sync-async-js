
function success(){

        console.log("success");

}

function failure (){
    console.log("failure");
}

function chkPromis (userInput)
{
    new Promise (function(success,failure)
    {
        if (userInput)
        {
            success();
        }
        else
        {
            failure();
        }
    })
}

