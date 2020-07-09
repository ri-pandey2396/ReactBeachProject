import React from "react";
import { RoomConsumer } from "../context";

const getUniqueValue = (item, value) => {
  return [...new Set(item.map(item => item[value]))];
};

export default function RoomFilter() {
  return (
    <RoomConsumer>
      {value => {
        const {
          rooms,
          handleChange,
          type,
          capacity,
          price,
          minPrice,
          maxPrice,
          minSize,
          maxSize,
          breakfast,
          pets
        } = value;

        let types = getUniqueValue(rooms, "type");
        types = ["all", ...types];

        let uniquePeople = getUniqueValue(rooms, "capacity");

        return (
          <section className="filter-container">
            <div className="section-title">
              <h4>Featured Rooms</h4>
              <div />
            </div>
            <form className="filter-form">
              {/* select type */}
              <div className="form-group">
                <label htmlFor="type">Room Type</label>
                <select
                  name="type"
                  id="type"
                  onChange={handleChange}
                  className="form-control"
                  valye={type}
                >
                  {
                    (types = types.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    )))
                  }
                </select>
              </div>
              {/* end type */}
              {/* guests  */}
              <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select
                  name="capacity"
                  id="capacity"
                  onChange={handleChange}
                  className="form-control"
                  value={capacity}
                >
                  {uniquePeople.map((capacity, index) => (
                    <option key={index} value={capacity}>
                      {capacity}
                    </option>
                  ))}
                </select>
              </div>
              {/* end of guests */}
              {/* room price */}
              <div className="form-group">
                <label htmlFor="price">room price ${price}</label>
                <input
                  type="range"
                  name="price"
                  min={minPrice}
                  max={maxPrice}
                  id="price"
                  value={price}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              {/* end of room price*/}
              {/* size */}
              <div className="form-group">
                <label htmlFor="price">room size </label>
                <div className="size-inputs">
                  <input
                    type="number"
                    name="minSize"
                    value={minSize}
                    onChange={handleChange}
                    className="size-input"
                  />
                  <input
                    type="number"
                    name="maxSize"
                    value={maxSize}
                    onChange={handleChange}
                    className="size-input"
                  />
                </div>
              </div>
              {/* end of select type */}
              {/* extras */}
              <div className="form-group">
                <div className="single-extra">
                  <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                  />
                  <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                  <input
                    type="checkbox"
                    name="pets"
                    checked={pets}
                    onChange={handleChange}
                  />
                  <label htmlFor="breakfast">pets</label>
                </div>
              </div>
              {/* end of extras type */}
            </form>
          </section>
        );
      }}
    </RoomConsumer>
  );
}
