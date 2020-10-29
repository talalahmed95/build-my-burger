const xhrConfig = (data) => {

	const xhr = new XMLHttpRequest();

	const url = 'https://buildmyburg3r.firebaseio.com/orders.json';
	const method = 'POST';

	xhr.open(method, url, true);

	xhr.onreadystatechange = function (oEvent) {
	    if (xhr.readyState === 4) {
	        if (xhr.status === 200) {
	          console.log(xhr.responseText)
	        } else {
	           console.log("Error", xhr.statusText);
	        }
	    }
	};

	xhr.send(JSON.stringify(data));
}

export default xhrConfig;

// new code added in xhr