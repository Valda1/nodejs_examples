// Setting GET request using async - await function

const getData = async () => {
    try{
        const response = await fetch('http://api-to-call.com/endpoint');
        if(response.ok){
            const jsonResponse = await response.json();
            // Code to execute with jsonResponse
        }
        throw new Error('Request failed!');
    }catch (error){
        console.log(error);
    }
}