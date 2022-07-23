import React, { useEffect } from "react";

const HomeChild = React.memo(() => {
  const [count] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("child rendering");
    });

    return () => clearInterval(interval);
  }, []);
  return <div>{count}</div>;
});

export default HomeChild;
