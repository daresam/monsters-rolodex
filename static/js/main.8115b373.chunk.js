(window["webpackJsonpmonsters-rolodex"]=window["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(18)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),c=t.n(o),s=(t(13),t(3)),l=t(4),i=t(6),u=t(5),h=t(7),m=(t(14),t(15),t(16),function(e){var n=e.monster;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(n.id,"?set=set2&size=180x180"),alt:"Monster"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return r.a.createElement(m,{key:e.id,monster:e})}))},f=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})}),p=function(e){function n(){var e,t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(i.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={monsters:[],searchField:""},t.handleChange=function(e){t.setState({searchField:e.target.value})},t}return Object(h.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(n){return e.setState({monsters:n})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Ronolodex"),r.a.createElement(f,{placeholder:"Search Monster",handleChange:this.handleChange}),r.a.createElement(d,{monsters:a}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8115b373.chunk.js.map