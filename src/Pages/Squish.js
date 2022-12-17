import Descriptor from "../DescriptionBanner";
import GameTrailer from "../GameTrailer";

function Squish(){
    return(
        <div>
            <GameTrailer site="https://youtu.be/5U9Ic68cVmg" gameSite="https://store.steampowered.com/app/1631830/Squish/"></GameTrailer>
            <Descriptor message="
                Squish is a fast paced multiplayer party game where you compete against other goo-covered skeletons. 
                You can push blocks to squish other players and you can also jump and dash to maneuver your way past the blocks. 
                I worked as a programmer and designer for the game.">

                </Descriptor>
        </div>
    );
}


export default Squish;