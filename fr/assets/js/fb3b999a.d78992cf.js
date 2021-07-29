(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var o=n(3),r=n(8),a=(n(0),n(154)),s={title:"Outils de d\xe9veloppement",sidebar_label:"Outils de d\xe9veloppement"},c={unversionedId:"guides/dev-tools",id:"guides/dev-tools",isDocsHomePage:!1,title:"Outils de d\xe9veloppement",description:"Recoil a des fonctionnalit\xe9s pour vous permettre d'observer et de mettre \xe0 jour les changements d'\xe9tat.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/guides/dev-tools.md",slug:"/guides/dev-tools",permalink:"/fr/docs/guides/dev-tools",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/guides/dev-tools.md",version:"current",sidebar_label:"Outils de d\xe9veloppement",sidebar:"docs",previous:{title:"Test",permalink:"/fr/docs/guides/testing"},next:{title:"<RecoilRoot ...props />",permalink:"/fr/docs/api-reference/core/RecoilRoot"}},i=[{value:"<em>NOTE IMPORTANTE</em>",id:"note-importante",children:[]},{value:"Observation de tous les changements d&#39;\xe9tat",id:"observation-de-tous-les-changements-d\xe9tat",children:[]},{value:"Observation des changements d&#39;\xe9tat sur demande",id:"observation-des-changements-d\xe9tat-sur-demande",children:[]},{value:"Voyage dans le temps",id:"voyage-dans-le-temps",children:[]}],l={toc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Recoil a des fonctionnalit\xe9s pour vous permettre d'observer et de mettre \xe0 jour les changements d'\xe9tat."),Object(a.b)("hr",null),Object(a.b)("h2",{id:"note-importante"},Object(a.b)("em",{parentName:"h2"},"NOTE IMPORTANTE")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Cette API est actuellement en cours de d\xe9veloppement et changera. Merci de restez \xe0 l'\xe9coute..."))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"observation-de-tous-les-changements-d\xe9tat"},"Observation de tous les changements d'\xe9tat"),Object(a.b)("p",null,"Vous pouvez utiliser un hook tel que ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilSnapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilSnapshot()")))," ou ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransactionObserver"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilTransactionObserver_UNSTABLE()")))," pour vous abonner aux changements d'\xe9tat et obtenir un ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"Snapshot")))," (instantan\xe9) du nouvel \xe9tat."),Object(a.b)("p",null,"Une fois que vous avez un ",Object(a.b)("inlineCode",{parentName:"p"},"instantan\xe9"),", vous pouvez utiliser des m\xe9thodes telles que ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getLoadable()")),", ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getPromise()"))," et ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getInfo_UNSTABLE()"))," pour inspecter l'\xe9tat et utiliser ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getNodes_UNSTABLE()"))," pour it\xe9rer sur l'ensemble des atomes connus."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver(): React.Node {\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    console.debug('Les atomes suivants on \xe9t\xe9 modifi\xe9s:');\n    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {\n      console.debug(node.key, snapshot.getLoadable(node));\n    }\n  }, [snapshot]);\n\n  return null;\n}\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")),Object(a.b)("h2",{id:"observation-des-changements-d\xe9tat-sur-demande"},"Observation des changements d'\xe9tat sur demande"),Object(a.b)("p",null,"Ou, vous pouvez utiliser le hook ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()")))," pour obtenir un ","[",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"Snapshot")),"]","(/ docs/api-reference/core/Snapshot) (instantan\xe9) \xe0 la demande."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function DebugButton(): React.Node {\n  const onClick = useRecoilCallback(({snapshot}) => async () => {\n    console.debug('Atom values:');\n    for (const node of snapshot.getNodes_UNSTABLE()) {\n      const value = await snapshot.getPromise(node);\n      console.debug(node.key, value);\n    }\n  }, []);\n\n  return <button onClick={onClick}>Dump State</button>\n}\n")),Object(a.b)("h2",{id:"voyage-dans-le-temps"},"Voyage dans le temps"),Object(a.b)("p",null,"Le hook ",Object(a.b)("a",{parentName:"p",href:"/docs/api-reference/core/useGotoRecoilSnapshot"},Object(a.b)("strong",{parentName:"a"},Object(a.b)("inlineCode",{parentName:"strong"},"useGotoRecoilSnapshot()")))," peut \xeatre utilis\xe9 pour mettre \xe0 jour l'int\xe9gralit\xe9 de l'\xe9tat Recoil pour qu'il corresponde \xe0 l'instantan\xe9 fourni. Cet exemple conserve un historique des changements d'\xe9tat avec la possibilit\xe9 de revenir en arri\xe8re et de restaurer l'\xe9tat global pr\xe9c\xe9dent."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Snapshot")," fournit \xe9galement une m\xe9thode ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("inlineCode",{parentName:"strong"},"getID ()")),". Cela peut \xeatre utilis\xe9, par exemple, pour vous aider \xe0 d\xe9terminer si vous revenez \xe0 un \xe9tat ant\xe9rieur connu pour \xe9viter de mettre \xe0 jour votre historique des instantan\xe9s."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-jsx"},"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    if (snapshots.every(s => s.getID() !== snapshot.getID())) {\n      setSnapshots([...snapshots, snapshot]);\n    }\n  }, [snapshot]);\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>\n            Restore\n          </button>\n        </li>\n      ))}\n    </ol>\n  );\n}\n")))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||b[d]||a;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<a;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);