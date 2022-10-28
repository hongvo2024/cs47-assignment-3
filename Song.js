import { View, Text, StyleSheet, Image } from 'react-native';


const Song = ({ songIndex, songImage, title, artist, album, duration }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.songIndex}>
        {songIndex} </Text>   
      <Image style={styles.image}
        source={{uri: songImage}} />
      <View style = {styles.titleAndArtist}>
        <Text style = {{color: "white"}}
        numberOfLines={1} > {title} </Text>
        <Text style = {{color: "gray"}}> {artist} </Text>
      </View>
      <Text style = {{color: "white", width: "25%"}}
      numberOfLines={1}> {album}</Text>
      <Text style = {{color: "white", width: "15%"}}> {duration} </Text>
    </View>
  )
};
export default Song;

const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    flexDirection: "row",
    width: '100%',
    height: undefined
  },

  songIndex: { 
    width: "10%", 
    color: "grey",
    fontSize: 15,
    textAlign: "center"
  },

  image: {
    width: "20%", 
    height: 70, 
    justifyContent: "center", 
    margin: 5
  },

  titleAndArtist:{
    flexDirection: "column",
    //margin: 10,
    width: '30%'    
  }
});
