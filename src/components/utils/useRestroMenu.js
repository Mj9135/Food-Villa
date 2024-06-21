import { useState, useEffect } from "react";
import axios from "axios";

const useRestroMenu = (resId) => {
  const [restro, setRestro] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const proxyUrl = "https://api.allorigins.win/raw?url=";
      const menuApi =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=" +
        resId;

      const response = await axios.get(proxyUrl + encodeURIComponent(menuApi));
      const json = response.data;

      setRestro(json.data);
    } catch (error) {
      console.log("Error fetching menu: ", error);
    }
  };
  console.log(restro);
  return restro;
};
export default useRestroMenu;
