import React from 'react';
import { SearchBar } from 'react-native-elements';
import {
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import MovieListRow from '../Components/MovieListRow';
import { observer, inject } from 'mobx-react';

@inject('MovieStore', 'FavouriteStore')
@observer
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);

    this.state = {
      search: '',
     
    };
  
  }

  
  buttonPress(navigation, id) {
    // FavouriteStore.cleanData();

     //FavouriteStore.fetchData();

    navigation.navigate('Details');
  }

  renderFooter = () => {
    return (
      <View>
        <ActivityIndicator style={{ height: 80 }} color='#C00' size='large' />
      </View>
    );
  };


  updateSearch = query => {
    
     console.log("search")

     this.setState({search:query});

  //   PlayStore.playLists.search = query

     MovieStore.setupData(this.state.search);



  };
  render() {
    // This will render the Home PlayList
    const { search } = this.state;
  
    return (
      <View>


<SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}/> 

<Button title="My Favourite List" onPress={() =>
                this.buttonPress(this.props.navigation, "111")
              }/>
    
        <FlatList
          data={MovieStore.movieLists}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => this.loadMore()}
          onEndReachedThreshold={100}
          ListFooterComponent={() =>
            MovieStore.isLoading ? null : (
              <ActivityIndicator size='large' animating />
            )
          }
          renderItem={({ item }) => (
            // <TouchableOpacity
            //   onPressOut={() =>
            //     this.buttonPress(this.props.navigation, item.id)
            //   }
            // >
              <MovieListRow movieList={item} PlayStore={MovieStore.movieLists}  />
            // </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  loadMore = () => {
   // PlayStore.fetchData();
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default Home;
