import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { Link } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";

interface IGuidedAffrimationGalleryProps {
  title: string;
  previews: (typeof AFFIRMATION_GALLERY)[number]["data"];
}

const GuidedAffrimationGallery: React.FC<IGuidedAffrimationGalleryProps> = ({
  title,
  previews,
}) => {
  return (
    <View className="my-5">
      <View className="mb-2">
        <Text className="text-white text-xl font-bold">{title}</Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={(item) => {
            return (
              <Link href={`/affirmations/${item.item.id}`} asChild>
                <Pressable>
                  <View className="h-36 w-32 rounded-md mr-4">
                    <Image
                      resizeMode={"cover"}
                      source={item.item.image}
                      className="h-full w-full"
                    />
                  </View>
                </Pressable>
              </Link>
            );
          }}
        />
      </View>
    </View>
  );
};

export default GuidedAffrimationGallery;
