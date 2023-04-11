// Setting POST request

fetch('http://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
}).then(response => {
    if(response.ok){
        return response.json();
    }
    throw new Error('POST request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
    // Code to execute with jsonResponse
});