(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(41),s=n.n(r),i=n(16),l=n(135),o=n(29),u=n(127),d=n(65),b=n(66),j=n.n(b),h=n(3);function O(){return Object(h.jsx)(u.a,{"data-testid":"title_heading",className:j.a.heading,variant:"h4",component:"h4",children:d.Heading})}var p=n(130),x=n(131),m=n(132),f=n(125),g=n(68),v=n.n(g);function _(e){var t=e.headCells,n=e.onSelectAllClick,c=e.numSelected,a=e.rowCount;return Object(h.jsx)(p.a,{"data-testid":"Enha_tble_head",className:v.a.tableHead,children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(m.a,{padding:"checkbox",children:Object(h.jsx)(f.a,{color:"primary",indeterminate:c>0&&c<a,checked:a>0&&c===a,onChange:n,inputProps:{"aria-label":"select all desserts"}})}),t.map((function(e,t){return Object(h.jsx)(m.a,{align:e.numeric?"right":"left",style:e.width?{minWidth:e.width}:{},children:e.label},e.id)}))]})})}var S=n(129),y=n(69),k=n.n(y);function w(){return Object(h.jsx)("div",{"data-testid":"spinner",className:k.a.loadingStyles,children:Object(h.jsx)(S.a,{disableShrink:!0})})}var I=n(70),C=n.n(I);function E(e){var t=e.index,n=e.isItemSelected,c=e.labelId,a=e.handleClick,r=e.colAttr,s=e.row;return Object(h.jsxs)(x.a,{"data-testid":"Enha_tble_row",hover:!0,onClick:function(e){return a(e,t)},role:"checkbox","aria-checked":n,tabIndex:-1,selected:n,children:[Object(h.jsx)(m.a,{padding:"checkbox",children:Object(h.jsx)(f.a,{color:"primary",checked:n,inputProps:{"aria-labelledby":c}})}),Object(h.jsx)(m.a,{align:r[0].numeric?"right":"left",children:Object(h.jsx)("img",{className:C.a.productImage,src:s.thumbnailUrl,alt:t})}),Object(h.jsx)(m.a,{align:r[1].numeric?"right":"left",children:s.title}),Object(h.jsx)(m.a,{align:r[2].numeric?"right":"left",children:s.albumId})]},t)}var P=n(133),T=n(134),H="GET_PHOTOS_REQUESTED",N="GET_PHOTOS_SUCCESS",A="GET_PHOTOS_FAILED";function R(e){return{type:H,pageNumber:e}}function J(e){var t=e.columns,n=Object(c.useState)([]),a=Object(i.a)(n,2),r=a[0],s=a[1],l=Object(o.c)((function(e){return e.PhotosReducer})).photos,u=Object(o.b)();Object(c.useEffect)((function(){u(R(1))}),[]);var d=function(e,t){var n=r.indexOf(t),c=[];-1===n?c=c.concat(r,t):0===n?c=c.concat(r.slice(1)):n===r.length-1?c=c.concat(r.slice(0,-1)):n>0&&(c=c.concat(r.slice(0,n),r.slice(n+1))),s(c)};return Object(h.jsxs)(P.a,{children:[Object(h.jsx)(_,{headCells:t,numSelected:r.length,onSelectAllClick:function(e){if(e.target.checked){var t=l.map((function(e,t){return t}));s(t)}else s([])},rowCount:l.length}),Object(h.jsx)(T.a,{children:l.map((function(e,n){var c,a=(c=n,-1!==r.indexOf(c)),s="enhanced-table-checkbox-".concat(n);return Object(h.jsx)(E,{index:n,isItemSelected:a,labelId:s,handleClick:d,colAttr:t,row:e})}))})]})}var L=n(71),U=n(72),G=n.n(U);function Q(e){var t=e.columns,n=Object(c.useState)(1),a=Object(i.a)(n,2),r=a[0],s=a[1],u=Object(c.useState)(!0),d=Object(i.a)(u,2),b=d[0],j=d[1],O=Object(o.c)((function(e){return e.PhotosReducer})),p=O.photos,x=O.error,m=Object(o.b)();return Object(h.jsx)(l.a,{className:G.a.tableStyles,children:Object(h.jsx)(L.a,{height:"70vh",next:function(){x?j(!1):(s(r+1),m(R(r)))},dataLength:p.length,hasMore:b,loader:Object(h.jsx)(w,{}),scrollThreshold:"93%",children:Object(h.jsx)(J,{columns:t})})})}var D=n(128);function M(){return Object(h.jsxs)(D.a,{children:[Object(h.jsx)(O,{}),Object(h.jsx)(Q,{columns:[{id:"picture",numeric:!1,label:"Product",width:"3rem"},{id:"title",numeric:!1,label:"Title"},{id:"albumId",numeric:!0,label:"Ablum Id"}]})]})}function W(){return Object(h.jsx)(M,{})}function B(){return Object(h.jsx)(W,{})}var F=n(30),X=n(21),q=n(32),z={photos:[],loading:!1,error:!1};var K=Object(F.b)({PhotosReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case N:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,photos:[].concat(Object(X.a)(e.photos),Object(X.a)(t.photos))});case A:return Object(q.a)(Object(q.a)({},e),{},{loading:!1,error:t.message});default:return e}}}),V=K,Y=n(75),Z=n(27),$=n.n(Z),ee=n(31),te=n(73),ne=n(74),ce=n.n(ne).a.create({baseURL:"https://jsonplaceholder.typicode.com"});function ae(e){return"/photos?_page=".concat(e)}function re(e){return se.apply(this,arguments)}function se(){return(se=Object(te.a)($.a.mark((function e(t){var n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce.get(ae(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=$.a.mark(le);function le(e){var t;return $.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(ee.b)((function(t){return re(e.pageNumber)}));case 3:return t=n.sent,n.next=6,Object(ee.c)({type:N,photos:t});case 6:n.next=12;break;case 8:return n.prev=8,n.t0=n.catch(0),n.next=12,Object(ee.c)({type:A,message:n.t0.message});case 12:case"end":return n.stop()}}),ie,null,[[0,8]])}var oe=$.a.mark(ue);function ue(){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ee.a)([Object(ee.d)(H,le)]);case 2:case"end":return e.stop()}}),oe)}var de=Object(Y.a)(),be=Object(F.c)(Object(F.a)(de))(F.d)(V);de.run(ue);var je=be;s.a.render(Object(h.jsx)(o.a,{store:je,children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})})}),document.getElementById("root"))},65:function(e){e.exports=JSON.parse('{"Heading":"Acme Inc. developers"}')},66:function(e,t,n){e.exports={heading:"styles_heading__3J3iQ"}},68:function(e,t,n){e.exports={tableHead:"styles_tableHead__36QmW"}},69:function(e,t,n){e.exports={loadingStyles:"styles_loadingStyles__1-7m6"}},70:function(e,t,n){e.exports={productImage:"styles_productImage__1630f"}},72:function(e,t,n){e.exports={tableStyles:"styles_tableStyles__mwhXL"}}},[[108,1,2]]]);
//# sourceMappingURL=main.08b32b80.chunk.js.map