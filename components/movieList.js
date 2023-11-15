import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
var { width, height } = Dimensions.get("window");

export default function MovieList(title, data) {
  let movieName = "Ant man and the guy who drunken";
  const navigation = useNavigation();
  return (
    <View style={{ marginBottom: 32, transform: [{ translateY: 8 }] }}>
      <View>
        <Text style={{ color: "white", fontSize: 20, lineHeight: 32 }}>
          {title}
        </Text>
        <TouchableOpacity>
          <Text style={styles.text}></Text>
        </TouchableOpacity>
      </View>
      {/* movierow */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
      {data.map((item, index) => {
        return (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View style={{}} classname="space-y-1 mr-4">
              <Image
                classname="rounded-3xl"
                source={require("../assets/images/moviePoster2.png")}
                style={{ width: width * 0.33, height: height * 0.22 }}
              />
              <Text style={{ color: "D4D4D4", marginLeft: 4 }}>
                {movieName.length>14? movieName.slice(0.14)+'...':movieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
}
