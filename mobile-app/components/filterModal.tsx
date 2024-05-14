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
import { Checkbox } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
const windowWidth = Dimensions.get("window").width;
export const FilterModal = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: windowWidth / 3,
            backgroundColor: "#f7f3f2",
            height: 800,
          }}
        >
          <Text
            style={{
              padding: 5,
              paddingLeft: 15,
              fontWeight: "600",
              fontSize: 18,
              color: "grey",
              marginTop:10
            }}
          >
            All Filter
          </Text>
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
          ].map((e , index) => {
            return (
            <Pressable onPress={()=>console.log(e , "click")} key={index}>
                  <Text
                style={{
                  padding: 15,
                  paddingLeft: 15,
                  fontWeight: "500",
                  fontSize: 15,
                  color: true ? "grey" : "black",
                }}
              >
                {e.date}
              </Text>
            </Pressable>
            );
          })}
        </View>
        <View
          style={{
            width: (windowWidth * 2) / 3,
            backgroundColor: "#ffffff",
            height: 800,
          }}
        >
            {
                [1,1,1,1,1,11,1,1,1].map((e)=>{
                    return (
                        <View>
                             <Checkbox.Item label="Item" status="checked" />
                        </View>
                    )
                })
            }
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
