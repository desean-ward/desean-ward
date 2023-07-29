import React from 'react';
import { motion, useScroll } from 'framer-motion';

const LiIcon = ({ reference }) => {
	const { scrollYProgress } = useScroll({
		target: reference,
		offset: ['center end', 'end center'],
	});

	return (
		<figure className='absolute left-0  stroke-gray-700 '>
			<svg
				className='-rotate-90'
				width='75'
				height='75'
				viewbox='0 0 100 100'>
				<circle
					cx='75'
					cy='50'
					r='20'
					className='stroke-[tan] stroke-1 fill-none'
				/>
				<motion.circle
					cx='75'
					cy='50'
					r='20'
					className='stroke-[5px] fill-gray-200'
					style={{ pathLength: scrollYProgress }}
				/>
				<circle
					cx='75'
					cy='50'
					r='10'
					className='stroke-1 fill-[tan] animate-pulse'
				/>
			</svg>
		</figure>
	);
};

export default LiIcon;
