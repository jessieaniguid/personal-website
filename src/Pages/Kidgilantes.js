import Descriptor from '../DescriptionBanner';
import GameTrailer from "../GameTrailer";

function Kidgilantes(){
    return(
        <div>
        <GameTrailer site="https://youtu.be/9oSmGcWrrzE" gameSite="https://store.steampowered.com/app/1631830/Squish/"></GameTrailer>
        <Descriptor message="
            Kidgilantes was my senior capstone project at UC Santa Cruz.
            I collaborated with 14 other students and worked mainly as one of the programmers.
            It's a 2 player game where players play as kids trying to free animals from a zoo.
            Players can stack on top of each other and hide under a trench coat to become invisible to the security guard's eyes.
            While under the trench coat, players need to maintain their balance by moving the left joystick.
            I implemented the core stacking mechanic using Unreal Engine 4's blueprints system and also contributed to the particle effects seen throughout the game.">
        </Descriptor>
    </div>
    )
}


export default Kidgilantes;