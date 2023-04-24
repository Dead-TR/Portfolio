"use strict";(self.webpackChunkob_deb=self.webpackChunkob_deb||[]).push([[994],{994:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var i=t(165),n=t(861),r=t(791),o=t(744),s=t.n(o);function c(e,a){return new Promise((function(t,i){var n=new FontFace(e,"url(".concat(a,")"));n.load().then((function(e){document.fonts.add(e),t(n)})).catch((function(e){i(e)}))}))}t(849);var l,g,f,d,m,u=t(671),_=t(144),p=t(340),h=t(882),y=function(e){var a;e.load.setPath("assets/img/char_spine_v5/"),e.load.spine("red","Red.json","Red.atlas"),e.load.on("start",(function(){a=e.make.text({x:B.scale.width/2,y:B.scale.height/3,text:"Loading",style:{font:"100px monospace",fill:"#ffffff"}}).setOrigin(.5)})),e.load.on("complete",(function(){a.destroy()}))},x=t(762),w=0,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;w=e},b=function(e){!function(e,a){for(var t in e)a.input.mousePointer.x>e[t].initialX&&a.input.mousePointer.x<e[t].initialX+e[t].segment&&a.input.mousePointer.y>e[t].initialY&&a.input.mousePointer.y<e[t].initialY+e[t].segment&&1!=e[t].scratched&&v(1)}(T,e),P||(0===w?(l.setMix(l.getCurrentAnimation().name,"red_idle_loop",.3),l.play("red_idle_loop",!0,!0)):1===w?(l.play("red_worry_loop",!0,!0),w=0):2===w?(l.play("red_happy_bonus_loop",!0,!0),e.time.delayedCall(1500,(function(){w=0}))):3===w?(l.play("red_happy_card_loop",!0,!0),e.time.delayedCall(1500,(function(){w=0}))):4===w&&(l.play("red_disappointed_loop",!0,!0),e.time.delayedCall(1500,(function(){w=0}))))};var k,T={},O=function(e){var a=e.add.image(-100,-100,"coin_icon_big");k=e.add.renderTexture(0,0,B.scale.width,B.scale.height).setOrigin(0).setDepth(1);var t=e.add.image(-500,-500,"bonus_scratch").setOrigin(0),i=e.add.image(-500,-500,"card_scratch").setOrigin(0);k.destroy=0,k.draw("bonus_scratch",615,415),T.bonusCard={scratched:!1,type:"bonus",diagonal:520,segment:368,initialX:615,initialY:415},e.input.on("pointermove",(function(e){P||(k.erase(a,e.x,e.y),function(e,a,t,i,n,r){for(var o in a)if(e.x>a[o].initialX&&e.x<a[o].initialX+a[o].segment&&e.y>a[o].initialY&&e.y<a[o].initialY+a[o].segment){(a[o].minX>e.x||!a[o].minX)&&(a[o].minX=Math.floor(e.x)),(a[o].minY>e.y||!a[o].minY)&&(a[o].minY=Math.floor(e.y)),(a[o].maxX<e.x||!a[o].maxX)&&(a[o].maxX=Math.floor(e.x)),(a[o].maxY<e.y||!a[o].maxY)&&(a[o].maxY=Math.floor(e.y));var s=a[o].maxY-a[o].minY,c=a[o].maxX-a[o].minX;Math.sqrt(Math.pow(s,2)+Math.pow(c,2))>.9*a[o].diagonal&&(a[o].scratched||("bonus"===a[o].type?(v(2),t.erase(n,a[o].initialX,a[o].initialY,a[o].scratched=!0)):(a[o].key===a.bonusCard.key?v(3):v(4),t.erase(r,a[o].initialX,a[o].initialY,a[o].scratched=!0))))}}(e,T,k,0,t,i))})),e.input.on("pointerdown",(function(e){P||k.erase(a,e.x,e.y)}))};var Y=function(e){var a=[],t=["tent","rope","leaf","bow","bonfire"],i={};t=t.filter((function(a){if(a!==e)return a}));for(var n=0;n<6;n++)if(n<3&&"lose"!==e)a.push(e);else{var r=t[Math.floor(Math.random()*t.length)];i[r]=i[r]+1||0,i[r]<2?a.push(r):n--}return function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=e[a];e[a]=e[t],e[t]=i}return e}(a)};var D,S,X,Z=0,M=!1,A=function(e){M=e},C=function(e){var a=0;if(M||(!function(e){var a,t=s().Math.Between(0,4),i=s().Math.Between(0,99),n=s().Math.Between(0,9);switch(n<=7&&(Z+=25),t){case 0:f.setTexture("bonfire_small"),m.setTexture("bonfire");break;case 1:f.setTexture("bow_small"),m.setTexture("bow");break;case 2:f.setTexture("leaf_small"),m.setTexture("leaf");break;case 3:f.setTexture("rope_small"),m.setTexture("rope");break;default:f.setTexture("tent_small"),m.setTexture("tent")}switch(!0){case i<2:a=Y("tent"),4===t&&(Z+=100);break;case i>=2&&i<6:a=Y("rope"),3===t&&(Z+=50);break;case i>=6&&i<12:a=Y("leaf"),2===t&&(Z+=35);break;case i>=12&&i<20:a=Y("bow"),1===t&&(Z+=30);break;case i>=20&&i<30:a=Y("bonfire"),0===t&&(Z+=25);break;default:a=Y("lose")}O(e),g.children.iterate((function(e,a){k.draw("card_scratch",e.x,e.y),T["card_".concat(a)]={scratched:!1,type:"card",diagonal:400,segment:280,initialX:e.x,initialY:e.y}})),d.children.iterate((function(e,t){e.setTexture(a[t]),T["card_".concat(t)].key=e.texture.key})),n>7&&(Z=1e3),Z&&(Z<1e3?(X[2].setText("".concat(Z)),X[3].setTexture("coin_icon_big")):(X[2].setText("1"),X[3].setTexture("dollar_icon"))),T.bonusCard.key=m.texture.key,Z=0}(e),A(!0)),!P){var t,i=(0,x.Z)(S);try{for(i.s();!(t=i.n()).done;){var n=t.value;n.defaultY+400>n.y&&(n.y+=5)}}catch(w){i.e(w)}finally{i.f()}if(!R){var r,o=(0,x.Z)(X);try{for(o.s();!(r=o.n()).done;){r.value.setAlpha(0)}}catch(w){o.e(w)}finally{o.f()}}for(var c in D.setAlpha(0),T)T[c].scratched&&a++;if(7===a)for(var l in F(!0),T)delete T[l].scratched}if(P){var u,_=(0,x.Z)(S);try{for(_.s();!(u=_.n()).done;){var p=u.value;p.y>p.defaultY&&(p.y-=5)}}catch(w){_.e(w)}finally{_.f()}if(!R){var h,y=(0,x.Z)(X);try{for(y.s();!(h=y.n()).done;){h.value.setAlpha(1)}}catch(w){y.e(w)}finally{y.f()}}D.setAlpha(1)}},P=!0,R=!0,F=function(e){P=e},z=function(e){(0,p.Z)(t,e);var a=(0,h.Z)(t);function t(){return(0,u.Z)(this,t),a.apply(this,arguments)}return(0,_.Z)(t,[{key:"preload",value:function(){var e=(0,n.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y(this),(a=this).load.setPath("assets/"),a.load.image("background","img/magic_forest_bg.png"),a.load.image("bonfire","img/magic_forest_bonfire.png"),a.load.image("bonfire_small","img/magic_forest_bonfire_small.png"),a.load.image("bow","img/magic_forest_bow.png"),a.load.image("bow_small","img/magic_forest_bow_small.png"),a.load.image("leaf","img/magic_forest_leaf.png"),a.load.image("leaf_small","img/magic_forest_leaf_small.png"),a.load.image("rope","img/magic_forest_rope.png"),a.load.image("rope_small","img/magic_forest_rope_small.png"),a.load.image("tent","img/magic_forest_tent.png"),a.load.image("tent_small","img/magic_forest_tent_small.png"),a.load.image("button","img/magic_forest_button.png"),a.load.image("gift_icon","img/magic_forest_gift_icon.png"),a.load.image("question_icon","img/magic_forest_question_icon.png"),a.load.image("winner_frame","img/magic_forest_winner_frame.png"),a.load.image("coin_icon_big","img/magic_forest_coin_icon_big.png"),a.load.image("coin_icon_small","img/magic_forest_coin_icon_small.png"),a.load.image("dollar_icon","img/magic_forest_dollar_icon.png"),a.load.image("frame_for_text","img/magic_forest_frame_for_text.png"),a.load.image("frame","img/magic_forest_frame.png"),a.load.image("frame1","img/magic_forest_frame1.png"),a.load.image("frame2","img/magic_forest_frame2.png"),a.load.image("frame3","img/magic_forest_frame3.png"),a.load.image("card_scratch","img/magic_forest_scratch_frame.png"),a.load.image("bonus_scratch","img/magic_forest_scratch_frame_big.png"),a.load.image("shadow","img/magic_forest_shadow_40_percent.png"),a.load.image("win_up_to_100","img/magic_forest_win_up_to_100.png"),a.load.image("winner","img/magic_forest_winner.png");case 2:case"end":return e.stop()}var a}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e;!function(e){e.add.image(0,0,"background").setOrigin(0).setDisplaySize(B.scale.width,B.scale.height),e.add.image(B.scale.width,190,"winner_frame").setOrigin(1,0),e.add.image(150,80,"win_up_to_100").setOrigin(0),e.add.image(45,1040,"frame_for_text").setOrigin(0);var a={fontFamily:"DRAguSans",fontSize:"52px",color:"#f45b4e",textTransform:"uppercase"},t=e.add.text(70,1065,"match the winner",a),i=e.add.text(640,t.y,"and win a prize!",a);t.setText(t.text.toUpperCase()),i.setText(i.text.toUpperCase())}(this),m=(e=this).add.image(B.scale.width-300,620,"bow").setOrigin(.5),f=e.add.image(0,0,"bow_small").setOrigin(.5).setPosition(570,1090),(g=e.add.group({key:"frame",repeat:5,setXY:{x:75,y:1225}})).children.iterate((function(e,a){e.setOrigin(0),a<3?e.x+=337*a:(e.y=1560,e.x+=337*(a-3))})),(d=e.add.group({key:"bow",repeat:5,setXY:{x:215,y:1365}})).children.iterate((function(e,a){a<3?e.x+=337*a:(e.y=1700,e.x+=337*(a-3))})),function(e){D=e.add.image(0,0,"shadow").setOrigin(0).setDepth(2);var a=e.add.image(-10,B.scale.height+130,"frame3").setOrigin(0,1).setDepth(2),t=e.add.image(B.scale.width/2,B.scale.height+10,"button").setOrigin(.5,1).setDepth(2).setInteractive({cursor:"pointer"}),i=e.add.image(300,B.scale.height-250,"question_icon").setOrigin(0,1).setDepth(2),n=e.add.text(400,a.y-460,"How To Play",{fontSize:"72px",color:"#ff8729",fontFamily:"DRAguSans"}).setDepth(2),r=e.add.text(B.scale.width/2-50,t.y-90,"Play For 60",{fontSize:"72px",color:"#fff",fontFamily:"DRAguSans"}).setOrigin(.5,1).setDepth(2),o=e.add.image(B.scale.width/2+185,B.scale.height-80,"coin_icon_small").setOrigin(.5,1).setDepth(2),s=e.add.image(B.scale.width/2,230,"frame1").setOrigin(.5,0).setDepth(2),c=e.add.text(B.scale.width/2,s.y+40,"You win",{fontSize:"116px",fontFamily:"DRAguSans",color:"#f45b4e"}).setDepth(2).setOrigin(.5,0);c.setText(c.text.toUpperCase());var l=e.add.text(B.scale.width/2-50,s.y+220,"0",{fontSize:"126px",fontFamily:"DRAguSans",color:"#000"}).setDepth(2).setOrigin(.5),g=e.add.image(l.x+2*l.width+20,l.y,"coin_icon_big").setOrigin(.5).setDepth(2);t.on("pointerup",(function(e){P=!1,R||A(!1),R=!1})),S=[a,t,i,n,r,o],X=[s,c,l,g];var f,d=(0,x.Z)(S);try{for(d.s();!(f=d.n()).done;){var m=f.value;m.defaultY=m.y}}catch(p){d.e(p)}finally{d.f()}var u,_=(0,x.Z)(X);try{for(_.s();!(u=_.n()).done;)u.value.setAlpha(0)}catch(p){_.e(p)}finally{_.f()}}(this),function(e){l=e.add.spine(300,600,"red","red_idle_loop",!0)}(this)}},{key:"update",value:function(){C(this),b(this)}}]),t}(o.Scene),B={type:s().AUTO,scale:{mode:s().Scale.FIT,parent:"scratcher",autoCenter:s().Scale.CENTER_BOTH,width:1097,height:1920},parent:"scratcher",scene:[z],plugins:{scene:[{type:"scenePlugin",key:"SpinePlugin",plugin:window.SpinePlugin,mapping:"spine",sceneKey:"spine"}]}},q={},U=t(184),E=function(){return(0,r.useEffect)((function(){var e,a=function(){var a=(0,n.Z)((0,i.Z)().mark((function a(){return(0,i.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c("DRAguSans","assets/styles/font/DRAguSans-Black.ttf");case 2:e=new(s().Game)(B);case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a(),function(){var a;null===(a=e)||void 0===a||a.destroy(!0)}}),[]),(0,U.jsx)("div",{className:q.root,id:"scratcher"})},j=(0,r.memo)(E)}}]);
//# sourceMappingURL=994.3a6d419b.chunk.js.map