import React from 'react';
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import shareButton from "./shareButton";
import FavouriteItems,{addToFavourites} from "./FavouriteItems";
import Icon from "react-native-vector-icons/FontAwesome";


export default function MovieListRow({ movieList }) {
  // This will return the PlayList row component
  
var we = {}
var BreakException= {};

  return (

    <View style={styles.container}>
      <Image source={{ uri: 'https://image.tmdb.org/t/p/w185/' + movieList.poster_path
     }} style={styles.poster} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{movieList.title} </Text>
        <Text style={styles.owner}>Release Date: {movieList.release_date}  Rate: {movieList.vote_average} </Text>
      </View>

      <View style={styles.iconContainer}>
     
      <TouchableOpacity  style={styles.favButton} onPressOut={
        () => {FavouriteItems.addToFavourites(movieList)}}>
     
       <Text style={{color:"white",fontSize: 14,fontWeight: '500'}}> Add To Favourites </Text>     
     
       </TouchableOpacity>
            
        <TouchableOpacity style={styles.shareButton} onPressOut={() => shareButton(movieList.poster_path)}>
    
        <Text style={{color:"white",fontSize: 14,fontWeight: '500'}}> Share Photo </Text>     
     
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    borderWidth: 1.3,
    marginTop: 15
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center'
  },

  
  favButton: {
    alignItems: 'center',
    backgroundColor: '#ff00ff',
    padding: 10,
    marginBottom:10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  shareButton: {
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    marginBottom:10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },

  poster: {
    height: 100,
    width: 70,
    resizeMode: 'contain'
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    flex: 2,
    marginLeft: 10
  },

  owner: {
    fontSize: 16,
    fontWeight: '300',
    flex: 2,
    color: 'gray',
    marginLeft: 10
  }
});
