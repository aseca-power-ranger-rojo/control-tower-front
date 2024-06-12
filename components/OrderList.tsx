import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Order } from "./Order";

const OrderList = ({
  orders,
}: {
  orders: any[];
}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Power Ranger Rojo's CONTROL TOWER</Text>
      <View style={styles.list}>
        {orders.map((order) => (
          <Order
            key={order.id}
            order={order}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
    backgroundColor: "#F7F8F5",
  },
  header: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 50,
  },
  list:{
    display: "flex",
    flexDirection: "column",
    gap: 20,
  }
});

export default OrderList;
