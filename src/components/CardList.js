import React from 'react'
import Card from './Card'

const CardList = ({ products, searchProduct, searchInput }) => {
	const match = (a, b) => a.toLowerCase().match(b.toLowerCase()) ? true : false
	const cardResults = (!searchProduct && !searchInput)
		? products
		: products.filter(product => {
			const typeMatch = searchProduct ? product.type === searchProduct : true
			const nameMatch = searchInput ? match(product.name, searchInput) : true
			return typeMatch && nameMatch
		})

	return (
		<>
			<h1>Results: </h1>
			<div>
				{cardResults.length > 0
					? (
						<>
							<p>{cardResults.length} {cardResults.length > 1 ? 'results' : 'result'} found</p>
							{cardResults.map((product, i) =>
								<Card key={i} cardResults={product} />
							)}
						</>
					)
					: <p>No result found</p>
				}
			</div>
		</>
	)
}

export default CardList