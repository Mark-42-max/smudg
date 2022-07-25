import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, {useState, useEffect, useContext} from 'react'
import { StateContext } from '../Context/StateContext'
import { FlatList } from 'react-native';
import Tick from '../assets/svg/Tick';

const BottomSheet = ({name, data, close, isOpen}) => {

  const {categories, brands, types} = useContext(StateContext);
  const [category, setCategory] = categories;
  const [brand, setBrand] = brands;
  const [type, setType] = types;


  const [changeArr, setChangeArr] = useState('');
  const [display, setDisplay] = useState(data);

  useEffect(() => {
    setDisplay(data.filter(item => item.includes(changeArr)))
  },[changeArr])

  return (

    <View style={styles.bottomSheet}> 
      <View style={styles.title}>
        <Text style={{fontSize: 15, color: '#B5B5B5', fontWeight: '700'}}>FILTER</Text>
        <Text style={styles.filter}>{name}</Text>
      </View>

      <View style={styles.search}>
        <TextInput onChangeText={(text) => setChangeArr(text)} style={styles.searchInput} placeholder="Search" value={changeArr}/>
      </View>

    <View style={{height: '60%'}}>
      <FlatList 
          data={display}
          renderItem={({item, index}) => ( <TouchableOpacity key={index} onPress={() =>
            {
              if(isOpen === 'Category'){
               setCategory(item)
              }
              else if(isOpen === 'Brand'){
                setBrand(item)
              }
              else if(isOpen === 'Type'){
                setType(item)
              }
              close();
          }}>
            <View style={styles.filterItem}>
              <Text style={{fontSize: 18}}>{item}</Text>
              {isOpen === 'Category' && category === item && <Tick />}
              {isOpen === 'Brand' && brand === item && <Tick />}
              {isOpen === 'Type' && type === item && <Tick />}
            </View>
          </TouchableOpacity> )}
          contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
      />
      </View>
      
    </View>

  )
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheet: {
        backgroundColor: '#ffffff',
        height: '100%',
        zIndex: 1,
    },

    title:{
      padding: 20
    },

    filter: {
      paddingVertical: 10,
      fontSize: 25,
    },
    searchInput: {
      backgroundColor: '#F7F7F7',
      height: 54,
      paddingHorizontal: 20,
      fontSize: 18,
    },
    filterItem: {
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }
})