import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from "react-native";
import React, {useContext, useRef, useState} from "react";
import tw from "tailwind-react-native-classnames";
import LeftButton from './../assets/svg/LeftButton';
import RightButton from './../assets/svg/RightButton';
import Like from './../assets/svg/Like';
import Comment from "../assets/svg/Comment";
import { StateContext } from "../Context/StateContext";
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoContainer = () => {
    const {likes, comments, likesCount, commentsCount} = useContext(StateContext);
    const [isLiked, setIsLiked] = likes;
    const [isCommented, setIsCommented] =comments;
    const [likedCounts, setLikedCounts] = likesCount;
    const [commentCount, setCommentCount] = commentsCount;
    const navigation = useNavigation();
    var i = 0;

    const newId = () => {return i++}
    const videoRef = useRef(null);
    const [status, setStatus] = React.useState({});
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLayer}>
        <View style={styles.heading}>
          <Text style={{fontSize: 18}}>Aliquam dignissim a tellus eu egestas.</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../assets/cross.png')} />
          </TouchableOpacity>
        </View>
        <View style={[tw`mt-2`, styles.vidHead]}>
          <View style={styles.footLeft}>
            <View style={styles.rectangle}>
              <View style={styles.round}></View>
            </View>
          </View>
          <View style={[tw`px-2`, styles.footRight]}>
            <Text>Deepika Padukone</Text>
            <Text style={{ fontSize: 10, color: "gray" }}>Fashion Stylist</Text>
          </View>
        </View>

        <View style={styles.vidContainer}>
            <TouchableOpacity>
                <LeftButton />
            </TouchableOpacity>

            <View style={styles.video}>
                <Video
                    ref={videoRef}
                    style={styles.videoElement}
                    source={{
                        //dummy uri: http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                {/* <FlatList
                    horizontal
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    legacyImplementation={false}
                    data={['http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4']}
                    renderItem={({item, index}) => <Video
                    key={index}
                    ref={videoRef}
                    style={styles.videoElement}
                    source={{
                    uri: item,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />}
                    style={{width: '80%', height:'100%'}}
                /> */}
            </View>

            <TouchableOpacity>
                <RightButton />
            </TouchableOpacity>
        </View>

        <View style={styles.interactions}>
            <View>
            <TouchableOpacity onPress={() => {setIsLiked(isLiked => !isLiked); setLikedCounts(likedCounts => {
               if(isLiked) {
                return likedCounts - 1
               }else{
                return likedCounts + 1
               }
            })}}>
                <Like isClicked={isLiked}/>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>{likedCounts}</Text>
            </View>
                
            <View>
            <TouchableOpacity onPress={() => {setIsCommented(isCommented => !isCommented); setCommentCount(commentCount => {
                if(isCommented){
                    return commentCount - 1
                }else{
                    return commentCount + 1
                }
                })}}>
                <Comment isClicked={isCommented}/>
            </TouchableOpacity>
            <Text style={{textAlign: 'center'}}>{commentCount}</Text>
            </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default VideoContainer

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  
    heading: {
      fontSize: 20,
      flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    vidHead: {
      flexDirection: "row",
      alignItems: "center",
    },
    rectangle: {
      position: "relative",
      width: 20,
      height: 20,
    },
    round: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#B5B5B5",
      borderRadius: 50,
    },
  
    containerLayer: {
      height: "100%",
      width: "100%",
      paddingVertical: 100,
      paddingHorizontal: 30,
    },
  
    vidContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "80%",
    },
    video: {
      width: "80%",
      height: "80%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
    },

    videoElement: {
        width: "100%",
        height: "100%",
    },

    interactions: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    }
  });