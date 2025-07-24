import React from 'react'
import {data} from '../restApi.json'
const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Discover the favorites that keep our guests coming back for more. These are the dishes that have earned a special place on every table — bold, flavorful, and made with love. From the rich and creamy Butter Chicken to the fiery Spicy Paneer Tikka, every bite is a celebration of authentic taste. Craving something comforting? Our Hyderabadi Biryani and Rajma Chawal never disappoint. Whether you’re a fan of hearty curries, sizzling grills, or crispy street-style snacks, our most-loved dishes are sure to satisfy. Tried, tested, and totally addictive — these are the flavors our guests can't stop talking about.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu
