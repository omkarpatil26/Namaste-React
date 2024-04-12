import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import React, { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return "loading...";

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("itemCards", itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <h2>{costForTwo}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards
          ? itemCards.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}{" "}
                Rs{" "}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
