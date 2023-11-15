import { View, Text, Platform, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bars3CenterLeftIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import {styles} from "../theme"
import TrendingMovies from "../components/trendingMovie"
import MovieList from "../components/movieList";

const ios = Platform.OS == "ios";

const HomeScreen = () => {
  const[trending, setTrending] = useState([1,2,3])
  const[upComming, setUpComming] = useState([1,2,3])
  const[topRated, setTopRated] = useState([1,2,3])
  return (
    <View style={{ flex: 1, backgroundColor: "#262626" }}>
      {/* statusbar */}
      <SafeAreaView style={ios ? { marginBottom: 8 } : { marginBottom: 12 }}>
        <StatusBar style="light" />
        <View style={{flexDirection:"row", justifyContent:"space-between", marginLeft: 16, marginRight: 16}}>
          <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
          <Text style={{color:"white", fontSize:30, lineHeight:36, fontWeight:"bold"}}>
            <Text style={styles.text} >M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{padding:10}}
      >
        {/* trending movie scroll */}
        <TrendingMovies data={trending}/>
        
        {/* movielist heseg */}
        <MovieList title="Upcomming" data={upComming} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
