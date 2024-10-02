import React from 'react'
import { Link } from 'react-router-dom'
import Productcart from '../components/Productcart'
import { photo } from '../assets/data'

const Home = () => {

    const addToCartHandler = () => {

    }
    return (
        <div className='home'>
            <section>

            </section>
            <h1>
                Latest Products
                <Link to="/search" className='findMore'>
                    More
                </Link>
            </h1>
            <main>
                <Productcart productId="abcd" name='Macbook' price={"4545"} stock={"345"} handler={addToCartHandler} photo={photo} />
            </main>
        </div>
    )
}

export default Home