var Kb,Lb;function Mb(a,b){a=y(a);b=y(b);p(a,function(a){p(b,function(b){a.removeAttribute(q(b))})})}n("observer,insert,appendChild,insertBefore,rootNodes,Element,Document,subtree,modes,contents,node,match_type,action,search,replace,timing,url,js,remove,rewrite,capture",92);var Nb,Ob,Pb=[],Qb=q(112);function Rb(a,b){G([a,b])}L&&(Q[Qb]=Rb);M&&(R[Qb]=Rb);
function Sb(a){p(Pb,function(b){function c(){a.innerHTML="";Mb(a,[e,0]);a.disabled=!0}b=b[0];var d,e,h;if(a&&1===a.nodeType&&!a.hasAttribute(q(19))){var f=a.nodeName.toLowerCase();U(Lb,[a,f],function(a,b){a&&(h=a,d=6,e=b)});U(Kb,[a,f],function(a,b){a&&(h=a,d=109,e=b)})}if(d){var k;p(b,function(b){if(!k){var c=b[2]||7,e=b[103]||108,f=b[90],g=b[91],m=h;if(7===c||c===d)101===e&&(m=a.outerHTML),(f=g?db(f):f)&&m&&(g?f.test(m)&&(k=b):-1!==m.indexOf(f)&&(k=b))}});if(k)if(f=k[104],110===f[2])c(a,d);else{var g=
f[105],m=f[106],u=f[91];b=f[107];f=T(f[14]);if(g)if(u)if(u=db(g))g=h.replace(u,m);else return J&&N("capture."+(109===d?"js":"css"),["invalid regex",g]),a;else g=h.replace(g,m);else g=m;f[e]=g;f[20]=h;if(D&&b){f[19]=d;var E=xa(a,f);c(a,d);U(D,b,function(){za(a).replaceChild(E,a)})}else V(a,f)}}});return a}G=function(a){var b=r(T(a[1]));a[0]&&(a=[r(y(a[0])),b],Pb.push(a));U(Nb,b[92],Sb);U(Ob,b[93],Sb)};
