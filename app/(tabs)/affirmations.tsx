import { View, Text } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { ScrollView } from "react-native";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import GuidedAffrimationGallery from "@/components/GuidedAffrimationGallery";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((item) => {
              return (
                <GuidedAffrimationGallery
                  key={item.title}
                  previews={item.data}
                  title={item.title}
                />
              );
            })}
          </View>
        </ScrollView>
      </AppGradient>
      <Text>Affirmation</Text>
    </View>
  );
};

export default Affirmation;
