// Setting GET request

fetch('http://api-to-call.com/endpoint').then(response => {
    if(response.ok){
        return response.json();
    }

    throw new Error('Get request failed');
}, networkError => console.log(networkError.message))
    .then(jsonResponse => {
        // Code to execute with json response
    });