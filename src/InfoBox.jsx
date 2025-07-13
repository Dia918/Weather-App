import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1071374974/photo/beautiful-sunrise-in-the-streets-of-manhattan-with-a-manhole-that-expels-steam-new-york.jpg?s=612x612&w=is&k=20&c=2--TLzV-Au6leB4ghKuy8zB4cL3YhwHP62Slk5ZEElk=";

    const HOT_URL = "https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.jpg?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI=";
    const COLD_URL = "https://tse1.mm.bing.net/th/id/OIP.4T-8vQVMsXZiX1I1c50EtAHaE4?rs=1&pid=ImgDetMain&o=7&rm=3";
    const RAIN_URL = "https://static.vecteezy.com/system/resources/thumbnails/042/146/565/small_2x/ai-generated-beautiful-rain-day-view-photo.jpg";

    return (
        <div className="InfoBox">
            <div className="CardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         { info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
          }

        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"} >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
                The wheather can be described as <i>{info.weather}</i> and feels like {info.feels_like}&deg;C
            </p>
        </Typography>
      </CardContent>
   
    </Card>
    </div>
        </div>
    );
}