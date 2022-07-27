import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext, useEffect } from 'react';
import { StateContext } from '../Context/StateContext';
import tw  from 'tailwind-react-native-classnames';
import Bookmark from '../assets/svg/Bookmark';
import Hamburger from '../assets/svg/Hamburger';
import Play from '../assets/svg/Play';
import styles from './Styles/SnippetList'
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity} from 'react-native';

export default function Card({id, title, feat, uri, vidLen}) {
    const {checkSaveSnippet, list} = useContext(StateContext);
    const [isSavedSnippet, setIsSavedSnippet] = checkSaveSnippet;
    const [savedList, setSavedList] = list;
    const [includeId, setIncludeId] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        if(isSavedSnippet) {
            if(savedList.length == 0){
                setSavedList([{id, title, feat, uri}]);
            }else{
                setSavedList(savedList => {
                    if(savedList.find(item => item.id == id)){
                        return savedList;
                    }else{
                        return [...savedList, {id, title, feat, uri}];
                    }
                })
            }
        }
        if(!isSavedSnippet) {
            setSavedList(savedList => savedList.filter(item => item.id !== id));
        }

        if(isSavedSnippet.includes(id)){
            setIncludeId(true);
        }else{
            setIncludeId(false);
        }
    },[isSavedSnippet])
    
  return (
    <View style={styles.card}>
        <View style={styles.left}>
            <View style={styles.video}>
                <View style={styles.playButton}>
                    <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
                        <View style={styles.playbtn}>
                            <Play />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.duration}>
                    <Text style={styles.durationText}>{vidLen}s</Text>
                </View>
            </View>
        </View>
        <View style={styles.right}>
            <View style={[styles.hashtags]}>
                <Text style={styles.hashtag}>#cream</Text>
                <Text style={styles.hashtag}>#howto</Text>
            </View>
            <View style={[styles.vidHead]}>
                <Text style={styles.vidTitle}>
                {title}
                </Text>
            </View>
            <View style={[styles.vidFoot]}>
                <View style={styles.footLeft}>
                    <View style={styles.rectangle}>
                        <View style={styles.round}></View>
                    </View>
                </View>
                <View style={[tw`px-2`, styles.footRight]}> 
                    <Text style={{fontSize: 10, color: 'gray'}}>
                        FEAT
                    </Text>
                    <Text>
                        {feat}
                    </Text>
                </View>
            </View>
            <View style={styles.options}> 
                {includeId ? <TouchableOpacity onPress={() => setIsSavedSnippet(isSaved => {
                    return isSaved.filter(item => item !== id);
                })} style={styles.saveButton}>
                    <View style={[styles.btnOutlineTransparent]}>
                        <Bookmark color="#FFFFFF"/>
                        <Text style={{color: '#FFFFFF'}}>
                            SAVED
                        </Text>
                    </View>
                </TouchableOpacity>  : <TouchableOpacity onPress={() => setIsSavedSnippet(isSaved => {
                    return [...isSaved, id];
                })} style={styles.saveButton}>
                    <View style={[styles.btnOutlineBlock]}>
                        <Bookmark color="#000000"/>
                        <Text>
                            SAVE
                        </Text>
                    </View>
                </TouchableOpacity>}
                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menubtnOutline}>
                        <Hamburger />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}