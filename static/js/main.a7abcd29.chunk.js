(this["webpackJsonppeople-index"]=this["webpackJsonppeople-index"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),l=(n(14),n(7)),i=n(3),s=n(4),u=n(6),h=n(5),p=n(8),m=(n(15),function(e){var t=e.person;return r.a.createElement("div",{className:"card-container"},r.a.createElement("div",null,r.a.createElement("img",{src:t.avatar,alt:"person"})),r.a.createElement("h2",null,t.name),r.a.createElement("p",null,t.email))}),d=(n(16),function(e){var t=e.people;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(m,{key:e.id,person:e})})))}),f=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),v=(n(18),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={people:[],searchField:""},e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){var n=t.map((function(e){return Object(l.a)({},e,{avatar:"https://robohash.org/".concat(e.id,"?set=set5&size=180x180")})}));e.setState({people:n})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.people,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"People List"),r.a.createElement(f,{placeholder:"search people",handleChange:this.onSearchChange}),r.a.createElement(d,{people:a}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a7abcd29.chunk.js.map