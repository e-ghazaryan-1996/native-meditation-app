import { View, Text, ImageBackground, Pressable } from "react-native";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import React, { useState } from "react";
import AppGradient from "@/components/AppGradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import StyledButton from "@/components/StyledButton";
import useTimer from "@/hooks/useTimer";
import useSound from "@/hooks/useSound";

const Meditate = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isPlaying, setIsPlaying, secondsRemaining, setSecondsRemaining } =
    useTimer();
  const { toggelSound } = useSound();

  const toggleMeditationStatus = async () => {
    setIsPlaying((prev) => !prev);
    await toggelSound();
  };

  const formattedMinutes = `${Math.floor(secondsRemaining / 60)}`.padStart(
    2,
    "0"
  );
  const formattedSeconds = `${secondsRemaining % 60}`.padStart(2, "0");

  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-16 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <View className="flex-1 justify-between">
            <View className="self-center my-auto bg-neutral-200 flex justify-center items-center rounded-full h-44 w-44">
              <Text className="text-4xl text-blue-800 font-rmono">
                {formattedMinutes}:{formattedSeconds}
              </Text>
            </View>
            <View className="mb-5">
              <StyledButton
                title={"Adjust Duration"}
                onPress={() => {
                  router.push("/(modal)/adjust-duration");
                }}
                contarinerStyles="px-10 mb-5"
              />
              <StyledButton
                title={`${isPlaying ? "Pause" : "Start"} Meditation`}
                onPress={() => {
                  toggleMeditationStatus();
                }}
                contarinerStyles="px-10"
              />
            </View>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
