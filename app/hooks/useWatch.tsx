import { useEffect, useState } from "react";

const useWatch = (initialTime: Date | string) => {
  const [time, setTime] = useState<Date | string>(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    currentTime: time.toLocaleString("us", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }),
  };
};

export default useWatch;
