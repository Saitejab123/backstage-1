import{r as o,R as n}from"./index-CTjT7uj6.js";import{q as u}from"./index-Dj_lShYJ.js";import{r as l}from"./plugin-D6uBGavF.js";import{d as h}from"./index-DNAWfEOe.js";import{u as f}from"./useRouteRef-D0BCYqYb.js";import{m as d}from"./makeStyles-BZw-HJLd.js";import{SearchBarBase as y}from"./SearchBar-BImlk_PF.js";import"./iframe-BPgMmaD1.js";import"../sb-preview/runtime.js";import"./ApiRef-BSBwTmJJ.js";import"./api-CKDuuaL7.js";import"./appWrappers-MVuPSkjj.js";import"./interopRequireDefault-Y9pwbXtE.js";import"./createSvgIcon-hW_4NFvU.js";import"./capitalize-CEQeKh-K.js";import"./defaultTheme-DezMpTIo.js";import"./withStyles-BgNv_OyU.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-CEu-9q0m.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./MockTranslationApi-Bqd-OB5I.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-DGC6g2nO.js";import"./toArray-CwyM_zEO.js";import"./TranslationApi-eOxINumg.js";import"./ConfigApi-DBUUc3nU.js";import"./useAnalytics-DTrkS1Gy.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-BycpB-r2.js";import"./ThemeProvider-BPNZSjw5.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";import"./Plugin-BnFuRug-.js";import"./Search-DDd2Q2MS.js";import"./useDebounce-4fqASXX_.js";import"./SearchContext-BQYqBmky.js";import"./lodash-CoGan1YB.js";import"./TextField-BFtNzNJg.js";import"./FormLabel-DRY6nBRH.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-F4cJWIkJ.js";import"./InputLabel-Dknt7r96.js";import"./Select-Byf0a4iw.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-NGQJGM2h.js";import"./Popover-Bztmh1sR.js";import"./Modal-6sUM5zfZ.js";import"./Portal-DHXjgkAG.js";import"./Paper-Ke9XSqW5.js";import"./Grow-jBfYqf2m.js";import"./utils-jlWbup7k.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./List-Bh5ydWqT.js";import"./ListContext-DydK1sOh.js";import"./InputAdornment-BldLMR9u.js";import"./Typography-9Z2Fqq1t.js";import"./IconButton-DMfZr1mO.js";import"./ButtonBase-yy6Og9D-.js";import"./Button-pj3OYYJt.js";const R=()=>{const r=f(l),t=h();return o.useCallback(({query:i})=>{const m=u.stringify({query:i},{addQueryPrefix:!0});t(`${r()}${m}`)},[t,r])},S=d({searchBarRoot:{fontSize:"1.5em"},searchBarOutline:{border:"1px solid #555",borderRadius:"6px"}}),g=r=>{var a;const t=S(r),[i,m]=o.useState(""),e=o.useRef(null),p=R(),c=o.useCallback(()=>{var s;p({query:((s=e.current)==null?void 0:s.value)??""})},[p]);return n.createElement(y,{value:i,onSubmit:c,onChange:m,inputProps:{ref:e},InputProps:{...r.InputProps,classes:{root:t.searchBarRoot,notchedOutline:t.searchBarOutline,...(a=r.InputProps)==null?void 0:a.classes}},...r})};g.__docgenInfo={description:"The search bar created specifically for the composable home page.",methods:[],displayName:"HomePageSearchBar"};export{g as HomePageSearchBar};
