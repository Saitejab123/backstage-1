/*! For license information please see 4812e370.4ffaf73f.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[783683],{830086:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=i(474848),s=i(28453);const o={id:"index",title:"Getting Started",description:"How to get started with the notifications and signals"},a=void 0,c={id:"notifications/index",title:"Getting Started",description:"How to get started with the notifications and signals",source:"@site/../docs/notifications/index.md",sourceDirName:"notifications",slug:"/notifications/",permalink:"/docs/next/notifications/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/notifications/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Getting Started",description:"How to get started with the notifications and signals"},sidebar:"docs",previous:{title:"Proxy",permalink:"/docs/next/features/kubernetes/proxy"},next:{title:"Overview",permalink:"/docs/next/permissions/overview"}},r={},l=[{value:"Upgrade to the latest version of Backstage",id:"upgrade-to-the-latest-version-of-backstage",level:3},{value:"About notifications",id:"about-notifications",level:2},{value:"Installation in Older Environments",id:"installation-in-older-environments",level:2},{value:"Add Notifications Backend",id:"add-notifications-backend",level:3},{value:"Add Notifications Frontend",id:"add-notifications-frontend",level:3},{value:"Optional: Add Signals Backend",id:"optional-add-signals-backend",level:3},{value:"Optional: Signals Frontend",id:"optional-signals-frontend",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Notifications Backend",id:"notifications-backend",level:3},{value:"Notifications Frontend",id:"notifications-frontend",level:3},{value:"Use",id:"use",level:2},{value:"Backend",id:"backend",level:3},{value:"Signals",id:"signals",level:3},{value:"Using signals in your own plugin",id:"using-signals-in-your-own-plugin",level:4},{value:"Consuming Notifications",id:"consuming-notifications",level:3},{value:"Extending Notifications via Processors",id:"extending-notifications-via-processors",level:3},{value:"User-specific notification settings",id:"user-specific-notification-settings",level:3},{value:"External Services",id:"external-services",level:3},{value:"Additional info",id:"additional-info",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:'The Backstage Notifications System provides a way for plugins and external services to send notifications to Backstage users.\nThese notifications are displayed in the dedicated page of the Backstage frontend UI or by frontend plugins per specific scenarios.\nAdditionally, notifications can be sent to external channels (like email) via "processors" implemented within plugins.'}),"\n",(0,t.jsx)(e.p,{children:"Notifications can be optionally integrated with the signals (a push mechanism) to ensure users receive them immediately."}),"\n",(0,t.jsx)(e.h3,{id:"upgrade-to-the-latest-version-of-backstage",children:"Upgrade to the latest version of Backstage"}),"\n",(0,t.jsxs)(e.p,{children:["To ensure your version of Backstage has all the latest notifications and signals related functionality, it\u2019s important to upgrade to the latest version. The ",(0,t.jsx)(e.a,{href:"https://backstage.github.io/upgrade-helper/",children:"Backstage upgrade helper"})," is a great tool to help ensure that you\u2019ve made all the necessary changes during the upgrade!"]}),"\n",(0,t.jsx)(e.h2,{id:"about-notifications",children:"About notifications"}),"\n",(0,t.jsx)(e.p,{children:"Notifications are messages sent to either individual users or groups.\nThey are not intended for inter-process communication of any kind."}),"\n",(0,t.jsx)(e.p,{children:"There are two basic types of notifications:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Broadcast"}),": Messages sent to all users of Backstage."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Entity"}),": Messages delivered to specific listed entities, such as Users or Groups."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Example of use-cases:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"System-wide announcements or alerts"}),"\n",(0,t.jsx)(e.li,{children:"Notifications for component owners: e.g., build failures, successful deployments, new vulnerabilities"}),"\n",(0,t.jsx)(e.li,{children:"Notifications for individuals: e.g., updates you have subscribed to, new required training courses"}),"\n",(0,t.jsx)(e.li,{children:"Notifications pertaining to a particular entity in the catalog: A notification might apply to an entity and the owning team."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installation-in-older-environments",children:"Installation in Older Environments"}),"\n",(0,t.jsx)(e.p,{children:"Newer versions of instances created by the create-app have both the notifications and signals plugins included by default; this section can be skipped right to the Configuration."}),"\n",(0,t.jsx)(e.p,{children:"Following installation instructions are valid for enabling the plugins in older environments."}),"\n",(0,t.jsx)(e.h3,{id:"add-notifications-backend",children:"Add Notifications Backend"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn workspace backend add @backstage/plugin-notifications-backend\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Add the notifications to your ",(0,t.jsx)(e.code,{children:"backend/src/index.ts"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"const backend = createBackend();\n// ...\nbackend.add(import('@backstage/plugin-notifications-backend'));\n"})}),"\n",(0,t.jsx)(e.h3,{id:"add-notifications-frontend",children:"Add Notifications Frontend"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn workspace app add @backstage/plugin-notifications\n"})}),"\n",(0,t.jsxs)(e.p,{children:["To add the notifications main menu, add following to your ",(0,t.jsx)(e.code,{children:"packages/app/src/components/Root/Root.tsx"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { NotificationsSidebarItem } from '@backstage/plugin-notifications';\n\n<SidebarPage>\n  <Sidebar>\n    <SidebarGroup>\n      // ...\n      <NotificationsSidebarItem />\n    </SidebarGroup>\n  </Sidebar>\n</SidebarPage>;\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Also add the route to notifications to ",(0,t.jsx)(e.code,{children:"packages/app/src/App.tsx"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { NotificationsPage } from '@backstage/plugin-notifications';\n\n<FlatRoutes>\n  // ...\n  <Route path=\"/notifications\" element={<NotificationsPage />} />\n</FlatRoutes>;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"optional-add-signals-backend",children:"Optional: Add Signals Backend"}),"\n",(0,t.jsx)(e.p,{children:"Optionally add Signals to your backend by"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn workspace backend add @backstage/plugin-signals-backend\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Add the signals to your ",(0,t.jsx)(e.code,{children:"backend/src/index.ts"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"const backend = createBackend();\n// ...\nbackend.add(import('@backstage/plugin-signals-backend'));\n"})}),"\n",(0,t.jsx)(e.h3,{id:"optional-signals-frontend",children:"Optional: Signals Frontend"}),"\n",(0,t.jsx)(e.p,{children:"The use of signals is optional but improves user experience."}),"\n",(0,t.jsx)(e.p,{children:"Start with:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"yarn workspace app add @backstage/plugin-signals\n"})}),"\n",(0,t.jsxs)(e.p,{children:["To install the plugin, add the ",(0,t.jsx)(e.code,{children:"SignalsDisplay"})," to your app root in ",(0,t.jsx)(e.code,{children:"packages/app/src/App.tsx"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { SignalsDisplay } from '@backstage/plugin-signals';\n\nexport default app.createRoot(\n  <>\n    <AlertDisplay transientTimeoutMs={2500} />\n    <OAuthRequestDialog />\n    {/* highlight-add-next-line */}\n    <SignalsDisplay />\n    <AppRouter>\n      <VisitListener />\n      <Root>{routes}</Root>\n    </AppRouter>\n  </>,\n);\n"})}),"\n",(0,t.jsx)(e.p,{children:"If the signals plugin is properly configured, it will be automatically discovered by the notifications plugin and used."}),"\n",(0,t.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(e.h3,{id:"notifications-backend",children:"Notifications Backend"}),"\n",(0,t.jsx)(e.p,{children:"The Notifications backend plugin provides an API to create notifications, list notifications per logged-in user, and search based on parameters."}),"\n",(0,t.jsxs)(e.p,{children:["The plugin uses a relational ",(0,t.jsx)(e.a,{href:"https://backstage.io/docs/getting-started/config/database",children:"database"})," for persistence; no specifics are introduced in this context."]}),"\n",(0,t.jsxs)(e.p,{children:["No additional configuration in the app-config is needed, except for optional additional modules for ",(0,t.jsx)(e.code,{children:"processors"}),"."]}),"\n",(0,t.jsx)(e.h3,{id:"notifications-frontend",children:"Notifications Frontend"}),"\n",(0,t.jsx)(e.p,{children:"The recipients of notifications have to be entities in the catalog, e.g., of the User or Group kind."}),"\n",(0,t.jsx)(e.p,{children:"Otherwise, no specific configuration is needed for the front-end notifications plugin."}),"\n",(0,t.jsxs)(e.p,{children:["All parametrization is done through component properties, such as the ",(0,t.jsx)(e.code,{children:"NotificationsSidebarItem"}),", which can be used as an active left-side menu item in the front-end."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Notifications Page",src:i(879120).A+"",width:"1918",height:"958"})}),"\n",(0,t.jsxs)(e.p,{children:["In the ",(0,t.jsx)(e.code,{children:"packages/app/src/components/Root/Root.tsx"}),", tweak the ",(0,t.jsx)(e.a,{href:"https://backstage.io/docs/reference/plugin-notifications.notificationssidebaritem",children:"properties"})," of the ",(0,t.jsx)(e.code,{children:"<NotificationsSidebarItem />"})," per specific needs."]}),"\n",(0,t.jsx)(e.h2,{id:"use",children:"Use"}),"\n",(0,t.jsx)(e.p,{children:"New notifications can be sent either by a backend plugin or an external service through the REST API."}),"\n",(0,t.jsx)(e.h3,{id:"backend",children:"Backend"}),"\n",(0,t.jsxs)(e.p,{children:["Regardless of technical feasibility, a backend plugin should avoid directly accessing the notifications REST API.\nInstead, it should integrate with the ",(0,t.jsx)(e.code,{children:"@backstage/plugin-notifications-node"})," to ",(0,t.jsx)(e.code,{children:"send"})," (create) a new notification."]}),"\n",(0,t.jsx)(e.p,{children:"The reasons for this approach include the propagation of authorization in the API request and improved maintenance and backward compatibility in the future."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { notificationService } from '@backstage/plugin-notifications-node';\n\nexport const myPlugin = createBackendPlugin({\n  pluginId: 'myPlugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        // ...\n        notificationService: notificationService,\n      },\n      async init({ config, logger, httpRouter, notificationService }) {\n        httpRouter.use(\n          await createRouter({\n            // ...\n            notificationService,\n          }),\n        );\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(e.p,{children:"To emit a new notification:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"notificationService.send({\n  recipients /* of the broadcast or entity type */,\n  payload /* actual message */,\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Refer the ",(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/notifications-node/report.api.md",children:"API documentation"})," for further details."]}),"\n",(0,t.jsx)(e.h3,{id:"signals",children:"Signals"}),"\n",(0,t.jsx)(e.p,{children:"The use of signals with notifications is optional but generally enhances user experience and performance."}),"\n",(0,t.jsx)(e.p,{children:"When a notification is created, a new signal is emitted to a general-purpose message bus to announce it to subscribed listeners."}),"\n",(0,t.jsx)(e.p,{children:"The frontend maintains a persistent connection (WebSocket) to receive these announcements from the notifications channel.\nThe specific details of the updated or created notification should be retrieved via a request to the notifications API, except for new notifications, where the payload is included in the signal for performance reasons."}),"\n",(0,t.jsx)(e.p,{children:"In a frontend plugin, to subscribe for notifications' signals:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { useSignal } from '@backstage/plugin-signals-react';\n\nconst { lastSignal } = useSignal<NotificationSignal>('notifications');\n\nReact.useEffect(() => {\n  /* ... */\n}, [lastSignal, notificationsApi]);\n"})}),"\n",(0,t.jsx)(e.h4,{id:"using-signals-in-your-own-plugin",children:"Using signals in your own plugin"}),"\n",(0,t.jsx)(e.p,{children:"It's possible to use signals in your own plugin to deliver data from the backend to the frontend in near real-time."}),"\n",(0,t.jsxs)(e.p,{children:["To use signals in your own frontend plugin, you need to add the ",(0,t.jsx)(e.code,{children:"useSignal"})," hook from ",(0,t.jsx)(e.code,{children:"@backstage/plugin-signals-react"})," from ",(0,t.jsx)(e.code,{children:"@backstage/plugin-notifications-common"})," with optional generic type of the signal."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"// To use the same type of signal in the backend, this should be placed in a shared common package\nexport type MySignalType = {\n  user: string;\n  data: string;\n  // ....\n};\n\nconst { lastSignal } = useSignal<MySignalType>('my-plugin');\n\nuseEffect(() => {\n  if (lastSignal) {\n    // Do something with the signal\n  }\n}, [lastSignal]);\n"})}),"\n",(0,t.jsxs)(e.p,{children:["To send signals from the backend plugin, you must add the ",(0,t.jsx)(e.code,{children:"signalsServiceRef"})," to your plugin or module as a dependency."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { signalsServiceRef } from '@backstage/plugin-signals-node';\nexport const myPlugin = createBackendPlugin({\n  pluginId: 'my',\n  register(env) {\n    env.registerInit({\n      deps: {\n        httpRouter: coreServices.httpRouter,\n        signals: signalsServiceRef,\n      },\n      async init({ httpRouter, signals }) {\n        httpRouter.use(\n          await createRouter({\n            signals,\n          }),\n        );\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsxs)(e.p,{children:["To send the signal using the service, you can use the ",(0,t.jsx)(e.code,{children:"publish"})," method."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"signals.publish<MySignalType>({ user: 'user', data: 'test' });\n"})}),"\n",(0,t.jsx)(e.h3,{id:"consuming-notifications",children:"Consuming Notifications"}),"\n",(0,t.jsx)(e.p,{children:"In a front-end plugin, the simplest way to query a notification is by its ID:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { useApi } from '@backstage/core-plugin-api';\nimport { notificationsApiRef } from '@backstage/plugin-notifications';\n\nconst notificationsApi = useApi(notificationsApiRef);\n\nnotificationsApi.getNotification(yourId);\n\n// or with connection to signals:\nnotificationsApi.getNotification(lastSignal.notification_id);\n"})}),"\n",(0,t.jsx)(e.h3,{id:"extending-notifications-via-processors",children:"Extending Notifications via Processors"}),"\n",(0,t.jsxs)(e.p,{children:["The notifications can be extended with ",(0,t.jsx)(e.code,{children:"NotificationProcessor"}),". These processors allow to decorate notifications before they are sent or/and send the notifications to external services."]}),"\n",(0,t.jsx)(e.p,{children:"Depending on the needs, a processor can modify the content of a notification or route it to different systems like email, Slack, or other services."}),"\n",(0,t.jsxs)(e.p,{children:["A good example of how to write a processor is the ",(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/notifications-backend-module-email",children:"Email Processor"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Start off by creating a notification processor:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { Notification } from '@backstage/plugin-notifications-common';\nimport { NotificationProcessor } from '@backstage/plugin-notifications-node';\n\nclass MyNotificationProcessor implements NotificationProcessor {\n  // preProcess is called before the notification is saved to database.\n  // This is a good place to modify the notification before it is saved and sent to the user.\n  async preProcess(notification: Notification): Promise<Notification> {\n    if (notification.origin === 'plugin-my-plugin') {\n      notification.payload.icon = 'my-icon';\n    }\n    return notification;\n  }\n\n  // postProcess is called after the notification is saved to database and the signal is emitted.\n  // This is a good place to send the notification to external services.\n  async postProcess(notification: Notification): Promise<void> {\n    nodemailer.sendEmail({\n      from: 'backstage',\n      to: 'user',\n      subject: notification.payload.title,\n      text: notification.payload.description,\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(e.p,{children:"Both of the processing functions are optional, and you can implement only one of them."}),"\n",(0,t.jsx)(e.p,{children:"Add the notification processor to the notification system by:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"import { notificationsProcessingExtensionPoint } from '@backstage/plugin-notifications-node';\nimport { Notification } from '@backstage/plugin-notifications-common';\n\nexport const myPlugin = createBackendPlugin({\n  pluginId: 'myPlugin',\n  register(env) {\n    env.registerInit({\n      deps: {\n        notifications: notificationsProcessingExtensionPoint,\n        // ...\n      },\n      async init({ notifications }) {\n        // ...\n        notifications.addProcessor(new MyNotificationProcessor());\n      },\n    });\n  },\n});\n"})}),"\n",(0,t.jsx)(e.h3,{id:"user-specific-notification-settings",children:"User-specific notification settings"}),"\n",(0,t.jsxs)(e.p,{children:["The notifications plugin provides a way for users to manage their notification settings. To enable this, you must\nadd the ",(0,t.jsx)(e.code,{children:"UserNotificationSettingsCard"})," to your frontend."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:'// App.tsx example\n<Route path="/settings" element={<UserSettingsPage />}>\n  <SettingsLayout.Route path="/advanced" title="Advanced">\n    <AdvancedSettings />\n  </SettingsLayout.Route>\n  <SettingsLayout.Route path="/notifications" title="Notifications">\n    <UserNotificationSettingsCard\n      originNames={{ \'plugin:scaffolder\': \'Scaffolder\' }}\n    />\n  </SettingsLayout.Route>\n</Route>\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Notification Settings",src:i(479923).A+"",width:"1445",height:"501"})}),"\n",(0,t.jsx)(e.p,{children:"You can customize the origin names shown in the UI by passing an object where the keys are the origins and the values are the names you want to show in the UI."}),"\n",(0,t.jsx)(e.p,{children:"Each notification processor will receive its own column in the settings page, where the user can enable or disable notifications from that processor."}),"\n",(0,t.jsx)(e.h3,{id:"external-services",children:"External Services"}),"\n",(0,t.jsxs)(e.p,{children:["When the emitter of a notification is a Backstage backend plugin, it is mandatory to use the integration via ",(0,t.jsx)(e.code,{children:"@backstage/plugin-notifications-node"})," as described above."]}),"\n",(0,t.jsxs)(e.p,{children:["If the emitter is a service external to Backstage, an HTTP POST request can be issued directly to the API, assuming that authentication is properly configured.\nRefer to the ",(0,t.jsx)(e.a,{href:"https://backstage.io/docs/auth/service-to-service-auth",children:"service-to-service auth documentation"})," for more details, focusing on the Static Tokens section for the simplest setup option."]}),"\n",(0,t.jsx)(e.p,{children:"An example request for creating a broadcast notification might look like:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'curl -X POST https://[BACKSTAGE_BACKEND]/api/notifications/notifications -H "Content-Type: application/json" -H "Authorization: Bearer YOUR_BASE64_SHARED_KEY_TOKEN" -d \'{"recipients":{"type":"broadcast"},"payload": {"title": "Title of broadcast message","link": "http://foo.com/bar","severity": "high","topic": "The topic"}}\'\n'})}),"\n",(0,t.jsx)(e.h2,{id:"additional-info",children:"Additional info"}),"\n",(0,t.jsxs)(e.p,{children:["An example of a backend plugin sending notifications can be found in ",(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-notifications",children:"https://github.com/backstage/backstage/tree/master/plugins/scaffolder-backend-module-notifications"}),"."]}),"\n",(0,t.jsx)(e.p,{children:"Sources of the notifications and signal plugins:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/notifications",children:"https://github.com/backstage/backstage/blob/master/plugins/notifications"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/notifications-backend",children:"https://github.com/backstage/backstage/blob/master/plugins/notifications-backend"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/notifications-node",children:"https://github.com/backstage/backstage/blob/master/plugins/notifications-node"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/signals-react",children:"https://github.com/backstage/backstage/blob/master/plugins/signals-react"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},221020:(n,e,i)=>{var t=i(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r={key:!0,ref:!0,__self:!0,__source:!0};function l(n,e,i){var t,o={},l=null,d=null;for(t in void 0!==i&&(l=""+i),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(d=e.ref),e)a.call(e,t)&&!r.hasOwnProperty(t)&&(o[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===o[t]&&(o[t]=e[t]);return{$$typeof:s,type:n,key:l,ref:d,props:o,_owner:c.current}}e.Fragment=o,e.jsx=l,e.jsxs=l},474848:(n,e,i)=>{n.exports=i(221020)},479923:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/notificationSettings-8b9d95ba0ca98cb6e8e72460ac0486a3.png"},879120:(n,e,i)=>{i.d(e,{A:()=>t});const t=i.p+"assets/images/notificationsPage-3c61ae732e837faf0b86725f780907d0.png"},28453:(n,e,i)=>{i.d(e,{R:()=>a,x:()=>c});var t=i(296540);const s={},o=t.createContext(s);function a(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);