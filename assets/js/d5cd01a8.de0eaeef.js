/*! For license information please see d5cd01a8.de0eaeef.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[919793],{1457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var n=a(474848),s=a(28453);const o={id:"faq",title:"Catalog FAQ",sidebar_label:"FAQ",description:"This page answers frequently asked questions about the catalog"},i=void 0,r={id:"features/software-catalog/faq",title:"Catalog FAQ",description:"This page answers frequently asked questions about the catalog",source:"@site/../docs/features/software-catalog/faq.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/faq",permalink:"/docs/next/features/software-catalog/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/features/software-catalog/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Catalog FAQ",sidebar_label:"FAQ",description:"This page answers frequently asked questions about the catalog"},sidebar:"docs",previous:{title:"Creating the Catalog Graph",permalink:"/docs/next/features/software-catalog/creating-the-catalog-graph"},next:{title:"Overview",permalink:"/docs/next/features/software-templates/"}},l={},h=[{value:"Is it all that important to have users and groups in the catalog at all?",id:"is-it-all-that-important-to-have-users-and-groups-in-the-catalog-at-all",level:2},{value:"Can I create users in the catalog on-demand as they sign in?",id:"can-i-create-users-in-the-catalog-on-demand-as-they-sign-in",level:2},{value:"Can I call the catalog itself from inside a processor / provider?",id:"can-i-call-the-catalog-itself-from-inside-a-processor--provider",level:2},{value:"Can I validate relations in processors?",id:"can-i-validate-relations-in-processors",level:2},{value:"Can I throw errors when validating entities?",id:"can-i-throw-errors-when-validating-entities",level:2},{value:"Can I represent versions (of APIs, services etc) in the catalog?",id:"can-i-represent-versions-of-apis-services-etc-in-the-catalog",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This page answers frequently asked questions about the catalog."}),"\n",(0,n.jsx)(t.h2,{id:"is-it-all-that-important-to-have-users-and-groups-in-the-catalog-at-all",children:"Is it all that important to have users and groups in the catalog at all?"}),"\n",(0,n.jsx)(t.p,{children:"Yes. One of the most important concepts in the catalog is that it exposes your org structure and ownership properly, allowing your users to effectively understand and communicate around your systems. Having catalog entries for users and groups enables end users to navigate around Backstage and click on those owners and being presented with rich information pages around them, instead of getting 404 Not Found pages."}),"\n",(0,n.jsx)(t.h2,{id:"can-i-create-users-in-the-catalog-on-demand-as-they-sign-in",children:"Can I create users in the catalog on-demand as they sign in?"}),"\n",(0,n.jsx)(t.p,{children:"When standing up a new Backstage instance, adopters are faced with the realization that the catalog tends to have interactions with sign-in. Therefore the question often comes up, whether it's doable to have users pop up in the catalog on-demand only as they sign in."}),"\n",(0,n.jsxs)(t.p,{children:["This should really be avoided. Our general guidance is to set up a proper integration upfront with your authority for organizational data (",(0,n.jsx)(t.a,{href:"/docs/next/integrations/ldap/org",children:"LDAP"}),", ",(0,n.jsx)(t.a,{href:"/docs/next/integrations/azure/org",children:"Azure"}),", bespoke HR systems, etc) and batch ingest ",(0,n.jsx)(t.em,{children:"all"})," users and groups from there into the catalog, whether they sign in or not. This tends to give the superior experience for users, with the smallest amount possible of complexity and frustration."]}),"\n",(0,n.jsxs)(t.p,{children:["To give some background, ",(0,n.jsx)(t.a,{href:"/docs/next/auth/",children:"signing in"})," technically only requires the ",(0,n.jsx)(t.code,{children:"auth"})," backend which supports the flows that establish who the current user is. At the end of that process, a so called ",(0,n.jsx)(t.a,{href:"/docs/next/auth/identity-resolver",children:"sign-in resolver"})," is tasked with translating the third party established identity (for example the attributes returned for your AD entry) into a Backstage identity. This important step is made much simpler if the catalog is populated with users and groups from that same third party, because identities line up trivially and you can use the out-of-the-box provided sign-in resolvers for it. As a side note, you can also write your own resolver that does not interact with the catalog at all if you so desire, but let's assume that you do not chose this advanced option."]}),"\n",(0,n.jsxs)(t.p,{children:["Doing on-demand user creation ",(0,n.jsx)(t.em,{children:"is"})," technically possible by writing custom ",(0,n.jsx)(t.a,{href:"/docs/next/features/software-catalog/external-integrations",children:"entity providers"}),". But it comes with significant problems both for technical and end user quality of life reasons."]}),"\n",(0,n.jsx)(t.p,{children:"On the technical side, this is unwanted complexity. You need to implement and maintain a custom provider, instead of what usually amounts to a very easily set-up batch ingestion schedule with providers that come out of the box. Also even if you do this, the catalog is an eventually consistent engine. The user that the provider feeds into the system is not guaranteed to appear immediately. Your experience will likely be only partially functional at bootstrapping time which may have unwanted side effects."}),"\n",(0,n.jsx)(t.p,{children:"On the user experience side, a Backstage experience without complete organizational data is a serious hindrance to getting the full power out of the tool. Your users won't be able to click on owners and seeing who they are and what teams they belong to. They won't be able to find out what the communications paths are when they need to reach you or your managers when something goes wrong or they have a feature request. They can't get an overview of what teams own and how they relate to each other. It will be a much more barren experience. Organizational data is highly valuable to have centrally available, complete and correct."}),"\n",(0,n.jsx)(t.h2,{id:"can-i-call-the-catalog-itself-from-inside-a-processor--provider",children:"Can I call the catalog itself from inside a processor / provider?"}),"\n",(0,n.jsxs)(t.p,{children:["Any backend module, including those that provide processors and entity providers to the catalog, are technically able to get hold of a catalog client via the ",(0,n.jsx)(t.code,{children:"catalogServiceRef"})," from ",(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-node"}),". However, it is almost never the right thing to do - especially from processors - and we strongly discourage from doing so."]}),"\n",(0,n.jsxs)(t.p,{children:['The catalog processing loop is a very high-speed system where your entire catalog cluster collaborates to race through all entities at the highest possible rate. The ideal processor does an absolute minimum of work, and immediately relinquishes control back. Performing asynchronous requests to external systems - including the catalog - from processors, can quickly become overwhelming for that external system and starve their resources if they aren\'t prepared to deal with very high rates of small requests. It also significantly slows down the procesing loop, when each step needs to wait for responses. This can lead to work "piling up" in the catalog and delays in seeing entities get updated. The ',(0,n.jsx)(t.a,{href:"/docs/next/features/software-catalog/life-of-an-entity",children:"life of an entity"})," article shows the sequence of events that happen when an entity goes from original ingestion, through processing, and to becoming final entities."]}),"\n",(0,n.jsxs)(t.p,{children:["See also ",(0,n.jsx)(t.a,{href:"#can-i-validate-relations-in-processors",children:"the related validation topic"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"can-i-validate-relations-in-processors",children:"Can I validate relations in processors?"}),"\n",(0,n.jsxs)(t.p,{children:["Processors are responsible for generating relations from the entity body - see the ",(0,n.jsx)(t.a,{href:"/docs/next/features/software-catalog/life-of-an-entity",children:"life of an entity"})," article for more details. It's tempting to put rules in your processors that mark entities as invalid if they have a relation to some other entity that does not exist. For example, a ",(0,n.jsx)(t.code,{children:"Component"})," entity that declares a ",(0,n.jsx)(t.code,{children:"spec.owner"}),' to a team that has been disbanded. We strongly discourage from doing this type of "hard" validation in processors, for two reasons.']}),"\n",(0,n.jsxs)(t.p,{children:["First, performance. As is described ",(0,n.jsx)(t.a,{href:"#can-i-call-the-catalog-itself-from-inside-a-processor--provider",children:"here"}),", you should avoid calling out to the catalog for any reason in processors, including for checking whether a target entity exists. Besides the performance issues, it can also lead to data races where hidden dependencies between entities lead to them never properly settling, or flickering back and forth between states for hard-to-debug reasons."]}),"\n",(0,n.jsx)(t.p,{children:'Second, user experience. The catalog is an eventually consistent system that constantly tries to mirror external realities. Users make changes in catalog-info files, or things update in external systems, and those changes get streamed in and settle over time inside the catalog. But throwing an error in a processor, instantly aborts processing of that entity and stops its ingestion. Now imagine being a large organization where these changes happen maybe hundreds of times per day. Owners of catalog-info files will constantly be surprised by their files "breaking" in ingestion, maybe a very long time after they were initially created - they were valid at their time of creation and haven\'t been touched since! This is very frustrating and slows down your users because things break silently for reasons out of your control.'}),"\n",(0,n.jsx)(t.p,{children:"There are cases where it's fine to throw hard validation errors in processors. Notably, when it doesn't pass a schema test at all and readers of the catalog data will break if the data was let through. Setting the owner to be a number instead of a string could be such an example."}),"\n",(0,n.jsx)(t.h2,{id:"can-i-throw-errors-when-validating-entities",children:"Can I throw errors when validating entities?"}),"\n",(0,n.jsx)(t.p,{children:"In short: Sometimes. Only if the shape is so wrong that it would not even parse, or violates TypeScript and similar contracts."}),"\n",(0,n.jsxs)(t.p,{children:['Never throw errors due to "soft" errors, in particular relations not matching an existing target (',(0,n.jsx)(t.a,{href:"#can-i-validate-relations-in-processors",children:"see above"}),"). For soft errors, we recommend instead letting them through into the catalog, and then implementing the checks externally and nudging people gently toward fixing their own metadata. A dynamic info bar at the top of an entity page that informs the owners as they visit the page that a certain relation seems wrong and should be fixed, can go a very long way."]}),"\n",(0,n.jsx)(t.p,{children:'To a large degree, this boils down to user experience. The catalog is an eventually consistent system that constantly tries to mirror external realities. Users make changes in catalog-info files, or things update in external systems, and those changes get streamed in and settle over time inside the catalog. But throwing an error in a processor, instantly aborts processing of that entity and stops its ingestion. Now imagine being a large organization where these changes happen maybe hundreds of times per day. Owners of catalog-info files will constantly be surprised by their files "breaking" in ingestion, maybe a very long time after they were initially created - they were valid at their time of creation and haven\'t been touched since! This is very frustrating and slows down your users because things break silently for reasons out of your control.'}),"\n",(0,n.jsxs)(t.p,{children:['You can throw for "hard" errors such as when the basic expectations of the entity shape are broken, for example, if a ',(0,n.jsxs)(t.a,{href:"/docs/next/features/software-catalog/descriptor-format#annotations-optional",children:[(0,n.jsx)(t.code,{children:"metadata.annotations"})," value"]})," was an array instead of a string. That does not match the TypeScript contract, and if you accepted such an entity into the catalog, readers of those entities are likely to explode when trying to perform string operations on that value."]}),"\n",(0,n.jsx)(t.h2,{id:"can-i-represent-versions-of-apis-services-etc-in-the-catalog",children:"Can I represent versions (of APIs, services etc) in the catalog?"}),"\n",(0,n.jsx)(t.p,{children:"We do not recommend trying to represent fine grained versions in the catalog. It does not have builtin facilities for that (by design), and the alternatives that exist for trying to do so anyway, end up being awkward and have significant drawbacks. You can sometimes represent major, breaking versions as separate entities (more on that below)."}),"\n",(0,n.jsx)(t.p,{children:'This response can seem surprising, but there\'s a clear intent behind it. Catalog entities generally represent the "human concept" of a thing, rather than the exact technical implementation of it. The name and granularity of entries in the catalog often match the way that you think and speak of that thing when talking to others. Then, you attach plugins to that high level concept, that are responsible for showing all of the finer details about it that your users need.'}),"\n",(0,n.jsxs)(t.p,{children:["The catalog should contain ",(0,n.jsx)(t.em,{children:"rarely changing"}),", ",(0,n.jsx)(t.em,{children:"human curated"})," data that is easily overseen and ",(0,n.jsx)(t.em,{children:"managed by the owners"})," of those entities."]}),"\n",(0,n.jsxs)(t.p,{children:['One example is backend services. In a fast moving world, there may be several versions of a service deployed in several environments at the same time, and those can change rapidly. Despite that, when you talk about the service with your colleagues, you probably call it e.g. "the scaffolder". So you catalog it for example as ',(0,n.jsx)(t.code,{children:"kind: Component"}),", ",(0,n.jsx)(t.code,{children:"name: scaffolder"}),", ",(0,n.jsx)(t.code,{children:"type: service"}),". But in your frontend, you can still have rich plugins that directly query your CI/CD systems, log collectors, and similar, to show precise, real-time information about exactly what's going on in your infrastructure in terms of that service. And notably, this happened without putting the burden on your end users to maintain a complex, fast moving set of yaml data just in order to appease those views."]}),"\n",(0,n.jsx)(t.p,{children:"Another example is software libraries. It's tempting to catalog every dependency of every software component, but it's ultimately not a good fit for the catalog. If you develop inner-source libraries that are widely used in your org, then by all means make a single component for them! That lets people search for it, find the owners, and gain similar insights. But if you want to track individual versions and their usages within the ecosystem, then that's a use case better served by a separate solution. Which then, in turn, absolutely could have a nice plugin view in Backstage so that you can see its output right in the view of the library itself!"}),"\n",(0,n.jsx)(t.p,{children:"And finally the example of APIs. This topic can sometimes be the most contentious. It would be unfortunate to have to create entities for every iteration of your API, and it would clobber search and ultimately be confusing."}),"\n",(0,n.jsxs)(t.p,{children:["Especially for APIs, but also the other kinds, you can still end up wanting to make a new catalog entity when a new major version of that thing is released. At that point, in some cases, the new major version is almost like a completely new component, deployed in isolation from the old one, with completely updated contracts, maybe with different documentation etc. If so then sure, make a ",(0,n.jsx)(t.code,{children:"kind: API"}),", ",(0,n.jsx)(t.code,{children:"name: customerinfo2"})," for example. Then you make the choice that there will be two entities popping up in search results when looking for that string, and maybe that is a good thing in this instance."]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,t,a)=>{var n=a(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,a){var n,o={},h=null,c=null;for(n in void 0!==a&&(h=""+a),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:h,ref:c,props:o,_owner:r.current}}t.Fragment=o,t.jsx=h,t.jsxs=h},474848:(e,t,a)=>{e.exports=a(221020)},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(296540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);