(this.webpackJsonpreact_kabzda_kak_prosto=this.webpackJsonpreact_kabzda_kak_prosto||[]).push([[0],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(66),a=n(3),c="ADD-MESSAGE",i={dialogs:[{id:1,name:"Dima"},{id:2,name:"Jora"},{id:3,name:"Sveta"},{id:4,name:"Sasha"}],messages:[{id:1,message:"Hi!"},{id:2,message:"How do you do?"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}],newMessageText:"Mes"},s=function(e){return{type:c,message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:6,message:t.message};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n]),newMessageText:""});default:return e}}},105:function(e,t,n){"use strict";n.d(t,"f",(function(){return m})),n.d(t,"d",(function(){return x})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return A})),n.d(t,"g",(function(){return _})),n.d(t,"b",(function(){return D}));var r=n(9),a=n.n(r),c=n(13),i=n(3),s=n(14),u="FOLLOW",o="UNFOLLOW",d="SET_USERS",l="SET_CURRENT_PAGE",j="SET_TOTAL_COUNT",p="SET_LOADER",b="FOLLOWING_IN_PROGRESS",f={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!0,progress:null},h=function(e){return{type:u,usersID:e}},O=function(e){return{type:o,usersID:e}},v=function(e){return{type:d,users:e}},m=function(e){return{type:l,currentPage:e}},g=function(e){return{type:p,isFetching:e}},x=function(e){return{type:b,isFetching:e}},w=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),n.next=3,s.d.getUsers(e,t);case 3:c=n.sent,r(g(c.followed)),r(v(c.items)),r((a=c.totalCount,{type:j,totalCount:a}));case 7:case"end":return n.stop()}var a}),n)})));return function(e){return n.apply(this,arguments)}}()},A=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(!0)),r(m(e)),n.next=4,s.d.getUsers(e,t);case 4:c=n.sent,r(g(!1)),r(v(c.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},P=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,s.b.unfollow.bind(s.b),O);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},D=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:P(n,e,s.b.follow.bind(s.b),h);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.usersID?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case o:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.usersID?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case d:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case l:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case j:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalCount});case p:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case b:return Object(i.a)(Object(i.a)({},e),{},{progress:t.isFetching});default:return e}}},134:function(e,t,n){e.exports={maindiv:"News_maindiv__2sjxW"}},135:function(e,t,n){e.exports={maindiv:"Music_maindiv__3LgYX"}},136:function(e,t,n){e.exports={maindiv:"Settings_maindiv__1s0PQ"}},14:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(130),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f747db5e-dcb5-4b79-a43c-812e564ac23b"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}},i={follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))}},s={getAuth:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},u={getUser:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})}}},245:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(10),c=n(9),i=n.n(c),s=n(13),u=n(3),o=n(51),d=n(14),l="SET_USER_DATA",j={userId:null,email:null,login:null,isAuth:!1},p=function(e,t,n,r){return{type:l,data:{userId:e,email:t,login:n,isAuth:r}}},b=function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getAuth();case 2:0===(n=e.sent).data.resultCode&&t(p(n.data.data.id,n.data.data.email,n.data.data.login,!0));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(u.a)(Object(u.a)({},e),t.data);default:return e}},h=n(104),O=n(94),v=n(105),m=n(131),g=n(129),x="SET_INITIALIZED",w={initialized:!1},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}},P=Object(a.c)({dialogPage:h.b,profilePage:O.b,usersPage:v.a,auth:f,form:g.a,app:A}),_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.d,D=Object(a.e)(P,_(Object(a.a)(m.a)));window.__store__=D;var T=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(0),y=n.n(Q),S=n(61),Y=n.n(S),k=n(47),N=n(48),W=n(50),U=n(49),C=(n(245),n(15)),L=n(29),V=n.n(L),G=function(){return Object(r.jsxs)("nav",{className:V.a.nav,children:[Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/profile",activeClassName:V.a.active,children:"Profile"})}),Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/dialogs",activeClassName:V.a.active,children:"Messages"})}),Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/news",activeClassName:V.a.active,children:"News"})}),Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/music",activeClassName:V.a.active,children:"Music"})}),Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/users",activeClassName:V.a.active,children:"Users"})}),Object(r.jsx)("div",{children:Object(r.jsx)(C.b,{to:"/settings",activeClassName:V.a.active,children:"Settings"})})]})},B=n(134),M=n.n(B),z=function(e){return Object(r.jsx)("div",{className:M.a.maindiv,children:"News"})},I=n(135),X=n.n(I),R=function(e){return Object(r.jsx)("div",{className:X.a.maindiv,children:"Music"})},Z=n(136),E=n.n(Z),K=function(e){return Object(r.jsx)("div",{className:E.a.maindiv,children:"Settings"})},q=n(11),H=n(19),J=n(89),F=n.n(J),$=function(e){return Object(r.jsxs)("header",{className:F.a.header,children:[Object(r.jsx)("img",{src:"https://c7.hotpng.com/preview/602/440/925/javascript-clip-art-openclipart-logo-number-js.jpg",alt:"Alt text"}),Object(r.jsx)("div",{className:F.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login,Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(r.jsx)(C.b,{to:"/login",children:"Login"})})]})},ee=function(e){Object(W.a)(n,e);var t=Object(U.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"render",value:function(){return Object(r.jsx)($,Object(u.a)({},this.props))}}]),n}(y.a.Component),te=Object(a.d)(q.f,Object(H.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.logout();case 2:0===e.sent.data.resultCode&&t(p(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(ee),ne=n(127),re=n(128),ae=n(62),ce=n(63),ie=Object(ae.a)(30),se=Object(re.a)({form:"login"})((function(e){return Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)("div",{children:Object(r.jsx)(ne.a,{placeholder:"Login",component:ce.a,name:"email",validate:[ae.b,ie]})}),Object(r.jsx)("div",{children:Object(r.jsx)(ne.a,{placeholder:"Password",component:ce.a,name:"password",validate:[ae.b,ie],type:"password"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)(ne.a,{type:"checkbox",component:ce.a,name:"rememberMe"})," Remember me"]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),ue=Object(H.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(s.a)(i.a.mark((function r(a){var c,s;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?a(b()):(alert(c.data.messages[0]),s=c.data.messages.lenght>0?c.data.messages:"Some error",a(Object(o.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(q.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(se,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),oe=n(60),de=function(e){return function(t){return Object(r.jsx)(y.a.Suspense,{fallback:Object(r.jsx)(oe.a,{}),children:Object(r.jsx)(e,Object(u.a)({},t))})}},le=y.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),je=y.a.lazy((function(){return n.e(5).then(n.bind(null,301))})),pe=y.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),be=function(e){Object(W.a)(n,e);var t=Object(U.a)(n);function n(){return Object(k.a)(this,n),t.apply(this,arguments)}return Object(N.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeThunk()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wraper",children:[Object(r.jsx)(te,{}),Object(r.jsx)(G,{}),Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)(q.b,{render:de(pe),path:"/profile/:userID?"}),Object(r.jsx)(q.b,{render:de(le),path:"/dialogs"}),Object(r.jsx)(q.b,{render:de(je),path:"/users"}),Object(r.jsx)(q.b,{component:z,path:"/news"}),Object(r.jsx)(q.b,{component:R,path:"/music"}),Object(r.jsx)(q.b,{component:K,path:"/settings"}),Object(r.jsx)(q.b,{component:ue,path:"/login"})]})]}):Object(r.jsx)(oe.a,{})}}]),n}(y.a.Component),fe=Object(H.b)((function(e){return{initialized:e.app.initialized}}),{initializeThunk:function(){return function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(b());case 2:t({type:x});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(be);n(287);Y.a.render(Object(r.jsx)(C.a,{children:Object(r.jsx)(H.a,{store:T,children:Object(r.jsx)(fe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){e.exports={nav:"Nav_nav__3LN45",active:"Nav_active__1HLQb"}},60:function(e,t,n){"use strict";var r=n(1),a=(n(0),n.p+"static/media/loader3.152d0405.svg");t.a=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{src:a,alt:"Alt text"})})}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){return e?void 0:"Fild is required!"},a=function(e){return function(t){return t.length>e?"Max lenght is ".concat(e," symbols"):void 0}}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return d}));var r=n(3),a=n(68),c=n(1),i=(n(0),n(90)),s=n.n(i),u=function(e){e.input;var t=e.meta,n=(e.child,Object(a.a)(e,["input","meta","child"])),r=t.touched&&t.error;return Object(c.jsxs)("div",{className:s.a.formControl+" "+(r?s.a.error:""),children:[n.children,r&&Object(c.jsx)("span",{children:t.error})]})},o=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(c.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},89:function(e,t,n){e.exports={header:"Header_header__erBFu",loginBlock:"Header_loginBlock__3rKKY"}},90:function(e,t,n){e.exports={formControl:"FormControls_formControl__clya9",error:"FormControls_error__3A2Ew"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"e",(function(){return h})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return m})),n.d(t,"f",(function(){return g}));var r=n(9),a=n.n(r),c=n(13),i=n(66),s=n(3),u=n(14),o="WRITE-WORDS",d="ADD-POST",l="SET_USER_PROFILE",j="SET_STATUS",p="DELETE_POST",b={user:null,posts:[{id:1,src:"https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI",text:"Post 3",likes:3},{id:2,src:"https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI",text:"Post 7",likes:9},{id:3,src:"https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI",text:"Post 11",likes:5}]},f=function(e){return{type:d,post:e}},h=function(e){return{type:l,userProfile:e}},O=function(e){return{type:j,status:e}},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getUser(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.data.resultCode?n(O(e)):alert("HuYo");case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),{},{newPostText:t.newLetter});case d:var n={id:e.posts.length+1,src:"https://yandex.ru/images/_crpd/1k00Bv363/fda7baVuV/w67q95nBg7VBPpAu-7LnKXyrhEj4EylW7BSmIu6MjelT1Pr9XqSMTOqjaYLH84YDuoIjoVFsofB6WMkxAkA30M_j4v_w6Y_4CAvUfqKTgnBtg_EpjUp0V8Q58zrurNGcewQiQeZsTNRuKsFmQ9vTD46iX6RcdQxYO0W0hF8R23UXPvNexNWXWWlaOPbi1v-tKQ-ogGjbpWdIDBYz1oixAHv0tn0-YJi0Pur5WicbYxtKaiokDDnkPbM5eLiPwaPV1wZ79njJo91Vykh2plY3pZXPwCxM2wUz3Oz2T37cPeBr1Aqh_lCgzAKqHX5Pqx-DtgaGdESxwAWP_fwQz5VT8YvCs9YYQVehpUZM-moOW70BIzAASLPp55A00veOCM0s70DuwdqobCyGNhHSM5szv9JyBgTYJZAZL6HUpF8901H7-rfajBUrPWnS_P5ehpu1ZQfY0ARr3Xe0aK4r1ti1iL-cDqXOQBDcomrRYp_bh39GcnZQQGm0wRsNfGyXNZsFq14jerTpDwVdPsiuahb3BVkH6KQgG5GrPGg-4-IwiRjf1Arl3sAcUH4Gvd6r7xsfVqIerHzJuDkDSUQA7yVHDTemb1rwrRPxTeaMOhpa5x0Rh6jQGE-5e9CAAq-60AUsTziOJdKEnDjiZgmCn-9bJz4O7pR84awpm93MvJPhL3Ur3ouuNBmf4Wm6KDZ-kg-pIbeIlJTnhasAxGbXZhhVtKfQQg3GDIyw5mbpVrvjR7s6coKwpG2YNZN1xCh7OUvN92brAmSVZ-FN8sx6Kk5b6VnfZCQcR7XvjDACb_LMwXij7A7R8rhscPLeiQ4np4OfGr7eFAzhLLn7PdSUd41TacNGa6I0lat1waqwynYmhxX5BzgQWLtdD0BMVpuW3AWoS-gW0Qb8YIAW2tX6v7dLkxYWjiTAtcC597nc3FOp66U3pmu2-MmjUcH2AEJmSvf9ia9Y2PwzDXPAJOp7dvAI",text:t.post,likes:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n]),newPostText:""});case l:return Object(s.a)(Object(s.a)({},e),{},{user:t.userProfile});case j:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case p:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postID}))});default:return e}}}},[[288,1,2]]]);
//# sourceMappingURL=main.aac58202.chunk.js.map