import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/MeditationData";
import { useTimerContext } from "@/context/TimerContext";
import { Audio } from "expo-av";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";

const useSound = () => {
  const [audio, setAudio] = useState<Audio.Sound | null>(null);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const { id } = useLocalSearchParams<{ id: string }>();
  const { setDuration: setSecondsRemaining } = useTimerContext();
  const initSound = async () => {
    const activeFilename = MEDITATION_DATA[Number(id) - 1].audio;
    const { sound } = await Audio.Sound.createAsync(
      AUDIO_FILES[activeFilename]
    );
    setAudio(sound);
    return sound;
  };

  const toggelSound = async () => {
    const audioSound = audio ?? (await initSound());
    const status = await audioSound.getStatusAsync();
    if (status.isLoaded && !audioIsPlaying) {
      await audioSound.playAsync();
      setAudioIsPlaying(true);
    } else {
      await audioSound.pauseAsync();
      setAudioIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      setSecondsRemaining(10);
      audio?.unloadAsync();
    };
  }, [audio]);

  return { audio, initSound, toggelSound };
};

export default useSound;
