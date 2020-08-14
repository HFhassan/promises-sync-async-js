async function getData (){
    const response = await fetch ('https://jsonplaceholder.typicode.com/todos/1');
    console.log("response = ",response);
    const data = await response.json();
    console.log("data =",data);

}

//getData();

//post resource

async function postData (){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        body: JSON.stringify( {
            title: 'example',
            body: 'yes it is posted',
            userId: 1
        }),
        headers:
        {
            "Content-type": "application/json; charset=UTF-8"
        }
    },

    );
    console.log ("response =", response);
    const data = await response.json();
    console.log("data =", data)

}

postData();