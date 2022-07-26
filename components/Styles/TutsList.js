import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    card: {
        width: Dimensions.get("screen").width,
        height: 200,
        flexDirection: 'row',
        borderBottomColor: '#B6B6B6',
        borderBottomWidth: 1,
    },
    left: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        position: 'relative',
        backgroundColor: 'white',
        width: 100,
        height: 170,
        borderWidth: 1,
        borderColor: '#C5C5C5',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playButton: {
        position: 'absolute',
    },
    right: {
        width: "60%",
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    hashtags: {
        flexDirection: 'row',
    },

    hashtag: {
        marginLeft: 5,
        color: '#B5B5B5',
    },

    vidHead: {
        flexDirection: 'row',
    },
    vidTitle: {
        flexWrap: 'wrap',
    },
    vidFoot: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rectangle: {
        position: 'relative',
        width: 20,
        height: 20,
    },
    round: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: '#B5B5B5',
        borderRadius: 50,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    saveButton: {

    },
    menuButton: {

    },
    btnOutlineBlock: {
        width: 40,
        height: 40,
        borderColor: "#B5B5B5",
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    btnOutlineTransparent: {
        width: 40,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#000"
    },
    menubtnOutline: {
        width: 40,
        height: 40,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#B5B5B5",
        borderWidth: 1
    },

    playPricebtn: {
        backgroundColor: "#000",
        width: 80,
        height: 40,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
    },

    playbtn: {
        backgroundColor: "#000",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },

    viewButton: {
        width: 120,
        height: 40,
        borderColor: "#B5B5B5",
        borderWidth: 1,
        borderRadius: 32,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 3
    }
})