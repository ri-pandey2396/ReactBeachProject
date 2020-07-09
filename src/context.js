import React, { Component } from "react";
import { createContext } from "react";
import data from "./data";

const RoomContext = createContext();
export default class RoomContextProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,

    //states to filter room
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    maxSize: 0,
    minSize: 0,
    breakfast: false,
    pets: false
  };

  componentDidMount() {
    let rooms = this.formatData(data);
    let featuredRooms = rooms.filter(room => room.featured === true);
    //to set the maxPrice and maxSize in filter, we need to get that from the data

    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(data) {
    let tempData = data.map(data => {
      let id = data.sys.id;
      let images = data.fields.images.map(image => image.fields.file.url);

      let room = { ...data.fields, images, id };

      return room;
    });

    return tempData;
  }

  findRoom = slug => {
    let tempRooms = [...this.state.rooms];
    let roomSingle = tempRooms.find(room => room.slug === slug);

    return roomSingle;
  };

  handleChange = event => {
    const target = event.target;
    const value = event.type === "checkbox" ? target.checked : target.value;
    
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];

    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter for type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    //filter for capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    //filter for price
    tempRooms = tempRooms.filter(room => room.price <= price);

    //filter for size
    tempRooms = tempRooms.filter(room => room.size>= minSize && room.size <= maxSize);

    //filter for breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    //filter for pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    this.setState({
      sortedRooms: tempRooms
    })
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          findRoom: this.findRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomContext, RoomContextProvider, RoomConsumer };
