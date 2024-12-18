import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offers/Offer'
import Newcollection from '../Components/NewCollection/Newcollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

 const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <Newcollection/>
      <NewsLetter/>
    </div>
  )
}


export default Shop