import React from "react";
import { View, Text, StyleSheet } from "react-native";
//agregamos ImageBackground, StatusBar, SafeAreaView

const LocationScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>Localizacion de la EEI</Text>
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
export default LocationScreen;
