/*
 *because the comoponent is functional to accsss the state from *RoomProvider we need to use RoomComsumer.
 */

import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { RoomConsumer } from "../context";
import Loading from "./Loading";

export default function RoomsContainer() {
  return (
    <RoomConsumer>
      {value => {
        const { loading, sortedRooms } = value;

        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomFilter />
            <RoomList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
}
