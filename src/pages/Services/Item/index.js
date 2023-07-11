import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import NumberInput from "../../../components/NumberInput";
import styles from "./styles";

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <View style={styles.cart}>
        <View>
          <View style={styles.value}>
            <Text style={styles.description}>Quantidade:</Text>
            <NumberInput
              value={quantity}
              action={setQuantity}
              styles={styles.quantity}
            />
          </View>
          <View style={styles.value}>
            <Text style={styles.description}>Preço:</Text>
            <Text style={styles.price}>0</Text>
          </View>
        </View>
        <Button value="Adicionar" action={() => {}}/>
      </View>
      <View style={styles.divider} />
    </>
  );
}
