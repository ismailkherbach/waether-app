import React from "react";
import logo from "./logo.svg";
import axios from "axios";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";
import { connect } from "react-redux";
import { getWeatherDaily, getWeatherByCountry } from "./redux/actions";
import cities from "cities.json";
import "./App.css";
import countries from "./constants/countries.json";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherDaily: null,
      cities,
      countries,
      lat: "",
      lon: "",
      countryCode: "",
      days: ["sat", "sun", "mom", "tus", "wed", "thu", "fri"],
    };
  }
  handleChange = (e) => {
    this.setState({ wheatherCountry: e.target.value });
  };

  handleOnClick = (c) => {
    this.setState({ lat: c.CapitalLatitude, lon: c.CapitalLongitude }, () => {
      let lat = this.state.lat;
      let lon = this.state.lon;
      console.log(lat, lon);
      this.props.getWeatherByCountry(lat, lon);
    });
  };

  componentDidMount() {
    this.props.getWeatherDaily();
    console.log(this.props.wheaterReducer.item);
    console.log(countries);
    /*axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=37&lon=50&APPID=92c8300d061b52131015c992aad759d7"
      )
      .then((response) => {
        console.log(response.data);
        this.setState({ weatherDaily: response.data.daily });
      })
      .catch((error) => error);*/
  }
  render() {
    return (
      <div className="App">
        <div>
          <select onChange={this.handleChange}>
            {this.state.countries.map((c, i) => (
              <option
                onClick={() => this.handleOnClick(c)}
                key={i}
                value={c.CapitalName}
              >
                {c.CapitalName}{" "}
              </option>
            ))}
          </select>
        </div>

        {this.props.wheaterReducer.item && (
          <div>
            {this.props.wheaterReducer.item.map((c, i) => (
              <div key={i}>
                <span>
                  <h3>{this.state.days[i]}</h3>
                </span>
                <span>
                  {" "}
                  <h3>{c.temp.day}</h3>
                </span>
                <hr />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ wheaterReducer }) => {
  return { wheaterReducer };
};
const mapActionsToProps = { getWeatherDaily, getWeatherByCountry };

export default connect(mapStateToProps, mapActionsToProps)(App);
