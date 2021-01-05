import { IDuckQuakingStrategy } from "../../interfaces/IDuckQuackingStrategy";

export class RoboticQuack implements IDuckQuakingStrategy {
    quack(): void {
        console.log('quack bzz !');
    }
}