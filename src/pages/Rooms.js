import React, { Component } from "react";
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

export default class Rooms extends Component {
  render() {
    return (
      <>
        <Hero hero="roomsHero">
          <Banner title="our rooms">
            <Link to="/" className="btn-primary">
              return home
            </Link>
          </Banner>
        </Hero>
        <RoomsContainer />
      </>
    );
  }
}
