import { IDuckFlyingStrategy } from "../../interfaces/IDuckFlyingStrategy";

export class NoFly implements IDuckFlyingStrategy {
    fly(): void {
        console.log('*can not fly :(*');
    }
}