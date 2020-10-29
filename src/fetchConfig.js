const fetchConfig = (data) => {

	const requestOptions = {
	    method: 'POST',
	    headers: { 'Content-Type': 'application/json' },
	    body: JSON.stringify(data)
	};
	let url = 'https://buildmyburg3r.firebaseio.com/orders';
	url = url + '.json';
	fetch(url, requestOptions)
		.then(response => response.json())
		.then(data => {
		  console.log('Success:', data);
		})
		.catch((error) => {
		  console.log('Error:', error);
		});
}

export default fetchConfig;

// new code added in fetch