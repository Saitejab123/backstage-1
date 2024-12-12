import{r as f,b as c}from"./plugin-C_ZrGHp1.js";import{R as t}from"./index-CTjT7uj6.js";import{m as y}from"./makeStyles-DyV0dNcq.js";import{S as l}from"./Grid-DRKqbyUB.js";import{w as C}from"./appWrappers-hKQcz26K.js";import{T as L}from"./TestApiProvider-CoiMLMhd.js";import{c as h}from"./ConfigApi-DBUUc3nU.js";import{C as E}from"./MockTranslationApi-WfPveaUo.js";import{T as S}from"./TemplateBackstageLogo-mJYUyPb-.js";import"./iframe-BMugpTi_.js";import"../sb-preview/runtime.js";import"./Plugin-BUQb664E.js";import"./componentData-CM4hSmEF.js";import"./ApiRef-BSBwTmJJ.js";import"./useAnalytics-DTrkS1Gy.js";import"./index-DXJrW9ju.js";import"./useRouteRef-G389X3lg.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-yIvaDIOA.js";import"./capitalize-DKydST9S.js";import"./defaultTheme-BLQVRFyP.js";import"./withStyles-K20mGrhL.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DMq0di89.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./IconButton-DuROhx0p.js";import"./ButtonBase-CgEmjkk8.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./InfoCard-BoZAtdxL.js";import"./index-Cqve-NHl.js";import"./CardActions-DdRIEj7h.js";import"./CardContent-fqXO_Ezc.js";import"./Paper-DKlVK5mw.js";import"./ErrorBoundary-CQkb_hEB.js";import"./translation-67MxozS3.js";import"./TranslationApi-eOxINumg.js";import"./ErrorPanel-C3ZIDrhf.js";import"./WarningPanel-BCJhUyjH.js";import"./ExpandMore-CRlwxBmN.js";import"./AccordionDetails-V0VN_mu9.js";import"./toArray-Bh10GYTQ.js";import"./react-is.production.min-D0tnNtx9.js";import"./Collapse-BrA4wGBI.js";import"./utils-DQjp17aO.js";import"./useTheme-DHQwi4PO.js";import"./Typography-Drxa_JDy.js";import"./MarkdownContent-DZ8Asvo3.js";import"./index-BRV0Se7Z.js";import"./CodeSnippet-CSQEYP4W.js";import"./extends-CUPdUbmP.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-BlLXsrOw.js";import"./toConsumableArray-BEwiObev.js";import"./Box-CUgtRipO.js";import"./typography-CCicI0oZ.js";import"./CopyTextButton-CR4ryLcU.js";import"./useCopyToClipboard--quXt9ov.js";import"./useMountedState-DkESzBh4.js";import"./Tooltip-DpHos2o3.js";import"./Popper-DD91Ec3e.js";import"./Portal-DHXjgkAG.js";import"./Grow-C52yxNn8.js";import"./List-CWUfEUrU.js";import"./ListContext-DydK1sOh.js";import"./ListItem-D6an19MP.js";import"./ListItemText-CEl12qRX.js";import"./LinkButton-A0M_qztx.js";import"./Link-CSTClyvL.js";import"./lodash-CoGan1YB.js";import"./Button-BqJPQoqF.js";import"./CardHeader-D7xdyP2-.js";import"./Divider-CHL0fjlM.js";import"./BottomLink-BAOrE0Gk.js";import"./ArrowForward-DsesPz8G.js";import"./DialogTitle-Cwc2DxOH.js";import"./Modal-BhcLMLNB.js";import"./Backdrop-llVLW-Qi.js";import"./WebStorage-D5Fgivzj.js";import"./index-CFaqwFgm.js";import"./useAsync-CXA3qup_.js";import"./mapValues-CYzCqEPF.js";import"./toString-DbZLRxcJ.js";import"./ApiProvider-CuNQiN7Z.js";import"./CssBaseline-gcFoYqiq.js";import"./ThemeProvider-CHb3fgCH.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const it={title:"Plugins/Home/Components/CompanyLogo",decorators:[o=>C(t.createElement(L,{apis:[[h,new E({app:{title:"My App"}})]]},t.createElement(o,null)),{mountedRoutes:{"/hello-company-logo":f}})]},g=y(o=>({container:{margin:o.spacing(5,0)},svg:{width:"auto",height:100},path:{fill:"#7df3e1"}})),r=()=>{const{container:o}=g();return t.createElement(l,{container:!0,justifyContent:"center",spacing:6},t.createElement(c,{className:o}))},m=()=>{const{container:o,svg:u,path:d}=g();return t.createElement(l,{container:!0,justifyContent:"center",spacing:6},t.createElement(c,{className:o,logo:t.createElement(S,{classes:{svg:u,path:d}})}))};r.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"CustomLogo"};var e,i,p;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const {
    container
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} />
    </Grid>;
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,a,s;m.parameters={...m.parameters,docs:{...(n=m.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const {
    container,
    svg,
    path
  } = useLogoStyles();
  return <Grid container justifyContent="center" spacing={6}>
      <HomePageCompanyLogo className={container} logo={<TemplateBackstageLogo classes={{
      svg,
      path
    }} />} />
    </Grid>;
}`,...(s=(a=m.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const pt=["Default","CustomLogo"];export{m as CustomLogo,r as Default,pt as __namedExportsOrder,it as default};
