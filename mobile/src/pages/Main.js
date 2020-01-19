import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../services/api';


const styles = StyleSheet.create({
  map: {
   flex: 1,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff',
  },
  callout:{
    width: 260
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16, 
    color: 'red'
  },
  devBio: {
    color: '#666',
    marginTop: 5
  },
  devTechs: {
    fontWeight: 'bold',
    marginTop: 5
  },
  searchForm:{
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },
  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: "#fff",
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor:'#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },
  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8e4dff',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    borderRadius: 25
  }
});


function Main({ navigation }){

  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect( () => {
    async function loadInitialPosition(){
      const { granted } =  await requestPermissionsAsync();
    
      if(granted){
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });
        
      async function loadDevs(){
      const { latitude, longitude } = coords;
    
        
    }
      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04
      });
    
    }
  }

    loadInitialPosition();
  }, []);

  if(!currentRegion){
    return null;
  }

  return(
    <>
    <MapView initialRegion={currentRegion} style={styles.map} >
      <Marker coordinate={ {latitude: -3.8337108, longitude: -38.5651807} }>
        <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/48360931?s=460&v=4'  }} />
        
        <Callout onPress={() => {
          navigation.navigate('Profile', { github_username: 'rogerio632' });
        }}>
          <View style={styles.callout}>
            <Text styles={styles.devName}>Rogério D Oliveira</Text>
            <Text styles={styles.devBio}>Do. Or Do not. There is no try.</Text>
            <Text styles={styles.devTechs}>JS, PHP</Text>
          </View>
        
        </Callout>
      </Marker>
    </MapView>
    <View style={styles.searchForm}>
        <TextInput
         style={styles.searchInput}
          placeholder="Buscar devs por tech"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          />
          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
            <MaterialIcons name="my-location" size={20} color="#FFF" />
          </TouchableOpacity>
          </View>  
    </>
  );
}

export default Main;