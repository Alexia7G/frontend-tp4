import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";

export default function Cards() {
  return (
    <View>
      <Card
        title="HELLO WORLD"
        image={require("../../assets/icon.png")}
        style={styles.card}
      >
        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure
          than actual design.
        </Text>
        <Button
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 5,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="VIEW NOW"
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    width: "50%",
  },
});
