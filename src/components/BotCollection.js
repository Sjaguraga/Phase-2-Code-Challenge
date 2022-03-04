import React from "react";
import BotCard from "./BotCard";
import { v4 as uuidv4 } from "uuid";

function BotCollection({ showBots, addNewBot, deleteBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {showBots.map((bot) => {
          return (
            <BotCard
              key={uuidv4()}
              bot={bot}
              addNewBot={addNewBot}
              deleteBot={deleteBot}
            />
          );
        })}
        {/* Collection of all bots */}
      </div>
    </div>
  );
}

export default BotCollection;
