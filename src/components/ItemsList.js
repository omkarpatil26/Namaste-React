import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  console.log("props", props);
  console.log("CDN_URL", CDN_URL);

  return (
    <>
      {props.items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-200"
        >
          {/* <img src={CDN_URL + item.card.info.imageId} className="w-14" /> */}
          {/* <img
            className="logo-card rounded-lg"
            src={CDN_URL + cloudinaryImageId}
          /> */}

          <div>
            <span className="font-bold">
              {item.card.info.name} - {item.card.info.price / 100} ₨
            </span>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
