import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
	<div
		style={{
			backgroudImage: `url(${imageUrl})`
		}}
		className={`${size} menu-item`}
	>
		<div claName='content'>
			<h1 className='title'>{title}</h1>
			<span className='subtitle'>props</span>
		</div>
	</div>
)

export default MenuItem;
