import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [showBots, setShowBots] = useState([]);
  const [showBotArmy, setShowBotArmy] = useState([]);

  function addNewBot(botArray) {
    if (showBotArmy.includes(botArray) === false) {
      setShowBotArmy([...showBotArmy, botArray]);
    }
  }

  function deleteBot(botObj) {
    const byeBots = () => {
      setShowBots(showBots.filter((item) => item.id !== botObj.id));
      setShowBotArmy(showBotArmy.filter((item) => item.id !== botObj.id));
    };

    fetch(`http://localhost:8002/bots/${botObj.id}`, {
      method: "DELETE",
    }).then(() => {
      byeBots();
    });
  }

  function deleteBot2(botGone) {
    setShowBotArmy(showBotArmy.filter((item) => item.id !== botGone.id));
  }

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setShowBots(data));
  }, []);
  return (
    <div>
      <YourBotArmy
        showBotArmy={showBotArmy}
        addNewBot={addNewBot}
        deleteBot={deleteBot2}
      />
      <BotCollection
        showBots={showBots}
        addNewBot={addNewBot}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;
