import { getOrders } from "@/services";
import React, { useState, useEffect } from "react";
import {View, StyleSheet, Button, ScrollView} from "react-native";
import OrderList from "@/components/OrderList";

type Order = {
  id: string;
  status: string;
  picker: {
    name: string;
    surname: string;
  }
};

const HomeScreen = () => {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    reloadOrders()
  }, []);

  const reloadOrders = async () => {
    getOrders().then((response) => setOrders(response.data.filter((order:any) => order.pickingStatus !== "BLOCKED" )));
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button title={"reload"} onPress={() => reloadOrders()}></Button>
        <OrderList orders={orders} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
