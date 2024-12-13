import{R as i}from"./index-CTjT7uj6.js";import{u}from"./useAsync-CXA3qup_.js";import{m as f}from"./makeStyles-DyV0dNcq.js";import{c as b}from"./api-D73ioj2B.js";import{E as k}from"./ErrorPanel-DtsaZZZ5.js";import{T as h}from"./Typography-Drxa_JDy.js";import{u as E}from"./ApiRef-BSBwTmJJ.js";import{P as R}from"./Progress-Cn7FkKCX.js";import{L as s}from"./Link-CSTClyvL.js";import{E as S}from"./EntityDisplayName-Cv3jGYsG.js";import{s as T}from"./ref-8pKZtiZi.js";import{E as w}from"./EmptyState-BZ6FS02q.js";import{L as A}from"./LinkButton-A0M_qztx.js";import"./useMountedState-DkESzBh4.js";import"./defaultTheme-BLQVRFyP.js";import"./WarningPanel-7fJlgT1g.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-yIvaDIOA.js";import"./capitalize-DKydST9S.js";import"./withStyles-K20mGrhL.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DMq0di89.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./ExpandMore-CRlwxBmN.js";import"./AccordionDetails-V0VN_mu9.js";import"./toArray-Bh10GYTQ.js";import"./react-is.production.min-D0tnNtx9.js";import"./Paper-DKlVK5mw.js";import"./Collapse-BrA4wGBI.js";import"./utils-DQjp17aO.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./useTheme-DHQwi4PO.js";import"./ButtonBase-CgEmjkk8.js";import"./IconButton-DuROhx0p.js";import"./MarkdownContent-D069Cq0e.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-BJQ4fNrn.js";import"./iframe-Ci_jOeeQ.js";import"../sb-preview/runtime.js";import"./extends-CUPdUbmP.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-BlLXsrOw.js";import"./toConsumableArray-BEwiObev.js";import"./Box-CUgtRipO.js";import"./typography-CCicI0oZ.js";import"./CopyTextButton-CR4ryLcU.js";import"./useCopyToClipboard--quXt9ov.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./Tooltip-DpHos2o3.js";import"./Popper-DD91Ec3e.js";import"./Portal-DHXjgkAG.js";import"./Grow-C52yxNn8.js";import"./Grid-DRKqbyUB.js";import"./List-CWUfEUrU.js";import"./ListContext-DydK1sOh.js";import"./ListItem-D6an19MP.js";import"./ListItemText-CEl12qRX.js";import"./LinearProgress-fmACQw9y.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-DXJrW9ju.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./mapValues-uGpuQnk_.js";import"./toString-bNjqhuyi.js";import"./Button-BqJPQoqF.js";const L=f(e=>({docDescription:{fontSize:e.typography.body1.fontSize,fontWeight:e.typography.body1.fontWeight,marginBottom:e.spacing(2),marginTop:e.spacing(2)},docSubLink:{fontSize:e.typography.subtitle1.fontSize,fontWeight:e.typography.subtitle1.fontWeight,lineHeight:e.typography.subtitle1.lineHeight},docsTitleLink:{fontSize:e.typography.h6.fontSize,fontWeight:e.typography.h6.fontWeight,lineHeight:e.typography.h6.lineHeight}}),{name:"HomeFeaturedDocsCard"}),D=e=>{const{emptyState:a,filter:p,linkDestination:n,responseLimit:l,subLinkText:c}=e,d=c||"LEARN MORE",r=L(),y=E(b),{value:o,loading:g,error:m}=u(async()=>(await y.getEntities({filter:p,limit:l||10})).items);return g?i.createElement(R,null):m?i.createElement(k,{error:m}):o!=null&&o.length?i.createElement(i.Fragment,null,o.map(t=>i.createElement("div",{key:`${t.metadata.name}-${t.kind}-${t.metadata.namespace}`,"data-testid":"docs-card-content"},i.createElement(s,{className:r.docsTitleLink,"data-testid":"docs-card-title",to:n||`/docs/${t.metadata.namespace||"default"}/${t.kind}/${t.metadata.name}/`},i.createElement(S,{entityRef:T(t)})),t.metadata.description&&i.createElement(h,{className:r.docDescription},t.metadata.description),i.createElement(s,{className:r.docSubLink,"data-testid":"docs-card-sub-link",to:n||`/docs/${t.metadata.namespace||"default"}/${t.kind}/${t.metadata.name}/`},d)))):a||i.createElement(w,{missing:"data",title:"No documents to show",description:"Create your own document. Check out our Getting Started Information",action:i.createElement(A,{to:"https://backstage.io/docs/features/techdocs/getting-started",variant:"contained"},"DOCS")})};D.__docgenInfo={description:`A component to display specific Featured Docs.

@public`,methods:[],displayName:"Content",props:{filter:{required:!0,tsType:{name:"union",raw:`| Record<string, string | symbol | (string | symbol)[]>[]
| Record<string, string | symbol | (string | symbol)[]>`,elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | symbol | (string | symbol)[]",elements:[{name:"string"},{name:"symbol"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | symbol)[]"}]}],raw:"Record<string, string | symbol | (string | symbol)[]>"}],raw:"Record<string, string | symbol | (string | symbol)[]>[]"},{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | symbol | (string | symbol)[]",elements:[{name:"string"},{name:"symbol"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | symbol)[]"}]}],raw:"Record<string, string | symbol | (string | symbol)[]>"}]},description:"The entity filter used to display only the intended item/s"},emptyState:{required:!1,tsType:{name:"React.JSX.Element"},description:"An optional ReactNode for empty states"},linkDestination:{required:!1,tsType:{name:"string"},description:"An optional linkDestination to set for the Featured Doc"},responseLimit:{required:!1,tsType:{name:"number"},description:"An optional limit to set for link destination"},subLinkText:{required:!1,tsType:{name:"string"},description:"An optional string to customize sublink text"}}};export{D as Content};
