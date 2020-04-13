import React from 'react';
import { View, Text,StyleSheet,Image } from 'react-native';

 export default function 

  FavouriteListRow({favouriteList}){

   // This will return the ArtistList row component

   return (
    
    <View style={styles.container} >
      
      <Image source={{ uri: 'https://image.tmdb.org/t/p/w185/' + favouriteList.poster_path
     }} style={styles.poster} />

      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{favouriteList.title} </Text>
        <Text style={styles.owner}>Release Date: {favouriteList.release_date}  Rate: {favouriteList.vote_average} </Text>
      </View>
   
    </View>

  );
    
}


  const styles = StyleSheet.create(

      {
    
    container:{

      flexDirection:'row',
      padding:5,
      alignItems:'center',
      borderWidth:1.3,
      marginTop:15

    },
    
    iconContainer:{

      flex:1,
      alignItems:'center'
      
        },

    title:{
    
      fontSize:20,
      fontWeight:'700',
      flex:2,
      marginLeft:10,
      },

    owner:{
    
      fontSize:16,
      fontWeight:'300',
      flex:2,
      color:'gray',
      marginLeft:10,
    },
    poster: {
      height: 100,
      width: 70,
      resizeMode: 'contain'
    },
  
  
  })