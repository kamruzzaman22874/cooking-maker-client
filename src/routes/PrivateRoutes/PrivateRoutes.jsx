import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../../components/pages/Loader/Spinner';
import { AuthContext } from '../../components/Providers/AuthProvider';

// implement the context api and share other components 

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	if (loading) {
		return (
			<Spinner></Spinner>
		);
	}
	if (user) {
		return children;
	}
	return (
		<Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
	);
};

export default PrivateRoutes;
