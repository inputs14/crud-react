(this["webpackJsonpcrud-react"]=this["webpackJsonpcrud-react"]||[]).push([[0],{33:function(e,t,a){e.exports=a(53)},38:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),s=(a(38),a(3)),l=a(4),i=a(6),u=a(5),p=a(7),m=a(12),d=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light"},r.a.createElement("h2",{className:"navbar-brand"},"React - CRUD"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/crud-react/"},r.a.createElement("h4",{className:"nav-link"},"Posts"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/crud-react/add"},r.a.createElement("h4",{className:"nav-link"},"Add"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"/crud-react/"},r.a.createElement("h4",{className:"nav-link"},"Sort"))))))}}]),t}(n.Component),b=a(25),h=a(27),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).liked=0,a.disliked=0,a.displayTime=function(e){return""===e.updatedTime?"Posted at "+e.postedTime:"Updated at "+e.updatedTime},a.goDislike=function(){0===a.disliked?(a.disliked=1,a.props.onDislike(1),a.liked&&(a.liked=0,a.props.onLike(-1))):(a.disliked=0,a.props.onDislike(-1))},a.goLike=function(){0===a.liked?(a.liked=1,a.props.onLike(1),a.disliked&&(a.disliked=0,a.props.onDislike(-1))):(a.liked=0,a.props.onLike(-1))},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.post;return r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("div",{className:"card border-primary mb-3"},r.a.createElement("div",{className:"card-header text-center"},e.name," - ",this.displayTime(e)),r.a.createElement("div",{className:"card-body text-primary"},r.a.createElement("h5",{className:"card-title"},e.postHeader),r.a.createElement("p",{className:"card-text"},e.post)),r.a.createElement("div",{className:"card-footer bg-transparent border-primary text-left"},r.a.createElement("button",{type:"button",onClick:this.goLike,className:"btn btn-success"},r.a.createElement(b.a,{icon:h.b}),"\xa0",e.likes),r.a.createElement("button",{type:"button",onClick:this.goDislike,className:"btn btn-danger"},r.a.createElement(b.a,{icon:h.a}),"\xa0",e.dislikes),r.a.createElement("div",{className:"float-right"},r.a.createElement(m.b,{to:"/crud-react/post/edit/"+e.id},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Edit")),r.a.createElement("button",{type:"button",onClick:this.props.onDelete,className:"btn btn-danger"},"Delete")))))}}]),t}(n.Component),f=a(14),y="ADDPOST",O="DELPOST",E="UPDATEPOST",j="LIKE_CHANGE",k="DISLIKE_CHANGE",g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).deletePost=function(e){a.props.dispatch({type:O,payload:{postId:e}})},a.handleLike=function(e,t){a.props.dispatch({type:j,payload:{post:e,value:t}})},a.handleDislike=function(e,t){a.props.dispatch({type:k,payload:{post:e,value:t}})},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row justify-content-center"},this.props.posts.map((function(t){return r.a.createElement(v,{key:t.id,post:t,onDelete:function(){return e.deletePost(t.id)},onLike:function(a){return e.handleLike(t,a)},onDislike:function(a){return e.handleDislike(t,a)}})})))}}]),t}(n.Component);var N=Object(f.b)((function(e){return{posts:e.crud.posts}}))(g),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N,null))}}]),t}(n.Component),T=a(21);function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){a.setState({value:e})},a.state={value:e.value},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;console.log(this.props);var t=D({},this.props),a=t.name,n=t.labelText,c=t.value;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:a,className:"col-sm-2 col-form-label"},n),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{name:a,className:"form-control",id:a,placeholder:n,value:c,onChange:function(t){return e.handleInput(t.target.value)}})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){a.setState({value:e})},a.state={value:e.value},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=D({},this.props),a=t.name,n=t.labelText,c=t.value;return r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:a,className:"col-sm-2 col-form-label"},n),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("textarea",{rows:"5",cols:"50",name:a,className:"form-control",id:a,placeholder:n,value:c,onChange:function(t){return e.handleInput(t.target.value)}})))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).updatePost=function(e){},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.match.params.id,a=this.props.posts.find((function(e){return e.id==t}));return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement(x,{name:"username",labelText:"Your Username",inputType:"text",value:a.name}),r.a.createElement(x,{name:"postHeader",labelText:"Header of your post",inputType:"text",value:a.postHeader}),r.a.createElement(C,{name:"postContent",labelText:"Post Content",inputType:"textarea",value:a.post}),r.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:function(){return e.updatePost(a.id)}},"Update"),r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"reset")))}}]),t}(n.Component);var A=Object(f.b)((function(e){return{posts:e.crud.posts}}))(S),H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).publishPost=function(){},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",null,r.a.createElement(x,{name:"username",labelText:"Your Username",inputType:"text"}),r.a.createElement(x,{name:"postHeader",labelText:"Header of your post",inputType:"text"}),r.a.createElement(C,{name:"postContent",labelText:"Post Content",inputType:"textarea"}),r.a.createElement("button",{type:"submit",onClick:function(){return e.publishPost},className:"btn btn-success"},"Add"),r.a.createElement("button",{type:"submit",className:"btn btn-secondary"},"clear")))}}]),t}(n.Component);var I=Object(f.b)((function(e){return{posts:e.crud.posts}}))(H),L=(a(47),a(48),a(15));a(49),a(50);var U=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/crud-react/posts",component:w}),r.a.createElement(L.b,{path:"/crud-react/add",component:I}),r.a.createElement(L.b,{path:"/crud-react/post/edit/:id",component:A}),r.a.createElement(L.b,{path:"/crud-react/",exact:!0,component:w}),r.a.createElement(L.a,{to:"/crud-react/"})))},M=a(17),B=a(29);function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){Object(T.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var J={posts:[{id:1,name:"Santhosh",postedTime:"12/27/2019, 4:10:39 AM",updatedTime:"",post:"Hi This is my first post",postHeader:"Introduction post",likes:0,dislikes:0},{id:2,name:"Santhosh",postedTime:"12/27/2019, 4:10:39 AM",updatedTime:"",post:"Hola Amigos, This is my second post",postHeader:"Second post",likes:0,dislikes:0},{id:3,name:"Santhosh",postedTime:"12/27/2019, 4:10:39 AM",updatedTime:"",post:"Standing still is the fastest way of moving backwards, in a rapidly changing world",postHeader:"Cool post",likes:0,dislikes:0},{id:4,name:"Santhosh",postedTime:"12/27/2019, 4:10:39 AM",updatedTime:"",post:"Vanity cards are always interest one But this is not it.",postHeader:"Vanity cards?",likes:0,dislikes:0}]};var K=Object(M.b)({crud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return e;case O:var a=e.posts.filter((function(e){return e.id!==t.payload.postId}));return G({},e,{posts:a});case E:return e;case j:var n=(a=Object(B.a)(e.posts)).indexOf(t.payload.post);return a[n].likes=a[n].likes+t.payload.value,G({},e,{posts:a});case k:n=(a=Object(B.a)(e.posts)).indexOf(t.payload.post);return a[n].dislikes=a[n].dislikes+t.payload.value,G({},e,{posts:a});default:return e}}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=Object(M.c)(K);o.a.render(r.a.createElement(m.a,null,r.a.createElement(f.a,{store:R},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.952c9956.chunk.js.map