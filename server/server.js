const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//API CALL
let apiResult;
async function apiCall(keyword, beds) {
	let placeWithCity
	const initOptions = {
		method: 'GET',
		url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
		params: { input: keyword, limit: '10' },
		headers: {
			'X-RapidAPI-Key': 'b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0',
			'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
		},
	};

	await axios
		.request(initOptions)
		.then(function (response) {
			const findResult = response.data.autocomplete.find(
				(place) => place.city
			);
			if (!findResult) return;
			placeWithCity = findResult; 
		})
		.catch(function (error) {
			console.error(error);
		});


	const { state_code, city } = placeWithCity;
	const options = {
		method: 'GET',
		url: 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale',
		params: {
			state_code: state_code,
			city: city,
			offset: '0',
			limit: '200',
			sort: 'relevance',
			beds_min: beds ? beds : '1',
		},
		headers: {
			'X-RapidAPI-Key': 'b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0',
			'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
		},
	};

	await axios
		.request(options)
		.then(function (response) {
			apiResult = response.data.listings
		})
		.catch(function (error) {
			console.error(error);
		});
}

// ROUTES

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.post('/message', async (req, res) => {
	const {keyword, beds} = req.body;
	await apiCall(keyword, beds);
	res.json({ data: apiResult });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
	const filePath = path.resolve(__dirname, '../client/dist/index.html');
	res.sendFile(filePath);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`App running on PORT: ${PORT}`);
});
