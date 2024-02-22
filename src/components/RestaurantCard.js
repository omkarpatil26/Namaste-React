import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "aliceblue",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="resCard" style={styleCard}>
      <img className="logo-card" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
