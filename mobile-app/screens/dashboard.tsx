import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
// import { Button } from "../components/buttons/button";
import { VerticleCard } from "../components/verticleCard";
import { HorizontalCard } from "../components/horizontalCard";
import { Button } from "../components/buttons/Button";
import { ScrollCard } from "../components/scrollCard";
export const Dashboard = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View>
        <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>
          Buttons
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          marginBottom: 5,
        }}
      >
        <Pressable
          onPress={() => navigation.openDrawer()}
          style={{
            backgroundColor: "#0D88C3",
            height: 45,
            width: windowWidth / 1.05,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            borderWidth: 1,
            borderColor: "grey",
          }}
          // onPress={() => signUpHandle()}
        >
          <Text style={{ color: "#ffff", fontWeight: "800" }}>Open</Text>
        </Pressable>
      </View>
      <Button />
      <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>
          Scroll Card
        </Text>
      <ScrollCard/>
      <View>
        <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>
          Verticle Card
        </Text>
      </View>
      {/* <VerticleCard /> */}
      <View>
        <Text style={{ textAlign: "center", padding: 10, fontWeight: "bold" }}>
          Horizontal Card
        </Text>
      </View>
      {/* <HorizontalCard /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  label: {
    marginBottom: 5,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
