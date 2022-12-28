import Descriptor from "../DescriptionBanner";
import GameTrailer from "../GameTrailer";
import WorkContent from "../WorkContent";
import WorkDisplay from "../WorkDisplay";

import '../GamePage.css'

import anim1 from "../images/back-kick_orig.gif";
import anim2 from "../images/prettygood_orig.gif";
import anim3 from "../images/punch-combov2_orig.gif";
function FFF(){

    const firenaGifs = [
        <img src={anim1}/>,
        <img src={anim2}/>,
        <img src={anim3}/>
    ]
    return(
        <div>
            <div className='Game-Header'>
                <GameTrailer site="https://www.youtube.com/watch?v=oT_zcpTWgOI" gameSite="https://jessieaniguid.itch.io/flight-of-the-fire-fairy-demo"></GameTrailer>
            </div>
            <Descriptor message="
                Flight of the Fire Fairy is a student game I worked on with friends during my final year of university. 
                It follows the story of Firena, a once high ranking fairy general who was unjustly clipped of her wings and thrown into fairy hell. 
                Players play as Firena and use her combat knowledge to beat enemies with various combos. 
                Once they get far enough, the player can regain Firena's wings and fly out of this hell to restore her honor.">
            </Descriptor>

            <WorkDisplay
                MainTitle="COMBAT SYSTEM"
                MainMedia={firenaGifs}
                Text="The combat system is implemented using a tree like structure where each node can branch out in multiple ways and each leaf signals the end of a combo. After the player presses a button, the character starts listening for the next button input and checks if it matches one of its branches. If so, the process repeats until the player presses a button that isn't in one of the current node's branches or if the node reached is a leaf. This made it extensible for whenever we decided to add a new combo into the mix. Due to the lack of resources, we weren't able to make a lengthy combo list, but what we had was still fun.

                Originally, I wanted to pull off combos midair for when Firena regains her wings. However, it would've been way too out of scope. So, I had to simplify the airborne combat, which ended up being the right decision. Instead of kicking and punching in the air, Firena could now shoot fireballs. This gave players the ability to still fight midair without having to implement new features and new monsters. "
            />

            <WorkDisplay
                MainTitle="LEADERSHIP AND COLLABORATION"
                Text="This was the first time I had to act as a producer for a game team. I've worked with great producers prior to starting this project so I had a good starting point. I started pitching the idea to a couple of my game design friends and slowly I recruited an artist, a level designer, and a sound composer. With a solid team formed, preproduction was ready to start.

                We started meeting on a regular basis. Because we were still in school, I had to coordinate a time that worked with everyone's busy schedule. I prepared a flexible agenda that helped guide our discussions. We discussed what we previously worked on, and our plans for the next meeting. This became the norm of our meeting and it helped everyone stay on track until the end of the game's development."
            />

        </div>
    )
}


export default FFF;