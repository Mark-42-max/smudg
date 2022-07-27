import { Text, View } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import tw  from 'tailwind-react-native-classnames';
import Bookmark from '../assets/svg/Bookmark';
import Hamburger from '../assets/svg/Hamburger';
import Play from '../assets/svg/Play';
import styles from './Styles/TutsList'
import { TouchableOpacity} from 'react-native';
import { StateContext } from '../Context/StateContext';
import RBSheet from "react-native-raw-bottom-sheet";
import RazorpayModal from './RazorpayModal';
import { useNavigation } from "@react-navigation/native";

export default function Tuts({id, title, influencer, uri, desig, price, vidLen}) {
    const {checkSaveTuts, list} = useContext(StateContext);
    const [isSavedTuts, setIsSavedTuts] = checkSaveTuts;
    const [savedList, setSavedList] = list;
    const [includeId, setIncludeId] = useState(false);
    const refRBSheet = useRef();
    const navigation = useNavigation();

    const Razorpay = () => {
        refRBSheet.current.open();
    }

    useEffect(() => {
        if(isSavedTuts) {
            if(savedList.length == 0){
                setSavedList([{id, title, influencer, uri, desig, price}]);
            }else{
                setSavedList(savedList => {
                    if(savedList.find(item => item.id == id)){
                        return savedList;
                    }else{
                        return [...savedList, {id, title, influencer, uri, desig, price}];
                    }
                })
            }

            if(isSavedTuts.includes(id)){
                setIncludeId(true);
            }else{
                setIncludeId(false);
            }
        }
        if(!isSavedTuts) {
            setSavedList(savedList => savedList.filter(item => item.id !== id));
        }
    }, [isSavedTuts])
    
  return (
    <View style={styles.card}>
        <View style={styles.left}>
            <View style={styles.video}>
                <View style={styles.playButton}>
                    <TouchableOpacity onPress={() => price == 0 ?navigation.navigate('Videos') : Razorpay()}>
                        {price == 0 ? <View style={styles.playbtn}>
                            <Play />
                        </View> : <View style={styles.playPricebtn}>
                            <Play />
                            <Text style={{ color: '#fff'}}>₹{price}</Text>
                        </View>}
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
                    <Text>
                        {influencer}
                    </Text>
                    <Text style={{fontSize: 10, color: 'gray'}}>
                        {desig}
                    </Text>
                </View>
            </View>
            <View style={styles.options}> 
            <TouchableOpacity onPress={() => price == 0 ?navigation.navigate('Videos') :Razorpay()}>
                <View style={styles.viewButton}>
                    <Text>
                        VIEW DETAILS
                    </Text>
                </View>
            </TouchableOpacity>
                {includeId ? <TouchableOpacity onPress={() => {
                    setIsSavedTuts(isSaved => {
                        return isSaved.filter(item => item !== id);
                    })

                }} style={styles.saveButton}>
                    <View style={[tw`p-2`,styles.btnOutlineTransparent]}>
                        <Bookmark color="#FFFFFF"/>
                    </View>
                </TouchableOpacity>  : <TouchableOpacity onPress={() => {
                    setIsSavedTuts(isSaved => {
                        return [...isSaved, id]
                    })
                    }} style={styles.saveButton}>
                    <View style={[tw`p-2`,styles.btnOutlineBlock]}>
                        <Bookmark color="#000000"/>
                    </View>
                </TouchableOpacity>}
                <TouchableOpacity style={styles.menuButton}>
                    <View style={styles.menubtnOutline}>
                        <Hamburger />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        <RBSheet
        ref={refRBSheet}
        closeOnDragDown={false}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "#B5B5B5"
          },
          draggableIcon: {
            backgroundColor: "#B5B5B5"
          },
          container: {
            backgroundColor: "#FFFFFF"
          }
        }}
        animationType="slide"
        height={500}
      >
        <RazorpayModal />
      </RBSheet>
    </View>
  )
}