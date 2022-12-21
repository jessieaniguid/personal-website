import Descriptor from '../DescriptionBanner';
import GameTrailer from "../GameTrailer";
import '../GamePage.css';
import WorkDisplay from '../WorkDisplay';

function Kidgilantes(){
    return(
        <div>
            <div className='Game-Header' >
                <GameTrailer site="https://youtu.be/9oSmGcWrrzE" gameSite="https://store.steampowered.com/app/1631830/Squish/"></GameTrailer>
            </div>
            
            <Descriptor message="
                Kidgilantes was my senior capstone project at UC Santa Cruz.
                I collaborated with 14 other students and worked mainly as one of the programmers.
                It's a 2 player game where players play as kids trying to free animals from a zoo.
                Players can stack on top of each other and hide under a trench coat to become invisible to the security guard's eyes.
                While under the trench coat, players need to maintain their balance by moving the left joystick.
                I implemented the core stacking mechanic using Unreal Engine 4's blueprints system and also contributed to the particle effects seen throughout the game.">
            </Descriptor>

            <WorkDisplay
                MainTitle="BALANCING MECHANIC"
                VideoLink="https://youtu.be/wtISidjhKbc"
                Text="Using UE 4's blueprints system, I developed the stacking mechanic seen in the video. Once two players decide to stack, the person on top must ensure that the indicator on the bar never reaches the red areas. This is done by having various variables influence a 'total balance value'. This value weighs the top player's controller input the most followed by the bottom player's controller input. A drag value is also added so that the value gradually leans more and more towards the side it's currently on. For example if the value is less than the starting value, then the balance value will slowly decrease over time. A random value is also added to cause the balancing amount to be more erratic as time goes on, representing how the characters are getting tired. "
            ></WorkDisplay>
            {/* <div>
                <h1 className='Game-Header'>Balancing Mechanic</h1>
                <div className='Game-Text-Container'>
                    <p className='Game-Text'>
                    Using UE 4's blueprints system, I developed the stacking mechanic seen in the video. 
                    Once two players decide to stack, the person on top must ensure that the indicator on the bar never reaches the red areas. 
                    This is done by having various variables influence a "total balance value". 
                    This value weighs the top player's controller input the most followed by the bottom player's controller input. 
                    A drag value is also added so that the value gradually leans more and more towards the side it's currently on. 
                    For example if the value is less than the starting value, then the balance value will slowly decrease over time. 
                    A random value is also added to cause the balancing amount to be more erratic as time goes on, representing how the characters are getting tired. 
                    </p>
                </div>
            </div> */}
        </div>
    )
}


export default Kidgilantes;