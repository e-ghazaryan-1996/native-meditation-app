import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Content from "./Content";

interface IAppGradientProps {
  children: React.ReactNode;
  colors: string[];
}

const AppGradient: React.FC<IAppGradientProps> = ({ children, colors }) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Content>{children}</Content>
    </LinearGradient>
  );
};

export default AppGradient;
