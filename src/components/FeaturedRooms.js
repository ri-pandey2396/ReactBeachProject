import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "../components/Room";
import loadingGif from "../images/gif/loading-arrow.gif";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // console.log(this.context);
    let { loading, featuredRooms: rooms } = this.context;

    rooms = rooms.map(room => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <div className="section-title">
          <h4>Featured Rooms</h4>
          <div />
        </div>
        <div className="featured-rooms-center">
          {loading ? (
            <div className="loading">
              <h4>rooms data loading....</h4>
              <img src={loadingGif} alt="" />
            </div>
          ) : (
            rooms
          )}
        </div>
      </section>
    );
  }
}
