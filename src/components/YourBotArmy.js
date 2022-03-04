import React from "react";
import BotCard from "./BotCard";
import { v4 as uuidv4 } from "uuid";

function YourBotArmy({ showBotArmy, addNewBot, deleteBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {showBotArmy.map((bot) => {
            return (
              <BotCard
                key={uuidv4()}
                bot={bot}
                addNewBot={addNewBot}
                deleteBot={deleteBot}
              />
            );
          })}
          {/* Your Bot Army */}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
