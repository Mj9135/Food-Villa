import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Mj",
    email: "mjcse@gmail.com",
  },
});
export default userContext;
