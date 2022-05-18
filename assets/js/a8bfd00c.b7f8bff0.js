"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[905],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3812:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_position:2,title:"swa init"},s=void 0,p={unversionedId:"cli/swa-init",id:"cli/swa-init",title:"swa init",description:"Synopsis",source:"@site/docs/cli/swa-init.md",sourceDirName:"cli",slug:"/cli/swa-init",permalink:"/static-web-apps-cli/docs/cli/swa-init",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/cli/swa-init.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"swa init"},sidebar:"tutorialSidebar",previous:{title:"swa",permalink:"/static-web-apps-cli/docs/cli/swa"},next:{title:"swa build",permalink:"/static-web-apps-cli/docs/cli/swa-build"}},c={},u=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Example configuration",id:"example-configuration",level:3},{value:"Options",id:"options",level:2},{value:"Usage",id:"usage",level:2},{value:"See Also",id:"see-also",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"synopsis"},"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa init [options] [configName]\n")),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This command is used to configure your project to use with the Static Web Apps CLI.\nIt will ask for a configuration name, detect your project settings and the frameworks used and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," file in the current directory.\nYou can use this file to configure any options for the CLI."),(0,r.kt)("p",null,"Note that you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"swa init")," multiples times to create different configurations for your project. This is useful for example if you're working on a monorepo and want to configure different projects."),(0,r.kt)("p",null,"The generated configuration file will be used in every command you run with the Static Web Apps CLI.\nIf you have multiple named configurations, you can use the positional argument or ",(0,r.kt)("inlineCode",{parentName:"p"},"--config-name")," option to specify which one you want to use, see usage examples below."),(0,r.kt)("h3",{id:"example-configuration"},"Example configuration"),(0,r.kt)("p",null,"Here's an example ",(0,r.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")," configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://aka.ms/azure/static-web-apps-cli/schema",\n  "configurations": {\n    "myApp": {\n      "appLocation": ".",\n      "apiLocation": "api",\n      "outputLocation": "dist",\n      "appBuildCommand": "npm run build",\n      "apiBuildCommand": "npm run build --if-present",\n      "run": "npm run dev",\n      "appDevserverUrl": "http://localhost:8080"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-y, --yes"),": answer yes to all prompts (disable interactive mode) (default: false)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-h, --help"),": display help for command")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Create a new configuration interactively"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa init\n")),(0,r.kt)("p",null,'Create a new configuration using default values for all options (aka "I feel lucky")'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa init --yes\n")),(0,r.kt)("p",null,'Run any command using the configuration named "myApp" in ',(0,r.kt)("inlineCode",{parentName:"p"},"swa-cli.config.json")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa <command> --config-name myApp\n# or\nswa <command> myApp\n")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"docs/cli/swa"},"swa")," - The Static Web Apps CLI"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-build"},"swa build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"swa-start"},"swa start"))))}d.isMDXComponent=!0}}]);