import { useState, useEffect } from "react";
import axios from "axios";
import { Fetch_Menu_Url } from "../../constants/api";
import { Proxi_Url } from "../../constants/api";

const useRestroMenu = (resId) => {
  const [restro, setRestro] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    try {
      const menuApi = Fetch_Menu_Url + resId;
      const response = await axios.get(Proxi_Url + encodeURIComponent(menuApi));
      const json = response.data;
      setRestro(json.data);
    } catch (error) {
      console.log("Error fetching menu: ", error);
    }
  };
  return restro;
};
export default useRestroMenu;
