import { useState, useEffect, useRef, createContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//create a context, with createContext api
export const AppContext = createContext();

const AppContextProvider = (props) => {
	const navigate = useNavigate();

	// this states will be shared with all components
	const [keyword, setKeyword] = useState(null);
	const [response, setResponse] = useState(null);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
	const [searchResults, setSearchResults] = useState([]);
	const [searchOpen, setSearchOpen] = useState(false);
	const [searchClose, setSearchClose] = useState(true);
	const [searchActive, setSearchActive] = useState(false);
	const [beds, setBeds] = useState('1');
	const searchRef = useRef();

	useEffect(() => {
		if (!searchOpen) {
			if (!searchClose) {
				searchRef.current && searchRef.current.classList.add('opacity-0');
			}
			setTimeout(() => setSearchClose(true), 500);
		} else {
			setSearchClose(false);
		}
	}, [searchOpen]);

	function windowResize() {
		window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
	}
	useEffect(() => {
		window.addEventListener('resize', () => windowResize());

		return window.removeEventListener('resize', () => windowResize());
	}, []);
	const getListedEstates = async (city, stateCode) => {
		const options = {
			method: 'GET',
			url: 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale',
			params: {
				state_code: stateCode,
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
				if (response.data) setSearchResults(response.data.listings);
				else setSearchResults([]);
				navigate('/searchresults');
				setSearchOpen(false);
				setSearchActive(false)
			})
			.catch(function (error) {
				console.error(error);
				setSearchOpen(false);
			});
	};

	const getProperties = async () => {
		// setSearchOpen(false);
		setSearchActive(true);
		const options = {
			method: 'GET',
			url: 'https://realty-in-us.p.rapidapi.com/locations/v2/auto-complete',
			params: { input: keyword, limit: '10' },
			headers: {
				'X-RapidAPI-Key': 'b01c10cd85mshde5bc35ca808ed7p1aa70bjsn3ad5993667e0',
				'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com',
			},
		};

		await axios
			.request(options)
			.then(function (response) {
				const placeWithCity = response.data.autocomplete.find(
					(place) => place.city
				);
				const { state_code, city } = placeWithCity;
				getListedEstates(city, state_code);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		// This is the provider providing states
		<AppContext.Provider
			value={{
				isDesktop,
				setIsDesktop,
				keyword,
				setKeyword,
				setResponse,
				searchResults,
				setSearchResults,
				searchOpen,
				setSearchOpen,
				searchRef,
				searchClose,
				setSearchClose,
				searchActive,
				setSearchActive,
				beds,
				setBeds,

				// Functions
				getProperties,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContextProvider;
