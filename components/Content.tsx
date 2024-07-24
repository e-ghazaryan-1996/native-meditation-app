import {
  Platform,
  StyleSheet,
  StatusBar as NativeStatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FC<IContentProps> = ({ children }) => {
  return <SafeAreaView className="flex-1 px-5 py-3">{children}</SafeAreaView>;
};

export default Content;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? NativeStatusBar.currentHeight : 0,
  },
});
