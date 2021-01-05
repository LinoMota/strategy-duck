import Duck from "./Duck";
import {
    NormalFly,
    NormalQuack,
    NoTalk
} from './implementations/index';

export default class NormalDuck extends Duck {

    constructor(){
        super(
            new NoTalk(),
            new NormalFly(),
            new NormalQuack()
        )
    }
}