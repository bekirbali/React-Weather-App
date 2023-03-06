import Search from "../components/Search";
import Show from "../components/Show";
import { getCurrentData } from "../services/Api";
import { useState, useEffect } from "react";
import { Container } from "@mui/system";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    if (currentData?.name.toLowerCase().includes(city.toLowerCase())) {
      notify();

      return;
    }

    getCurrentData(city).then((data) => setCurrentData(data));
    setCityName(city);
    setCity("");
  };
  const notify = () => {
    toast.error("You're already seeing this city!!!");
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <Container align="center">
        <Search searcher={searcher} setCity={setCity} city={city} />

        <Show currentData={currentData} />
      </Container>
    </>
  );
};
export default Home;
