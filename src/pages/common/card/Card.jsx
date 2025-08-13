import React from "react";
import "./Card.css";


const Card = ({item, key}) => {

  return (
    <div className="card">
      <figure>
        <img
          // src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          src={item.image}
          alt="loading..."
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">{item.category}</div>
        </h2>
        <p>
          {item.title}
        </p>
        <div className="card-actions">
       <div className="badge badge-outline">₹ {item.price}</div>
          <div className="badge badge-outline">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
