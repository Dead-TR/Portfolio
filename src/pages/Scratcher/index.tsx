import { memo, useEffect } from "react";
import Phaser from "phaser";

import { loadFont } from "utils";

import scratcherConfig from "./game/config";
import css from "./style.module.scss";

const Scratcher = () => {
  useEffect(() => {
    let game: Phaser.Game;

    const getGame = async () => {
      await loadFont("DRAguSans", "assets/styles/font/DRAguSans-Black.ttf");
      game = new Phaser.Game(scratcherConfig);
    };

    getGame();
    return () => {
      game?.destroy(true);
    };
  }, []);

  return <div className={css.root} id="scratcher" />;
};

export default memo(Scratcher);
