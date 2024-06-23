import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import React, { useState } from "react";
import RestaurantCategory from "../components/RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return "loading...";

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log("itemCards", itemCards);

  const categories =
    resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("resInfo", resInfo);
  console.log("categories", categories);

  return (
    <div className=" menu text -center">
      <h1 className=" text-[20px] text-center m-[10px] font-bold ">{name}</h1>
      <h2 className=" text-[15px] text-center font-semibold">
        {cuisines} - {costForTwo} Rs
      </h2>
      <h2></h2>

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
      {categories &&
        categories.map((category, index) => (
          <div key={index}>
            <RestaurantCategory data={category?.card?.card} />
          </div>
        ))}
    </div>
  );
};

export default RestaurantMenu;
