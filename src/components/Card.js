import React, { useState } from 'react'
import propTypes from 'prop-types'
import CardImage from './CardImage'

const Card = props => {
	const [clicked, setClicked] = useState(false)
	const { name, image, type, brandName, price, storeName } = props.cardResults

	const handleClick = () => {
		setClicked(!clicked)
	}

	return (
		<div style={{ border: '1px solid black' }} onClick={handleClick}>
			<h1>{name}</h1>
			<CardImage className='card-image' src={image} alt={name} width={100} />
			<p className="card-type">{type}</p>
			<p className="card-brand">{brandName}</p>
			{clicked && (
				<div>
					<p className="card-price">Price: {price} €</p>
					<p className="card-store">{storeName}</p>
				</div>
			)}
		</div>
	)
}

Card.propTypes = {
	cardResults: propTypes.shape({
		image: propTypes.string,
		type: propTypes.string,
		brandName: propTypes.string,
		price: propTypes.number,
		storeName: propTypes.string
	})
}

export default Card
