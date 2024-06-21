import { useState, useEffect } from "react";
import axios from "axios";
import { Proxi_Url, Fetch_Card_URL } from "../../constants/api";

const useRestaurent = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        Proxi_Url + encodeURIComponent(Fetch_Card_URL)
      );
      const json = response.data;
      setRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error calling API: ", error);
    }
  };

  return restaurants;
};

export default useRestaurent;
