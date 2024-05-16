import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { JobDetailCard } from "./JobDetailCard";
const windowWidth = Dimensions.get("window").width;
export const JobDetails = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const windowWidth = Dimensions.get("window").width;
  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <ScrollView>
      <View style={{ marginTop: 50, marginHorizontal: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 20,
                color: "grey",
                paddingLeft: 10,
              }}
            >
              Softwere Engineer
            </Text>
            <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color: "grey",
                paddingLeft: 10,
                marginTop: -5,
              }}
            >
              apple
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Text>
            {" "}
            <Ionicons name="locate" size={20} color="grey" />
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 15,
              color: "grey",
              paddingLeft: 10,
            }}
          >
            Lucknow
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text>
            {" "}
            <Ionicons name="eye-off" size={20} color="grey" />
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 15,
              color: "grey",
              paddingLeft: 10,
            }}
          >
            Not Disclosed
          </Text>
        </View>
        <View style={{ backgroundColor: "aqua" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text>fixed</Text>
            <Text>7000-8000</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text>fixed</Text>
            <Text>7000-8000</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text>fixed</Text>
            <Text>7000-8000</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <Text>
              <Ionicons name="eye-off" size={20} color="grey" />
            </Text>
            <Text style={{ paddingLeft: 10 }}>fixed</Text>
          </View>
        </View>
        <View>
          <Text>Job highlight</Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>o</Text>
            <Text>14 application</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>t</Text>
            <Text>lorem iption</Text>
          </View>
        </View>
      </View>

      <JobDetailCard
        tittle="Job description"
        data={[
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
        ]}
      />
      <JobDetailCard
        tittle="Job role"
        data={[
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
        ]}
      />

      <JobDetailCard
        tittle="Job requirement"
        data={[
          { icon: "call", heading: "Experience", subheading: "Any experience" },
          {
            icon: "call",
            heading: "Education",
            subheading: "10th or Below 10th",
          },
          {
            icon: "call",
            heading: "Past role/category experience",
            subheading: "IT Support, Hardware, IT Infrastructure Service, IT Network",
          },
          {
            icon: "call",
            heading: "English level",
            subheading: "NO english Required",
          },
          {
            icon: "call",
            heading: "Gender",
            subheading: "male",
          },
        ]}
      />
      <JobDetailCard
        tittle="Interview Details"
        data={[
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
        ]}
      />
      <JobDetailCard
        tittle="About company"
        data={[
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
          {
            icon: "call",
            heading: "Department",
            subheading: "Engineering & Networks",
          },
        ]}
      />

      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Text>Job posted by</Text>
        <Text>Job posted by</Text>
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
          style={{
            // backgroundColor: "#0D88C3",
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
          <Text style={{ color: "green", fontWeight: "800" }}>
            Apply for Job
          </Text>
        </Pressable>
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
  tittle: { fontSize: 15, fontWeight: "500", marginBottom: 5, marginTop: 5 },
});
