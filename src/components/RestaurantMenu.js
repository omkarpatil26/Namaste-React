import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(RESTAURANT_URL + resId);

    const json = await data.json();
    console.log("json", json);
    setResInfo(json.data);
  };

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
