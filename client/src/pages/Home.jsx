import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context';
import AboutPrompt from '../components/AboutPrompt';
import Hero from '../components/Hero'
import Search from '../components/Search';
import Reviews from '../components/Reviews';
import SearchPrompt from '../components/SearchPrompt';
import Footer from '../components/Footer'

const Home = () => {
	const { searchClose, searchResults } = useContext(AppContext);

  return (
		<>
			<Hero />
			{!searchClose ? <Search /> : ''}
			<AboutPrompt />
			<Reviews />
			<SearchPrompt />
			<Footer />
		</>
	);
}

export default Home