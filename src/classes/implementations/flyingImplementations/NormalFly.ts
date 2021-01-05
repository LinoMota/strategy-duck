import { IDuckFlyingStrategy } from "../../interfaces/IDuckFlyingStrategy";

export class NormalFly implements IDuckFlyingStrategy {
    fly(): void {
        console.log('*flying*');
    }
}