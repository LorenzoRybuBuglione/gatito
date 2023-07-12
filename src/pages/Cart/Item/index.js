import React, { useState } from "react";
import { Text, View } from "react-native";
import Button from "../../../components/Button";
import NumberInput from "../../../components/NumberInput";
import styles from "./styles";

export default function Item({ name, price, description, quantity: initialQuantity }) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState(price * initialQuantity);

  const totalCalculated = (newQuantity) => {
    setTotal(newQuantity * price);
  };

  const quantityUpdate = (newQuantity) => {
    setQuantity(newQuantity);
    totalCalculated(newQuantity);
  };

  return (
    <>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </View>
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
          <Button value="Remover do Carrinho" action={() => {}} />
        </View>
      
      <View style={styles.divider} />
    </>
  );
}
