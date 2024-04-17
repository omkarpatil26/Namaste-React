import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "aliceblue",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="resCard rounded-lg m-4 p-4 w-[200px] bg-gray-100 hover:bg-gray-200 ">
      <img className="logo-card rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
