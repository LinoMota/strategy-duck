import RobotDuck  from './classes/RobotDuck';
import NormalDuck from "./classes/NormalDuck";

export default class Main {

    static main() {
        console.log('Calling my duck')
        const myDuck = new NormalDuck()
        myDuck.quack()
        myDuck.fly()
        myDuck.talk()

        console.log('Building my robot duck')
        const myRobot = new RobotDuck()
        myRobot.quack()
        myRobot.fly()
        myRobot.talk()
    }

}