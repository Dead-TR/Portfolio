import Phaser from "phaser";
import 'phaser/plugins/spine/dist/SpinePlugin'
import { GameScene } from "./GameScene";

const scratcherConfig = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "scratcher",
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1097,
    height: 1920,
  },
  parent: "scratcher",


  scene: [GameScene],
  plugins: {
    scene: [
      {
        type: "scenePlugin",
        key: "SpinePlugin",
        plugin: window.SpinePlugin,
        mapping: "spine",
        sceneKey: "spine",
      },
    ],
  },
};

export default scratcherConfig;
