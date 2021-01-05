import { IDuckFlyingStrategy } from "../../interfaces/IDuckFlyingStrategy";

export class JetFly implements IDuckFlyingStrategy {
    fly(): void {
        console.log('*jet flying*');
    }
}