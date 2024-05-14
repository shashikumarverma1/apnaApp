import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleSignup = () => {
    // Handle signup logic here
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const navigation: any = useNavigation();
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <View style={{ marginBottom: 45 }}>
          <Text style={{ marginTop: 50, fontWeight: "800", fontSize: 30 }}>
            Sign up
          </Text>
          <Text
            style={{
              color: "#a5a8ab",
              fontSize: 15,
              lineHeight: 15,
              marginTop: 10,
            }}
          >
            SIgn in forr next step Should you have any questions or require
            further information as you proceed, please do not hesitate to reach
            out to our support
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Name
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your name"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your email"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Mobile No.
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your mobile no."
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#0D88C3",
              height: 45,
              width: windowWidth / 1.05,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "grey",
            }}
            // onPress={() => signUpHandle()}
          >
            <Text style={{ color: "#ffff", fontWeight: "800" }}>Signup</Text>
          </Pressable>
        </View>
      </View>
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
