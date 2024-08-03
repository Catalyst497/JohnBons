const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const getPlaceWithCity = async (keyword) => {
  const initOptions = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete",
    params: { input: keyword, limit: "10" },
    headers: {
      "X-RapidAPI-Key": "b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
  };
  try {
    const locationsResp = await axios.request(initOptions);
    console.log(locationsResp);
    const findResult = locationsResp.data.autocomplete.find(
      (place) => place.city
    );
    console.log("findResult", findResult);
    return findResult;
  } catch (err) {
    console.log(err);
  }
};

async function apiCall(keyword, beds) {
  //   await axios
  //     .request(initOptions)
  //     .then(function (response) {
  //       const findResult = response.data.autocomplete.find((place) => place.city);
  //       if (!findResult) return;
  //       placeWithCity = findResult;
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });

  const { state_code, city } = await getPlaceWithCity(keyword);
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
    params: {
      state_code: state_code,
      city: city,
      offset: "0",
      limit: "200",
      sort: "relevance",
      beds_min: beds ? beds : "1",
    },
    headers: {
      "X-RapidAPI-Key": "b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0",
      "X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  const apiResult = response.data.listings;
  return apiResult;
}

// ROUTES

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.post("/message", async (req, res) => {
  const { keyword, beds } = req.body;
  const apiResult = await apiCall(keyword, beds);
  console.log('apiResult', apiResult);
  // res.json({ data: apiResult });
});

// All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
// 	const filePath = path.resolve(__dirname, '../client/dist/index.html');
// 	res.sendFile(filePath);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT: ${PORT}`);
});
