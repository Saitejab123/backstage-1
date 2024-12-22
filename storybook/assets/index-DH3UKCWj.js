import{R as i}from"./index-CTjT7uj6.js";import{u}from"./useAsync-CXA3qup_.js";import{m as f}from"./makeStyles-BZw-HJLd.js";import{c as b}from"./api-D73ioj2B.js";import{E as k}from"./ErrorPanel-B5Sxfryb.js";import{T as h}from"./Typography-9Z2Fqq1t.js";import{u as E}from"./ApiRef-BSBwTmJJ.js";import{P as R}from"./Progress-B2XX3v3h.js";import{L as s}from"./Link-C9hKUk0G.js";import{E as S}from"./EntityDisplayName-x5LJiYss.js";import{s as T}from"./ref-8pKZtiZi.js";import{E as w}from"./EmptyState-phnghdf5.js";import{L as A}from"./LinkButton-CpatNKW_.js";import"./useMountedState-DkESzBh4.js";import"./defaultTheme-DezMpTIo.js";import"./WarningPanel-CYB7SPlo.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-hW_4NFvU.js";import"./capitalize-CEQeKh-K.js";import"./withStyles-BgNv_OyU.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-CEu-9q0m.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./ExpandMore-CHMDyj05.js";import"./AccordionDetails-DvJ7tK3R.js";import"./toArray-CwyM_zEO.js";import"./react-is.production.min-D0tnNtx9.js";import"./Paper-Ke9XSqW5.js";import"./Collapse-C4amah7z.js";import"./utils-jlWbup7k.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./useTheme-NGQJGM2h.js";import"./ButtonBase-yy6Og9D-.js";import"./IconButton-DMfZr1mO.js";import"./MarkdownContent-CoMbwI09.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-DrkpCz-E.js";import"./iframe-DyiFS5zY.js";import"../sb-preview/runtime.js";import"./objectWithoutProperties-C_MEUZXD.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-DGC6g2nO.js";import"./toConsumableArray-BEwiObev.js";import"./Box-Bp1TnhXQ.js";import"./typography-DyYqqlXd.js";import"./CopyTextButton-BgQRecf3.js";import"./useCopyToClipboard-CAnobEfl.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./Tooltip-C9cCQzQU.js";import"./Popper-CXFT7TxZ.js";import"./Portal-DHXjgkAG.js";import"./Grow-jBfYqf2m.js";import"./Grid--ddFL0KQ.js";import"./List-Bh5ydWqT.js";import"./ListContext-DydK1sOh.js";import"./ListItem-Bxb0CNHD.js";import"./ListItemText-DydOiixD.js";import"./LinearProgress-DI5mSE1N.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-DNAWfEOe.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./mapValues-D5qC5jJW.js";import"./toString-bNjqhuyi.js";import"./Button-pj3OYYJt.js";const L=f(e=>({docDescription:{fontSize:e.typography.body1.fontSize,fontWeight:e.typography.body1.fontWeight,marginBottom:e.spacing(2),marginTop:e.spacing(2)},docSubLink:{fontSize:e.typography.subtitle1.fontSize,fontWeight:e.typography.subtitle1.fontWeight,lineHeight:e.typography.subtitle1.lineHeight},docsTitleLink:{fontSize:e.typography.h6.fontSize,fontWeight:e.typography.h6.fontWeight,lineHeight:e.typography.h6.lineHeight}}),{name:"HomeFeaturedDocsCard"}),D=e=>{const{emptyState:a,filter:p,linkDestination:n,responseLimit:l,subLinkText:c}=e,d=c||"LEARN MORE",r=L(),y=E(b),{value:o,loading:g,error:m}=u(async()=>(await y.getEntities({filter:p,limit:l||10})).items);return g?i.createElement(R,null):m?i.createElement(k,{error:m}):o!=null&&o.length?i.createElement(i.Fragment,null,o.map(t=>i.createElement("div",{key:`${t.metadata.name}-${t.kind}-${t.metadata.namespace}`,"data-testid":"docs-card-content"},i.createElement(s,{className:r.docsTitleLink,"data-testid":"docs-card-title",to:n||`/docs/${t.metadata.namespace||"default"}/${t.kind}/${t.metadata.name}/`},i.createElement(S,{entityRef:T(t)})),t.metadata.description&&i.createElement(h,{className:r.docDescription},t.metadata.description),i.createElement(s,{className:r.docSubLink,"data-testid":"docs-card-sub-link",to:n||`/docs/${t.metadata.namespace||"default"}/${t.kind}/${t.metadata.name}/`},d)))):a||i.createElement(w,{missing:"data",title:"No documents to show",description:"Create your own document. Check out our Getting Started Information",action:i.createElement(A,{to:"https://backstage.io/docs/features/techdocs/getting-started",variant:"contained"},"DOCS")})};D.__docgenInfo={description:`A component to display specific Featured Docs.

@public`,methods:[],displayName:"Content",props:{filter:{required:!0,tsType:{name:"union",raw:`| Record<string, string | symbol | (string | symbol)[]>[]
| Record<string, string | symbol | (string | symbol)[]>`,elements:[{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | symbol | (string | symbol)[]",elements:[{name:"string"},{name:"symbol"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | symbol)[]"}]}],raw:"Record<string, string | symbol | (string | symbol)[]>"}],raw:"Record<string, string | symbol | (string | symbol)[]>[]"},{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | symbol | (string | symbol)[]",elements:[{name:"string"},{name:"symbol"},{name:"Array",elements:[{name:"unknown"}],raw:"(string | symbol)[]"}]}],raw:"Record<string, string | symbol | (string | symbol)[]>"}]},description:"The entity filter used to display only the intended item/s"},emptyState:{required:!1,tsType:{name:"React.JSX.Element"},description:"An optional ReactNode for empty states"},linkDestination:{required:!1,tsType:{name:"string"},description:"An optional linkDestination to set for the Featured Doc"},responseLimit:{required:!1,tsType:{name:"number"},description:"An optional limit to set for link destination"},subLinkText:{required:!1,tsType:{name:"string"},description:"An optional string to customize sublink text"}}};export{D as Content};
