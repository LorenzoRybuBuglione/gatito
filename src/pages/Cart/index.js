import React from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import DefaultScreen from "../../components/DefaultScreen";
import CartStatus from "../../components/CartStatus";

const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "Não de banho no seu gato! Mas se precisar nos damos.",
    quantity: 1,
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 89.9,
    description: "Uma dose da vacina V4. O seu gato precisa de duas.",
    quantity: 2,
  },
  {
    id: 3,
    name: "Vacina Antirrábica",
    price: 99.9,
    description:
      "Uma dose da vacina antirrábica. O seu gato precisa de uma por ano.",
    quantity: 1,
  },
];

export default function Cart() {
  const total = services.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  return (
    <DefaultScreen>
      <CartStatus total={total}/>
      <FlatList
        data={services}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </DefaultScreen>
  );
}
