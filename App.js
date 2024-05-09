import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        // style={{ margin: 20, borderColor: 'red', borderWidth: 1, borderStyle: 'solid', padding: 10 }}
        style={styles.dummyText}
      >
        Hello world
      </Text>
      <View>
        <Text>I'm learning react native</Text>
      </View>
      <Button title="Tap me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'red',
    borderStyle: 'solid',
  }
});
