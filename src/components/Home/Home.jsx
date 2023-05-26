import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ChefContact from '../ChefInformation/RecipeInfo/UniquePage/ChefContact';
import UniquePage from '../ChefInformation/RecipeInfo/UniquePage/UniquePage';
import Spinner from '../pages/Loader/Spinner';
import HomePage from './Home/HomePage';

const Home = () => {
	// useEffect use for all data loaded from the server si

	const [shapesData, setShapeData] = useState([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		fetch('https://shape-recipe-server-kamruzzaman22874.vercel.app/shapes')
			.then((res) => res.json())
			.then((data) => {
				setShapeData(data);
				setLoader(true);
			});
	}, []);

	// import need to some components
	return (
		<div>
			<HomePage></HomePage>
			{loader ? <Banner shapesData={shapesData}></Banner> : <Spinner></Spinner>}
			<UniquePage></UniquePage>
			<ChefContact></ChefContact>
		</div>
	);
};

export default Home;
