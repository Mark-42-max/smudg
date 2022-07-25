import { FlatList, Text, View } from 'react-native'
import React from 'react';
import Card from './Card';
import Tuts from './Tuts';
import {useContext} from 'react';
import { StateContext } from '../Context/StateContext';
import  tw  from 'tailwind-react-native-classnames';

export default function Saved({snippet, tutorial}) {

    const {checkSaveSnippet, checkSaveTuts} = useContext(StateContext);
    const [isSavedSnippet, setIsSavedSnippet] = checkSaveSnippet;
    const [isSavedTuts, setIsSavedTuts] = checkSaveTuts;

  return (
    <>

        {(isSavedSnippet.length == 0 && isSavedTuts.length == 0) ? <Text style={[tw`py-10`, {textAlign: 'center', fontSize: 20, color: '#B5B5B5', flexWrap: 'wrap'}]}>All you saved videos and purchased videos will feature here.</Text>
        :
        <View style={{justifyContent: 'center', alignItems: 'center', height: '70%'}}>
            {isSavedSnippet.length > 0 && <FlatList 
            data={snippet}
            renderItem={({item, index}) => { 
            if(isSavedSnippet.includes(item.id)){
            return <Card key={index} id={item.id} title={item.title} feat={item.feat} uri={item.vidUri}/>}
        
            }}
            contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
            />}

            {isSavedTuts.length > 0 && <FlatList 
            data={tutorial}
            renderItem={({item, index}) => { 
            
            if(isSavedTuts.includes(item.id)){
            return <Tuts key={index} id={item.id} title={item.title} influencer={item.influencer} uri={item.vidUri} desig={item.designation} price={item.price}/>}
        
            }}
            contentContainerStyle={{overflow: 'hidden', flexGrow: 1}}
            />}
        </View>
        }
        </>
  )
}
