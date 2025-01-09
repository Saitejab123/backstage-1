import{r as b,R as o}from"./index-CTjT7uj6.js";import{d as I}from"./ExpandMore-CRlwxBmN.js";import{l as T}from"./lodash-CoGan1YB.js";import{c as C}from"./index-Cqve-NHl.js";import{m as P}from"./makeStyles-DyV0dNcq.js";import{w as h}from"./capitalize-DKydST9S.js";import{c as E}from"./createStyles-Bp4GwXob.js";import{A as $}from"./Autocomplete-Dncz0SJu.js";import{T as A}from"./TextField-DphlYY4P.js";import{B as p}from"./Box-CUgtRipO.js";import{T as x}from"./Typography-Drxa_JDy.js";import{P as S}from"./Popper-DD91Ec3e.js";import{G as k}from"./Grow-C52yxNn8.js";import{P as v}from"./Paper-DKlVK5mw.js";import{w}from"./appWrappers-CoGrTm6Y.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-yIvaDIOA.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-DMq0di89.js";import"./defaultTheme-BLQVRFyP.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./withStyles-K20mGrhL.js";import"./createStyles-yD3y8ldD.js";import"./Close-BP76Tvfd.js";import"./Chip-sffIUbhk.js";import"./ButtonBase-CgEmjkk8.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./IconButton-DuROhx0p.js";import"./ListSubheader-ChgIZcSt.js";import"./FormLabel-CKsZGm0z.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-F4cJWIkJ.js";import"./InputLabel-B_it_ep8.js";import"./Select-amRMFpvY.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-DHQwi4PO.js";import"./Popover-FpBL0i50.js";import"./Modal-BhcLMLNB.js";import"./classCallCheck-BNzALLS0.js";import"./Portal-DHXjgkAG.js";import"./List-CWUfEUrU.js";import"./ListContext-DydK1sOh.js";import"./typography-CCicI0oZ.js";import"./utils-DQjp17aO.js";import"./MockTranslationApi-WfPveaUo.js";import"./ApiRef-BSBwTmJJ.js";import"./index-CFaqwFgm.js";import"./inherits-BlLXsrOw.js";import"./toArray-Bh10GYTQ.js";import"./TranslationApi-eOxINumg.js";import"./ConfigApi-DBUUc3nU.js";import"./useAnalytics-DTrkS1Gy.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-CYzCqEPF.js";import"./toString-DbZLRxcJ.js";import"./index-DNAWfEOe.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-gcFoYqiq.js";import"./ThemeProvider-CHb3fgCH.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";const B=P(t=>({root:{margin:t.spacing(1,0)},label:{position:"relative",fontWeight:"bold",fontSize:t.typography.body2.fontSize,fontFamily:t.typography.fontFamily,color:t.palette.text.primary,"& > span":{top:0,left:0,position:"absolute"}}}),{name:"BackstageAutocomplete"}),F=h(t=>E({root:{},paper:{margin:0},hasClearIcon:{},hasPopupIcon:{},focused:{},inputRoot:{marginTop:24,backgroundColor:t.palette.background.paper,"$root$hasClearIcon$hasPopupIcon &":{paddingBlock:t.spacing(.75),paddingInlineStart:t.spacing(.75)},"$root$focused &":{outline:"none"},"$root &:hover > fieldset":{borderColor:"#ced4da"},"$root$focused & > fieldset":{borderWidth:1,borderColor:t.palette.primary.main}},popupIndicator:{padding:0,margin:0,color:"#616161","&:hover":{backgroundColor:"unset"},'& [class*="MuiTouchRipple-root"]':{display:"none"}},endAdornment:{"$root$hasClearIcon$hasPopupIcon &":{right:4}},input:{"$root$hasClearIcon$hasPopupIcon &":{fontSize:t.typography.body1.fontSize,paddingBlock:t.spacing(.8125)}}}),{name:"BackstageAutocompleteBase"})($),_=t=>o.createElement(S,{...t,transition:!0,placement:"bottom-start"},({TransitionProps:r})=>o.createElement(k,{...r,style:{transformOrigin:"0 0 0"}},o.createElement(p,null,t.children))),O=t=>o.createElement(v,{...t,elevation:8});function u(t){const{label:r,name:f,LabelProps:a,TextFieldProps:i,...n}=t,m=B(),g=b.useCallback(y=>o.createElement(A,{...T.merge(y,i),variant:"outlined"}),[i]),s=o.createElement(F,{size:"small",...n,renderInput:n.renderInput??g,popupIcon:o.createElement(I,{"data-testid":`${f}-expand`}),PaperComponent:O,PopperComponent:_});return o.createElement(p,{className:m.root},r?o.createElement(x,{...a,className:C(m.label,a==null?void 0:a.className),component:"label"},o.createElement(p,{component:"span"},r),s):s)}u.__docgenInfo={description:"",methods:[],displayName:"CatalogAutocomplete",props:{name:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},LabelProps:{required:!1,tsType:{name:"TypographyProps",elements:[{name:"literal",value:"'label'"}],raw:"TypographyProps<'label'>"},description:""},TextFieldProps:{required:!1,tsType:{name:"Omit",elements:[{name:"OutlinedTextFieldProps"},{name:"literal",value:"'variant'"}],raw:"Omit<OutlinedTextFieldProps, 'variant'>"},description:""},renderInput:{required:!1,tsType:{name:"AutocompleteProps['renderInput']",raw:`AutocompleteProps<
  T,
  Multiple,
  DisableClearable,
  FreeSolo
>['renderInput']`},description:""}}};const Ut={title:"Catalog /CatalogAutocomplete",decorators:[t=>w(o.createElement(t,null))]},e=t=>o.createElement(u,{...t});e.args={multiple:!0,label:"Default",name:"default",options:["test 1","test 2","test 3"]};e.__docgenInfo={description:"",methods:[],displayName:"Default"};var l,c,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => {
  return <CatalogAutocomplete {...args} />;
}`,...(d=(c=e.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const Vt=["Default"];export{e as Default,Vt as __namedExportsOrder,Ut as default};
