const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dfbc8b9681msh698edfb612cf9d1p132856jsn8c22c88f2970',
		'x-rapidapi-host': 'weather820.p.rapidapi.com'
	}
};

fetch('https://weather820.p.rapidapi.com/', options)
    .then(response => response.text()) // First, get the raw text response
    .then(data => {
        try {
            const jsonData = JSON.parse(data); // Try parsing JSON
            console.log(jsonData);
        } catch (error) {
            console.error("Response is not valid JSON:", data); // Log the raw response if it's not JSON
        }
    })
    .catch(error => console.error("Fetch error:", error));
