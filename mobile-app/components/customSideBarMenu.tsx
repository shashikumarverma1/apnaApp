import React, { useContext, useState } from "react";
import {
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
const CustomSidebarMenu = ({ navigation }: { navigation: any }) => {
  const logout=async()=>{
    AsyncStorage.clear()
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>
            Dashboard
          </Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>Signup</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>Signin</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => {
            // console.log("click" , navigation)
            navigation.closeDrawer();
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold , {color:"red",  textAlign:"right",  paddingLeft:200}]}>close</Text>
        </Pressable>
        
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("MainScreen");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold , {color:"red",  textAlign:"right",  paddingLeft:150}]}>MainScreen</Text>
        </Pressable>
        
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <Text style={[styles.subheading, styles.subHeadingBold]}>Profile</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={
          logout
        }
        >
          <Text style={[styles.subheading, styles.subHeadingBold , {color:"red"}]}>Log-out</Text>
        </Pressable>
        <Pressable
          style={styles.button}
      onPress={()=>  navigation.navigate("JobDetails")}
        >
          <Text style={[styles.subheading, styles.subHeadingBold , {color:"red"}]}>JobDetails</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    // PaddingBottom: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    padding: 8,
    fontWeight: "800",
    backgroundColor: "#ffff",
    fontSize: 17,
    paddingLeft: 15,
    paddingVertical: 10,
  },
  subheading: { paddingLeft: 10, backgroundColor: "#fff", fontSize: 15 },
  subheadingmargin: {
    paddingLeft: 20,
  },
  subHeadingBold: {
    fontWeight: "600",
    fontSize: 15,
    paddingVertical: 5,
  },
  subheadingBG: {
    paddingLeft: 30,
    backgroundColor: "#fffff",
  },
  icon_right: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },
});
export default CustomSidebarMenu;
