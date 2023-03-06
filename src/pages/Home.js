import Search from "../components/Search";
import Show from "../components/Show";
import { getCurrentData } from "../services/Api";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const Home = () => {
  const [currentData, setCurrentData] = useState();

  const [city, setCity] = useState("");
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (cityName) {
      const fetchData = async () => {
        const data = await getCurrentData(cityName);
        setCurrentData(data);
      };
      fetchData();
    }
  }, [cityName]);

  const searcher = (e) => {
    e.preventDefault();
    if (currentData?.name.toLowerCase().includes(city)) {
      alert("already searched for this city");

      return;
    }

    getCurrentData(city).then((data) => setCurrentData(data));
    setCityName(city);
    setCity("");
  };

  return (
    <Container align="center">
      <Search searcher={searcher} setCity={setCity} city={city} />

      <Show currentData={currentData} />
    </Container>
  );
};
export default Home;
