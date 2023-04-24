import { memo, useEffect } from "react";
import { Helmet } from "react-helmet";
import Phaser from "phaser";

import css from "./style.module.scss";
import { dogAdsConfig } from "./app";

const Ads = () => {
  useEffect(() => {
    const game = new Phaser.Game(dogAdsConfig);

    return () => {
      game.destroy(true);
    };
  }, []);

  return (
    <div className={css.root}>
      <Helmet>
        <title>Playable ADS: Search dog</title>
      </Helmet>

      <div id="dogAds" />
    </div>
  );
};

export default memo(Ads);
