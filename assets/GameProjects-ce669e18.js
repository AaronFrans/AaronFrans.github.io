import{f as m,_ as g,j as _,w as b,T as k,o as r,c as n,a as t,t as u,n as h,h as j,p as y,e as C,r as f,F as I,g as D,d as v,k as S}from"./index-d9745d02.js";const $=m({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const w=e=>(y("data-v-311e7fce"),e=e(),C(),e),P={key:0},A=w(()=>t("div",{class:"overlay"},null,-1)),N={class:"dialog-title"},L=w(()=>t("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),T=[L],O={class:"dialog-content"},W=["innerHTML"],M={class:"dialog-bottom"};function G(e,o,l,c,d,p){return r(),_(k,{name:"fade"},{default:b(()=>[e.visible?(r(),n("div",P,[A,t("div",{class:"dialog",style:h({"background-color":e.color})},[t("h1",N,u(e.title),1),t("div",{onClick:o[0]||(o[0]=s=>e.$emit("close")),class:"dialog-close"},T),t("div",O,[t("div",{innerHTML:e.htmlContent},null,8,W),t("div",M,[t("a",{onClick:o[1]||(o[1]=s=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):j("",!0)]),_:1})}const H=g($,[["render",G],["__scopeId","data-v-311e7fce"]]),B=m({name:"ProjectsList",components:{ProjectDetailsOverlay:H},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const F={class:"projects-list"},E=["onClick"],U={class:"title-text"};function x(e,o,l,c,d,p){const s=f("ProjectDetailsOverlay");return r(),n("div",null,[t("div",F,[(r(!0),n(I,null,D(e.projects,a=>(r(),n("div",{key:a.id,onClick:K=>e.showDetails(a),class:S(["project-item",{wide:a.isWide,high:a.isHigh}])},[t("div",{class:"project-item-image",style:h({"background-image":"url("+a.iconUrl+")"})},null,4),t("div",{class:"title-bar",style:h({"background-color":a.accentColor+"DD"})},[t("div",U,u(a.name),1)],4)],10,E))),128))]),v(s,{onClose:o[0]||(o[0]=a=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const V=g(B,[["render",x],["__scopeId","data-v-f6bd82fd"]]);class i{constructor(o,l,c,d,p="#000000",s=!1,a=!1){this.id=o,this.name=l,this.htmlDescription=d,this.iconUrl=c,this.isHigh=s,this.isWide=a,this.accentColor=p}}const z=[new i("Overseer","Underworld Overseer","img/projects/Overseer.jpg",`
    <div class="paragraph">
        <strong>Underworld Overseer</strong> is a game I started working on during my internship at Myron Games. After my internship ended I stayed on to work on the game until we it feature stop, right before QA testing. While working on this project I added several features to the game. I updated the existing AI to allow for a new creature to do its job. I also added a new spell to the a game and worked on a few of the traps. During my stay at Myron I also started working on some internal blender addons to allow for a smoother workflow.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/watch?v=Lp1ScH8JPB4" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
        <div class="notice">
        Find the game on steam at <a href="https://store.steampowered.com/app/2909910/Underworld_Overseer/" target="_blank">Underworld Overseer</a>.
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/project/BoneFairy.png" alt="Bone Fairy"/>
    </div>
    `,"#730a0a"),new i("Research Project","Code-Injected Aimbot in Doom","img/projects/Aimbot_Gif_Doom.gif",`
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
    `,"#331f1e"),new i("SnakeNN","Snake Neural Network","img/projects/Snake-NN-Timelapse.gif",`
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
    `,"#23bd69"),new i("project-4","Eugeneable","img/projects/project-4-icon.png",`
    <div class="paragraph">
    <strong>Eugeneable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
    <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@neo8iam">NEOSiAM 2020</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Eugeneable Screenshot" />
    </div>
    `,"#e80fb7"),new i("project-5","Cloud Drew Land","img/projects/project-5-icon.png",`
    <div class="paragraph">
        <strong>Cloud Drew Land</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@cottonbro">cottonbro</a>.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Cloud Drew Land Screenshot" />
    </div>`,"#e48246")],J=m({name:"GameProjects",components:{ProjectsList:V},data:function(){return{projects:z}}}),Q=t("h1",null,"Projects I have worked on",-1),R=t("div",{style:{"margin-bottom":"30px"}}," These are some of the projects I have made or have contributed to. ",-1);function q(e,o,l,c,d,p){const s=f("ProjectsList");return r(),n("div",null,[Q,R,v(s,{projects:e.projects},null,8,["projects"])])}const Y=g(J,[["render",q]]);export{Y as default};
