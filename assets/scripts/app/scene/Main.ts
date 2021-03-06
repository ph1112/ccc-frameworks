import { TestUI } from "../ui/TestUI";
import { UIManager } from "../../base/mvc/UIManager";
import { BaseComponent } from "../../base/BaseComponent";

const { ccclass, property } = cc._decorator;

@ccclass
export class Main extends BaseComponent {

  onLoad() {
    App.SingletonFactory.getInstance(UIManager).showUI(TestUI);
  }

}