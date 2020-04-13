import React, { Component } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import FavouriteListRow from '../Components/FavouriteListRow';
import { observer, inject } from 'mobx-react';

@inject('FavouriteStore')
@observer
class Details extends Component {
  renderFooter = () => {
    return (
      <View>
        <ActivityIndicator style={{ height: 80 }} color='#C00' size='large' />
      </View>
    );
  };

  render() {
    // This will render the Details ArtistList

    return (
      <View>
        <FlatList
          data={FavouriteStore.favouriteLists}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => this.loadMore()}
          onEndReachedThreshold={200}
          ListFooterComponent={() =>
            FavouriteStore.isLoading == true ? null : (
              <ActivityIndicator size='large' animating={false} />
            )
          }
          renderItem={({ item }) => <FavouriteListRow favouriteList={item} />}
        />
      </View>
    );
  }

  loadMore = () => {
    FavouriteStore.fetchData();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Details;
