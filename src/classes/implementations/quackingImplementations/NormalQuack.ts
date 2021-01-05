import { IDuckQuakingStrategy } from "../../interfaces/IDuckQuackingStrategy";

export class NormalQuack implements IDuckQuakingStrategy {
    quack(): void {
        console.log('QUACK!')
    }
}