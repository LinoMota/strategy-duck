import {
    IDuckFlyingStrategy,
    IDuckTalkingStrategy,
    IDuckQuakingStrategy
} from './interfaces/index'


export default class Duck {

    constructor(
        private talkSt: IDuckTalkingStrategy,
        private flySt: IDuckFlyingStrategy,
        private quackSt: IDuckQuakingStrategy,
    ) {

    }

    quack(): void {
        this.quackSt.quack()
    }

    fly(): void {
        this.flySt.fly()
    }

    talk(): void {
        this.talkSt.talk()
    }
}