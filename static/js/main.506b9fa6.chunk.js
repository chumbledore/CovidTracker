(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{21:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),o=n.n(a),s=(n(21),n(3)),l=n(0);function i(){return Object(l.jsxs)("header",{className:"text-center bg-gradient-to-r from-green-400 via-blue-700 to-green-700 text-white p-4 mb-4",children:[Object(l.jsx)("div",{className:"text-3xl md:text-5xl font-bold mb-3",children:"Covid-19 Tracker"}),Object(l.jsxs)("p",{children:["API courtesy of ",Object(l.jsx)("a",{className:"text-blue-300",target:"_blank",rel:"noopener noreferrer",href:"https://covid19api.com",children:"covid19api.com"})]})]})}var d=n(15),b=n.n(d),j=n(16),u=n.n(j);var x=function(e){var t=e.title,n=e.covidData;return Object(l.jsxs)("div",{className:"bg-green-300 h-32 rounded-xl shadow-lg",children:[Object(l.jsxs)("div",{className:"font-bold text-xl mb-6 underline",children:[t,":"]}),Object(l.jsx)("div",{className:"text-center font-bold text-3xl",children:u()(n).format("0,0")})]})};var f=function(e){var t=e.data,n=e.title,c=t.Date;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("span",{className:"text-center text-5xl mb-2",children:n}),Object(l.jsx)(b.a,{format:"MM/DD/YYYY",date:c,className:"text-center text-2xl mb-4"}),Object(l.jsxs)("div",{className:"container max-w-3xl text-center flex flex-grow mb-auto grid grid-cols-1 md:grid-cols-2 gap-4",children:[Object(l.jsx)(x,{title:"New Confirmed Cases",covidData:t.NewConfirmed}),Object(l.jsx)(x,{title:"Total Confirmed Cases",covidData:t.TotalConfirmed}),Object(l.jsx)(x,{title:"New Deaths",covidData:t.NewDeaths}),Object(l.jsx)(x,{title:"Total Deaths",covidData:t.TotalDeaths}),Object(l.jsx)(x,{title:"Newly Recovered",covidData:t.NewRecovered}),Object(l.jsx)(x,{title:"Total Recovered",covidData:t.TotalRecovered})]})]})};var h=function(){return Object(l.jsx)("footer",{className:"border-t-2 mt-16 border-gray-400",children:Object(l.jsx)("div",{className:"p-4 text-center text-xs text-gray-600",children:"UI by Dakota Chumbley using TailwindCSS and React/Typescript"})})},v=n(5),O=n.n(v);O.a.defaults.baseURL="https://api.covid19api.com/";var m=function(e){return e.data},g=function(e){return O.a.get(e).then(m)},p={CovidInfo:{list:function(){return g("/summary")}}};var w=function(e){var t=e.showInfo,n=e.toggleInfoBool,c=e.disabled;return Object(l.jsx)("div",{className:"text-center mt-8",children:Object(l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-400 mb-4 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",onClick:function(){return t()},disabled:c,children:n?"Show Global Data":"Show Country Data"})})};var C=function(e){var t=e.selectorInfo,n=e.selectCountry,c=e.disabled;return Object(l.jsx)("div",{className:"text-center mt-4",children:Object(l.jsxs)("div",{className:"inline-block relative w-64",children:[Object(l.jsxs)("select",{onChange:function(e){return n(e.target.value)},className:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",children:[Object(l.jsx)("option",{disabled:c,children:"Select Country"}),t.map((function(e){return Object(l.jsx)("option",{value:e.ID,children:e.Country})}))]}),Object(l.jsx)("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:Object(l.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})})};var N=function(){return Object(l.jsx)("div",{className:"flex h-screen justify-center",children:"Loading app..."})};var y=function(e){var t=e.fallBackOnClick;return Object(l.jsx)("button",{className:"bg-blue-500 hover:bg-blue-400 mb-4 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded",onClick:t,children:"Try again!"})};var D=function(e){var t=e.fallBackOnClick;return Object(l.jsx)("div",{className:"flex flex-grow h-screen justify-center items-center text-3xl font-bold",children:Object(l.jsxs)("div",{className:"grid grid-cols-1 space-y-5",children:[Object(l.jsx)("span",{children:"Something went wrong. Please try again!"}),Object(l.jsx)(y,{fallBackOnClick:t})]})})};var k=function(){var e=Object(c.useState)(!0),t=Object(s.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(),o=Object(s.a)(a,2),d=o[0],b=o[1],j=Object(c.useState)(),u=Object(s.a)(j,2),x=u[0],v=u[1],O=Object(c.useState)(!1),m=Object(s.a)(O,2),g=m[0],y=m[1],k=Object(c.useState)(!0),I=Object(s.a)(k,2),S=I[0],T=I[1];return Object(c.useEffect)((function(){p.CovidInfo.list().then((function(e){b(e),r(!1)}))}),[]),n?Object(l.jsx)(N,{}):void 0===d?Object(l.jsx)(D,{fallBackOnClick:function(){p.CovidInfo.list().then((function(e){b(e),r(!1)}))}}):Object(l.jsxs)("div",{className:"flex flex-col h-screen",children:[Object(l.jsx)(i,{}),Object(l.jsx)(C,{selectCountry:function(e){v(d.Countries.find((function(t){return t.ID===e}))),T(!1)},selectorInfo:d.Countries,disabled:!S}),Object(l.jsx)(w,{showInfo:function(){y(!g)},toggleInfoBool:g,disabled:S}),g?Object(l.jsx)(f,{title:x.Country,data:x}):Object(l.jsx)(f,{title:"Global Covid Data",data:d.Global}),Object(l.jsx)(h,{})]})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),I()}},[[43,1,2]]]);
//# sourceMappingURL=main.506b9fa6.chunk.js.map