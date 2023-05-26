import React from 'react';


// this is the second unique sections 

const ChefContact = () => {
	return (
		<div className='w-full md:flex md:px-20 px-8 items-center justify-between  bg-[#0a192f] py-4'>
			<div className=' text-center'>
				<p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
					Please give your valuable feedback
				</p>
				<p className='py-4 text-gray-300 text-lg font-bold'>
					Submit the form bellow or shoot me an email -hossen2022jamal@gmail.com
				</p>
			</div>
			<form
				method='POST'
				action='https://getform.io/f/ba30f03b-0577-47ee-9cb0-2bf081b7a534'
				className='flex flex-col max-w-[600px] w-full mt-20 text-gray-700'>
				<input
					className=' p-2 boxShadow outline-none text-md font-bold rounded'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 p-2 boxShadow outline-none text-md font-bold rounded'
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className=' p-2 boxShadow outline-none text-md font-bold rounded'
					name='message'
					rows='10'
					placeholder='Message'></textarea>
				<button className='rounded-full w-1/2 mx-auto bg-amber-400 px-4 py-3 mt-4 text-md text-pink-600 font-semibold hover:bg-amber-600'>
					Collaboration
				</button>
			</form>
		</div>
	);
};

export default ChefContact;
