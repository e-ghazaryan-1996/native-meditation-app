import { createContext, useContext, useState } from "react";

interface ITimerContext {
  duration: number;
  setDuration: (duration: number) => void;
}

export const TimerContext = createContext<ITimerContext>({
  duration: 10,
  setDuration: (duration: number) => {}
});

export const useTimerContext = () => useContext(TimerContext);

const TimerProvider = ({ children }: { children: React.ReactNode }) => {
  const [duration, setDuration] = useState(10);

  const handleSetDuration = (duration: number) => {
    setDuration(duration);
  };

  return (
    <TimerContext.Provider value={{ duration, setDuration: handleSetDuration }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
