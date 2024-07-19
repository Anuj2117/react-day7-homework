
import Data from "./Data";
import "../App.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import StarIcon from "@mui/icons-material/Star";

function Restorent() {
  console.log(Data);

  return (
    <>
      <div className="wrapper">
        {Data.map((data, index) => {
          const { name, address, postcode, rating, type_of_food, URL } = data;
          
          let Star = [];
          for (let i = 0; i < rating; i++) {
            Star.push(<StarIcon key={i} style={{color:"yellow"}}/>);
          }

          return (
            <div className="dataDiv" key={index}>
              <h2>{name}</h2>
              <p>
                <LocationOnIcon
                  style={{ fontSize: "15px", marginRight: "5px", color: "red" }}
                />
                {address}
              </p>
              <p>{postcode}</p>
              <p>{Star}</p>

              <div className="visitURL">
                <p>
                  <RestaurantIcon
                    style={{ fontSize: "15px", marginRight: "5px", color: "green" }}
                  />
                  {type_of_food}
                </p>
                <a href={URL}>Visit Menu</a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Restorent;
