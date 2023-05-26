import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import FocusLink from '../../FocusLink/FocusLink';
import { FcDownload } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Header = () => {
	const [nav, setNav] = useState(false);
	const { user, logOut, loading } = useContext(AuthContext);
	const handleClick = () => setNav(!nav);
	const loggedOut = () => {
		// uses logOut from context api

		logOut()
			.then(() => {
				toast(`${user.displayName} logged out`);
			})
			.catch((err) => console.log(err));
	};
	return (
		<div>
			<div className='navbar w-full h-[100px] absolute top-0 left-0 z-50  right-0 flex justify-between items-center bg-[#0a192f]  text-gray-300 md:px-36 px-3 py-10  shadow-2xl'>
				<div className='flex-1'>
					<h2 className='flex items-center gap-3'>
						<span className='md:text-6xl text-3xl text-pink-600 font-bold'>
							Cooking
						</span>
						<span className='md:text-xl font-bold pt-4'>Maker</span>
					</h2>
				</div>
				<div className='flex-none '>
					<ul className='hidden md:flex gap-5 items-center menu-horizontal px-1'>
						<li className='shadow-md p-3 hover:bg-blue-900 rounded font-bold text-lg'>
							<FocusLink to='/' smooth={true} duration={500}>
								Home
							</FocusLink>
						</li>
						<li className='shadow-md p-3 hover:bg-blue-900 rounded font-bold text-lg'>
							<FocusLink to='/blog' smooth={true} duration={500}>
								Blog
							</FocusLink>
						</li>
						{user ? (
							<>
								<div
									className='avatar tooltip flex items-center gap-5 tooltip-bottom tooltip-secondary'
									data-tip={user.displayName}>
									<div className='w-10 rounded-full cursor-pointer ring ring-primary ring-offset-base-100 ring-offset-2'>
										<img src={user.photoURL} />
									</div>
								</div>
								<button
									onClick={loggedOut}
									className='shadow-md p-3 hover:bg-blue-900 rounded font-bold text-lg'>
									<FocusLink to='/login'>Sign Out</FocusLink>
								</button>
							</>
						) : (
							<button className='shadow-md p-3 hover:bg-blue-900 rounded font-bold text-lg'>
								<FocusLink to='/login'>Login</FocusLink>
							</button>
						)}
					</ul>
				</div>

				<div onClick={handleClick} className='md:hidden z-10'>
					{!nav ? <FaBars /> : <FaTimes />}
				</div>
				<ul
					className={
						!nav
							? 'hidden'
							: 'absolute top-0 left-0 w-full h-[45rem] bg-[#0a192f] flex flex-col justify-center items-center '
					}>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='/' smooth={true} duration={500}>
							Home
						</Link>
					</li>
					<li className='py-6 text-4xl'>
						<Link onClick={handleClick} to='/blog' smooth={true} duration={500}>
							Blog
						</Link>
					</li>
					<li>
						<Link to='/login' onClick={handleClick} className='py-6 text-4xl'>
							Login
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
