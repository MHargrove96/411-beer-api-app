import React, { useState, useEffect } from "react";
import '../styles/BeerCard.css'
import LikeButton from "./LikeButton";

function BeerCard(props) {

  const {
    image_url,
    name,
    first_brewed,
    tagline,
    abv,
    description
  } = props;
  return (
    <li className="listItem" style={{ listStyle: "none" }}>
      <h3 className="title">
        {name} <span>{first_brewed}</span>
      </h3>
      <h4 className="">{tagline}</h4>
      <p>
        <span>{abv} </span>
        {description}
      </p>
      <img style={{ height: "200px" }} src={image_url} alt="product"></img>
      <br />
      <LikeButton/>
      <hr />
    </li>
  );
};

export default BeerCard;