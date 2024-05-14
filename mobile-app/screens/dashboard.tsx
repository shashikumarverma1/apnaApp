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
import { JobCard } from "../components/jobCard";
import { HorizontalCard } from "../components/horizontalCard";
import { FilterModal } from "../components/filterModal";

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
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      ></View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.84,
            elevation: 5, // This is for Android
            padding: 15,
            margin: 5,
            width: windowWidth / 1.07,
            maxWidth: windowWidth / 1.07,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
                    fontSize: 18,
                    color: "grey",
                    paddingLeft: 10,
                  }}
                >
                  complete your pending task
                </Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 12,
                    color: "grey",
                    paddingLeft: 10,
                    marginTop: -5,
                    paddingVertical: 5,
                  }}
                >
                  increase your chance of gettin calls from Hrs
                </Text>
              </View>
            </View>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 1].map((e, i) => (
              <View
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  maxWidth: windowWidth / 1.8,
                  backgroundColor: "aqua",
                  margin: 5,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    // flexWrap: "wrap", // Allow text to wrap onto the next line
                  }}
                >
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: "https://reactnative.dev/img/tiny_logo.png",
                    }}
                  />
                  <View style={{ paddingLeft: 5, display: "flex" }}>
                    <Text
                      style={{
                        fontWeight: "500",
                        fontSize: 12,
                        color: "grey",
                        paddingLeft: 5,
                        maxWidth: 150,
                      }}
                    >
                      verify your email so HRs can reach out to you
                    </Text>
                    <Pressable>
                      <Text
                        style={{
                          fontWeight: "400",
                          fontSize: 14,
                          color: "white",
                          backgroundColor: "green",
                          display: "flex",
                          flexDirection: "row",
                          paddingLeft: 10,
                          padding: 3,
                          borderRadius: 5,
                          marginTop: 5,
                          width: 90,
                        }}
                      >
                        verify email
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      {/* <JobCard /> */}
      {/* <HorizontalCard /> */}

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[
          { date: "Date-posted" },
          { date: "Distance" },
          { date: "Salary" },
          { date: "work-mode" },
          { date: "work-type" },
          { date: "work-shift" },
          { date: "Dipartment" },
          { date: "Experience" },
          { date: "sort-by" },
        ].map((e) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderRadius: 15,
              padding: 5,
              // backgroundColor: "aqua",
              width: 120,
              justifyContent: "space-between",
              margin: 5,
              paddingHorizontal: 12,
              borderColor: "grey",
              borderWidth:.5,
              alignItems:"center"
            }}
          >
            <Text>{e.date}</Text>
            <Text>
              {" "}
              <Ionicons name="chevron-down-outline" size={20} color="black" />
            </Text>
          </View>
        ))}
      </ScrollView>
      <FilterModal/>
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
