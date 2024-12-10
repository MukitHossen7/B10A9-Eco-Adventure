/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const ApiProvider = ({ children }) => {
  const [adventuresData, setAdventuresData] = useState([]);
  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/adventuredata.json");
        const data = await res.json();
        setAdventuresData(data);
        const clientRes = await fetch("/clientReview.json");
        const clientData = await clientRes.json();
        setClientData(clientData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const apiInfo = {
    adventuresData,
    clientData,
  };
  return <ApiContext.Provider value={apiInfo}>{children}</ApiContext.Provider>;
};

export default ApiProvider;
