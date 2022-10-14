import { useEffect, useState } from "react";

const useWatch = () => {
  const [time, setTime] = useState<Date>(new Date());

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
