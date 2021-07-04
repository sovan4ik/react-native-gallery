import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Text, View, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';

import styles from './styles';

import { connect, useDispatch } from 'react-redux';

import { getData, setCurrentPhoto } from '../../redux/actions/galleryAction';

const homeScreen = props => {
  const dispatch = useDispatch();
   
    function hexToRgbA(hex){
      let c;
      if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
          c= hex.substring(1).split('');
          if(c.length== 3){
              c= [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c= '0x'+c.join('');
          return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+',0.3)';
      }
      throw new Error('Bad Hex');
    }
  
    function getTime(time){
      let currentTime = /(?:[01]\d|2[0-3]):(?:[0-5]\d)/;
      let currentDate = /[0-9]{4}-[0-9]{2}-[0-9]{2}/g;
      return time.match(currentTime) + ", " + time.match(currentDate)
    }

    const openSinglePhoto = (url) => {
      dispatch(setCurrentPhoto(url))
      const { navigation } = props;
      navigation.navigate('singlePhoto');
    }


    const Item = ({ id, imgTrumb, likes, username, first_name, last_name, created_at , bgColor }) => (
      <View key={id} style={{
        backgroundColor: hexToRgbA(bgColor),
        shadowColor: hexToRgbA(bgColor),
        shadowRadius: '15px',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10
        }}>
        
        <View style={styles.thumb}>
          <Text style={styles.plus}>+</Text>
          <Image
          style={styles.imgTrumb}
          source={{
            uri: `${imgTrumb}`
          }}
        />
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Username: {username}</Text>
          <Text style={styles.infoText}>Name: {first_name} {last_name}</Text>
          <Text style={styles.infoText}>Posted: {created_at}</Text>
          <Text style={styles.infoText}>Likes: {likes}</Text>
        </View>
      </View>
    );
  
    const renderItem = ({ item }) => (
      <TouchableOpacity
      onPress={() => openSinglePhoto(item.urls.full)}
      >
      <Item
      key={item.id}
      bgColor={item.color}
      imgTrumb={item.urls.thumb}
      imgFull={item.urls.full}
      username={item.user.username}
      first_name={item.user.first_name}
      last_name={item.user.last_name}
      created_at={getTime(item.created_at)}
      likes={item.likes}
      />
      </TouchableOpacity>
    );
  
    return (
      props.DATA != undefined 
      ? <SafeAreaView style={styles.container}>
      <FlatList
      style={styles.listItem}
      data={props.DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
      </SafeAreaView>
      : <SafeAreaView style={styles.container}>
      <Text>Error</Text>
      <StatusBar style="auto" />
      </SafeAreaView>
    )
};

const mapStateToProps = state => {
  return {
    DATA: state.galleryReducer.DATA,
    currentPhoto: state.galleryReducer.currentPhoto
  };
};

const mapDispatchToProps = dispatch => {
  dispatch(getData())
}

export default connect(mapStateToProps, mapDispatchToProps)(homeScreen);