function W(a){return Math.round((a?new Date(a):new Date).getTime()/1E3)}n("cache,localstorage,cache-api,namespace,max_size,expire,update,interval,cors,proxy,fallback,xhr,source,cssText",63);function ub(a){return q(19)+":"+(a||"")}function vb(a,b){return a&&a+b<W()}var X,Y,wb,xb,yb={},zb,Ab,Bb;function Cb(a,b,c){b=T(b,2);var d=b[2],e=b[73],h;64===d&&X?h=X[0]:65===d&&Y&&(h=Y[0]);h?h(a,function(b,h){b&&x(b[0])&&(yb[d]=T(yb[d]),yb[d][a]=1,b=0);b||!e?(b&&(b[9]=d),c(b,h)):Cb(a,e,function(a){c(a)})}):c(0,1)}
function Db(a,b,c,d,e){b=T(b,2);var h=b[2],f=b[68],k=b[73],g;a in T(yb[h])||(64===h&&X?g=X[1]:65===h&&Y&&(g=Y[1]));g&&(h=c.length,b=!isNaN(b[67])&&b[67]<h,g(a,b?[]:c,f,d,e));k&&Db(a,k,c,d,e)}
ea=function(a,b){function c(a,b){return u[a]||g[a]||b}function d(a,b){E||(a=function(){function a(a,b,c){"string"===typeof a?Db(m,u,a,b,c):J&&N("cache",["save",Ga(m)])}var c;p(H,function(d){c||(6===f&&76===d&&U(zb,b,function(b){c=d;a(b)},1),76!==d&&(U(xb,[m,t,K?w:0,71===d],a),c=d))})},U(na,a,a))}var e=a[0],h=a[1],f=a[2],k=T(a[3]),g=T(h[63]),m=a[4],u=T(e[63]||g,2),E,v,I,t=c(74),w=c(71),H=y(c(75,[76,74,71])),K,ab;p(H,function(a,b){H[b]=a=a in l?l[a]:a;71===a&&(K=1);74===a&&(ab=1)});m&&u[2]?(Da(m,d),
Cb(m,u,function(a,c){E=c;a&&(I=a[0],Ea(m,d),6===f?U(Ab,[e,k,m,I],function(a,b){v=a;k=b},1):U(Bb,[k,m,I],function(a,b){v=a;k=b},1),U(wb,[m,e,u,a,t,K?w:0,!ab]),a=[v,k]);b(a)})):b()};
