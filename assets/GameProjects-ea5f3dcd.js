import{f as m,_ as g,j as b,w as _,T as y,o as i,c as n,a as o,t as v,n as h,h as k,p as j,e as I,r as u,F as P,g as C,d as f,k as A}from"./index-bd798f66.js";const D=m({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const w=e=>(j("data-v-311e7fce"),e=e(),I(),e),S={key:0},T=w(()=>o("div",{class:"overlay"},null,-1)),$={class:"dialog-title"},N=w(()=>o("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),M=[N],G={class:"dialog-content"},L=["innerHTML"],O={class:"dialog-bottom"};function B(e,a,l,c,d,p){return i(),b(y,{name:"fade"},{default:_(()=>[e.visible?(i(),n("div",S,[T,o("div",{class:"dialog",style:h({"background-color":e.color})},[o("h1",$,v(e.title),1),o("div",{onClick:a[0]||(a[0]=s=>e.$emit("close")),class:"dialog-close"},M),o("div",G,[o("div",{innerHTML:e.htmlContent},null,8,L),o("div",O,[o("a",{onClick:a[1]||(a[1]=s=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):k("",!0)]),_:1})}const F=g(D,[["render",B],["__scopeId","data-v-311e7fce"]]),H=m({name:"ProjectsList",components:{ProjectDetailsOverlay:F},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const x={class:"projects-list"},W=["onClick"],U={class:"title-text"};function Z(e,a,l,c,d,p){const s=u("ProjectDetailsOverlay");return i(),n("div",null,[o("div",x,[(i(!0),n(P,null,C(e.projects,t=>(i(),n("div",{key:t.id,onClick:q=>e.showDetails(t),class:A(["project-item",{wide:t.isWide,high:t.isHigh}])},[o("div",{class:"project-item-image",style:h({"background-image":"url("+t.iconUrl+")"})},null,4),o("div",{class:"title-bar",style:h({"background-color":t.accentColor+"DD"})},[o("div",U,v(t.name),1)],4)],10,W))),128))]),f(s,{onClose:a[0]||(a[0]=t=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const R=g(H,[["render",Z],["__scopeId","data-v-f6bd82fd"]]);class r{constructor(a,l,c,d,p="#000000",s=!1,t=!1){this.id=a,this.name=l,this.htmlDescription=d,this.iconUrl=c,this.isHigh=s,this.isWide=t,this.accentColor=p}}const V=[new r("Overseer","Underworld Overseer","img/projects/Overseer.jpg",`
    <div class="paragraph">
        <strong>Underworld Overseer</strong> is a game I started working on during my internship at Myron Games. After my internship ended, I stayed until the end of the project, right before QA testing.<br /> While working on this project, I added several features to the game. I updated the existing AI to allow for a new creature to do its job.I also added a new spell to the game and worked on a few of the traps.<br /> During my stay at Myron, I also started working on some internal Blender add-ons to allow for a smoother workflow.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4?si=I2cB3KJxa3lGquO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Find the game on steam at <a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Underworld Overseer</a>.
    </div>

    <div class="paragraph">
        The unit i made while at Myron is the Bone Fairy. The Bone Fairy goes around and collects corpses for the player, once they have a corpse they will bring this corpse to a cemetery. This allows the player to easily resurrect them and get more value out of their necromancy spell.<br />
        This was a really interesting experience since it allowed me to delve into existing AI systems and update them for this new functionality.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BoneFairy.png" alt="Bone Fairy"/>
    </div>
    `,"#730a0a"),new r("Research Project","Code-Injected Aimbot in Doom","img/projects/Aimbot_Gif_Doom.gif",`
    <div class="paragraph">
        <strong>Code-Injected Aimbot in Doom</strong> is a research paper I made in school. The goal was to research a topic that interested me. I have always had an interest in how code injection works, and thought it had a lot of applications for older games. Here I compared the speed of development for an aimbot with code injection for both a game where I have the source code, <strong>DOOM</strong>, and a game where I don't have the source code, <strong>Call of Duty: World at War</strong>. I also compared the runtime performance between code injection and image recognition.
    </div>

    <div class="paragraph center">
    <div class="notice">
        Source code is available on <a href="https://github.com/AaronFrans/DLL-Injection" target="_blank">GitHub</a><br />
        The Paper is available <a class="download-link" href="d/Exploring_a_Code-Injected_Aimbot_in_Doom-Aaron_Frans.pdf" target="_blank">Here</a>
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Aimbot_Gif_Doom.gif" alt="A simple aimbot with code injection in the game Doom" />
    <img class="pc-screenshot" src="img/projects/Aimbot_Gif_CoDWaW.gif" alt="A simple aimbot with code injection in the game Call of Duty World at War" />
    </div>
    `,"#331f1e"),new r("SnakeNN","Snake Neural Network","img/projects/Snake-NN-Timelapse.gif",`
    <div class="paragraph">
     <strong>Snake Neural Network</strong> is a neural network trained to play the game snake. This project was an assignment where the goal was to delve deeper into some subject, that revolves around AI in games. Since I have always had some interest in neural networks, I used this opportunity to delve into how they work and how to apply it to a simple game, in this case snake.
    </div>
    <div class="paragraph center">
    <img class="pc-screenshot " src="img/projects/Snake-NN-Timelapse.gif" alt="Snake Neural Network Training" />
    </div>
    <div class="paragraph center">
    <div class="notice">
        Source code available at <a href="https://github.com/AaronFrans/SnakeNN" target="_blank">Github</a>
    </div>
    </div>
    `,"#23bd69"),new r("API Pokédex","Pokédex with API","img/projects/Pokedex_API_Video.gif",`
    <div class="paragraph center">
        <div class="notice error">
           <strong>This project was purely educational; all rights belong to Nintendo and the Pokémon Company!</strong>
        </div>
    </div>  
    <div class="paragraph">
        This <strong>Pokédex</strong> is made with the free to use Pokémon API from <a href="https://pokeapi.co/">pokeapi</a>. The goal of this project was to make a small app that uses an api, and lists all items from that api, then you can click one of the items to get a more detailed view of the selected item. <br />
        This project was made with C# .NET
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Details_Page.png" alt="The Details screen made with the poke   ex api" />
        <img class="pc-screenshot" src="img/projects/List_Page.png" alt="The List screen made with the pokedex api" />
    </div>
    `,"#046115"),new r("Zombie Survival","Zombie Survival AI","img/projects/ZombieGame.gif",`
    <div class="paragraph">
        <strong>Zombie Survival AI</strong> is a project where the goal was to make an AI able to survive against waves of zombies while only able to get info from a cone in front of the AI. I used a primitive blackboard to store the info while using a simple spiral pattern to explore the world.
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/AaronFrans/ZombieGame" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/ZombieGame.gif" alt="The AI moving on its own." />
    </div>`,"#797d7a"),new r("Mario Overlord","Mario64 Remake","img/projects/Mario.png",`
    <div class="paragraph center">
        <div class="notice error">
           <strong>This project was purely educational; all rights belong to Nintendo!</strong>
        </div>
    </div>  
    <div class="paragraph">
        <strong>Mario64 Remake</strong> is a remake of Mario64 in a DirectX- and PhysX-based engine, where the goal was to make your own render pipeline from scratch, as well as learn how the PhysX-based physics are handled. I also made some simple AI for the Goomba and implemented a character controller for Mario. I also made various shaders using HLSL, such as billboard shaders, an underwater shader, and shaders based on the vertex color of the object.
    </div>

    <div class="paragraph">
        <div class="notice">
        Source code available on <a href="https://github.com/AaronFrans/SM64Remake" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Mario.png" alt="Screenshot of Mario Jumping" />
        <img class="pc-screenshot" src="img/projects/Mario3.PNG" alt="Screenshot of Mario in front of a waterfall with a coin and the castle to the right of him" />
    </div>`,"#e48246")],z=m({name:"GameProjects",components:{ProjectsList:R},data:function(){return{projects:V}}}),E=o("h1",null,"Projects I have worked on",-1),J=o("div",{style:{"margin-bottom":"30px"}}," These are some of the projects I have made or have contributed to. ",-1);function X(e,a,l,c,d,p){const s=u("ProjectsList");return i(),n("div",null,[E,J,f(s,{projects:e.projects},null,8,["projects"])])}const Q=g(z,[["render",X]]);export{Q as default};
