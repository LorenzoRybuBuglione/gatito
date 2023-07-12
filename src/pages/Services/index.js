import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";

const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "Não de banho no seu gato! Mas se precisar nos damos.",
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. O seu gato precisa de duas.",
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description:
      "Uma dose da vacina antirrábica. O seu gato precisa de uma por ano.",
  },
];

export default function Services() {
  return (
    <DefaultScreen>
      <FlatList
        data={services}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </DefaultScreen>
  );
}
