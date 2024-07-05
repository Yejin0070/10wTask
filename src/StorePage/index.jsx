import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../common.css";

export default function StorePage() {
  const { id } = useParams();
  const [storeDetails, setStoreDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.stage.koreatech.in/shops/${id}`)
      .then((res) => {
        setStoreDetails(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="store-details">
      <h3>{storeDetails.name}</h3>
      <p>Phone: {storeDetails.phone}</p>
      <p>Address: {storeDetails.address}</p>
      <p>Opening Hours:</p>
      <ul>
        {storeDetails.open.map((hour, index) => (
          <li key={index}>
            {hour.day_of_week}: {hour.open_time} - {hour.close_time}
          </li>
        ))}
      </ul>
      {/* 음.. 배달요금/기타정보는 안보인다..*/}
    </div>
  );
}
