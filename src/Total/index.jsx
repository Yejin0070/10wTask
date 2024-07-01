import "../common.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Total() {
  const [shops, setShops] = useState([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    axios
      .get("https://api.stage.koreatech.in/shops")
      .then((res) => {
        console.log(res.data);
        setShops(res.data?.shops || []);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterShops = () => {
    if (category === "all") {
      return shops;
    } else if (category === "chicken") {
      return shops.filter((shop) => shop.category_ids[1] === 2);
    } else if (category === "pizza") {
      return shops.filter((shop) => shop.category_ids[1] === 3);
    }
    return shops;
  };

  const handleShopClick = (shop) => {
    //클릭하면 가게 상세 정보 보이게 하기,,,
    console.log("Shop clicked:", shop);
  };

  const renderShopList = () => {
    const filteredShops = filterShops();

    return (
      <div className="storesContainer">
        {filteredShops.length > 0 ? (
          filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="shop-item"
              onClick={() => handleShopClick(shop)}
            >
              <h3>{shop.name}</h3>
              <p>Phone: {shop.phone}</p>
              <p>Opening Hours:</p>
              <ul>
                {shop.open.map((hour, index) => (
                  <li key={index}>
                    {hour.day_of_week}: {hour.open_time} - {hour.close_time}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No shops available</p>
        )}
      </div>
    );
  };

  return (
    <div className="topnav">
      <h3>메뉴</h3>
      <header>
        <button className="viewTotal" onClick={() => setCategory("all")}>
          전체보기
        </button>
        <button className="viewChicken" onClick={() => setCategory("chicken")}>
          치킨
        </button>
        <button className="viewPizza" onClick={() => setCategory("pizza")}>
          피자
        </button>
      </header>
      <h3>상점</h3>
      {renderShopList()}
    </div>
  );
}
