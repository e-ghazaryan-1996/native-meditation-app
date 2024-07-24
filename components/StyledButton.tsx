import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface IStyledButtonProps {
  onPress: () => void;
  title: string;
  textStyles?: string;
  contarinerStyles?: string;
}

const StyledButton: React.FC<IStyledButtonProps> = ({
  onPress,
  title,
  textStyles,
  contarinerStyles,
}) => {
  return (
    <TouchableOpacity
      className={`bg-white rounded-xl min-h-[62px] flex justify-center items-center ${contarinerStyles}`}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
