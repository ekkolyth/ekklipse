import{c as e,a as t,b as i,u as r,S as n,d as o,t as l,i as a,m as s,e as d,f as c,g as f,s as u,h as p,j as g,k as h,l as v,n as x,o as m,r as b,p as y,q as $,v as k,w,x as C,D as S,y as F}from"./index-CJ_IVjzu.js";const z="undefined"==typeof window;function U(e){return e.isFetching&&"success"===e.status?"beforeLoad"===e.isFetching?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e.status]}let M={data:""},B=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,O=/\/\*[^]*?\*\/|  +/g,E=/\n+/g,D=(e,t)=>{let i="",r="",n="";for(let o in e){let l=e[o];"@"==o[0]?"i"==o[1]?i=o+" "+l+";":r+="f"==o[1]?D(l,o):o+"{"+D(l,"k"==o[1]?"":t)+"}":"object"==typeof l?r+=D(l,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=l&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=D.p?D.p(o,l):o+":"+l+";")}return i+(t&&n?t+"{"+n+"}":n)+r},I={},G=e=>{if("object"==typeof e){let t="";for(let i in e)t+=i+G(e[i]);return t}return e};function T(e){let t=this||{},i=e.call?e(t.p):e;return((e,t,i,r,n)=>{let o=G(e),l=I[o]||(I[o]=(e=>{let t=0,i=11;for(;t<e.length;)i=101*i+e.charCodeAt(t++)>>>0;return"go"+i})(o));if(!I[l]){let t=o!==e?e:(e=>{let t,i,r=[{}];for(;t=B.exec(e.replace(O,""));)t[4]?r.shift():t[3]?(i=t[3].replace(E," ").trim(),r.unshift(r[0][i]=r[0][i]||{})):r[0][t[1]]=t[2].replace(E," ").trim();return r[0]})(e);I[l]=D(n?{["@keyframes "+l]:t}:t,i?"":"."+l)}let a=i&&I.g?I.g:null;return i&&(I.g=I[l]),s=I[l],d=t,c=r,(f=a)?d.data=d.data.replace(f,s):-1===d.data.indexOf(s)&&(d.data=c?s+d.data:d.data+s),l;var s,d,c,f})(i.unshift?i.raw?((e,t,i)=>e.reduce((e,r,n)=>{let o=t[n];if(o&&o.call){let e=o(i),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":D(e,""):!1===e?"":e}return e+r+(null==o?"":o)},""))(i,[].slice.call(arguments,1),t.p):i.reduce((e,i)=>Object.assign(e,i&&i.call?i(t.p):i),{}):i,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||M})(t.target),t.g,t.o,t.k)}T.bind({g:1}),T.bind({k:1});const A={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}};function j(){const t=r(n),[i]=e((e=>{const{colors:t,font:i,size:r,alpha:n,border:o}=A,{fontFamily:l,lineHeight:a,size:s}=i,d=e?T.bind({target:e}):T;return{devtoolsPanelContainer:d`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:e=>d`
        visibility: ${e?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:e=>e()?d`
          transition: none;
        `:d`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(e,t)=>e?d`
          pointer-events: auto;
          transform: translateY(0);
        `:d`
        pointer-events: none;
        transform: translateY(${t}px);
      `,logo:d`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${l.sans};
      gap: ${A.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${o.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:d`
      font-size: ${i.size.md};
      font-weight: ${i.weight.bold};
      line-height: ${i.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:d`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:d`
      display: flex;
      font-size: ${s.sm};
      font-family: ${l.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${s.xs};
      }
    `,dragHandle:d`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${n[90]};
      }
    `,firstContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:d`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:d`
      padding: ${A.size[2]};
    `,row:d`
      display: flex;
      align-items: center;
      padding: ${A.size[2]} ${A.size[2.5]};
      gap: ${A.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:d`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${A.size[2]};
      font-weight: ${i.weight.medium};
      font-size: ${i.size.xs};
      min-height: ${A.size[8]};
      line-height: ${i.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:d`
      background: ${t.yellow[900]}${n[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${A.size[0]} ${A.size[2.5]};
      border-radius: ${o.radius.full};
      font-size: ${i.size.xs};
      font-weight: ${i.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:d`
      color: ${t.yellow[300]};
    `,detailsContent:d`
      padding: ${A.size[1.5]} ${A.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${i.size.xs};
    `,routeMatchesToggle:d`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${o.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(e,r)=>{const o=[d`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${l.sans};
        font-weight: ${i.weight.medium};
      `];if(e){const e=d`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;o.push(e)}else{const e=d`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${n[20]};
        `;o.push(e)}return r&&o.push(d`
          border-right: 1px solid ${A.colors.gray[500]};
        `),o},detailsHeaderInfo:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${i.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:e=>{const i=[d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${s.xs};
        color: ${t.gray[300]};
      `];if(e){const e=d`
          background: ${t.darkGray[500]};
        `;i.push(e)}return i},matchIndicator:e=>{const i=[d`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[e][900]};
        border: 1px solid ${t[e][500]};
        border-radius: ${o.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if("gray"===e){const e=d`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;i.push(e)}return i},matchID:d`
      flex: 1;
      line-height: ${a.xs};
    `,ageTicker:e=>{const i=[d`
        display: flex;
        gap: ${r[1]};
        font-size: ${s.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${a.xs};
      `];if(e){const e=d`
          color: ${t.yellow[400]};
        `;i.push(e)}return i},secondContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:d`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:d`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:d`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(e,i)=>{const n=[d`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${s.xs};
        color: ${t.gray[300]};
        cursor: ${i?"pointer":"default"};
        line-height: ${a.xs};
      `];if(e){const e=d`
          background: ${t.darkGray[500]};
        `;n.push(e)}return n},routesRow:e=>{const i=[d`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${s.xs};
        line-height: ${a.xs};
      `];if(!e){const e=d`
          color: ${t.gray[400]};
        `;i.push(e)}return i},routesRowInner:d`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:d`
      color: ${t.gray[400]};
      font-size: ${s.xs};
      line-height: ${a.xs};
    `,nestedRouteRow:e=>d`
        margin-left: ${e?0:r[3.5]};
        border-left: ${e?"":`solid 1px ${t.gray[700]}`};
      `,code:d`
      font-size: ${s.xs};
      line-height: ${a.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:d`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,maskedBadgeContainer:d`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:d`
      display: flex;
      flex-direction: column;
      padding: ${A.size[2]};
      font-size: ${A.font.size.xs};
      color: ${A.colors.gray[300]};
      line-height: ${A.font.lineHeight.sm};
    `,matchStatus:(e,t)=>{const i=t&&"success"===e?"beforeLoad"===t?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[e];return d`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${A.border.radius.sm};
        font-weight: ${A.font.weight.normal};
        background-color: ${A.colors[i][900]}${A.alpha[90]};
        color: ${A.colors[i][300]};
        border: 1px solid ${A.colors[i][600]};
        margin-bottom: ${A.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:d`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:d`
      display: flex;
    `,mainCloseBtn:d`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${o.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${i.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:e=>d`
        ${"top-left"===e?`top: ${r[2]}; left: ${r[2]};`:""}
        ${"top-right"===e?`top: ${r[2]}; right: ${r[2]};`:""}
        ${"bottom-left"===e?`bottom: ${r[2]}; left: ${r[2]};`:""}
        ${"bottom-right"===e?`bottom: ${r[2]}; right: ${r[2]};`:""}
      `,mainCloseBtnAnimation:e=>e?d`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:d`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:d`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:d`
      width: 1px;
      background: ${A.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:d`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:d`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:d`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:d`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${o.radius.sm} ${o.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:d`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:d`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${s.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}})(t));return i}function P(i,r){const[n,o]=e();t(()=>{const e=(e=>{try{const t=localStorage.getItem(e);return"string"==typeof t?JSON.parse(t):void 0}catch{return}})(i);o(null==e?"function"==typeof r?r():r:e)});return[n,e=>{o(t=>{let r=e;"function"==typeof e&&(r=e(t));try{localStorage.setItem(i,JSON.stringify(r))}catch{}return r})}]}var L=l('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),R=l("<div>"),H=l("<button><span> "),N=l("<div><div><button> [<!> ... <!>]"),_=l("<button><span></span> 🔄 "),J=l("<span>:"),V=l("<span>");const q=({expanded:e,style:t={}})=>{const r=W();return n=L(),o=n.firstChild,i(t=>{var i=r().expander,l=f(r().expanderIcon(e));return i!==t.e&&c(n,t.e=i),l!==t.t&&u(o,"class",t.t=l),t},{e:void 0,t:void 0}),n;var n,o};function K({value:t,defaultExpanded:r,pageSize:n=100,filterSubEntries:l,...u}){const[p,h]=e(Boolean(r)),v=o(()=>typeof t()),x=o(()=>{let e=[];const i=e=>{const t=!0===r?{[e.label]:!0}:null==r?void 0:r[e.label];return{...e,value:()=>e.value,defaultExpanded:t}};var n;return Array.isArray(t())?e=t().map((e,t)=>i({label:t.toString(),value:e})):null!==t()&&"object"==typeof t()&&(n=t(),Symbol.iterator in n)&&"function"==typeof t()[Symbol.iterator]?e=Array.from(t(),(e,t)=>i({label:t.toString(),value:e})):"object"==typeof t()&&null!==t()&&(e=Object.entries(t()).map(([e,t])=>i({label:e,value:t}))),l?l(e):e}),m=o(()=>function(e,t){if(t<1)return[];let i=0;const r=[];for(;i<e.length;)r.push(e.slice(i,i+t)),i+=t;return r}(x(),n)),[b,y]=e([]),[$,k]=e(void 0),w=W(),C=()=>{k(t()())},S=e=>d(K,g({value:t,filterSubEntries:l},u,e));return z=R(),a(z,(F=s(()=>!!m().length),()=>{return F()?[(r=H(),o=r.firstChild,l=o.firstChild,r.$$click=()=>h(e=>!e),a(r,d(q,{get expanded(){return p()??!1}}),o),a(r,()=>u.label,o),a(o,()=>"iterable"===String(v).toLowerCase()?"(Iterable) ":"",l),a(o,()=>x().length,l),a(o,()=>x().length>1?"items":"item",null),i(e=>{var t=w().expandButton,i=w().info;return t!==e.e&&c(r,e.e=t),i!==e.t&&c(o,e.t=i),e},{e:void 0,t:void 0}),r),s(()=>{return s(()=>!!p())()?s(()=>1===m().length)()?(t=R(),a(t,()=>x().map((e,t)=>S(e))),i(()=>c(t,w().subEntries)),t):(e=R(),a(e,()=>m().map((e,t)=>{return o=N(),l=o.firstChild,u=l.firstChild,p=u.firstChild,g=p.nextSibling,(h=g.nextSibling.nextSibling).nextSibling,u.$$click=()=>y(e=>e.includes(t)?e.filter(e=>e!==t):[...e,t]),a(u,d(q,{get expanded(){return b().includes(t)}}),p),a(u,t*n,g),a(u,t*n+n-1,h),a(l,(r=s(()=>!!b().includes(t)),()=>{return r()?(t=R(),a(t,()=>e.map(e=>S(e))),i(()=>c(t,w().subEntries)),t):null;var t}),null),i(e=>{var t=w().entry,i=f(w().labelButton,"labelButton");return t!==e.e&&c(l,e.e=t),i!==e.t&&c(u,e.t=i),e},{e:void 0,t:void 0}),o;var r,o,l,u,p,g,h})),i(()=>c(e,w().subEntries)),e):null;var e,t})]:(e=s(()=>"function"===v()),()=>{return e()?d(K,{get label(){return e=_(),t=e.firstChild,e.$$click=C,a(t,()=>u.label),i(()=>c(e,w().refreshValueBtn)),e;var e,t},value:$,defaultExpanded:{}}):[(n=J(),o=n.firstChild,a(n,()=>u.label,o),n)," ",(r=V(),a(r,()=>(e=>{const t=Object.getOwnPropertyNames(Object(e)),i="bigint"==typeof e?`${e.toString()}n`:e;try{return JSON.stringify(i,t)}catch(r){return"unable to stringify"}})(t())),i(()=>c(r,w().value)),r)];var r,n,o});var e,r,o,l})),i(()=>c(z,w().entry)),z;var F,z}const Y=e=>{const{colors:t,font:i,size:r}=A,{fontFamily:n,lineHeight:o,size:l}=i,a=e?T.bind({target:e}):T;return{entry:a`
      font-family: ${n.mono};
      font-size: ${l.xs};
      line-height: ${o.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:a`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:a`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:e=>e?a`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:a`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:a`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:a`
      color: ${t.purple[400]};
    `,subEntries:a`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:a`
      color: ${t.gray[500]};
      font-size: ${l["2xs"]};
      padding-left: ${r[1]};
    `,refreshValueBtn:a`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${n.mono};
      font-size: ${l.xs};
    `}};function W(){const t=r(n),[i]=e(Y(t));return i}p(["click"]);var Z=l("<div><div></div><div>/</div><div></div><div>/</div><div>");function Q(e){const t=[e/1e3,e/6e4,e/36e5,e/864e5];let i=0;for(let r=1;r<t.length&&!(t[r]<1);r++)i=r;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(t[i])+["s","min","h","d"][i]}function X({match:e,router:t}){const r=j();if(!e)return null;const n=t().looseRoutesById[e.routeId];if(!n.options.loader)return null;const o=Date.now()-e.updatedAt,l=n.options.staleTime??t().options.defaultStaleTime??0,s=n.options.gcTime??t().options.defaultGcTime??18e5;return d=Z(),u=d.firstChild,p=u.nextSibling.nextSibling,g=p.nextSibling.nextSibling,a(u,()=>Q(o)),a(p,()=>Q(l)),a(g,()=>Q(s)),i(()=>c(d,f(r().ageTicker(o>l)))),d;var d,u,p,g}var ee=l("<button type=button>➔");function te({to:e,params:t,search:r,router:n}){const o=j();return(l=ee()).$$click=i=>{i.stopPropagation(),n().navigate({to:e,params:t,search:r})},u(l,"title",`Navigate to ${e}`),i(()=>c(l,o().navigateButton)),l;var l}p(["click"]);var ie=l("<button><div>TANSTACK</div><div>TanStack Router v1"),re=l("<div><div>"),ne=l("<code> "),oe=l("<code>"),le=l("<div><div role=button><div>"),ae=l("<div>"),se=l('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),de=l("<div><span>masked"),ce=l("<div role=button><div>"),fe=l("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),ue=l("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),pe=l("<div>Loader Data"),ge=l("<div><div><span>Search Params</span></div><div>"),he=l("<span style=margin-left:0.5rem;>"),ve=l('<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">');function xe(e){const{className:t,...r}=e,n=j();return o=ie(),l=o.firstChild,a=l.nextSibling,x(o,g(r,{get class(){return f(n().logo,t?t():"")}}),!1,!0),i(e=>{var t=n().tanstackLogo,i=n().routerLogo;return t!==e.e&&c(l,e.e=t),i!==e.t&&c(a,e.t=i),e},{e:void 0,t:void 0}),o;var o,l,a}function me(e){return t=re(),r=t.firstChild,t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("width","100%"),a(t,()=>e.left,r),r.style.setProperty("flex-grow","1"),r.style.setProperty("min-width","0"),a(r,()=>e.children),a(t,()=>e.right,null),i(()=>c(t,e.class)),t;var t,r}function be({routerState:e,router:t,route:r,isRoot:n,activeId:l,setActiveId:p}){const g=j(),h=o(()=>e().pendingMatches||e().matches),v=o(()=>e().matches.find(e=>e.routeId===r.id)),x=o(()=>{var e,t;try{if(null==(e=v())?void 0:e.params){const e=null==(t=v())?void 0:t.params,i=r.path||y(r.id);if(i.startsWith("$")){const t=i.slice(1);if(e[t])return`(${e[t]})`}}return""}catch(i){return""}}),m=o(()=>{if(n)return;if(!r.path)return;const e=Object.assign({},...h().map(e=>e.params)),i=$({path:r.fullPath,params:e,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return i.isMissingParams?void 0:i.interpolatedPath});return C=le(),S=C.firstChild,F=S.firstChild,S.$$click=()=>{v()&&p(l()===r.id?"":r.id)},a(S,d(me,{get class(){return f(g().routesRow(!!v()))},get left(){return d(k,{get when(){return m()},children:e=>d(te,{get to(){return e()},router:t})})},get right(){return d(X,{get match(){return v()},router:t})},get children(){return[(t=ne(),o=t.firstChild,a(t,()=>n?b:r.path||y(r.id),o),i(()=>c(t,g().code)),t),(e=oe(),a(e,x),i(()=>c(e,g().routeParamInfo)),e)];var e,t,o}}),null),a(C,(w=s(()=>{var e;return!!(null==(e=r.children)?void 0:e.length)}),()=>{return w()?(o=ae(),a(o,()=>[...r.children].sort((e,t)=>e.rank-t.rank).map(i=>d(be,{routerState:e,router:t,route:i,activeId:l,setActiveId:p}))),i(()=>c(o,g().nestedRouteRow(!!n))),o):null;var o}),null),i(e=>{var t=`Open match details for ${r.id}`,i=f(g().routesRowContainer(r.id===l(),!!v())),n=f(g().matchIndicator(function(e,t){const i=e.find(e=>e.routeId===t.id);return i?U(i):"gray"}(h(),r)));return t!==e.e&&u(S,"aria-label",e.e=t),i!==e.t&&c(S,e.t=i),n!==e.a&&c(F,e.a=n),e},{e:void 0,t:void 0,a:void 0}),C;var w,C,S,F}const ye=function({...e}){const{isOpen:t=!0,setIsOpen:r,handleDragStart:n,router:l,routerState:p,shadowDOMTarget:y,...$}=e,{onCloseClick:k}=h(),w=j(),{className:C,style:S,...F}=$;v(l);const[z,M]=P("tanstackRouterDevtoolsShowMatches",!0),[B,O]=P("tanstackRouterDevtoolsActiveRouteId",""),E=o(()=>[...p().pendingMatches??[],...p().matches,...p().cachedMatches].find(e=>e.routeId===B()||e.id===B())),D=o(()=>Object.keys(p().location.search).length),I=o(()=>({...l(),state:p()})),G=o(()=>Object.fromEntries(function(e,t=[e=>e]){return e.map((e,t)=>[e,t]).sort(([e,i],[r,n])=>{for(const o of t){const t=o(e),i=o(r);if(void 0===t){if(void 0===i)continue;return 1}if(t!==i)return t>i?1:-1}return i-n}).map(([e])=>e)}(Object.keys(I()),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(e=>t=>t!==e)).map(e=>[e,I()[e]]).filter(e=>"function"!=typeof e[1]&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(e[0])))),T=o(()=>{var e;return null==(e=E())?void 0:e.loaderData}),A=o(()=>E()),L=o(()=>p().location.search);return(()=>{var e=se(),t=e.firstChild,o=t.firstChild,h=t.nextSibling,v=h.firstChild,y=v.nextSibling,$=y.firstChild,I=h.nextSibling,j=I.firstChild,P=j.firstChild;P.firstChild;var R,H,N,_,J,V,q,Y=P.nextSibling,W=Y.firstChild,Z=Y.nextSibling,Q=Z.firstChild,ee=Q.firstChild,ie=ee.nextSibling,re=Q.nextSibling,ne=Z.nextSibling;return x(e,g({get class(){return f(w().devtoolsPanel,"TanStackRouterDevtoolsPanel",C?C():"")},get style(){return S?S():""}},F),!1,!0),a(e,n?(R=ae(),m(R,"mousedown",n,!0),i(()=>c(R,w().dragHandle)),R):null,t),t.$$click=e=>{r&&r(!1),k(e)},a(v,d(xe,{"aria-hidden":!0,onClick:e=>{r&&r(!1),k(e)}})),a($,d(K,{label:"Router",value:G,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:e=>e.filter(e=>"function"!=typeof e.value())})),a(P,(H=s(()=>!!p().location.maskedLocation),()=>{return H()?(e=de(),t=e.firstChild,i(i=>{var r=w().maskedBadgeContainer,n=w().maskedBadge;return r!==i.e&&c(e,i.e=r),n!==i.t&&c(t,i.t=n),i},{e:void 0,t:void 0}),e):null;var e,t}),null),a(W,()=>p().location.pathname),a(Y,(N=s(()=>!!p().location.maskedLocation),()=>{return N()?(e=oe(),a(e,()=>{var e;return null==(e=p().location.maskedLocation)?void 0:e.pathname}),i(()=>c(e,w().maskedLocation)),e):null;var e}),null),ee.$$click=()=>{M(!1)},ie.$$click=()=>{M(!0)},a(ne,(_=s(()=>!z()),()=>{return _()?d(be,{routerState:p,router:l,get route(){return l().routeTree},isRoot:!0,activeId:B,setActiveId:O}):(e=ae(),a(e,()=>{var e,t;return null==(t=(null==(e=p().pendingMatches)?void 0:e.length)?p().pendingMatches:p().matches)?void 0:t.map((e,t)=>{return r=ce(),n=r.firstChild,r.$$click=()=>O(B()===e.id?"":e.id),a(r,d(me,{get left(){return d(te,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:l})},get right(){return d(X,{match:e,router:l})},get children(){var t=oe();return a(t,()=>`${e.routeId===b?b:e.pathname}`),i(()=>c(t,w().matchID)),t}}),null),i(t=>{var i=`Open match details for ${e.id}`,o=f(w().matchRow(e===E())),l=f(w().matchIndicator(U(e)));return i!==t.e&&u(r,"aria-label",t.e=i),o!==t.t&&c(r,t.t=o),l!==t.a&&c(n,t.a=l),t},{e:void 0,t:void 0,a:void 0}),r;var r,n})}),e);var e})),a(I,(J=s(()=>!!p().cachedMatches.length),()=>{return J()?(e=fe(),t=e.firstChild,r=t.firstChild.nextSibling,n=t.nextSibling,a(n,()=>p().cachedMatches.map(e=>{return t=ce(),r=t.firstChild,t.$$click=()=>O(B()===e.id?"":e.id),a(t,d(me,{get left(){return d(te,{get to(){return e.pathname},get params(){return e.params},get search(){return e.search},router:l})},get right(){return d(X,{match:e,router:l})},get children(){var t=oe();return a(t,()=>`${e.id}`),i(()=>c(t,w().matchID)),t}}),null),i(i=>{var n=`Open match details for ${e.id}`,o=f(w().matchRow(e===E())),l=f(w().matchIndicator(U(e)));return n!==i.e&&u(t,"aria-label",i.e=n),o!==i.t&&c(t,i.t=o),l!==i.a&&c(r,i.a=l),i},{e:void 0,t:void 0,a:void 0}),t;var t,r})),i(i=>{var n=w().cachedMatchesContainer,o=w().detailsHeader,l=w().detailsHeaderInfo;return n!==i.e&&c(e,i.e=n),o!==i.t&&c(t,i.t=o),l!==i.a&&c(r,i.a=l),i},{e:void 0,t:void 0,a:void 0}),e):null;var e,t,r,n}),null),a(e,(V=s(()=>{var e;return!(!E()||!(null==(e=E())?void 0:e.status))}),()=>{return V()?(o=ue(),l=o.firstChild,f=l.nextSibling,u=f.firstChild,g=u.firstChild,h=g.firstChild,v=g.nextSibling,x=v.firstChild.nextSibling,m=x.firstChild,b=v.nextSibling,y=b.firstChild.nextSibling,$=b.nextSibling,k=$.firstChild.nextSibling,C=f.nextSibling,S=C.nextSibling,a(h,(e=s(()=>{var e,t;return!("success"!==(null==(e=E())?void 0:e.status)||!(null==(t=E())?void 0:t.isFetching))}),()=>{var t;return e()?"fetching":null==(t=E())?void 0:t.status})),a(m,()=>{var e;return null==(e=E())?void 0:e.id}),a(y,(t=s(()=>{var e;return!!(null==(e=p().pendingMatches)?void 0:e.find(e=>{var t;return e.id===(null==(t=E())?void 0:t.id)}))}),()=>t()?"Pending":p().matches.find(e=>{var t;return e.id===(null==(t=E())?void 0:t.id)})?"Active":"Cached")),a(k,(r=s(()=>{var e;return!!(null==(e=E())?void 0:e.updatedAt)}),()=>{var e;return r()?new Date(null==(e=E())?void 0:e.updatedAt).toLocaleTimeString():"N/A"})),a(o,(n=s(()=>!!T()),()=>{return n()?[(t=pe(),i(()=>c(t,w().detailsHeader)),t),(e=ae(),a(e,d(K,{label:"loaderData",value:T,defaultExpanded:{}})),i(()=>c(e,w().detailsContent)),e)]:null;var e,t}),C),a(S,d(K,{label:"Match",value:A,defaultExpanded:{}})),i(e=>{var t,i,r=w().thirdContainer,n=w().detailsHeader,a=w().matchDetails,s=w().matchStatus(null==(t=E())?void 0:t.status,null==(i=E())?void 0:i.isFetching),d=w().matchDetailsInfoLabel,f=w().matchDetailsInfo,p=w().matchDetailsInfoLabel,h=w().matchDetailsInfo,m=w().matchDetailsInfoLabel,F=w().matchDetailsInfo,z=w().detailsHeader,U=w().detailsContent;return r!==e.e&&c(o,e.e=r),n!==e.t&&c(l,e.t=n),a!==e.a&&c(u,e.a=a),s!==e.o&&c(g,e.o=s),d!==e.i&&c(v,e.i=d),f!==e.n&&c(x,e.n=f),p!==e.s&&c(b,e.s=p),h!==e.h&&c(y,e.h=h),m!==e.r&&c($,e.r=m),F!==e.d&&c(k,e.d=F),z!==e.l&&c(C,e.l=z),U!==e.u&&c(S,e.u=U),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),o):null;var e,t,r,n,o,l,f,u,g,h,v,x,m,b,y,$,k,C,S}),null),a(e,(q=s(()=>!!D()),()=>q()?(()=>{var e=ge(),t=e.firstChild;t.firstChild;var r,n=t.nextSibling;return a(t,"undefined"!=typeof navigator?(r=he(),a(r,d($e,{getValue:()=>{const e=p().location.search;return JSON.stringify(e)}})),r):null,null),a(n,d(K,{value:L,get defaultExpanded(){return Object.keys(p().location.search).reduce((e,t)=>(e[t]={},e),{})}})),i(i=>{var r=w().fourthContainer,o=w().detailsHeader,l=w().detailsContent;return r!==i.e&&c(e,i.e=r),o!==i.t&&c(t,i.t=o),l!==i.a&&c(n,i.a=l),i},{e:void 0,t:void 0,a:void 0}),e})():null),null),i(e=>{var i=w().panelCloseBtn,r=w().panelCloseBtnIcon,n=w().firstContainer,l=w().row,a=w().routerExplorerContainer,s=w().routerExplorer,d=w().secondContainer,p=w().matchesContainer,g=w().detailsHeader,x=w().detailsContent,m=w().detailsHeader,b=w().routeMatchesToggle,k=!z(),C=f(w().routeMatchesToggleBtn(!z(),!0)),S=z(),F=f(w().routeMatchesToggleBtn(!!z(),!1)),U=w().detailsHeaderInfo,M=f(w().routesContainer);return i!==e.e&&c(t,e.e=i),r!==e.t&&u(o,"class",e.t=r),n!==e.a&&c(h,e.a=n),l!==e.o&&c(v,e.o=l),a!==e.i&&c(y,e.i=a),s!==e.n&&c($,e.n=s),d!==e.s&&c(I,e.s=d),p!==e.h&&c(j,e.h=p),g!==e.r&&c(P,e.r=g),x!==e.d&&c(Y,e.d=x),m!==e.l&&c(Z,e.l=m),b!==e.u&&c(Q,e.u=b),k!==e.c&&(ee.disabled=e.c=k),C!==e.w&&c(ee,e.w=C),S!==e.m&&(ie.disabled=e.m=S),F!==e.f&&c(ie,e.f=F),U!==e.y&&c(re,e.y=U),M!==e.g&&c(ne,e.g=M),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0}),e})()};function $e({getValue:t}){const[r,n]=e(!1);let o=null;const l=async()=>{var e;if("undefined"!=typeof navigator&&(null==(e=navigator.clipboard)?void 0:e.writeText))try{const e=t();await navigator.clipboard.writeText(e),n(!0),o&&clearTimeout(o),o=setTimeout(()=>n(!1),2500)}catch(i){console.error("TanStack Router Devtools: Failed to copy",i)}else console.warn("TanStack Router Devtools: Clipboard API unavailable")};return w(()=>{o&&clearTimeout(o)}),(s=ve()).$$click=l,a(s,()=>r()?"✅":"📋"),i(()=>u(s,"title",r()?"Copied!":"Copy")),s;var s}p(["click","mousedown"]);var ke=l('<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">');function we(){const e=C();return t=ke(),i=t.firstChild.firstChild,r=i.nextSibling,n=r.nextSibling,o=n.firstChild,l=n.nextSibling,a=l.firstChild,s=l.nextSibling,d=s.nextSibling,c=d.firstChild,f=d.nextSibling,p=f.firstChild,g=f.nextSibling,h=g.nextSibling,v=h.firstChild,x=h.nextSibling,m=x.firstChild,b=x.nextSibling,y=b.nextSibling,$=y.firstChild,k=y.nextSibling,w=k.firstChild,S=k.nextSibling,F=S.nextSibling,z=F.firstChild,U=F.nextSibling,M=U.firstChild,B=U.nextSibling,O=B.nextSibling,E=O.firstChild,D=O.nextSibling,I=D.firstChild,G=D.nextSibling,T=G.nextSibling,A=T.firstChild,j=T.nextSibling,P=j.firstChild,L=j.nextSibling,R=L.firstChild.nextSibling,H=R.nextSibling,N=L.nextSibling,_=N.firstChild,J=N.nextSibling,V=J.firstChild,q=J.nextSibling,K=q.firstChild,Y=K.nextSibling,W=Y.nextSibling,Z=W.nextSibling,Q=Z.nextSibling,X=Q.nextSibling,ee=X.nextSibling,te=ee.nextSibling,ie=te.nextSibling,re=ie.nextSibling,ne=re.nextSibling,oe=ne.nextSibling,le=oe.nextSibling,ae=le.nextSibling,se=q.nextSibling,de=se.firstChild,ce=se.nextSibling,fe=ce.firstChild,ue=ce.nextSibling,pe=ue.nextSibling,ge=pe.nextSibling,he=ge.firstChild,ve=ge.nextSibling,xe=ve.firstChild,me=ve.nextSibling,be=me.firstChild.firstChild,ye=be.nextSibling,$e=ye.nextSibling,we=$e.nextSibling,Ce=we.nextSibling,Se=Ce.nextSibling,Fe=Se.nextSibling,ze=Fe.nextSibling,Ue=ze.nextSibling,Me=Ue.nextSibling,Be=Me.nextSibling,Oe=Be.nextSibling,Ee=Oe.nextSibling,De=Ee.nextSibling,Ie=De.nextSibling,Ge=Ie.nextSibling,Te=Ge.nextSibling,Ae=Te.nextSibling,u(i,"id",`a-${e}`),u(r,"fill",`url(#a-${e})`),u(o,"id",`b-${e}`),u(l,"id",`c-${e}`),u(a,"filter",`url(#b-${e})`),u(s,"mask",`url(#c-${e})`),u(c,"id",`d-${e}`),u(f,"id",`e-${e}`),u(p,"filter",`url(#d-${e})`),u(g,"mask",`url(#e-${e})`),u(v,"id",`f-${e}`),u(x,"id",`g-${e}`),u(m,"filter",`url(#f-${e})`),u(b,"mask",`url(#g-${e})`),u($,"id",`h-${e}`),u(k,"id",`i-${e}`),u(w,"filter",`url(#h-${e})`),u(S,"mask",`url(#i-${e})`),u(z,"id",`j-${e}`),u(U,"id",`k-${e}`),u(M,"filter",`url(#j-${e})`),u(B,"mask",`url(#k-${e})`),u(E,"id",`l-${e}`),u(D,"id",`m-${e}`),u(I,"filter",`url(#l-${e})`),u(G,"mask",`url(#m-${e})`),u(A,"id",`n-${e}`),u(j,"id",`o-${e}`),u(P,"filter",`url(#n-${e})`),u(L,"mask",`url(#o-${e})`),u(R,"id",`p-${e}`),u(H,"fill",`url(#p-${e})`),u(_,"id",`q-${e}`),u(J,"id",`r-${e}`),u(V,"filter",`url(#q-${e})`),u(q,"mask",`url(#r-${e})`),u(K,"id",`s-${e}`),u(Y,"fill",`url(#s-${e})`),u(W,"id",`t-${e}`),u(Z,"fill",`url(#t-${e})`),u(Q,"id",`u-${e}`),u(X,"fill",`url(#u-${e})`),u(ee,"id",`v-${e}`),u(te,"fill",`url(#v-${e})`),u(ie,"id",`w-${e}`),u(re,"fill",`url(#w-${e})`),u(ne,"id",`x-${e}`),u(oe,"fill",`url(#x-${e})`),u(le,"id",`y-${e}`),u(ae,"fill",`url(#y-${e})`),u(de,"id",`z-${e}`),u(ce,"id",`A-${e}`),u(fe,"filter",`url(#z-${e})`),u(ue,"id",`B-${e}`),u(pe,"fill",`url(#B-${e})`),u(pe,"mask",`url(#A-${e})`),u(he,"id",`C-${e}`),u(ve,"id",`D-${e}`),u(xe,"filter",`url(#C-${e})`),u(me,"mask",`url(#D-${e})`),u(be,"id",`E-${e}`),u(ye,"fill",`url(#E-${e})`),u($e,"id",`F-${e}`),u(we,"stroke",`url(#F-${e})`),u(Ce,"id",`G-${e}`),u(Se,"stroke",`url(#G-${e})`),u(Fe,"id",`H-${e}`),u(ze,"stroke",`url(#H-${e})`),u(Ue,"id",`I-${e}`),u(Me,"stroke",`url(#I-${e})`),u(Be,"id",`J-${e}`),u(Oe,"stroke",`url(#J-${e})`),u(Ee,"id",`K-${e}`),u(De,"stroke",`url(#K-${e})`),u(Ie,"id",`L-${e}`),u(Ge,"stroke",`url(#L-${e})`),u(Te,"id",`M-${e}`),u(Ae,"stroke",`url(#M-${e})`),t;var t,i,r,n,o,l,a,s,d,c,f,p,g,h,v,x,m,b,y,$,k,w,S,F,z,U,M,B,O,E,D,I,G,T,A,j,P,L,R,H,N,_,J,V,q,K,Y,W,Z,Q,X,ee,te,ie,re,ne,oe,le,ae,se,de,ce,fe,ue,pe,ge,he,ve,xe,me,be,ye,$e,we,Ce,Se,Fe,ze,Ue,Me,Be,Oe,Ee,De,Ie,Ge,Te,Ae}var Ce=l("<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router");function Se({initialIsOpen:r,panelProps:n={},closeButtonProps:l={},toggleButtonProps:s={},position:u="bottom-left",containerElement:p="footer",router:h,routerState:v,shadowDOMTarget:m}){const[b,y]=e();let $;const[k,w]=P("tanstackRouterDevtoolsOpen",r),[C,U]=P("tanstackRouterDevtoolsHeight",null),[M,B]=e(!1),[O,E]=e(!1),D=function(){const[r,n]=e(!1);return(z?t:i)(()=>{n(!0)}),r}(),I=j();k(),t(()=>{B(k()??!1)}),t(()=>{var e,t,i;if(M()){const i=null==(t=null==(e=b())?void 0:e.parentElement)?void 0:t.style.paddingBottom,r=()=>{var e;const t=$.getBoundingClientRect().height;(null==(e=b())?void 0:e.parentElement)&&y(e=>((null==e?void 0:e.parentElement)&&(e.parentElement.style.paddingBottom=`${t}px`),e))};if(r(),"undefined"!=typeof window)return window.addEventListener("resize",r),()=>{var e;window.removeEventListener("resize",r),(null==(e=b())?void 0:e.parentElement)&&"string"==typeof i&&y(e=>(e.parentElement.style.paddingBottom=i,e))}}else(null==(i=b())?void 0:i.parentElement)&&y(e=>((null==e?void 0:e.parentElement)&&e.parentElement.removeAttribute("style"),e))}),t(()=>{if(b()){const e=b(),t=getComputedStyle(e).fontSize;null==e||e.style.setProperty("--tsrd-font-size",t)}});const{style:G={},...T}=n,{style:A={},onClick:L,...R}=l,{onClick:H,class:N,..._}=s;if(!D())return null;const J=o(()=>C()??500),V=o(()=>f(I().devtoolsPanelContainer,I().devtoolsPanelContainerVisibility(!!k()),I().devtoolsPanelContainerResizing(O),I().devtoolsPanelContainerAnimation(M(),J()+16))),q=o(()=>({height:`${J()}px`,...G||{}})),K=o(()=>f(I().mainCloseBtn,I().mainCloseBtnPosition(u),I().mainCloseBtnAnimation(!!k()),N));return d(F,{component:p,ref:y,class:"TanStackRouterDevtools",get children(){return[d(S.Provider,{value:{onCloseClick:L??(()=>{})},get children(){return d(ye,g({ref(e){"function"==typeof $?$(e):$=e}},T,{router:h,routerState:v,className:V,style:q,get isOpen(){return M()},setIsOpen:w,handleDragStart:e=>((e,t)=>{if(0!==t.button)return;E(!0);const i=(null==e?void 0:e.getBoundingClientRect().height)??0,r=t.pageY,n=e=>{const t=r-e.pageY,n=i+t;U(n),w(!(n<70))},o=()=>{E(!1),document.removeEventListener("mousemove",n),document.removeEventListener("mouseUp",o)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",o)})($,e),shadowDOMTarget:m}))}}),(e=Ce(),t=e.firstChild,r=t.firstChild,n=r.nextSibling,o=t.nextSibling,l=o.nextSibling,x(e,g(_,{"aria-label":"Open TanStack Router Devtools",onClick:e=>{w(!0),H&&H(e)},get class(){return K()}}),!1,!0),a(r,d(we,{})),a(n,d(we,{})),i(e=>{var i=I().mainCloseBtnIconContainer,a=I().mainCloseBtnIconOuter,s=I().mainCloseBtnIconInner,d=I().mainCloseBtnDivider,f=I().routerLogoCloseButton;return i!==e.e&&c(t,e.e=i),a!==e.t&&c(r,e.t=a),s!==e.a&&c(n,e.a=s),d!==e.o&&c(o,e.o=d),f!==e.i&&c(l,e.i=f),e},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),e)];var e,t,r,n,o,l}})}export{Se as FloatingTanStackRouterDevtools,Se as default};
