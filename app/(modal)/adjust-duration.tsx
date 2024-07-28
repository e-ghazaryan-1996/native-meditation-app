import AppGradient from "@/components/AppGradient";
import StyledButton from "@/components/StyledButton";
import { useTimerContext } from "@/context/TimerContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const durationOptions = [
  {
    name: "10 seconds",
    value: 10,
  },
  {
    name: "5 minutes",
    value: 300,
  },
  {
    name: "10 minutes",
    value: 600,
  },
  {
    name: "15 minutes",
    value: 900,
  },
];

const AdjustDuration = () => {
  const router = useRouter();
  const { setDuration } = useTimerContext();

  const handlePress = (duration: number) => {
    router.back();
    setDuration(duration);
  };
  return (
    <View className="flex-1 relative">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Pressable
          onPress={() => router.back()}
          className="absolute top-8 left-6 z-10"
        >
          <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View className="justify-center h-4/5">
          <Text className="text-center text-3xl text-white">
            Adjust Duration
          </Text>
          <View className="mt-5">
            {durationOptions.map((item) => {
              return (
                <StyledButton
                  key={item.name}
                  onPress={() => handlePress(item.value)}
                  title={item.name}
                  contarinerStyles="mb-5"
                />
              );
            })}
          </View>
        </View>
      </AppGradient>
    </View>
  );
};

export default AdjustDuration;
