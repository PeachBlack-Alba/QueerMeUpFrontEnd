import React, { Component } from "react";
import { Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchItineraries } from "../Store/Actions/ItineraryActions";
import { Link } from "react-router-dom";

class Itinerary extends Component {
  state = {
    itineraries: []
  };

  componentDidMount() {
    //this.fetchCities(); // Cuando la web está "montada", es cuando generamos la función fetchcities, con la información de cities (lista), por lo tanto el state varia y se render la función render de nuevo pero con la información modificada
    this.props.fetchItineraries(this.props.match.params.city);
    //console.log(this.props);
  }

  render() {
    console.log(this.props);
    const { itineraries } = this.props.itineraries;
    //let itinerariesData = this.props.itineraries.itineraries
    return (
      <div className="itinerariesContent">
        <h1>Welcome to {this.props.match.params.city}</h1>
        {itineraries.map(itineraries => {
          return (
            <div key={itineraries}>
              <Link className="seeItineraries">{itineraries.title}</Link>
              <img
                src={itineraries.img}
                alt="pic"
                style={{
                  width: 350,
                  height: 200,
                  objectFit: "cover",
                  overflow: "hidden",
                  display: "block",
                  borderRadius: 50,
                  marginTop: 20,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10
                }}
              />
              <p className="itinerariesInformation">
                Duration (hours):{itineraries.duration}
              </p>
              <p className="itinerariesInformation">
                Price (€):{itineraries.price}
              </p>
              {/* <p className="cityCountry">{itineraries.hashtags}</p> */}
              <p className="itinerariesInformation">{itineraries.dates}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    itineraries: state.itineraries
  };
};
const mapDispatchToProps = dispatch => ({
  fetchItineraries: city => dispatch(fetchItineraries(city))
});
export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
