import React, { useState } from 'react';
import { useEffect } from 'react';
import ShapeInfo from '../ChefInformation/ShapeInfo/ShapeInfo';
// const ShapeInfo = React.lazy(() => import ("../ChefInformation/ShapeInfo/ShapeInfo"))

const Banner = ({ shapesData }) => {
	return (
		// data loaded from server side

		<div className='bg-[#0a192f]'>
			<h2 className='text-gray-300 px-28 text-3xl pt-10 font-semibold'>
				<span className='md:ml-2 ml-5'>All Chef</span> Information
			</h2>
			<div className='grid md:grid-cols-3 gap-8 md:px-20 p-6  '>
				{shapesData.map((shape) => (
					<ShapeInfo key={shape.id} shape={shape}></ShapeInfo>
				))}
			</div>
		</div>
	);
};

export default Banner;
