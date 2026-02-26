import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon />;
    if (info.temp > 15) return <SunnyIcon />;
    return <AcUnitIcon />;
  };

  return (
    <div className="Info">
      <div className="cardContainer">
        <Card
          sx={{
            width: 420,
            maxWidth: "90vw",
            backgroundColor: "rgba(255,255,255,0.92)",
            boxShadow: "0px 8px 25px rgba(209, 35, 35, 0.3)",
            borderRadius: "12px",
          }}
        >
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                color: "#ec2525",
              }}
            >
              {info.city.toUpperCase()} {getWeatherIcon()}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              component="div"
              sx={{ textAlign: "center" }}
            >
              <p>Temperature: {info.temp}°C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>Max Temp: {info.max_temp}°C</p>
              <p>Min Temp: {info.min_temp}°C</p>
              <p>
                Weather: <i>{info.weather}</i>
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}