import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  //console.log("API Key:", API_KEY); 

  // Fetch weather by city name
  const getWeather = async (cityName) => {
    const response = await fetch(
      `${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    return {
      city: data.name,
      temp: data.main.temp,
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      humidity: data.main.humidity,
      feels_like: data.main.feels_like,
      weather: data.weather[0].description,
    };
  };

  // Form submit
  const submitHandle = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const trimmedCity = city.trim();
      if (!trimmedCity) return;

      const newInfo = await getWeather(trimmedCity);
      updateInfo(newInfo);
      setCity("");
      setError(false);
    // eslint-disable-next-line no-unused-vars
    } catch (error){
      setError(true);
    }
  };

  return (
    <div className="search_box">
      <form onSubmit={submitHandle}>
       <TextField
  label="Search for a city"
  variant="outlined"
  value={city}
  onChange={(e) => {
    setCity(e.target.value);
    setError(false);
  }}
  sx={{
    "& .MuiInputLabel-root": {
      color: "#fff",       // label color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff",
      },
      "& input": {
        color: "#fff",     // typed text color
        fontWeight: "bold",
      },
      "&:hover fieldset": {
        borderColor: "#00e5ff",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00e5ff",
      },
    },
  }}
/>

        <br />
        <br />

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            ❌ No such place exists!
          </p>
        )}
      </form>
    </div>
  );
}