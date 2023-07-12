import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Button from "../../../components/Button";
import NumberInput from "../../../components/NumberInput";
import styles from "./styles";

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const [expand, setExpand] = useState(false);

  const totalCalculated = (newQuantity) => {
    setTotal(newQuantity * price);
  };

  const quantityUpdate = (newQuantity) => {
    setQuantity(newQuantity);
    totalCalculated(newQuantity);
  };

  const invertExpand = () => {
    setExpand(!expand);
    quantityUpdate(1);
  };

  return (
    <>
      <TouchableOpacity style={styles.info} onPress={invertExpand}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </TouchableOpacity>
      {expand && (
        <View style={styles.cart}>
          <View>
            <View style={styles.value}>
              <Text style={styles.description}>Quantidade:</Text>
              <NumberInput
                value={quantity}
                action={quantityUpdate}
                styles={styles.quantity}
              />
            </View>
            <View style={styles.value}>
              <Text style={styles.description}>Preço Total:</Text>
              <Text style={styles.price}>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(total)}
              </Text>
            </View>
          </View>
          <Button value="Adicionar ao Carrinho" action={() => {}} />
        </View>
      )}
      <View style={styles.divider} />
    </>
  );
}
