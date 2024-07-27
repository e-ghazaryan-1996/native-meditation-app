import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallary";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  Text,
  View,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Affirmation = () => {
  const { itemId } = useLocalSearchParams<{ itemId: string }>();
  const router = useRouter();
  const [affirmation, setAffirmation] = useState<
    (typeof AFFIRMATION_GALLERY)[number]["data"][number] | null
  >(null);
  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {
    if (itemId) {
      for (let i = 0; i < AFFIRMATION_GALLERY.length; i++) {
        const affirmationsData = AFFIRMATION_GALLERY[i].data;
        const affirmation = affirmationsData.find(
          (item) => item.id === Number(itemId)
        );
        if (affirmation) {
          const sentences = affirmation.text.split(".");
          setSentences(sentences);
          setAffirmation(affirmation);
          break;
        }
      }
    }
  }, [itemId]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.9)"]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, index) => {
                  return (
                    <Text
                      className="text-white text-3xl font-bold mb-12"
                      key={index}
                    >
                      {sentence}
                    </Text>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Affirmation;
