import Descriptor from "../DescriptionBanner";
import GameBanner from "../GameBanner";

function About(){
    return(
        <div>
            <Descriptor message="Hi there! My name is Jessie and I've been making games for about half a decade. 
            I studied at UC Santa Cruz where I learned how to code and design games. 
            I'm currently working on Squish at Grave Rave Games as a programmer and designer. Check out my games down below!"
            />

            <GameBanner 
                imageFirst={true}
                gameName="Squish"
                gameDescription="blah"
                genre="gen"
                engine="Unity"
                platform="PC, Nintendo Switch"
                site="/Squish"
            />
            
            <GameBanner 
                imageFirst={true}
                gameName="Kidgilantes"
                gameDescription="blah"
                genre="gen"
                engine="Unreal Engine 4"
                platform="PC"
                site="/Kidgilantes"
            />

            <GameBanner 
                imageFirst={true}
                gameName="Flight of the Fire Fairy"
                gameDescription="blah"
                genre="gen"
                engine="Unity"
                platform="PC"
                site="/FFF"
            />
        </div>


    )
}


export default About;