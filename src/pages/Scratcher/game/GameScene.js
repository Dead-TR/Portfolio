import { Scene } from "phaser";
import { LoadGameElements } from "./modules/preload/LoadGameElements";
import { LoadCharacter } from "./modules/preload/LoadCharacter";
import { CreateStaticGameElements } from "./modules/create/CreateStaticGameElements";
import { CreateCharacter } from "./modules/create/CreateCharacter";
import { CreateInteractiveGameElements } from "./modules/create/CreateInteractiveGameElements";
import { Starter } from "./modules/create/Starter";
import { StarterListener } from "./modules/update/StarterListener";
import { CharacterAnimationUpdate } from "./modules/update/CharacterAnimationUpdate";


export class GameScene extends Scene {
  async preload() {
    LoadCharacter(this);
    LoadGameElements(this);
  }

  create() {
    CreateStaticGameElements(this);
    CreateInteractiveGameElements(this);
    Starter(this);
    CreateCharacter(this);
  }

  update() {
    StarterListener(this);
    CharacterAnimationUpdate(this);
  }
}
