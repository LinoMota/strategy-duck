import { IDuckTalkingStrategy } from "../../interfaces/IDuckTalkingStrategy";

export class RoboticTalk implements IDuckTalkingStrategy {
    talk(): void {
        console.log("I am Ducktron !");
    }
}