import { IDuckQuakingStrategy } from "../../interfaces/IDuckQuackingStrategy";

export class NoQuack implements IDuckQuakingStrategy {
    quack(): void {
        console.log('*no quack*')
    }
}