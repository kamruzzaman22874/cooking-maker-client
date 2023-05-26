import { createBrowserRouter } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Blog from '../components/Blog/Blog';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Main from '../components/layout/Main';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import RecipeInfo from '../components/ChefInformation/RecipeInfo/RecipeInfo';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage></ErrorPage>,
		element: <Main></Main>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
			{
				path: '/shapes',
				element: <Banner></Banner>,
			},
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
			{
				path: '/recipes/:id',
				element: (
					<PrivateRoutes>
						<RecipeInfo></RecipeInfo>
					</PrivateRoutes>
				),
				loader: ({ params }) =>
					fetch(
						`https://shape-recipe-server-kamruzzaman22874.vercel.app/recipes/${params.id}`
					),
			},
		],
	},
]);

export default router;
