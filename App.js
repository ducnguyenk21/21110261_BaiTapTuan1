import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "./IntroScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={IntroScreen}
          options={{ headerShown: false }} // Ẩn header cho trang giới thiệu
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Trang Chủ" }} // Hiển thị tiêu đề cho trang chủ
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
