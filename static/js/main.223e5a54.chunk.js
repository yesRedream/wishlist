(this.webpackJsonpwishlist=this.webpackJsonpwishlist||[]).push([[0],{31:function(e,t,a){e.exports=a(58)},36:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"signInWithGoogle",(function(){return h})),a.d(n,"get",(function(){return v})),a.d(n,"getCategories",(function(){return b})),a.d(n,"getWishes",(function(){return w})),a.d(n,"getCategoryWishes",(function(){return E})),a.d(n,"createWish",(function(){return j})),a.d(n,"deleteWish",(function(){return O})),a.d(n,"updateWishName",(function(){return N})),a.d(n,"updateWishPrice",(function(){return y})),a.d(n,"updateWishLink",(function(){return k}));var c=a(0),r=a.n(c),i=a(28),o=a.n(i),l=a(11),s=(a(36),a(5)),u=a(2),m=a(20),d=a.n(m),p=d.a.initializeApp({apiKey:"AIzaSyCcwUUV0AAtlv0xtrx5-yer9pY6oFbp6TI",authDomain:"wishlist-d768c.firebaseapp.com",databaseURL:"https://wishlist-d768c.firebaseio.com",projectId:"wishlist-d768c",storageBucket:"wishlist-d768c.appspot.com",messagingSenderId:"942671943039",appId:"1:942671943039:web:9b6d91fbb48e1bc976364a"}),g=d.a.firestore(),f=d.a.auth;function h(){var e=new f.GoogleAuthProvider;return f().signInWithRedirect(e).then((function(e){console.log(e.user)})).catch((function(e){console.log(e.message)}))}function v(e){var t=g.collection(e);return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return t};return e(t).get().then((function(e){return e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}))})).catch((function(e){console.log("Error getting documents: ",e)}))}}function b(){return g.collection("categories").get().then((function(e){return e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}))}))}function w(){return g.collection("wishes").get().then((function(e){return e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}))}))}function E(e){return g.collection("wishes").where("categoryId","array-contains",e).get().then((function(e){return e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}))}))}function j(e){var t=f().currentUser?f().currentUser.uid:"unknown";return g.collection("wishes").add(Object(s.a)(Object(s.a)({},e),{},{owner:t})).then((function(e){return e.get()})).then((function(e){return Object(s.a)({id:e.id},e.data())}))}function O(e){return g.collection("wishes").doc(e).delete().then((function(){return e}))}function N(e,t){return g.collection("wishes").doc(e).update({title:t})}function y(e,t){return g.collection("wishes").doc(e).update({price:t})}function k(e,t){return g.collection("wishes").doc(e).update({link:t})}var S=a(3);function C(e){e.match;var t=Object(S.f)();return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Wish List"),r.a.createElement("div",{className:"profile-wrap"},r.a.createElement("div",{className:"email-img-wrap"},r.a.createElement("p",{className:"email-text"},f().currentUser.email),r.a.createElement("img",{className:"profile-img",src:f().currentUser.photoURL,alt:"profile"})),r.a.createElement("div",{className:"profile-dropdown"},r.a.createElement("p",{onClick:function(){f().signOut().then((function(){t.push("/"),window.location.reload()})).catch((function(e){}))}},"Logout"))))}function I(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)(""),o=Object(u.a)(i,2),m=o[0],d=o[1];function p(e){var t;t=e,g.collection("categories").doc(t).delete().then((function(){return t}))}return Object(c.useEffect)((function(){g.collection("categories").where("owner","==",f().currentUser.uid).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));n(t)}))}),[]),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"categories-list"},r.a.createElement("div",{className:"category"},r.a.createElement("input",{type:"radio",id:"all",name:"category"}),r.a.createElement(l.b,{className:"navlink",to:"/all"},r.a.createElement("label",{className:"category-label",htmlFor:"all"},"All"))),a.map((function(e){return r.a.createElement("div",{className:"category",key:e.id},r.a.createElement("input",{type:"radio",id:e.id,name:"category"}),r.a.createElement(l.b,{className:"navlink",to:e.id},r.a.createElement("label",{className:"category-label",htmlFor:e.id},e.title,r.a.createElement("button",{className:"delete",onClick:function(){return p(e.id)}},"\u2715"))))})),r.a.createElement("div",{className:"add-category"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m&&(!function(e){var t=f().currentUser?f().currentUser.uid:"unknown";g.collection("categories").add({title:e,owner:t})}(m),d(""))}},r.a.createElement("input",{type:"text",placeholder:"Add Category",value:m,required:!0,onChange:function(e){e.stopPropagation(),d(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"+",className:"submit"})))))}var U=a(21),W=Object(c.createContext)({categories:[],wishes:[],user:null}),x=a(25),D=a.n(x),L=a(30);function P(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(u.a)(a,2),i=n[0],o=n[1],l=Object(c.useState)(""),s=Object(u.a)(l,2),m=s[0],d=s[1],g=Object(c.useState)(""),f=Object(u.a)(g,2),h=f[0],v=f[1],b=Object(c.useState)(!1),w=Object(u.a)(b,2),E=w[0],j=w[1],O=Object(c.useState)(null),N=Object(u.a)(O,2),y=N[0],k=N[1],S=Object(c.useState)(""),C=Object(u.a)(S,2),I=C[0],U=C[1],W=Object(c.useState)(""),x=Object(u.a)(W,2),P=x[0],A=x[1],G=Object(c.useState)(!1),R=Object(u.a)(G,2),_=R[0],F=R[1];var K,q=Object(c.useRef)(null);function B(){return(B=Object(L.a)(D.a.mark((function e(t){var a,n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.value){e.next=14;break}return F(!0),A(URL.createObjectURL(t.target.files[0])),U(t.target.value),a=t.target.files[0],n=p.storage().ref(),c=n.child(a.name),e.next=9,c.put(a);case 9:return e.t0=k,e.next=12,c.getDownloadURL();case 12:e.t1=e.sent,(0,e.t0)(e.t1);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){if(13===e.keyCode){var t=e.target.form,a=Array.prototype.indexOf.call(t,e.target);t.elements[a+1].focus(),e.preventDefault()}}return K=q,Object(c.useEffect)((function(){function e(e){K.current&&!K.current.contains(e.target)&&j(!1)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[K]),r.a.createElement("div",{className:"add-wish-wrap"},r.a.createElement("form",{ref:q,onSubmit:function(e){e.preventDefault(),console.log(m),i&&(t(i,m,h,y),o(""),d(""),v(""),k(null),U(""),j(!1),F(!1))},onClick:function(){j(!0)},className:"add-wish-form ".concat(E?"active":"")},r.a.createElement("div",{className:"form-wrap"},r.a.createElement("div",{className:"img-add-wrap"},r.a.createElement("input",{type:"file",accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){return B.apply(this,arguments)},value:I,id:"imageInput"}),r.a.createElement("label",{htmlFor:"imageInput",className:"img-button ".concat(_?"active":"")},"Choose image"),r.a.createElement("div",{className:"img-preview ".concat(_?"active":"")},r.a.createElement("img",{className:"playerProfilePic_home_tile",alt:"wish",src:P&&P}),r.a.createElement("div",{className:"delete",onClick:function(){F(!1),U(""),k(null)}},"\u2715"))),r.a.createElement("input",{className:"add-wish-input",type:"text",value:i,placeholder:"I want...",required:!0,onChange:function(e){return o(e.target.value)},onKeyDown:z}),r.a.createElement("input",{className:"add-wish-price",type:"number",step:"0.01",min:"0",value:m,placeholder:"Price...",onChange:function(e){return d(e.target.value)},onKeyDown:z}),r.a.createElement("input",{className:"add-wish-price",type:"text",value:h,placeholder:"Link...",onChange:function(e){return v(e.target.value)},onKeyDown:z}),r.a.createElement("input",{className:"submit",type:"submit",value:"Done"}))))}function A(e){var t=e.wish,a=e.onDelete,n=e.onSelect;var c;return r.a.createElement("div",{className:"wish-item-wrap"},r.a.createElement("div",{className:"wish-item",onClick:function(){return n(t)}},r.a.createElement("div",{className:"wish-img-wrap"},t.imgUrl&&r.a.createElement("img",{className:"wish-img",src:t.imgUrl,alt:"wish"}),t.price&&r.a.createElement("div",{className:"wish-price-wrap"},r.a.createElement("p",{className:"wish-price"},t.price,"$"))),r.a.createElement("p",{className:"wish-name"},t.title),t.link&&r.a.createElement("div",{className:"a-wrap"},r.a.createElement("a",{rel:"noopener noreferrer",href:(c=t.link,c.startsWith("http://")||c.startsWith("https://")?c:"http://".concat(c)),target:"_blank",onClick:function(e){e.stopPropagation()},className:"wish-link"},t.link)),r.a.createElement("button",{className:"delete",onClick:function(e){e.stopPropagation(),a(t.id)}},"\u2715")))}function G(e){var t=e.wish,a=e.onUpdate,n=Object(c.useState)(t.title),i=Object(u.a)(n,2),o=i[0],l=i[1],s=Object(c.useState)(t.price),m=Object(u.a)(s,2),d=m[0],p=m[1],g=Object(c.useState)(t.link),f=Object(u.a)(g,2),h=f[0],v=f[1];return console.log(o),r.a.createElement("div",{className:"edit-wish-item"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(t.id,o,d,h),console.log(t.id,o)},className:"edit-wish-form"},t.imgUrl&&r.a.createElement("div",{className:"img-preview"},r.a.createElement("img",{className:"wish-img",src:t.imgUrl,alt:"wish"})),!t.imgUrl&&r.a.createElement("div",{className:"img-add-wrap"}),r.a.createElement("input",{className:"edit-wish-input edit-name",required:!0,value:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{className:"edit-wish-input edit-price",value:d,placeholder:"price...",onChange:function(e){return p(e.target.value)}}),r.a.createElement("input",{className:"edit-wish-input edit-link",value:h,placeholder:"link...",onChange:function(e){return v(e.target.value)}}),r.a.createElement("input",{className:"submit",type:"submit",name:"",value:"Done",id:""})))}function R(e){var t=e.match,a=Object(c.useState)(null),n=Object(u.a)(a,2),i=n[0],o=n[1],l=Object(c.useState)([]),m=Object(u.a)(l,2),d=m[0],p=m[1],h=Object(c.useContext)(W);function v(e){h.deleteWish(e).then((function(e){p(Object(U.a)(d.filter((function(t){return t.id!==e}))))}))}function b(e){o(e)}Object(c.useEffect)((function(){var e;"all"===t.params.categoryId||void 0===t.params.categoryId?g.collection("wishes").where("owner","==",f().currentUser.uid).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));p(t)})):t.params.categoryId&&(e=t.params.categoryId,g.collection("wishes").where("categoryId","array-contains",e).where("owner","==",f().currentUser.uid).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));p(t)})))}),[t.params.categoryId]);var w=h.categories.find((function(e){return e.id===t.params.categoryId}));return r.a.createElement("div",{className:"items-list"},r.a.createElement(P,{onSubmit:function(e,a,n,c){"all"===t.params.categoryId||void 0===t.params.categoryId?h.createWish({title:e,price:a,link:n,imgUrl:c}).then((function(e){p([].concat(Object(U.a)(d),[e]))})):t.params.categoryId&&h.createWish({title:e,price:a,link:n,imgUrl:c,categoryId:[w.id]}).then((function(e){p([].concat(Object(U.a)(d),[e]))}))}}),r.a.createElement("div",{className:"items-list-wrap"},d.map((function(e){return r.a.createElement(A,{key:e.id,wish:e,onDelete:v,onSelect:b})}))),i&&r.a.createElement("div",{className:i?"active list-item-edit-wrap":"list-item-edit-wrap"},r.a.createElement("div",{className:"list-item-background",onClick:function(){return o(null)}}),r.a.createElement(G,{onUpdate:function(e,t,a,n){h.updateWishName(e,t),h.updateWishPrice(e,a),h.updateWishLink(e,n),o(null)},wish:i})))}function _(e){var t=Object.assign({},e);return r.a.createElement("main",Object.assign({id:"app-content"},t))}function F(){var e=Object(c.useContext)(W),t=Object(S.f)();return r.a.createElement("div",{className:"login-wrap"},r.a.createElement("div",{onClick:function(){e.signInWithGoogle(),t.push("/")},className:"google-btn"},r.a.createElement("div",{className:"google-icon-wrapper"},r.a.createElement("img",{className:"google-icon",alt:"Google logo",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"})),r.a.createElement("p",{className:"btn-text"},r.a.createElement("b",null,"Sign in with Google"))))}function K(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(),l=Object(u.a)(o,2),m=l[0],d=l[1];return Object(c.useEffect)((function(){b().then(i),f().onAuthStateChanged((function(e){d(e?"signed":"no")}))}),[]),"signed"===m?r.a.createElement(W.Provider,{value:Object(s.a)({categories:a},n)},r.a.createElement("div",{className:"app"},r.a.createElement(C,null),r.a.createElement("div",{className:"main"},r.a.createElement(I,{categories:a}),r.a.createElement(_,null,r.a.createElement(S.c,null,r.a.createElement(S.a,{exact:!0,path:"/",component:R}),r.a.createElement(S.a,{path:"/:categoryId?",component:R})))))):"no"===m?r.a.createElement(W.Provider,{value:Object(s.a)({},n)},r.a.createElement(S.a,{component:F})):r.a.createElement("div",{className:"spinner-wrap"},r.a.createElement("div",{className:"loadingio-spinner-rolling-pmiwm2ufmu"},r.a.createElement("div",{className:"ldio-x68g8gm35i"},r.a.createElement("div",null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.223e5a54.chunk.js.map