import { useState } from "react";
import ItemList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setSowItems] = useState(false);

  const handleAccordion = () => {
    setSowItems(!showItems);
  };

  return (
    <>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleAccordion}
        >
          <span className="font-bold ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </>
  );
};
export default RestaurantCategory;
