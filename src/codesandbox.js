/* let apiKey = "5a41d1b27a5b53105892161b092b2ae1";
let apiUrl =
  "//api.openweathermap.org/data/2.5/weather?q=Copenhagen,dk&units=metric&appid=" +
  apiKey;

// ## Step 1 component goes here ##
const App = () => {
  const currentTime = new Date();
  const timestamp = `${currentTime.getHours()}h : ${currentTime.getMinutes()}m : ${currentTime.getSeconds()}s`;
  const [weatherData, setWeatherData] = useState({ data: "", time: "" });
  const [reload, setReload] = useState(false);

  useEffect(() => {
    let interval = setInterval(() => setReload(!reload), 1000 * 3);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setWeatherData(prevWeatherData => ({
        ...prevWeatherData,
        data: response.data,
        time: timestamp
      }));
    });
  }, [timestamp, weatherData, reload]);

  return (
    <div>
      {weatherData && (
        <Weather data={weatherData.data} time={weatherData.time} />
      )}
    </div>
  ); */