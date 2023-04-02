import React, { useState, useEffect } from "react";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greetingMessage;

    if (currentHour < 12) {
      greetingMessage = "Good morning";
    } else if (currentHour < 18) {
      greetingMessage = "Good afternoon";
    } else {
      greetingMessage = "Good evening";
    }

    setGreeting(greetingMessage);
  }, []);

  return <h3>{greeting}, it's currently {new Date().toLocaleTimeString()}</h3>;
}

export default Greeting;
