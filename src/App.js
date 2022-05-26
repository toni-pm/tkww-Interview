import React, { useState, useEffect } from 'react'
import API from './services/api'
import CardList from './components/CardList'
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [products, setProducts] = useState([])
	const [searchInput, setSearchInput] = useState('')
	const [searchProduct, setProductInput] = useState('')

	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await API.getProducts()
				setProducts(res.data)
				setError(false)
			} catch (e) {
				setError(true)
			}
			setLoading(false)
		}

		getProducts()
	}, [])

	return (
		<>
			<Header />
			<div className="container">
				<form>
					<label htmlFor="search-input">Search:</label>
					<input
						id="search-input"
						type="text"
						name="search"
						value={searchInput}
						onChange={e => setSearchInput(e.target.value)}
					/>
					<label htmlFor="search-type">Choose a product type:</label>
					<select id="search-type" onChange={e => setProductInput(e.target.value)} defaultValue="">
						<option value="">-</option>
						<option value="RETAIL">Retail</option>
						<option value="CASH">Cash</option>
					</select>
				</form>
			</div>
			<div className="container">
				{loading
					? <Loader />
					: error
						? <p>Oops! Something went wrong! :(</p>
						: <CardList products={products} searchInput={searchInput} searchProduct={searchProduct} />}
			</div>
			<Footer />
		</>
	)
}

export default App
