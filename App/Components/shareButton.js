import React from 'react';
import { Share, View, Text, StyleSheet, Image, Button } from 'react-native';



export default function shareButton( poster_path ) {
  // This will return the PlayList row component

console.log("kkk")


Share.share(
    {
      title: "Hi all",
      message: "I've a movie to share\nhttps://image.tmdb.org/t/p/w185/" + poster_path,
      
    }
  );


}