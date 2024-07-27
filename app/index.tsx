import {
  ImageBackground,
  Text,
  View,
  Platform,
  StyleSheet,
  StatusBar as NativeStatusBar,
} from "react-native";
import beachImage from "@/assets/meditation-images/beach.webp";
import { StatusBar } from "expo-status-bar";
import StyledButton from "@/components/StyledButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,8)"]}>
          <View className="flex-1 justify-between">
            <Text className="text-center text-white font-bold text-4xl">
              Simple Meditation
            </Text>
            <Text className="text-center text-white text-2xl">
              Simplifying Meditation for everyone
            </Text>
            <View>
              <StyledButton
                onPress={() => router.push("/nature-meditate")}
                title="Get Started"
              />
            </View>
          </View>
          <StatusBar style="light" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});
