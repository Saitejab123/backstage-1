import{R as n}from"./index-CTjT7uj6.js";import{H as u}from"./HeaderLabel-DKNle0JS.js";import"./makeStyles-O1Zgszeq.js";import"./defaultTheme-BpWAG8l7.js";import"./Grid-CD7ii6lD.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./capitalize-DASy9xXX.js";import"./withStyles-DTrfb9QI.js";import"./Typography-D79kQbbF.js";import"./Link-CJIJZi7X.js";import"./index-Cqve-NHl.js";import"./lodash-CoGan1YB.js";import"./index-QA7F3UF1.js";import"./index-DNAWfEOe.js";import"./ApiRef-BSBwTmJJ.js";import"./typeof-Jcp7TgkT.js";import"./createSvgIcon-C9m_AR9m.js";import"./useControlled-CogIeAPD.js";import"./createSvgIcon-DOZx1A7T.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./useAnalytics-DTrkS1Gy.js";import"./ConfigApi-DBUUc3nU.js";const d={hour:"2-digit",minute:"2-digit"};function s(l,i){const t=new Date,r=window.navigator.language,o=[];if(!l)return o;for(const m of l){let e=m.label;const a={timeZone:m.timeZone,...i??d};try{new Date().toLocaleString(r,a)}catch{console.warn(`The timezone ${a.timeZone} is invalid. Defaulting to GMT`),a.timeZone="GMT",e="GMT"}const c=t.toLocaleTimeString(r,a),p=t.toLocaleTimeString(r,{timeZone:a.timeZone,hour:"2-digit",minute:"2-digit",hour12:!1});o.push({label:e,value:c,dateTime:p})}return o}const g=l=>{const{clockConfigs:i,customTimeFormat:t}=l,r=[],[o,m]=n.useState(r);return n.useEffect(()=>{m(s(i,t));const e=setInterval(()=>{m(s(i,t))},1e3);return()=>{clearInterval(e)}},[i,t]),o.length!==0?n.createElement(n.Fragment,null,o.map(e=>n.createElement(u,{key:e.label,label:e.label,value:n.createElement("time",{dateTime:e.dateTime},e.value)}))):null};g.__docgenInfo={description:`A component to display a configurable list of clocks for various time zones.

@example
Here's a simple example:
\`\`\`
// This will give you a clock for the time zone that Stockholm is in
// you can add more than one but keep in mind space may be limited
const clockConfigs: ClockConfig[] = [
 {
   label: 'STO',
   timeZone: 'Europe/Stockholm',
 },
];

// Setting hour12 to false will make all the clocks show in the 24hr format
const timeFormat: Intl.DateTimeFormatOptions = {
 hour: '2-digit',
 minute: '2-digit',
 hour12: false,
};

// Here is the component in use:
<HeaderWorldClock
 clockConfigs={clockConfigs}
 customTimeFormat={timeFormat}
/>
\`\`\`

@public`,methods:[],displayName:"HeaderWorldClock",props:{clockConfigs:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  timeZone: string;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"timeZone",value:{name:"string",required:!0}}]}}],raw:"ClockConfig[]"},description:""},customTimeFormat:{required:!1,tsType:{name:"Intl.DateTimeFormatOptions"},description:""}}};export{g as HeaderWorldClock};
