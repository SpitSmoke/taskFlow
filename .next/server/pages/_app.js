"use strict";(()=>{var e={};e.id=636,e.ids=[636],e.modules={361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},2015:e=>{e.exports=require("react")},2326:e=>{e.exports=require("react-dom")},2770:e=>{e.exports=require("styled-components")},3466:(e,r,t)=>{t.d(r,{A:()=>l,O:()=>a});var o=t(8732),n=t(2015),i=t(4233);let s=(0,n.createContext)(void 0);function a({children:e}){let[r,t]=(0,n.useState)(null),a=(0,i.useRouter)();return(0,o.jsx)(s.Provider,{value:{token:r,login:(e,r)=>{r?localStorage.setItem("token",e):sessionStorage.setItem("token",e),t(e)},logout:()=>{localStorage.removeItem("token"),sessionStorage.removeItem("token"),t(null),a.push("/login")},isAuthenticated:!!r},children:e})}function l(){let e=(0,n.useContext)(s);if(!e)throw Error("useAuth precisa estar dentro de AuthProvider");return e}},4075:e=>{e.exports=require("zlib")},7386:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var o=t(8732),n=t(2770),i=t.n(n),s=t(2015);let a=require("react-feather"),l=(0,n.keyframes)`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,d=i().div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({dark:e})=>e?"#1f2937":"#f9fafb"};
  color: ${({dark:e})=>e?"#f9fafb":"#1f2937"};
`,u=i().div`
  animation: ${l} 1.5s linear infinite;
`;function c(){let[e,r]=(0,s.useState)(!1);return(0,o.jsx)(d,{dark:e,children:(0,o.jsx)(u,{children:e?(0,o.jsx)(a.Moon,{size:32}):(0,o.jsx)(a.Sun,{size:32})})})}let m=(0,n.createGlobalStyle)`
  body {
    background-color: ${({theme:e})=>e.colors.background};
    color: ${({theme:e})=>e.colors.text};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all ${({theme:e})=>e.transition};
  }
  * {
    box-sizing: border-box;
  }
`,g={name:"light",colors:{primary:"#3B82F6",primaryHover:"#2563EB",background:"#FFFFFF",text:"#000000",surface:"#F3F4F6",textSecondary:"#6B7280",border:"#D1D5DB",error:"#EF4444",errorHover:"#B91C1C"},sizes:{maxWidth:"36rem"},spacing:{xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"2.5rem"},typography:{fontSizes:{small:"0.875rem",medium:"1rem",large:"1.125rem",xlarge:"1.875rem"},fontWeights:{normal:400,bold:700}},borderRadius:"0.25rem",transition:"0.3s ease"},x={name:"dark",colors:{primary:"#60A5FA",primaryHover:"#3B82F6",background:"#1F2937",text:"#F9FAFB",surface:"#374151",textSecondary:"#9CA3AF",border:"#4B5563",error:"#F87171",errorHover:"#EF4444"},sizes:{...g.sizes},spacing:{...g.spacing},typography:{...g.typography},borderRadius:g.borderRadius,transition:g.transition};var p=t(3466);let h=i().button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: ${({theme:e})=>e.colors.text};
  cursor: pointer;
  z-index: 10;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: background-color ${({theme:e})=>e.transition};

  &:hover {
    background-color: ${({theme:e})=>"light"===e.name?"rgba(0, 0, 0, 0.1)":"rgba(255, 255, 255, 0.1)"};
  }
`;function f({Component:e,pageProps:r}){let{theme:t,toggleTheme:i,isReady:l}=function(){let[e,r]=(0,s.useState)(g),[t,o]=(0,s.useState)(!1);return{theme:e,toggleTheme:()=>{let t="light"===e.name?x:g;r(t),localStorage.setItem("task-app-theme",t.name)},isReady:t}}();return l?(0,o.jsx)(p.O,{children:(0,o.jsxs)(n.ThemeProvider,{theme:t,children:[(0,o.jsx)(m,{}),(0,o.jsx)(h,{onClick:i,children:"light"===t.name?(0,o.jsx)(a.Moon,{size:20}):(0,o.jsx)(a.Sun,{size:20})}),(0,o.jsx)(e,{...r})]})}):(0,o.jsx)(c,{})}},7910:e=>{e.exports=require("stream")},8732:e=>{e.exports=require("react/jsx-runtime")},9021:e=>{e.exports=require("fs")}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[89,233],()=>t(7386));module.exports=o})();