import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Emil
          </Text>
          <Text className="text-indigo-100 font-medium text-xl">
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            data={MEDITATION_DATA}
            renderItem={({ item }) => {
              return (
                <Pressable
                  className="h-48 my-3 rounded-md overflow-hidden"
                  onPress={() => {}}
                >
                  <ImageBackground
                    resizeMode="cover"
                    className="flex-1 rounded-lg justify-center"
                    source={meditationImages[item.id - 1]}
                  >
                    <LinearGradient className="flex-1 justify-center items-center" colors={["transparent", "rgba(0,0,0,0.8)"]}>
                      <Text className="text-gray-100 text-3xl font-bold text-center">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              );
            }}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;