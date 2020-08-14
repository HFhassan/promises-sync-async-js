
function success(){

        console.log("success");

}

function failure (){
    console.log("failure");
}

function chkPromis (userInput,success,failure)
{
    userInput === true ? success() : failure()

}

chkPromis (true, success,failure);
