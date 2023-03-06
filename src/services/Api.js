import axios from "axios";

const API_KEY = "6d8d685969d439d8178c3b7a901ebcf4";

export const getCurrentData = async (city) => {
  const { data } = await axios(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return data;
};

export const getFiveDaysData = async (city) => {
  const { data } = await axios(
    `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
  );
  return data;
};
