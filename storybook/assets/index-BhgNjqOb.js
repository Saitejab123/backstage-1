import{r as c,R as t}from"./index-CTjT7uj6.js";import{m as p}from"./makeStyles-O1Zgszeq.js";import{M as g}from"./Modal-rbs6syU2.js";import{B as u}from"./Box-TlIT8Xo6.js";import{L as m}from"./Link-CJIJZi7X.js";import{T as k}from"./Typography-D79kQbbF.js";import{S as o}from"./Grid-CD7ii6lD.js";import"./defaultTheme-BpWAG8l7.js";import"./index-QA7F3UF1.js";import"./isMuiElement-Cb6QZSLO.js";import"./useControlled-CogIeAPD.js";import"./classCallCheck-MFKM5G8b.js";import"./withStyles-DTrfb9QI.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./Portal-DHXjgkAG.js";import"./typography-DYSa9j7C.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-DNAWfEOe.js";import"./ApiRef-BSBwTmJJ.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-C9m_AR9m.js";import"./capitalize-DASy9xXX.js";import"./createSvgIcon-DOZx1A7T.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";const l=p(e=>({cardTitleIcon:{verticalAlign:"bottom",marginLeft:"-4px"},contentActionContainer:{marginTop:e.spacing(1.5),marginBottom:e.spacing(1.5)},contentModal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"80%",height:"auto"},imageSize:{width:"100%",height:"100%"},link:{display:"inline-flex",alignItems:"center",textDecoration:"none",color:`${e.palette.link}`,"&:hover":{background:"transparent"}},linkText:{marginBottom:e.spacing(1.5)},videoContainer:{borderRadius:"10px",width:"100%",height:"auto",background:`${e.palette.background.default}`}}),{name:"HomeQuickStartCard"}),a=e=>{const{modalContent:n,linkContent:s}=e,i=l(),[d,r]=c.useState(!1);return t.createElement("div",{className:i.linkText,"data-testid":"content-modal-container"},t.createElement(m,{to:"#",component:"button",variant:"h6",underline:"none",onClick:()=>r(!0)},s),t.createElement(g,{open:d,onClose:()=>r(!1),"aria-labelledby":"content-modal","data-testid":"content-modal"},t.createElement(u,{className:i.contentModal,"data-testid":"content-modal-open"},n)))};a.__docgenInfo={description:"",methods:[],displayName:"ContentModal",props:{modalContent:{required:!0,tsType:{name:"React.JSX.Element"},description:""},linkContent:{required:!0,tsType:{name:"union",raw:"string | React.JSX.Element",elements:[{name:"string"},{name:"React.JSX.Element"}]},description:""}}};const y=e=>{const n=l();return t.createElement(t.Fragment,null,t.createElement(a,{modalContent:e.image,linkContent:e.modalTitle||"Onboarding"}),t.createElement(k,{variant:"body1",paragraph:!0},e.cardDescription||"Get started with Backstage"),t.createElement(a,{modalContent:e.image,linkContent:e.image}),t.createElement(o,{container:!0,alignItems:"center",className:n.contentActionContainer},e.downloadImage&&t.createElement(o,{item:!0},e.downloadImage),t.createElement(o,{item:!0},t.createElement(m,{to:e.docsLink||"https://backstage.io/docs/getting-started/","data-testid":"quick-start-link-to-docs",underline:"none",variant:"h6",className:n.link},e.docsLinkTitle||"Learn more"))),e.video&&e.video)};y.__docgenInfo={description:`A component to display Quick Start info on the homepage.

@public`,methods:[],displayName:"Content",props:{modalTitle:{required:!1,tsType:{name:"union",raw:"string | React.JSX.Element",elements:[{name:"string"},{name:"React.JSX.Element"}]},description:"The modal link title"},docsLinkTitle:{required:!1,tsType:{name:"string"},description:"The link to docs title"},docsLink:{required:!1,tsType:{name:"string"},description:"The link to docs"},video:{required:!1,tsType:{name:"React.JSX.Element"},description:"The video to play on the card"},image:{required:!0,tsType:{name:"React.JSX.Element"},description:"A quickstart image to display on the card"},cardDescription:{required:!1,tsType:{name:"string"},description:"The card description"},downloadImage:{required:!1,tsType:{name:"React.JSX.Element"},description:"A component used to download a quickStart image"}}};export{y as Content};
