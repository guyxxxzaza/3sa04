import React from 'react';
import { StyleSheet,FlatList, View, Text, TouchableHighlight } from 'react-native';

const availableZipItems = [
   { place: 'Hatyai', code: '90110' },
   { place: 'Trang', code: '92000' },
   { place: 'Chiangmai', code: '50000' },
   { place: 'Khonkaen', code: '40000' },
   { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({place, code, navigate}) => (   
<TouchableHighlight onPress={() => navigate('Weather', {zipCode: code})}>     

<View style={styles.zipItem}>       
<Text style={styles.zipPlace}>{place}</Text>       
<Text style={styles.zipCode}>{code}</Text>     
</View>   



</TouchableHighlight> ) 
 


const _keyExtractor = item => item.code

export default class WeatherScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (<Text style={styles.zipHead}>Choose a zip code</Text>),
    }
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={{
        
        backgroundColor: '#FFFFF0',
        
        
    
      }}>
        <FlatList
          data={availableZipItems}
          keyExtractor={_keyExtractor}
          renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    zipHead:{
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
        fontWeight: 'bold',
        
    },
    zipItem: {
        
        flexDirection: 'row',
        margin: 20,
    
        },
    zipPlace: {
        flex: 2,
        textAlign:'center',
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
    },
    zipCode: {
        flex: 2,
        textAlign:'center',
        color: 'red',
        fontSize: 24,
        fontWeight: 'bold',
    }  
   
}); 