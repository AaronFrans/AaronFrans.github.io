import{f as g,_ as u,j as w,w as _,T as y,o as i,c as l,a as t,t as m,n as h,h as S,p as k,e as j,r as f,F as C,g as $,d as v,k as D,b as I}from"./index-4dc9eaa8.js";const x=g({name:"ProjectDetailsOverlay",props:{visible:Boolean,color:String,title:String,htmlContent:String},methods:{getImage:function(e){console.log("fetching image "+e)}}});const b=e=>(k("data-v-4b49e71a"),e=e(),j(),e),P={key:0},O=b(()=>t("div",{class:"overlay"},null,-1)),A={class:"dialog-title"},M=b(()=>t("i",{class:"fa fa-times fa-lg fa-fw"},null,-1)),L=[M],T={class:"dialog-content"},W=["innerHTML"],G={class:"dialog-bottom"};function H(e,s,n,c,p,d){return i(),w(y,{name:"fade"},{default:_(()=>[e.visible?(i(),l("div",P,[O,t("div",{class:"dialog",style:h({"background-color":e.color})},[t("h1",A,m(e.title),1),t("div",{onClick:s[0]||(s[0]=o=>e.$emit("close")),class:"dialog-close"},L),t("div",T,[t("div",{innerHTML:e.htmlContent},null,8,W),t("div",G,[t("a",{onClick:s[1]||(s[1]=o=>e.$emit("close")),class:"dialog-close-button"},"Close")])])],4)])):S("",!0)]),_:1})}const B=u(x,[["render",H],["__scopeId","data-v-4b49e71a"]]),E=g({name:"ProjectsList",components:{ProjectDetailsOverlay:B},props:{projects:Array},data:function(){return{showPopup:!1,popupTitle:"",popupColor:"",popupContent:""}},methods:{showDetails:function(e){this.popupTitle=e.name,this.popupColor=e.accentColor,this.popupContent=e.htmlDescription,this.showPopup=!0,window.scrollTo(0,0)}}});const N={class:"projects-list"},Q=["onClick"],V={class:"title-text"};function X(e,s,n,c,p,d){const o=f("ProjectDetailsOverlay");return i(),l("div",null,[t("div",N,[(i(!0),l(C,null,$(e.projects,a=>(i(),l("div",{key:a.id,onClick:Y=>e.showDetails(a),class:D(["project-item",{wide:a.isWide,high:a.isHigh}])},[t("div",{class:"project-item-image",style:h({"background-image":"url("+a.iconUrl+")"})},null,4),t("div",{class:"title-bar",style:h({"background-color":a.accentColor+"DD"})},[t("div",V,m(a.name),1)],4)],10,Q))),128))]),v(o,{onClose:s[0]||(s[0]=a=>e.showPopup=!1),visible:e.showPopup,title:e.popupTitle,htmlContent:e.popupContent,color:e.popupColor},null,8,["visible","title","htmlContent","color"])])}const z=u(E,[["render",X],["__scopeId","data-v-f6bd82fd"]]);class r{constructor(s,n,c,p,d="#000000",o=!1,a=!1){this.id=s,this.name=n,this.htmlDescription=p,this.iconUrl=c,this.isHigh=o,this.isWide=a,this.accentColor=d}}const F=[new r("project-1","Optimistic Chubby","img/projects/project-1-icon.png",`
    <div class="paragraph">
     <strong>Optimistic Chubby</strong> is a thing of beauty that I am so proud of. It's available on Android because why not.
     <br/>Image by <a href="https://www.pexels.com/fr-fr/@knownasovan" target="_blank">OVAN</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=some.playstore.thing" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
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

    <div class="paragraph center">
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
        <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="Optimistic Chubby Screenshot" />
    </div>
    `,"#23bd69",!0),new r("project-2","Singing Addict","img/projects/project-2-icon.png",`
    <div class="paragraph">
        <strong>Optimistic Chubby Blog</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@adonyi-gabor-604571">Adonyi Gábor</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
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
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Singing Addict Screenshot" />
    </div>
    `,"#5a78af"),new r("project-3","Drawing Overload","img/projects/project-3-icon.png",`
    <div class="paragraph">
        <strong>Drawing Overload</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
        <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@miphotography">Miesha Maiden</a>.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
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
        Playable in the browser (WebGL) on <a href="https://some.where/nice" target="_blank">itch.io</a>.
        Source code is available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
        <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drawing Overload Screenshot" />
    </div>
    `,"#383838"),new r("project-4","Eugeneable","img/projects/project-4-icon.png",`
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
    `,"#e80fb7"),new r("project-5","Cloud Drew Land","img/projects/project-5-icon.png",`
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
    </div>`,"#e48246")],U=g({name:"GameProjects",components:{ProjectsList:z},data:function(){return{projects:F}}}),q=t("h1",null,"Stuff",-1),J=t("div",{style:{"margin-bottom":"30px"}}," The following are some stuff I've made or heavily contributed to. ",-1),K=t("div",{style:{"margin-top":"20px"}},[I(" There is more to see on "),t("a",{target:"_blank",href:"https://someexternalwebsite.com"},"some external website")],-1);function R(e,s,n,c,p,d){const o=f("ProjectsList");return i(),l("div",null,[q,J,v(o,{projects:e.projects},null,8,["projects"]),K])}const ee=u(U,[["render",R]]);export{ee as default};
