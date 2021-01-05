import Duck from "./Duck";
import {
    RoboticQuack,
    RoboticTalk,
    JetFly
} from './implementations/index'

export default class RobotDuck extends Duck {

    constructor(){
        super(
            new RoboticTalk(),
            new JetFly(),
            new RoboticQuack()
        )
    }
}