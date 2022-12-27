import Descriptor from "../DescriptionBanner";
import GameBanner from "../GameBanner";

function About(){
    return(
        <div>
            {/* <Descriptor message="Hi there! My name is Jessie and I've been making games for about half a decade. 
            I studied at UC Santa Cruz where I learned how to code and design games. 
            I'm currently working on Squish at Grave Rave Games as a programmer and designer. Check out my games down below!"
            /> */}

            <GameBanner 
                imageFirst={true}
                gameName="Squish"
                gameDescription="I designed a game mode and created hazards for this local and online multiplayer game. I refactored major systems and optimized code for our Switch port. I made developer tools and also worked on art assets seen throughout the game. "
                genre="Genre: Action Platformer, Local and Online Party Game"
                engine="Engine: Unity"
                platform="Platforms: PC, Nintendo Switch"
                site="/Squish"
            />
            
            <GameBanner 
                imageFirst={true}
                gameName="Kidgilantes"
                gameDescription="This was my senior capstone project at UC Santa Cruz. I worked with 14 other talented individuals to develop this game in UE 4. I was brought on as a programmer but designed the feel of and implemented the core balancing mechanic."
                genre="2P Local Multiplayer"
                engine="Engine: Unreal Engine 4"
                platform="Platform: PC"
                site="/Kidgilantes"
            />

            <GameBanner 
                imageFirst={true}
                gameName="Flight of the Fire Fairy"
                gameDescription="I rounded up a bunch of my friends to develop this 2D platformer. I acted as producer, designer, and programmer for this project. I also made all of the character animations seen in game."
                genre="Genre: 2D Action Platformer"
                engine="Engine: Unity"
                platform="Platform: PC"
                site="/FFF"
            />
        </div>


    )
}


export default About;