(this.webpackJsonpCocktailMaster=this.webpackJsonpCocktailMaster||[]).push([[0],{56:function(e,t,a){e.exports=a(70)},61:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),i=a.n(s),o=(a(61),a(49)),c=a(11),l=a.n(c),u=a(18),d=a(19),m=a(20),p=a(15),v=a(22),h=a(21),g=a(23),f=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={searchBy:"s",inputText:""},r}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:this.props.homeRoute?"searchSectionHome sOnly":"searchSection sOnly"},n.a.createElement(g.b,{className:"randomBTN ",exact:!0,to:"/favorite-list"},n.a.createElement("button",{className:"randomBTN ",onClick:function(){return e.props.saveRandomDrink()}},"Favorites List")),n.a.createElement(g.b,{className:"randomBTN ",exact:!0,to:"/random-result"},n.a.createElement("button",{onClick:function(){return e.props.saveRandomDrink()}},"Random Cocktail")," "),n.a.createElement("div",{className:"searchFieldContainer"},n.a.createElement("select",{className:"options",onChange:function(t){return e.setState({searchBy:t.target.value})}},n.a.createElement("option",{value:"s"},"Cocktail Name"),n.a.createElement("option",{value:"f"},"First Letter"),n.a.createElement("option",{value:"i"},"Ingredient")),n.a.createElement("input",{type:"text",maxLength:"f"===this.state.searchBy?"1":"",onChange:function(t){return e.setState({inputText:t.target.value})},className:"textInput"}),n.a.createElement("button",{className:"searchBTN",onClick:function(){e.props.saveAPIData(e.state.searchBy,e.state.inputText)}}," ",n.a.createElement(g.b,{exact:!0,to:"/search-result"},"Search"))))}}]),a}(r.Component),b=a(6);a(68);function k(e,t){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(l.a.mark((function e(t,a){var r,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"i"!==t){e.next=10;break}return e.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?".concat(t,"=").concat(a));case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,e.next=16;break;case 10:return e.next=12,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?".concat(t,"=").concat(a));case 12:return s=e.sent,e.next=15,s.json();case 15:r=e.sent;case 16:return e.abrupt("return",r);case 19:e.prev=19,e.t0=e.catch(0),console.log("err",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))).apply(this,arguments)}function x(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");case 3:return a=e.sent,e.next=6,a.json();case 6:return t=e.sent,e.abrupt("return",t);case 10:e.prev=10,e.t0=e.catch(0),console.log("err",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function I(e){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(t));case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log("err",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(){localStorage.removeItem("favoriteDrinks"),this.setState({favorites:[]})}function O(){this.setState({randoms:[]})}var T=function(e){return[{ingredient:e.strIngredient1,measure:e.strMeasure1},{ingredient:e.strIngredient2,measure:e.strMeasure2},{ingredient:e.strIngredient3,measure:e.strMeasure3},{ingredient:e.strIngredient4,measure:e.strMeasure4},{ingredient:e.strIngredient5,measure:e.strMeasure5},{ingredient:e.strIngredient6,measure:e.strMeasure6},{ingredient:e.strIngredient7,measure:e.strMeasure7},{ingredient:e.strIngredient8,measure:e.strMeasure8},{ingredient:e.strIngredient9,measure:e.strMeasure9},{ingredient:e.strIngredient10,measure:e.strMeasure10},{ingredient:e.strIngredient11,measure:e.strMeasure11},{ingredient:e.strIngredient12,measure:e.strMeasure12},{ingredient:e.strIngredient13,measure:e.strMeasure13},{ingredient:e.strIngredient14,measure:e.strMeasure14},{ingredient:e.strIngredient15,measure:e.strMeasure15}].filter((function(e){return e.ingredient})).map((function(e){return null===e.measure||""===e.measure?{ingredient:e.ingredient,measure:"(as preferred)"}:e}))},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return!!e&&e.some((function(e){return e.idDrink===t}))},N=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={},r}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"homeContainer"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Cocktail Master"),n.a.createElement("h3",{className:"searchDescription"},"Search for a cocktail by name, ingredient or first letter")))))}}]),a}(n.a.Component),D=a(99),R=a(100),F=a(46),S=a(4),L=a(3),M=a(103),A=a(94),B=a(96),H=a(97),P=a(98),W=a(102),J=a(95),G=a(36),K=a(47),V=a.n(K),$=a(48),q=a.n($),z=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={expanded:!1,isIngredients:r.props.byIngredients,ingredientsArr:r.props.ingredientsArr},r.handleExpandClick=r.handleExpandClick.bind(Object(p.a)(r)),r}return Object(m.a)(a,[{key:"handleExpandClick",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.byIngredients){e.next=7;break}return e.next=3,I(this.props.drink.idDrink);case 3:t=e.sent,a=T(t.drinks[0]),console.log(a),this.setState({ingredientsArr:a});case 7:this.setState({expanded:!this.state.expanded});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(M.a,{className:t.root},n.a.createElement(A.a,{action:n.a.createElement(J.a,{"aria-label":"settings"}),title:this.props.drink.strDrink,subheader:this.props.drink.strAlcoholic}),n.a.createElement(B.a,{className:t.media,image:this.props.drink.strDrinkThumb,title:this.props.drink.strDrink}),n.a.createElement(H.a,null," "),n.a.createElement(P.a,{disableSpacing:!0},n.a.createElement(J.a,{onClick:function(){return e.props.saveToFavorite(e.props.drink)},"aria-label":"add to favorites",color:this.props.isInFavorite?"secondary":""},n.a.createElement(V.a,null)),n.a.createElement(J.a,{"aria-label":"share"}),n.a.createElement(J.a,{className:Object(L.a)(t.expand,Object(F.a)({},t.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"show more"},n.a.createElement(q.a,null))),n.a.createElement(W.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},n.a.createElement(H.a,null," ",n.a.createElement(G.a,{paragraph:!0},"Ingredients:",this.state.ingredientsArr.map((function(e){return e.ingredient+" "+e.measure+", "})),"and Cheers"),n.a.createElement(G.a,{paragraph:!0},"Instructions:"),n.a.createElement(G.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.drink.strInstructions))))}}]),a}(n.a.Component),Q=Object(S.a)((function(e){return{root:{margin:"1rem  auto",backgroundColor:"rgba(255,200,0,.8)"},media:{height:"100%",paddingTop:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},greyHeart:{color:"default"},redHeart:{color:"secondary"}}}))(z),U=Object(D.a)((function(e){return{root:{width:" 90%",margin:"auto",marginTop:"15vh",backgroundColor:" rgba(0, 0, 0, 0.95)",paddingTop:"2rem",borderRadius:"5px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"},subRoot:{width:" 31%",margin:"1rem",marginTop:"0",backgroundColor:"transparent",paddingTop:"0",borderRadius:"0"}}}));var X=function(e){console.log(e.drinksList);var t=U();return n.a.createElement("div",null,n.a.createElement(R.a,{className:t.root,spacing:0},e.drinksList&&e.drinksList.map((function(a,r){return n.a.createElement(R.a,{className:t.subRoot,xs:12,sm:12,md:4,lg:3},n.a.createElement(Q,{key:r,drink:a,isInFavorite:C(e.favoriteList,a.idDrink),saveToFavorite:e.saveToFavorite,byIngredients:e.byIngredients,ingredientsArr:T(a)}))}))))},Y=a(101),Z=Object(D.a)((function(e){return{root:{width:" 90%",margin:"auto",marginTop:"15vh",backgroundColor:" rgba(0, 0, 0, 0.95)",paddingTop:"2rem",borderRadius:"5px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"},subRoot:{width:" 31%",margin:"1rem",marginTop:"0",backgroundColor:"transparent",paddingTop:"0",borderRadius:"0"}}}));var _=function(e){var t=Z();return n.a.createElement("div",{className:"ListContainer"},e.randomList.length?n.a.createElement(Y.a,{className:"clearRandomBTN",variant:"contained",color:"secondary",onClick:e.clearRandoms},"CLEAR RANDOMS"):"",n.a.createElement(R.a,{className:t.root,spacing:0},e.randomList.map((function(a,r){return n.a.createElement(R.a,{className:t.subRoot,xs:12,sm:12,md:4,lg:3},n.a.createElement(Q,{key:r,drink:a,isInFavorite:C(e.favoriteList,a.idDrink),saveToFavorite:e.saveToFavorite,ingredientsArr:T(a)}))}))))},ee=Object(D.a)((function(e){return{root:{width:" 90%",margin:"auto",marginTop:"15vh",backgroundColor:" rgba(0, 0, 0, 0.95)",paddingTop:"2rem",borderRadius:"5px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-start",flexWrap:"wrap"},subRoot:{width:" 31%",margin:"1rem",marginTop:"0",backgroundColor:"transparent",paddingTop:"0",borderRadius:"0"}}}));var te=function(e){var t=ee();return n.a.createElement("div",{className:"ListContainer"},e.favoriteList&&n.a.createElement(Y.a,{className:"clearFavoriteBTN",variant:"contained",color:"secondary",onClick:e.clearFavorites},"CLEAR FAVORITES"),n.a.createElement(R.a,{className:t.root,spacing:0},e.favoriteList&&e.favoriteList.map((function(a,r){return n.a.createElement(R.a,{className:t.subRoot,xs:12,sm:12,md:4,lg:3}," ",n.a.createElement(Q,{key:r,drink:a,isInFavorite:e.favoriteList&&C(e.favoriteList,a.idDrink),saveToFavorite:e.saveToFavorite,ingredientsArr:T(a)})," ")}))))},ae=Object(D.a)((function(e){return{root:{width:" 90vw",margin:"auto",marginTop:"10vh",backgroundColor:" rgba(255, 255, 255, 0.95)",minHeight:" 100vh",paddingTop:"50px",borderRadius:"5px",flexDirection:"row"}}}));var re=function(e){var t=ae();return n.a.createElement("div",{className:t.root},n.a.createElement(Y.a,{variant:"contained",color:"secondary",onClick:e.clearRandoms},n.a.createElement(g.b,{exact:!0,to:"/"},"BACK TO HOMEPAGE")),n.a.createElement(R.a,{container:!0,spacing:3},n.a.createElement(R.a,{item:!0,xs:12,sm:12},"Sorry, page doesn't exist!")))},ne=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={homeRoute:!1,byIngredients:!0,drinks:[],favorites:[],randoms:[],searchBy:"s",inputText:"margarita"},r.toggleByIngredients=r.toggleByIngredients.bind(Object(p.a)(r)),r.saveAPIData=r.saveAPIData.bind(Object(p.a)(r)),r.saveToFavorite=r.saveToFavorite.bind(Object(p.a)(r)),r.saveRandomDrink=r.saveRandomDrink.bind(Object(p.a)(r)),r.clearFavorites=w.bind(Object(p.a)(r)),r.clearRandoms=O.bind(Object(p.a)(r)),r}return Object(m.a)(a,[{key:"toggleByIngredients",value:function(){this.setState({byIngredients:!this.state.byIngredients})}},{key:"saveAPIData",value:function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(t,a);case 3:r=e.sent,this.setState({drinks:r.drinks,byIngredients:"i"===t}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"saveRandomDrink",value:function(){var e=Object(u.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:t=e.sent,(a=this.state.randoms).unshift(t.drinks[0]),this.setState({randoms:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("favoriteDrinks"));this.setState({favorites:e,drinks:e})}},{key:"saveToFavorite",value:function(e){var t=this.state.favorites,a=[];a=t?C(t,e.idDrink)?t.filter((function(t){return t.idDrink!==e.idDrink})):[].concat(Object(o.a)(t),[e]):[e],this.setState({favorites:a}),localStorage.setItem("favoriteDrinks",JSON.stringify(a))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(g.a,{basename:"/cocktail-master-app"},n.a.createElement(b.a,{path:"/"},n.a.createElement(f,{saveRandomDrink:this.saveRandomDrink,saveAPIData:this.saveAPIData,toggleHomeRoute:this.toggleHomeRoute})),n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/"},n.a.createElement(N,null)),n.a.createElement(b.a,{path:"/search-result"},n.a.createElement(X,{drinksList:this.state.drinks,favoriteList:this.state.favorites,saveToFavorite:this.saveToFavorite,saveSingleData:this.saveSingleData,byIngredients:this.state.byIngredients,toggleByIngredients:this.toggleByIngredients})),n.a.createElement(b.a,{path:"/random-result"},n.a.createElement(_,{randomList:this.state.randoms,favoriteList:this.state.favorites,saveToFavorite:this.saveToFavorite,clearRandoms:this.clearRandoms})),n.a.createElement(b.a,{path:"/favorite-list"},n.a.createElement(te,{favoriteList:this.state.favorites,saveToFavorite:this.saveToFavorite,clearFavorites:this.clearFavorites})),n.a.createElement(b.a,{path:"/"},n.a.createElement(re,null)))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.ca6e1ea4.chunk.js.map