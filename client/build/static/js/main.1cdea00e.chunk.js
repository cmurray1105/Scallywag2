(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{152:function(t,e,a){},153:function(t,e,a){},241:function(t,e,a){"use strict";a.r(e);var c=a(1),r=a(0),s=a.n(r),n=a(15),o=a.n(n),i=(a(152),a(153),a(83)),l=a(14),d=a(65),j=a(66),u=a(32),b=a(79),h=a(78),O=function(t){return Object(c.jsx)("div",{className:"bannerContainer",children:Object(c.jsx)("img",{className:"logo",src:"https://bbqbucket2020.s3.us-east-2.amazonaws.com/logo.jpg"})})},p=a(19),x=a(272),m=a(271),g=a(291),v=a(127),f=a.n(v),y=a(41),S=a.n(y);a(171),a(115);function C(t){var e=s.a.useState(!1),a=Object(p.a)(e,2),r=a[0],n=a[1],o=s.a.useState("Santa Rita Ranch South"),i=Object(p.a)(o,2),l=i[0],d=i[1],j=s.a.useState(""),u=Object(p.a)(j,2),b=u[0],h=u[1],O=s.a.useState(""),v=Object(p.a)(O,2),y=v[0],C=v[1],N=s.a.useState(new Date),T=Object(p.a)(N,2),D=T[0],w=T[1],k=s.a.useState(""),I=Object(p.a)(k,2),R=I[0],q=I[1],P=s.a.useState(null),B=Object(p.a)(P,2),E=B[0],A=B[1],F=Object(m.a)((function(t){return{paper:{position:"absolute",width:400,backgroundColor:t.palette.background.paper,border:"2px solid #000",boxShadow:t.shadows[5],padding:t.spacing(2,4,3)}}}))(),M=function(){n(!1)},Q=Object(c.jsxs)("div",{className:F.paper,children:[Object(c.jsx)("h2",{id:"simple-modal-title",children:"Delivery Info"}),Object(c.jsxs)("h3",{children:["Total $",t.total]}),Object(c.jsx)("div",{className:"order-summary"}),Object(c.jsx)("div",{className:"order-form",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S.a.post("/addOrder",{address:y,customerName:b,deliveryDate:D,neighborhood:l,cartItems:t.cartItems,email:R,phone:E}).then((function(e){for(var a in t.cartItems)S.a.post("./updateQuantity",{quantity:t.cartItems[a].originalQuantity-t.cartItems[a].quantity,productName:a}).then((function(t){console.log("result of update",t)})).catch((function(t){console.log(t)}));M(),t.clearOrder()})).catch((function(t){t&&console.log(t)}))},children:[Object(c.jsxs)("label",{children:["Select Your Neighborhood:",Object(c.jsx)("br",{}),Object(c.jsxs)("select",{value:l,onChange:function(t){return d(t.target.value)},children:[Object(c.jsx)("option",{value:"Santa Rita Ranch South",children:"Santa Rita Ranch South"}),Object(c.jsx)("option",{value:"Santa Rita Ranch North",children:"Santa Rita Ranch North"}),Object(c.jsx)("option",{value:"Morningstar",children:"Morningstar"})]})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Name:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",value:b,onChange:function(t){return h(t.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Street Address:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",value:y,onChange:function(t){return C(t.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Email Address:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",value:R,onChange:function(t){return q(t.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Phone:",Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"text",value:E,onChange:function(t){return A(t.target.value)}})]}),Object(c.jsx)("br",{}),Object(c.jsxs)("label",{children:["Delivery Date",Object(c.jsx)("br",{}),Object(c.jsx)(f.a,{selected:D,onChange:function(t){return w(t)}})]}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"submit",value:"Submit"})]})})]});return console.log((new Date).toISOString().slice(0,19).replace("T"," ")),Object(c.jsxs)("div",{children:[Object(c.jsx)(x.a,{className:"checkoutButton",onClick:function(){n(!0)},children:"Checkout"}),Object(c.jsx)(g.a,{open:r,onClose:M,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Q})]})}var N=function(t){return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{clearOrder:t.clearOrder,total:t.total,products:t.products,cartItems:t.cartItems}),"Total Due: $",t.total]})},T=a(290),D=a(281),w=a(280),k=a(274),I=a(275),R=a(279),q=a(277),P=a(276),B=a(278),E=a(289),A=a(100),F=a.n(A),M=function(t){var e=t.loaded,a=t.products,r=t.addToCart,n=t.cartItems,o=s.a.useState(!1),i=Object(p.a)(o,2),l=i[0],d=i[1],j=s.a.useState("0"),u=Object(p.a)(j,2),b=u[0],h=u[1],O=s.a.useState(""),v=Object(p.a)(O,2),f=(v[0],v[1],s.a.useState({})),y=Object(p.a)(f,2),S=y[0],C=y[1];console.log("T/F?",!n);var N=0,T=S.quantity,D=Object(m.a)({root:{width:250,marginTop:25,marginBottom:25},media:{height:250,width:250}})(),w=function(){d(!1)};n[S.product_name]&&(N=n[S.product_name].quantity,T=S.quantity-N);var A=Object(c.jsxs)("div",{className:"paper",children:[Object(c.jsx)("h2",{id:"simple-modal-title",children:S.product_name}),Object(c.jsxs)("div",{className:"order-form",children:[T<5?Object(c.jsxs)("div",{children:["Only ",T," left"]}):null,Object(c.jsxs)("form",{onSubmit:function(t){console.log("selected",T-N),t.preventDefault(),console.log("currentProduct",S.quantity),T-N<0?alert("Please select another quantity. Only ".concat(T," left!")):(r({productName:S.product_name,quantity:parseInt(b),price:S.price,id:S.id,originalQuantity:S.quantity}),w())},children:[Object(c.jsxs)("label",{children:["Quantity:",Object(c.jsx)("select",{onChange:function(t){return h(t.target.value)},children:function(){for(var t=[],e=0;e<=T;e++)t.push(Object(c.jsx)("option",{value:e,children:e}));return t}()})]}),Object(c.jsx)(x.a,{type:"submit",children:Object(c.jsx)(F.a,{})})]})]})]}),M=[];return console.log(e),e?(M=a,Object(c.jsx)("div",{className:"box-container",children:Object(c.jsx)(E.a,{display:"flex",flexwrap:"nowrap",p:1,m:1,bgcolor:"background.paper",css:{maxWidth:300},children:M.map((function(t){console.log(t);var e=t.price.toString();return console.log(e.length),e.includes(".")?1===e.split(".")[1].length&&(e+="0"):e+=".00",Object(c.jsx)(E.a,{p:1,bgcolor:"grey.300",children:Object(c.jsxs)("div",{className:"cardContainer",children:[Object(c.jsx)(k.a,{className:D.root,onClick:function(){C(t),d(!0)},children:Object(c.jsxs)(E.a,{p:1,children:[Object(c.jsxs)(I.a,{children:[Object(c.jsx)(P.a,{className:D.media,image:t.image_url,title:t.product_name}),Object(c.jsxs)(q.a,{children:[Object(c.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.product_name}),Object(c.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["$",e]})]})]}),Object(c.jsx)(R.a,{})]})}),Object(c.jsx)(g.a,{open:l,onClose:w,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:A})]})})}))})})):null};Object(m.a)((function(t){return{root:{flexGrow:1,width:"100%",backgroundColor:t.palette.background.paper}}}));var Q=function(t){var e=s.a.useState(0),a=Object(p.a)(e,2),r=a[0],n=a[1],o=["Meats","Sides","Combos","Dessert","Catering","Gift Shop"];return Object(c.jsxs)("div",{children:[Object(c.jsx)(w.a,{position:"static",color:"default",centered:!0,children:Object(c.jsxs)(T.a,{className:"tab-content",value:r,variant:"scrollable",scrollButtons:"auto",onChange:function(e,a){n(a),t.getProducts(o[a])},children:[Object(c.jsx)(D.a,{className:"menuTab",label:"Meats"}),Object(c.jsx)(D.a,{className:"menuTab",label:"Sides"}),Object(c.jsx)(D.a,{className:"menuTab",label:"Combos"}),Object(c.jsx)(D.a,{className:"menuTab",eventKey:"Dessert",title:"Dessert",label:"Dessert"}),Object(c.jsx)(D.a,{className:"menuTab",eventKey:"Catering",title:"Catering",label:"Catering"}),Object(c.jsx)(D.a,{className:"menuTab",eventKey:"Gift Shop",title:"Gift Shop",label:"Gift Shop",children:Object(c.jsx)(M,{addToCart:t.addToCart,products:t.products,loaded:t.loaded,cartItems:t.cartItems})})]})}),Object(c.jsx)(M,{addToCart:t.addToCart,products:t.products,loaded:t.loaded,cartItems:t.cartItems})]})},_=function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(d.a)(this,a),(c=e.call(this,t)).state={products:[],loaded:!1,total:0,cart:{},productIds:[]},c.getProducts=c.getProducts.bind(Object(u.a)(c)),c.addToCart=c.addToCart.bind(Object(u.a)(c)),c.clearOrder=c.clearOrder.bind(Object(u.a)(c)),c}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getProducts("meats")}},{key:"getProducts",value:function(t){var e=this;S.a.get("/products",{params:{product:t}}).then((function(t){e.setState({products:t.data,loaded:!0})})).catch((function(t){console.log(t)}))}},{key:"handleCategorySelected",value:function(t){}},{key:"addToCart",value:function(t){this.state.productIds;var e=this.state.total,a=this.state.cart;a[t.productName]?a[t.productName].quantity+=t.quantity:a[t.productName]={quantity:t.quantity,id:t.id,originalQuantity:t.originalQuantity};var c=(e+=t.price*t.quantity).toString();c.includes(".")&&(1===c.split(".")[1].length&&(c+="0"),c.split(".")[1].length>2&&(c=c.split(".")[0]+"."+c.split(".")[1].slice(0,2))),this.setState({cart:a,total:parseInt(c)})}},{key:"clearOrder",value:function(){this.setState({cart:{},total:0})}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)(O,{})}),Object(c.jsx)("div",{className:"body",children:Object(c.jsx)(Q,{addToCart:this.addToCart,getProducts:this.getProducts,products:this.state.products,loaded:this.state.loaded,cartItems:this.state.cart})}),Object(c.jsx)("div",{className:"bbqList",children:Object(c.jsx)(N,{clearOrder:this.clearOrder,total:this.state.total,products:this.state.products,cartItems:this.state.cart})}),Object(c.jsx)("div",{className:"footer"})]})})}}]),a}(s.a.Component),G=a(285),L=a(287),$=a(283),z=a(288),K=a(286),H=a(282),J=a(133),U=a(292),W=a(284),Y=a(131),V=a.n(Y),X=a(130),Z=a.n(X),tt=Object(m.a)({root:{"& > *":{borderBottom:"unset"}}});var et=function(t){var e=t.row,a=s.a.useState(!1),r=Object(p.a)(a,2),n=r[0],o=r[1],i=tt();e.products=e.products||[],console.log("ROW!!!!!!!",e);var l=e.deliveryDate.split("-"),d=l[0],j=l[2].slice(0,2),u=l[1],b="".concat(u,"/").concat(j,"/").concat(d);return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)(H.a,{className:i.root,children:[Object(c.jsx)($.a,{children:Object(c.jsx)(W.a,{"aria-label":"expand row",size:"small",onClick:function(){return o(!n)},children:n?Object(c.jsx)(Z.a,{}):Object(c.jsx)(V.a,{})})}),Object(c.jsx)($.a,{component:"th",scope:"row",children:e.name}),Object(c.jsx)($.a,{align:"right",children:e.neighborhood}),Object(c.jsx)($.a,{align:"right",children:e.address}),Object(c.jsx)($.a,{align:"right",children:e.email}),Object(c.jsx)($.a,{align:"right",children:e.phone}),Object(c.jsx)($.a,{align:"right",children:b}),Object(c.jsx)($.a,{align:"right",children:e.total}),Object(c.jsx)("button",{children:"order fulfilled"})]}),Object(c.jsx)(H.a,{children:Object(c.jsx)($.a,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:Object(c.jsx)(U.a,{in:n,timeout:"auto",unmountOnExit:!0,children:Object(c.jsxs)(E.a,{margin:1,children:[Object(c.jsx)(B.a,{variant:"h6",gutterBottom:!0,component:"div",children:"Order Summary"}),Object(c.jsxs)(G.a,{size:"small","aria-label":"purchases",children:[Object(c.jsx)(K.a,{children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)($.a,{align:"right",children:"Quantity"}),Object(c.jsx)($.a,{children:"Product"}),Object(c.jsx)($.a,{children:"Price"})]})}),Object(c.jsx)(L.a,{children:e.products.map((function(t){return console.log("proRo",t),Object(c.jsxs)(H.a,{children:[Object(c.jsx)($.a,{align:"right",children:t.quantity}),Object(c.jsx)($.a,{component:"th",scope:"row",children:t.productName}),Object(c.jsx)($.a,{children:t.price})]},t.productName)}))})]})]})})})})]})},at=(Object(m.a)({root:{"& > *":{borderBottom:"unset"}}}),function(t){Object(b.a)(a,t);var e=Object(h.a)(a);function a(t){var c;return Object(d.a)(this,a),(c=e.call(this,t)).state={rows:[],orders:{},loaded:!1},c.createData=c.createData.bind(Object(u.a)(c)),c.fillRows=c.fillRows.bind(Object(u.a)(c)),c.getOrders=c.getOrders.bind(Object(u.a)(c)),c}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getOrders()}},{key:"getOrders",value:function(){var t=this;S.a.get("/getOrders").then((function(e){for(var a in console.log("getOrders",e.data),t.setState({orders:e.data,loaded:!0}),console.log("!!!!",t.state.orders),t.state.orders){for(var c=0,r=0;r<t.state.orders[a].products.length;r++)c+=t.state.orders[a].products[r].price;console.log("TOTAL!!",c)}})).then((function(e){t.fillRows()})).catch((function(t){console.log(t)}))}},{key:"createData",value:function(t,e,a,c,r,s,n,o){return{name:t,neighborhood:e,address:a,email:c,phone:r,deliveryDate:s,total:n,products:o}}},{key:"fillRows",value:function(){var t=[];for(var e in this.state.orders){console.log("PRODUCT",e,"STATE ORDERS",this.state.orders);for(var a=0,c=0;c<this.state.orders[e].products.length;c++)a+=this.state.orders[e].products[c].price*this.state.orders[e].products[c].quantity;var r=a.toString();console.log(r.length),r.includes(".")?(1===r.split(".")[1].length&&(r+="0"),r.split(".")[1].length>2&&(r=r.split(".")[0]+"."+r.split(".")[1].slice(0,2))):r+=".00",console.log("TOTAL BEFORE PUSHING",r),t.push(this.createData(this.state.orders[e].customer,this.state.orders[e].neighborhood,this.state.orders[e].address,this.state.orders[e].email,this.state.orders[e].phone,this.state.orders[e].deliveryDate,"$".concat(r),this.state.orders[e].products))}console.log("America",t),this.setState({rows:t})}},{key:"render",value:function(){return Object(c.jsx)(z.a,{component:J.a,children:Object(c.jsxs)(G.a,{"aria-label":"collapsible table",children:[Object(c.jsx)(K.a,{children:Object(c.jsxs)(H.a,{children:[Object(c.jsx)($.a,{}),Object(c.jsx)($.a,{children:" Customer Name"}),Object(c.jsx)($.a,{align:"right",children:"Neighborhood"}),Object(c.jsx)($.a,{align:"right",children:"Address"}),Object(c.jsx)($.a,{align:"right",children:"Email"}),Object(c.jsx)($.a,{align:"right",children:"Phone"}),Object(c.jsx)($.a,{align:"right",children:"Delivery Date "}),Object(c.jsx)($.a,{align:"right",children:"Total"})]})}),Object(c.jsx)(L.a,{children:this.state.rows.map((function(t){return Object(c.jsx)(et,{row:t},t.name)}))})]})})}}]),a}(s.a.Component));function ct(){return Object(c.jsx)(i.a,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(i.b,{to:"/orders",children:"Orders"})})]})}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/orders",children:Object(c.jsx)(at,{})}),Object(c.jsx)(l.a,{path:"/",children:Object(c.jsx)(_,{})})]})]})})}var rt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,294)).then((function(e){var a=e.getCLS,c=e.getFID,r=e.getFCP,s=e.getLCP,n=e.getTTFB;a(t),c(t),r(t),s(t),n(t)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ct,{})}),document.getElementById("root")),rt()}},[[241,1,2]]]);
//# sourceMappingURL=main.1cdea00e.chunk.js.map