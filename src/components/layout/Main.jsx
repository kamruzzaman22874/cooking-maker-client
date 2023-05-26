import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Footer/Footer';
import Header from '../pages/Header/Header';
import { AuthContext } from '../Providers/AuthProvider';

const Main = () => {
	const { loading } = useContext(AuthContext);


	// use the layout and loading globally from here
	return (
	
		<div>
				<>
					<Header></Header>
					<Outlet></Outlet>
					<Footer></Footer>
				</>
		
		</div>
	);
};

export default Main;
