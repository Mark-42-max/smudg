import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import WelcomeScreen from "./screens/WelcomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Q1 from "./screens/Q1";
import Q2 from "./screens/Q2";
import Q3 from "./screens/Q3";
import Q4 from "./screens/Q4";
import Recommendation from "./screens/Recommendation";
import FaceProfile from "./screens/FaceProfile";
import Login from "./screens/Login";
import Verify from "./screens/Verify";
import { Provider } from "react-redux";
import { store } from "./store";
import NewLogin from "./screens/NewLogin";
import GoogleAuth from "./components/GoogleAuth";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
  });
  const Stack = createNativeStackNavigator();
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Q1"
                component={Q1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Q2"
                component={Q2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Q3"
                component={Q3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Q4"
                component={Q4}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Recommendation"
                component={Recommendation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Face"
                component={FaceProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Verify"
                component={Verify}
                options={{ headerShown: false }}
              />
              {/* Just testing the login API */}
              <Stack.Screen
                name="NewLogin"
                component={NewLogin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GoogleLogin"
                component={GoogleAuth}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
});
