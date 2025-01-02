import{a}from"./plugin-Ci46tjmG.js";import{R as o}from"./index-CTjT7uj6.js";import{c as n}from"./catalogApiMock-DHtmXyTc.js";import{e as s}from"./routes-BxZnj5zC.js";import{c as d}from"./api-D73ioj2B.js";import{S as c}from"./Grid-DRKqbyUB.js";import{w as l}from"./appWrappers-CEwU_QEs.js";import{T as f}from"./TestApiProvider-CoiMLMhd.js";import{s as u}from"./StarredEntitiesApi-n7ClACGI.js";import{M as g}from"./MockStarredEntitiesApi-CFn8c-CW.js";import"./iframe-BN097ejQ.js";import"../sb-preview/runtime.js";import"./Plugin-BnFuRug-.js";import"./componentData-CM4hSmEF.js";import"./ApiRef-BSBwTmJJ.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";import"./index-DNAWfEOe.js";import"./useRouteRef-D0BCYqYb.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-yIvaDIOA.js";import"./capitalize-DKydST9S.js";import"./defaultTheme-BLQVRFyP.js";import"./withStyles-K20mGrhL.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DMq0di89.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./IconButton-DuROhx0p.js";import"./ButtonBase-CgEmjkk8.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./InfoCard-WRnpAJvD.js";import"./index-Cqve-NHl.js";import"./makeStyles-DyV0dNcq.js";import"./CardActions-DdRIEj7h.js";import"./CardContent-fqXO_Ezc.js";import"./Paper-DKlVK5mw.js";import"./ErrorBoundary-CS6ERJSF.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./ErrorPanel-Br3VeEyI.js";import"./WarningPanel-CqcKUVog.js";import"./ExpandMore-CRlwxBmN.js";import"./AccordionDetails-V0VN_mu9.js";import"./toArray-Bh10GYTQ.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-BrA4wGBI.js";import"./utils-DQjp17aO.js";import"./useTheme-DHQwi4PO.js";import"./Typography-Drxa_JDy.js";import"./MarkdownContent-du3Lz2cS.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-Bz7E8Mn2.js";import"./extends-CUPdUbmP.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-BlLXsrOw.js";import"./toConsumableArray-BEwiObev.js";import"./Box-CUgtRipO.js";import"./typography-CCicI0oZ.js";import"./CopyTextButton-CR4ryLcU.js";import"./useCopyToClipboard--quXt9ov.js";import"./useMountedState-DkESzBh4.js";import"./Tooltip-DpHos2o3.js";import"./Popper-DD91Ec3e.js";import"./Portal-DHXjgkAG.js";import"./Grow-C52yxNn8.js";import"./List-CWUfEUrU.js";import"./ListContext-DydK1sOh.js";import"./ListItem-D6an19MP.js";import"./ListItemText-CEl12qRX.js";import"./LinkButton-Dz8NzqM1.js";import"./Link-bsB8Po3b.js";import"./lodash-CoGan1YB.js";import"./Button-BqJPQoqF.js";import"./CardHeader-D7xdyP2-.js";import"./Divider-CHL0fjlM.js";import"./BottomLink-BmDFzI1N.js";import"./ArrowForward-DsesPz8G.js";import"./DialogTitle-Cwc2DxOH.js";import"./Modal-BhcLMLNB.js";import"./Backdrop-llVLW-Qi.js";import"./WebStorage-D5Fgivzj.js";import"./index-CFaqwFgm.js";import"./MockTranslationApi-WfPveaUo.js";import"./ref-8pKZtiZi.js";import"./useAsync-CXA3qup_.js";import"./mapValues-D5qC5jJW.js";import"./toString-bNjqhuyi.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-gcFoYqiq.js";import"./ThemeProvider-CHb3fgCH.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const r=new g;r.toggleStarred("component:default/example-starred-entity");r.toggleStarred("component:default/example-starred-entity-2");r.toggleStarred("component:default/example-starred-entity-3");r.toggleStarred("component:default/example-starred-entity-4");const k=[{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity",title:"Mock Starred Entity!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-2",title:"Mock Starred Entity 2!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-3",title:"Mock Starred Entity 3!"}},{apiVersion:"1",kind:"Component",metadata:{name:"mock-starred-entity-4",title:"Mock Starred Entity 4!"}}],E=n({entities:k}),er={title:"Plugins/Home/Components/StarredEntities",decorators:[p=>l(o.createElement(f,{apis:[[d,E],[u,r]]},o.createElement(p,null)),{mountedRoutes:{"/catalog/:namespace/:kind/:name":s}})]},t=()=>o.createElement(c,{item:!0,xs:12,md:6},o.createElement(a,null));t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,m,e;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Grid item xs={12} md={6}>
      <HomePageStarredEntities />
    </Grid>;
}`,...(e=(m=t.parameters)==null?void 0:m.docs)==null?void 0:e.source}}};const pr=["Default"];export{t as Default,pr as __namedExportsOrder,er as default};
