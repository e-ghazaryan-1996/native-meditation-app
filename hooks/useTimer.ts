import { useTimerContext } from "@/context/TimerContext";
import { useEffect, useState } from "react";

const useTimer = () => {
  const { duration: secondsRemaining, setDuration: setSecondsRemaining } =
    useTimerContext();
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    let Timeout: NodeJS.Timeout | null = null;
    if (isPlaying) {
      Timeout = setTimeout(() => {
        setSecondsRemaining(secondsRemaining - 1);
      }, 1000);
    }
    if (secondsRemaining === 0) {
      setIsPlaying(false);
    }
    return () => {
      if (Timeout) {
        clearTimeout(Timeout);
      }
    };
  }, [secondsRemaining, isPlaying]);

  return { secondsRemaining, isPlaying, setSecondsRemaining, setIsPlaying };
};

export default useTimer;
