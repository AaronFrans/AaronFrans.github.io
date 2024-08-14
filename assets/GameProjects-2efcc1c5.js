import{f as m,_ as g,j as _,w as b,T as k,o as i,c as n,a as o,t as v,n as h,h as j,p as y,e as I,r as u,F as P,g as C,d as f,k as D}from"./index-1d434b4d.js";const S=m({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const w=e=>(y("data-v-311e7fce"),e=e(),I(),e),A={key:0},$=w(()=>o("div",{class:"overlay"},null,-1)),T={class:"dialog-title"},N=w(()=>o("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),G=[N],M={class:"dialog-content"},L=["innerHTML"],O={class:"dialog-bottom"};function H(e,a,l,c,d,p){return i(),_(k,{name:"fade"},{default:b(()=>[e.visible?(i(),n("div",A,[$,o("div",{class:"dialog",style:h({"background-color":e.color})},[o("h1",T,v(e.title),1),o("div",{onClick:a[0]||(a[0]=s=>e.$emit("close")),class:"dialog-close"},G),o("div",M,[o("div",{innerHTML:e.htmlContent},null,8,L),o("div",O,[o("a",{onClick:a[1]||(a[1]=s=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):j("",!0)]),_:1})}const B=g(S,[["render",H],["__scopeId","data-v-311e7fce"]]),F=m({name:"ProjectsList",components:{ProjectDetailsOverlay:B},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const W={class:"projects-list"},x=["onClick"],U={class:"title-text"};function Z(e,a,l,c,d,p){const s=u("ProjectDetailsOverlay");return i(),n("div",null,[o("div",W,[(i(!0),n(P,null,C(e.projects,t=>(i(),n("div",{key:t.id,onClick:q=>e.showDetails(t),class:D(["project-item",{wide:t.isWide,high:t.isHigh}])},[o("div",{class:"project-item-image",style:h({"background-image":"url("+t.iconUrl+")"})},null,4),o("div",{class:"title-bar",style:h({"background-color":t.accentColor+"DD"})},[o("div",U,v(t.name),1)],4)],10,x))),128))]),f(s,{onClose:a[0]||(a[0]=t=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const R=g(F,[["render",Z],["__scopeId","data-v-f6bd82fd"]]);class r{constructor(a,l,c,d,p="#000000",s=!1,t=!1){this.id=a,this.name=l,this.htmlDescription=d,this.iconUrl=c,this.isHigh=s,this.isWide=t,this.accentColor=p}}const z=[new r("Overseer","Underworld Overseer","img/projects/Overseer.jpg",`
    <div class="paragraph">
        <strong>Underworld Overseer</strong> is a game I started working on during my internship at Myron Games. After my internship ended, I stayed on to work on the game until we feature-stopped it, right before QA testing. While working on this project, I added several features to the game. I updated the existing AI to allow for a new creature to do its job. I also added a new spell to the game and worked on a few of the traps. During my stay at Myron, I also started working on some internal Blender add-ons to allow for a smoother workflow.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/Lp1ScH8JPB4?si=I2cB3KJxa3lGquO8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Find the game on steam at <a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Underworld Overseer</a>.
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
    `,"#23bd69"),new r("API Pokédex","Pokédex with API","img/projects/Details_Page.png",`
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
    </div>`,"#e48246")],E=m({name:"GameProjects",components:{ProjectsList:R},data:function(){return{projects:z}}}),J=o("h1",null,"Projects I have worked on",-1),V=o("div",{style:{"margin-bottom":"30px"}}," These are some of the projects I have made or have contributed to. ",-1);function X(e,a,l,c,d,p){const s=u("ProjectsList");return i(),n("div",null,[J,V,f(s,{projects:e.projects},null,8,["projects"])])}const Q=g(E,[["render",X]]);export{Q as default};
