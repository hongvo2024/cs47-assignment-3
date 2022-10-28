import { StyleSheet, SafeAreaView, View, Text, Image, FlatList, ScrollView, Pressable } from "react-native";
import { useSpotifyAuth, millisToMinutesAndSeconds } from "./utils";
import { Themes, Images } from "./assets/Themes";
import Song from "./Song"

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);
  let contentDisplay = null;

  //console.log(tracks);


  const renderSong = ({item, index}) => { 
    //console.log(item.album.images[0].url)
    return (
    <Song
    songIndex = {index}
    songImage = {item.album.images[0].url}
    title = {item.name}
    artist = {item.artists[0].name}
    album = {item.album.name}
    duration ={millisToMinutesAndSeconds(item.duration_ms)}
    /> 
  );
}

  if (token) {
    contentDisplay =
    <SafeAreaView>
      <View style={styles.header}>
        <Image
        source={Images.spotify} style = {{height: 30, width: 30}}/>
        <Text style={{fontSize: 20, color: "white"}}> My Top Tracks</Text>
      </View>
      <View>
        <FlatList
        data={tracks} 
        renderItem={(item) => renderSong(item)} 
        keyExtractor={(item) => item.id} 
        />
      </View>
      </SafeAreaView>

  } else {
    contentDisplay =
      <View style={styles.WelcomeButton}>
        <Image style={{ height: 45, width: 45 }}
          source={Images.spotify} />
        <Pressable onPress={getSpotifyAuth}>
          <Text> CONNECT WITH SPOTIFY!</Text>
        </Pressable>
      </View>
  }

  return (
    <SafeAreaView style={styles.container}>
      {contentDisplay}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  WelcomeButton: {
    backgroundColor: Themes.colors.spotify,
    flexDirection: "row",
    borderRadius: 99999,
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    padding: 10,
  }
});


