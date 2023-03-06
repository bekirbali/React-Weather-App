const Show = ({ currentData }) => {
  return (
    <>
      {currentData && (
        <div className="weather-main">
          <h1>
            {currentData?.name},{currentData?.sys?.country}
          </h1>
          <ul>
            <li>{currentData?.weather?.map((x) => x.main)}</li>
            <img
              src={`http://openweathermap.org/img/wn/${currentData?.weather?.map(
                (x) => x.icon
              )}@2x.png`}
              alt=""
            />
            <li>
              {currentData?.weather?.map((item) => {
                const details = item.description.split(" ");
                let capitalize = details
                  .map(
                    (detail) => detail.charAt(0).toUpperCase() + detail.slice(1)
                  )
                  .join(" ");
                return capitalize;
              })}
            </li>
            <li>Temperature: {currentData?.main?.temp} ℃</li>
            <li>Humidity: {currentData?.main?.humidity}%</li>
            <li>Wind: {currentData?.wind?.speed} km/h</li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Show;
