(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{AfDx:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),i=u("2Rin"),e=function(){function l(l){this.util=l,this.icon="md-notifications",this.indicatorValue=0,this.off=!1,this.dot=!1}return l.prototype.ngOnInit=function(){},l.prototype.decrement=function(){this.indicatorValue>0&&this.indicatorValue--},l.prototype.increment=function(){this.indicatorValue++},l.prototype.getNewIcon=function(){var l=this.util.getRandomIcon();this.icon=l.icons[1]||l.icons[0]},l}(),t=function(){return function(){}}(),b=u("pMnS"),a=u("NcP4"),c=u("tzjl"),s=u("MzJX"),r=u("Xqnl"),d=u("2MiI"),g=u("ZZ/e"),h=u("oBZk"),p=u("XVzZ"),f=u("F5vI"),m=u("gIcY"),z=u("iR0D"),k=u("ZYjt"),v=u("8dp0"),C=u("i3KY"),B=o.qb({encapsulation:0,styles:[["[_nghost-%COMP%]{--fiv-dot-color-background:var(--ion-color-light);--fiv-dot-color:var(--ion-color-primary)}.example[_ngcontent-%COMP%]{--fiv-color-icon:var(--ion-color-dark);position:relative;height:120px}"]],data:{}});function y(l){return o.Lb(0,[(l()(),o.sb(0,0,null,null,1,"app-header",[["title","Icon"]],null,null,null,r.b,r.a)),o.rb(1,114688,null,0,d.a,[g.Hb],{title:[0,"title"]},null),(l()(),o.sb(2,0,null,null,55,"ion-content",[],null,null,null,h.ab,h.m)),o.rb(3,49152,null,0,g.v,[o.h,o.k,o.A],null,null),(l()(),o.sb(4,0,null,0,53,"ion-grid",[["class","page-content"],["fixed",""]],null,null,null,h.eb,h.q)),o.rb(5,49152,null,0,g.B,[o.h,o.k,o.A],{fixed:[0,"fixed"]},null),(l()(),o.sb(6,0,null,0,51,"ion-row",[],null,null,null,h.rb,h.D)),o.rb(7,49152,null,0,g.jb,[o.h,o.k,o.A],null,null),(l()(),o.sb(8,0,null,0,49,"ion-col",[["size","12"]],null,null,null,h.Z,h.l)),o.rb(9,49152,null,0,g.u,[o.h,o.k,o.A],{size:[0,"size"]},null),(l()(),o.sb(10,0,null,0,47,"app-example",[],null,null,null,p.b,p.a)),o.rb(11,114688,null,0,f.a,[],{title:[0,"title"],subtitle:[1,"subtitle"],html:[2,"html"],css:[3,"css"],typescript:[4,"typescript"],api:[5,"api"]},null),(l()(),o.sb(12,0,null,0,4,"ion-item-divider",[],null,null,null,h.ib,h.v)),o.rb(13,49152,null,0,g.J,[o.h,o.k,o.A],null,null),(l()(),o.sb(14,0,null,0,2,"ion-label",[],null,null,null,h.lb,h.x)),o.rb(15,49152,null,0,g.O,[o.h,o.k,o.A],null,null),(l()(),o.Jb(-1,0,["Basic Example"])),(l()(),o.sb(17,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.getNewIcon()&&o),o},h.Q,h.c)),o.rb(18,49152,null,0,g.l,[o.h,o.k,o.A],null,null),(l()(),o.Jb(-1,0,[" change icon "])),(l()(),o.sb(20,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.increment()&&o),o},h.Q,h.c)),o.rb(21,49152,null,0,g.l,[o.h,o.k,o.A],null,null),(l()(),o.sb(22,0,null,0,1,"ion-icon",[["name","add"],["slot","icon-only"]],null,null,null,h.gb,h.s)),o.rb(23,49152,null,0,g.D,[o.h,o.k,o.A],{name:[0,"name"]},null),(l()(),o.sb(24,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.decrement()&&o),o},h.Q,h.c)),o.rb(25,49152,null,0,g.l,[o.h,o.k,o.A],null,null),(l()(),o.sb(26,0,null,0,1,"ion-icon",[["name","remove"],["slot","icon-only"]],null,null,null,h.gb,h.s)),o.rb(27,49152,null,0,g.D,[o.h,o.k,o.A],{name:[0,"name"]},null),(l()(),o.sb(28,0,null,0,11,"ion-item",[],null,null,null,h.kb,h.u)),o.rb(29,49152,null,0,g.I,[o.h,o.k,o.A],null,null),(l()(),o.sb(30,0,null,0,2,"ion-label",[],null,null,null,h.lb,h.x)),o.rb(31,49152,null,0,g.O,[o.h,o.k,o.A],null,null),(l()(),o.Jb(-1,0,["Icon turned off"])),(l()(),o.sb(33,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==o.Bb(l,34)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==o.Bb(l,34)._handleIonChange(u.target.checked)&&i),"ngModelChange"===n&&(i=!1!==(e.off=u)&&i),i},h.X,h.j)),o.rb(34,16384,null,0,g.c,[o.k],null,null),o.Gb(1024,null,m.f,function(l){return[l]},[g.c]),o.rb(36,671744,null,0,m.j,[[8,null],[8,null],[8,null],[6,m.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,m.g,null,[m.j]),o.rb(38,16384,null,0,m.h,[[4,m.g]],null,null),o.rb(39,49152,null,0,g.s,[o.h,o.k,o.A],null,null),(l()(),o.sb(40,0,null,0,11,"ion-item",[],null,null,null,h.kb,h.u)),o.rb(41,49152,null,0,g.I,[o.h,o.k,o.A],null,null),(l()(),o.sb(42,0,null,0,2,"ion-label",[],null,null,null,h.lb,h.x)),o.rb(43,49152,null,0,g.O,[o.h,o.k,o.A],null,null),(l()(),o.Jb(-1,0,["Icon dot"])),(l()(),o.sb(45,0,null,0,6,"ion-checkbox",[["slot","end"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var i=!0,e=l.component;return"ionBlur"===n&&(i=!1!==o.Bb(l,46)._handleBlurEvent()&&i),"ionChange"===n&&(i=!1!==o.Bb(l,46)._handleIonChange(u.target.checked)&&i),"ngModelChange"===n&&(i=!1!==(e.dot=u)&&i),i},h.X,h.j)),o.rb(46,16384,null,0,g.c,[o.k],null,null),o.Gb(1024,null,m.f,function(l){return[l]},[g.c]),o.rb(48,671744,null,0,m.j,[[8,null],[8,null],[8,null],[6,m.f]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(2048,null,m.g,null,[m.j]),o.rb(50,16384,null,0,m.h,[[4,m.g]],null,null),o.rb(51,49152,null,0,g.s,[o.h,o.k,o.A],null,null),(l()(),o.sb(52,0,null,0,5,"div",[["class","example"]],null,null,null,null,null)),(l()(),o.sb(53,0,null,null,4,"ion-button",[["fill","clear"]],[[8,"style",2]],null,null,h.Q,h.c)),o.rb(54,49152,null,0,g.l,[o.h,o.k,o.A],{fill:[0,"fill"]},null),o.rb(55,81920,null,0,z.a,[k.c],null,null),(l()(),o.sb(56,0,null,0,1,"fiv-icon",[["slot","icon-only"]],null,null,null,v.b,v.a)),o.rb(57,114688,null,0,C.a,[],{slot:[0,"slot"],off:[1,"off"],name:[2,"name"],indicatorValue:[3,"indicatorValue"],dotVisible:[4,"dotVisible"]},null)],function(l,n){var u=n.component;l(n,1,0,"Icon"),l(n,5,0,""),l(n,9,0,"12"),l(n,11,0,"Icon Component","This is basically an ion-icon but it can also display badge notifications and has smooth icon change transitions.","assets/docs/snippets/icon/html.md","assets/docs/snippets/icon/css.md","assets/docs/snippets/icon/ts.md","assets/docs/snippets/icon/api.md"),l(n,23,0,"add"),l(n,27,0,"remove"),l(n,36,0,u.off),l(n,48,0,u.dot),l(n,54,0,"clear"),l(n,55,0),l(n,57,0,"icon-only",u.off,u.icon,u.indicatorValue,u.dot)},function(l,n){l(n,33,0,o.Bb(n,38).ngClassUntouched,o.Bb(n,38).ngClassTouched,o.Bb(n,38).ngClassPristine,o.Bb(n,38).ngClassDirty,o.Bb(n,38).ngClassValid,o.Bb(n,38).ngClassInvalid,o.Bb(n,38).ngClassPending),l(n,45,0,o.Bb(n,50).ngClassUntouched,o.Bb(n,50).ngClassTouched,o.Bb(n,50).ngClassPristine,o.Bb(n,50).ngClassDirty,o.Bb(n,50).ngClassValid,o.Bb(n,50).ngClassInvalid,o.Bb(n,50).ngClassPending),l(n,53,0,o.Bb(n,55).myStyle)})}function A(l){return o.Lb(0,[(l()(),o.sb(0,0,null,null,1,"app-icon",[],null,null,null,y,B)),o.rb(1,114688,null,0,e,[i.a],null,null)],function(l,n){l(n,1,0)},null)}var I=o.ob("app-icon",e,A,{},{},[]),j=u("Ip0R"),x=u("M2Lx"),V=u("eDkP"),M=u("Fzqc"),w=u("v9Dh"),G=u("Wf4p"),P=u("lqlK"),Z=u("ZYCi"),D=u("LOpI"),J=u("dWZg"),L=u("lLAP"),O=u("4c35"),q=u("qAlS"),_=u("La40"),E=u("UOu5"),R=u("gVIA"),X=u("0RK4"),Y=u("6wuw"),F=u("isGY"),K=u("ZhfK"),N=u("/Gdi"),Q=u("GkVF"),S=u("j1ZV"),T=u("9rwy");u.d(n,"IconPageModuleNgFactory",function(){return U});var U=o.pb(t,[],function(l){return o.yb([o.zb(512,o.j,o.db,[[8,[b.a,a.a,c.a,s.a,I]],[3,o.j],o.y]),o.zb(4608,j.o,j.n,[o.v,[2,j.A]]),o.zb(4608,m.o,m.o,[]),o.zb(4608,g.b,g.b,[o.A,o.g]),o.zb(4608,g.Gb,g.Gb,[g.b,o.j,o.r]),o.zb(4608,g.Lb,g.Lb,[g.b,o.j,o.r]),o.zb(4608,x.c,x.c,[]),o.zb(4608,V.a,V.a,[V.f,V.b,o.j,V.e,V.c,o.r,o.A,j.d,M.b,[2,j.i]]),o.zb(5120,V.g,V.h,[V.a]),o.zb(5120,w.b,w.c,[V.a]),o.zb(4608,k.f,G.a,[[2,G.c],[2,G.e]]),o.zb(4608,P.a,P.a,[o.j,o.G,o.g,o.r]),o.zb(1073742336,j.c,j.c,[]),o.zb(1073742336,m.m,m.m,[]),o.zb(1073742336,m.e,m.e,[]),o.zb(1073742336,g.Eb,g.Eb,[]),o.zb(1073742336,Z.p,Z.p,[[2,Z.v],[2,Z.n]]),o.zb(1073742336,D.b,D.b,[]),o.zb(1073742336,J.b,J.b,[]),o.zb(1073742336,x.d,x.d,[]),o.zb(1073742336,L.a,L.a,[]),o.zb(1073742336,M.a,M.a,[]),o.zb(1073742336,O.e,O.e,[]),o.zb(1073742336,q.b,q.b,[]),o.zb(1073742336,V.d,V.d,[]),o.zb(1073742336,G.e,G.e,[[2,G.b],[2,k.g]]),o.zb(1073742336,w.e,w.e,[]),o.zb(1073742336,G.g,G.g,[]),o.zb(1073742336,_.j,_.j,[]),o.zb(1073742336,E.a,E.a,[]),o.zb(1073742336,R.a,R.a,[]),o.zb(1073742336,X.a,X.a,[]),o.zb(1073742336,Y.a,Y.a,[]),o.zb(1073742336,F.a,F.a,[]),o.zb(1073742336,K.a,K.a,[]),o.zb(1073742336,N.a,N.a,[]),o.zb(1073742336,Q.a,Q.a,[]),o.zb(1073742336,S.a,S.a,[]),o.zb(1073742336,T.a,T.a,[]),o.zb(1073742336,t,t,[]),o.zb(1024,Z.l,function(){return[[{path:"",component:e}]]},[])])})}}]);