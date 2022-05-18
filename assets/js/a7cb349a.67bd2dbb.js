"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[651],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2260:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],o={sidebar_position:1,title:"swa"},p=void 0,s={unversionedId:"cli/swa",id:"cli/swa",title:"swa",description:"Synopsis",source:"@site/docs/cli/swa.md",sourceDirName:"cli",slug:"/cli/swa",permalink:"/static-web-apps-cli/docs/cli/swa",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/swa.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"swa"},sidebar:"tutorialSidebar",previous:{title:"6. Use Runtime Config File",permalink:"/static-web-apps-cli/docs/use/config"},next:{title:"swa init",permalink:"/static-web-apps-cli/docs/cli/swa-init"}},c={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Commands",id:"commands",level:2},{value:"Usage",id:"usage",level:2},{value:"See Also",id:"see-also",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa [command] [options]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This is the commandline utility for streamlining local development for Azure Static Web Apps. Use it to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"initialize Azure Static Web Apps project"),(0,r.kt)("li",{parentName:"ul"},"build an Azure Static Web Apps project"),(0,r.kt)("li",{parentName:"ul"},"login to Azure"),(0,r.kt)("li",{parentName:"ul"},"start emulator or bind to dev server"),(0,r.kt)("li",{parentName:"ul"},"deploy project to Azure Static Web Apps")),(0,r.kt)("p",null,"If you don't enter any command and run ",(0,r.kt)("inlineCode",{parentName:"p"},"swa"),", it will act as a macro command shorcut for ",(0,r.kt)("inlineCode",{parentName:"p"},"swa init"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"swa build"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"swa login")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"swa deploy"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"swa init")," command will only be executed if the ",(0,r.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," does not exist in the current folder."),(0,r.kt)("p",null,"The best way to get started is to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"swa")," command and follow the interactive prompts."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"Here are global options that you can use with any command supported by the ",(0,r.kt)("inlineCode",{parentName:"p"},"swa")," CLI:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v, --version"),": output the version number"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-V, --verbose [prefix]"),': enable verbose output. Values are: silly,info,log,silent (default: "log", preset: "log")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-c, --config <path>"),': path to swa-cli.config.json file to use (default: "swa-cli.config.json")'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-cn, --config-name <name>"),": name of the configuration to use"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-g, --print-config"),": print all resolved options (default: false)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-h, --help"),": display help for command")),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"Here are the currently supported ",(0,r.kt)("inlineCode",{parentName:"p"},"swa")," commands. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"swa <command> --help")," to learn about options and usage for that particular command."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-login"},(0,r.kt)("inlineCode",{parentName:"a"},"login")),": login into Azure"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-init"},(0,r.kt)("inlineCode",{parentName:"a"},"init")),": initialize a new static web app project"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-start"},(0,r.kt)("inlineCode",{parentName:"a"},"start")),": start the emulator from a directory or bind to a dev server"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-deploy"},(0,r.kt)("inlineCode",{parentName:"a"},"deploy")),": deploy the current project to Azure Static Web Apps"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-build"},(0,r.kt)("inlineCode",{parentName:"a"},"build")),": build your project")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Configure, build and deploy your project to Azure Static Web Apps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-init"},"swa init")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-build"},"swa build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-start"},"swa start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-login"},"swa login")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-deploy"},"swa deploy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-config"},"Configuring CLI")," - file location, defaults"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa-deploy"},"Environment Vars")," - supported settings")))}m.isMDXComponent=!0}}]);