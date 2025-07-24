import React from "react";
import "./MenuPage.css";

const dishes = [
  { id: 1, name: "Spicy Paneer Tikka", image: "/images/paneer.jpg", price: "₹220", serving: "1 plate" },
  { id: 2, name: "Butter Chicken", image: "/images/butter-chicken.png", price: "₹350", serving: "1 bowl" },
  { id: 3, name: "Masala Dosa", image: "/images/dosa.jpg", price: "₹120", serving: "1 piece" },
  { id: 4, name: "Chole Bhature", image: "/images/chole.jpg", price: "₹160", serving: "2 pcs" },
  { id: 5, name: "Hyderabadi Biryani", image: "/images/biryani.jpg", price: "₹300", serving: "Full" },
  { id: 6, name: "Rajma Chawal", image: "/images/rajma.jpg", price: "₹180", serving: "1 plate" },
  { id: 7, name: "Pav Bhaji", image: "/images/pav-bhaji.jpg", price: "₹130", serving: "2 pav" },
  { id: 8, name: "Chicken Tandoori", image: "/images/tandoori.jpg", price: "₹260", serving: "Half" },
  { id: 9, name: "Aloo Paratha", image: "/images/paratha.jpg", price: "₹90", serving: "1 piece" },
  { id: 10, name: "Fish Curry", image: "/images/fish-curry.jpg", price: "₹280", serving: "1 bowl" },
  { id: 11, name: "Veg Pulao", image: "/images/pulao.jpg", price: "₹160", serving: "1 plate" },
  { id: 12, name: "Dhokla", image: "/images/dhokla.jpg", price: "₹100", serving: "6 pcs" },
  { id: 13, name: "Kadai Mushroom", image: "/images/kadai-mushroom.jpg", price: "₹220", serving: "1 bowl" },
  { id: 14, name: "Egg Curry", image: "/images/egg-curry.jpg", price: "₹200", serving: "1 bowl" },
  { id: 15, name: "Malai Kofta", image: "/images/malai-kofta.jpg", price: "₹240", serving: "1 bowl" },
  { id: 16, name: "Rosted-Lamb", image: "/images/roast-lamb.jpg", price: "₹420", serving: "Full" }
];

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Our Delicious Menu</h1>
      <div className="menu-grid">
        {dishes.map((dish) => (
          <div className="menu-card" key={dish.id}>
            <img src={dish.image} alt={dish.name} />
            <div className="menu-info">
              <div className="meta">
                <span className="price">{dish.price}</span>
                <span className="serving">{dish.serving}</span>
              </div>
              <h3>{dish.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
