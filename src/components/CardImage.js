import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types'
import Loader from './Loader'
import defaultImage from  '../assets/img/card_default.jpg'

const CardImage = props => {
	const [loaded, setLoaded] = useState(false)
	const [error, setError] = useState(false)
	const [image, setImage] = useState(null)

	useEffect(() => {
		const img = new Image()
		img.src = props.src || defaultImage
		img.onload = () => {
			setLoaded(true)
		}
		img.onerror = (e) => {
			setLoaded(true)
			setError(true)
		}
		setImage(img)
	}, [props.src])

	if (error) {
		return (
			<img className="image-error" src={defaultImage} width={100} alt={props.alt} />
		)
	}
	if (loaded) {
		return (
			<img className={props.className} src={image.src} width={props.width} alt={props.alt} />
		)
	}
	return (
		<div className="loader-image">
			<Loader />
		</div>
	)
}

CardImage.propTypes = {
	src: propTypes.string,
	className: propTypes.string,
	width: propTypes.number,
	alt: propTypes.string
}

export default CardImage