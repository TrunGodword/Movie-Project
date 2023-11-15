import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

var { width, height } = Dimensions.get("window");
export default function TrendingMovie({data}) {
  const navigation = useNavigation()
  const handleClick=item=()=>{
    navigation.navigate("Movie",item);
  }
  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={{ color: "white", marginLeft: 16, marginBottom: 16 }}>
        trendingMovie
      </Text>
      <Carousel
            data={data}
            renderItem={({item})=> <MovieCard handleClick={handleClick} item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.60}
            sliderWidth={width}
            itemWidth={width*0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
}
const MovieCard = (item, handleClick) => {
  return (
    <TouchableWithoutFeedback onPress={()=> handleClick(item)}>
      <Image source={require("../assets/images/moviePoster1.png")}
        style={{
          width: width*0.6,
          height: height*0.6,
          borderRadius: 24,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
