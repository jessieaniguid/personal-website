import Descriptor from "../DescriptionBanner";
import GameTrailer from "../GameTrailer";
import WorkContent from "../WorkContent";
import WorkDisplay from '../WorkDisplay';

import '../GamePage.css'

import iceGif from '../images/iceblock.gif';
import tgConcept from "../images/tg-concept_orig.png";
import ship from "../images/ship.png";


function Squish(){
    const srcontents = [
        <WorkContent Title="prototyping and iteration" Text="I then began to brainstorm ideas on how to best address this design challenge. Originally, Space Rave was set on the moon and the floor remained static. I thought it would be exciting to have the floor be more dynamic to push players to jump and use the low gravity. So, I created a prototype where random columns of the floor would slowly fall off. This forced players to jump and now challenged them to maneuver themselves midair in low gravity. Still, the gameplay felt like it needed something more."/>,
    ]


    const hcontents = [
        <WorkContent Title="ice block" Images = {<img src={iceGif}/>} Text="I then began to brainstorm ideas on how to best address this design challenge. Originally, Space Rave was set on the moon and the floor remained static. I thought it would be exciting to have the floor be more dynamic to push players to jump and use the low gravity. So, I created a prototype where random columns of the floor would slowly fall off. This forced players to jump and now challenged them to maneuver themselves midair in low gravity. Still, the gameplay felt like it needed something more."/>,
    ]

    const tgDev = [
        <img src={tgConcept}/>,
        <img src={ship}/>
    ]

    const tgcontents = [
        <WorkContent Images={tgDev} Title="bringing the level to life" Text="Originally, Treasure Grab was the only game mode that didn't have its own arena. We were nearing a deadline, and our artists were already swamped with work. Fortunately, I started learning how to 3D model under the tutelage of a senior 3D character artist working in the industry. So, I asked the team if I could make concepts for Treasure Grab with the intent of making the art myself. Thankfully, they said yes."/>,
        <WorkContent Title="giving the chests some love" Text="For most of its lifetime, the chests in Treasure Grab used the same model and materials regardless of their value. Whether the chest was valued at 1,2,3, or even 9, the chests still looked the same. The only difference is the large text that hovered in front of the chests. I then remembered how previous MMOs I've played designed their coins in a way that they still used the same icons for coins, but they changed their colors. This immediately reflected the value of the coin. Bronze coins were less than silver coins and gold coins were the most valuable. This made their values really clear without having to actually read text. So this got me thinking it would improve readability if we color coded the chests. We could leave the default wood material for chests with a value of 1, but change the material of chests valued at 2 and 3+ to silver and gold respectively. In a mode where reaction time is the key to winning, relaying the values of the treasure chests to players as quickly as possible is a priority. We found the change to be highly effective and stuck with it until launch."/>
    ]

    
    return(
        <div>
            <div className="Game-Header">
                <GameTrailer site="https://youtu.be/5U9Ic68cVmg" gameSite="https://store.steampowered.com/app/1631830/Squish/"></GameTrailer>
            </div>
            
            <Descriptor message="
                Squish is a fast paced multiplayer party game where you compete against other goo-covered skeletons. 
                You can push blocks to squish other players and you can also jump and dash to maneuver your way past the blocks. 
                I worked as a programmer and designer for the game."/>


            <WorkDisplay 
                MainTitle="SPACE RAVE" 
                VideoLink="https://www.youtube.com/watch?v=Bx5tDd51Wxw"
                Text= "The biggest challenge I faced while working on Squish was designing a space themed game mode. Space themed game modes are known to have low gravity, which tends to slow things down. This meant that it conflicted with Squish's fast paced gameplay.  In regular game modes, blocks already fall slowly. When put into space, they move even slower. That in addition to player speed being reduced meant a much slower, less exciting gameplay."
                Contents={srcontents}>
            </WorkDisplay>

            <WorkDisplay 
                MainTitle="HAZARDS" 
                Text= "Hazards are an integral part of Squish. They are special blocks that each have a unique way of squishing the skelegoos. A cross bomb block shoots a fiery blast in the 4 cardinal directions. A black hole bomb generates a sphere of deadly energy. The death skull destroys anything in its wake. I was lucky enough to design a couple of hazards."
                Contents={hcontents}>
            </WorkDisplay>

            <WorkDisplay 
                MainTitle="TREASURE GRAB" 
                VideoLink="https://youtu.be/c43t3rA_-S0"
                Text= "In Treasure Grab, blocks spawn throughout the arena and players must break them to earn coins. Whoever gets to 30 coins first wins the round. For this mode, I made concepts for and implemented some of the background assets as well as adding a few QOL changes to the treasure blocks. "
                Contents={tgcontents}>
            </WorkDisplay>

        </div>


    );
}


export default Squish;