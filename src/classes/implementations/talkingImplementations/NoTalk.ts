import { IDuckTalkingStrategy } from "../../interfaces/IDuckTalkingStrategy";

export class NoTalk implements IDuckTalkingStrategy {
    talk(): void {
        console.log("...");
    }
}