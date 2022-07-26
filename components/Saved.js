import { FlatList, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Tuts from './Tuts';
import {useContext} from 'react';
import { StateContext } from '../Context/StateContext';
import  tw  from 'tailwind-react-native-classnames';

export default function Saved({snippet, tutorial, height}) {

    const {checkSaveSnippet, checkSaveTuts} = useContext(StateContext);
    const [isSavedSnippet] = checkSaveSnippet;
    const [isSavedTuts] = checkSaveTuts;
    const [display, setDisplay] = useState([]);

    useEffect(() => {
      if(isSavedSnippet.length == 0 && isSavedTuts.length == 0){
        setDisplay([]);
      }

      if(isSavedSnippet.length > 0){
        setDisplay(display => {
          const filtered = snippet.filter(item => isSavedSnippet.includes(item.id))
          return [...display, ...filtered]
        });
      }

      if(isSavedTuts.length > 0){
        setDisplay(display => {
          const filtered = tutorial.filter(item => isSavedTuts.includes(item.id))
          return [...display, ...filtered]
        });
      }
      //console.log(display);
    }, [isSavedSnippet, isSavedTuts]);

  return (
    <>

        {display.length == 0 ? <Text style={[tw`py-10`, {textAlign: 'center', fontSize: 20, color: '#B5B5B5', flexWrap: 'wrap'}]}>All you saved videos and purchased videos will feature here.</Text>
        :
        <View style={{justifyContent: 'center', alignItems: 'center', height: {height}}}>
           <FlatList 
            data={display}
            renderItem={({item, index}) => { 
            
              if(isSavedSnippet.includes(item.id)){

            return <Card key={item.id} id={item.id} title={item.title} feat={item.feat} uri={item.vidUri}/>}

            if(isSavedTuts.includes(item.id)){
         
              return <Tuts key={item.id} id={item.id} title={item.title} influencer={item.influencer} uri={item.vidUri} desig={item.designation} price={item.price}/>}
        
            }}
            contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
            />
        </View>
        }
        </>
  )
}
