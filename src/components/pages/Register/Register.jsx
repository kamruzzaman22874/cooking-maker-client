import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
	const { createUser, user, logOut } = useContext(AuthContext);
	const [show, setShow] = useState(false);
	const [err, setErr] = useState('');
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/login';
	if (err === 'Firebase: Error (auth/email-already-in-use).') {
		return setErr('Already exits this email');
	}

	const handleShowPassword = () => {
		setShow(!show);
	};
	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const photo = form.photo.value;
		const password = form.password.value;
		if (name === '') {
			return setErr('Please enter your name');
		}
		if (email === '') {
			return setErr('Please enter your email');
		}

		if (password.length < 6) {
			return setErr('Please give at least 6 characters password');
		}

		createUser(email, password)
			.then((result) => {
				const createUser = result.user;
				console.log(createUser);
				profileUpdate(result.user, name, photo);
				setErr('');
				logOut();
				form.reset();
				navigate(from, { replace: true });
			})
			.catch((err) => setErr(err.message));
	};

	const profileUpdate = (user, name, photo) => {
		updateProfile(user, {
			displayName: name,
			photoURL: photo,
		})
			.then(() => {
				toast(`${user.displayName} Create an account successfully`);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className='flex justify-center items-center pt-28 bg-[#0a192f] pb-6'>
			<div className='w-full max-w-md p-8 space-y-3 rounded-xl mx-auto shadow-2xl border-2 border-pink-600  text-white  dark:bg-gray-900'>
				<div className='mb-8 text-center'>
					<h1 className='text-4xl font-bold'>Create an account</h1>
				</div>
				<form
					action=''
					onSubmit={handleRegister}
					className=' ng-untouched ng-pristine ng-valid'>
					<div className='space-y-2'>
						<div>
							<label htmlFor='text' className='block mb-2 text-sm'>
								Name
							</label>
							<input
								type='text'
								name='name'
								id='text'
								placeholder='Name'
								className='w-full px-4 py-3 rounded-md dark:border-gray-700 outline-pink-600 text-black dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>
						</div>

						<div>
							<label htmlFor='email' className='block mb-2 text-sm'>
								Email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								placeholder='cookingmaker@gmail.com'
								className='w-full px-4 py-3 rounded-md dark:border-gray-700 outline-pink-600 text-black dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>
						</div>
						<div>
							<label htmlFor='img' className='block mb-2 text-sm'>
								PhotUrl
							</label>
							<input
								type='text'
								name='photo'
								id='img'
								placeholder='Enter your Photo'
								className='w-full px-4 py-3 rounded-md dark:border-gray-700 outline-pink-600 text-black dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>
						</div>
						<div className='relative'>
							<label htmlFor='password' className='block mb-2 text-sm'>
								Password
							</label>
							<input
								type={!show ? 'password' : 'text'}
								name='password'
								id='password'
								placeholder='Password'
								className='w-full px-4 py-3 rounded-md dark:border-gray-700 outline-pink-600 text-black dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400'
							/>
							<Link
								className='absolute right-2 bottom-3'
								onClick={handleShowPassword}>
								{!show ? (
									<FaEye className='text-primary'></FaEye>
								) : (
									<FaEyeSlash className='text-primary'></FaEyeSlash>
								)}
							</Link>
						</div>
						<div>
							<h2 className='text-center text-md text-red-600 font-bold'>
								{err}
							</h2>
						</div>
					</div>
					<div className=' mt-8'>
						<button className='w-full mx-auto rounded-full bg-amber-400 px-4 py-3 mt-4 text-md text-pink-600 font-semibold hover:bg-amber-600'>
							Sign up
						</button>
						<div className='px-6 flex gap-2 pt-2 text-sm justify-center dark:text-gray-400'>
							<p className='text-md'>Already have an account please?</p>
							<Link
								to='/login'
								rel='noopener noreferrer'
								href='#'
								className='hover:underline dark:text-primary'>
								Sign in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
