n("observer,insert,appendChild,insertBefore,rootNodes,Element,Document,subtree,modes,contents,node,match_type,action,search,replace,timing,url,js,remove,rewrite,capture",92);var fc,gc,hc=[],ic=q(112);function jc(a,b){la([a,b])}G&&(L[ic]=jc);H&&(M[ic]=jc);
function kc(a){p(hc,function(b){function c(){a.innerHTML="";Ha(a,[e,0]);a.disabled=!0}b=b[0];var d,e,f;if(a&&1===a.nodeType&&!a.hasAttribute(q(19))){var g=a.nodeName.toLowerCase();P(ma,[a,g],function(a,b){a&&(f=a,d=6,e=b)});P(na,[a,g],function(a,b){a&&(f=a,d=109,e=b)})}if(d){var k;p(b,function(b){if(!k){var c=b[2]||7,e=b[103]||108,g=b[90],h=b[91],m=f;if(7===c||c===d)101===e&&(m=a.outerHTML),(g=h?tb(g):g)&&m&&(h?g.test(m)&&(k=b):-1!==m.indexOf(g)&&(k=b))}});if(k)if(g=k[104],110===g[2]){c(a,d);g={};
g[19]=f;U(a,g);var h={match:k,action:"remove"};Ra("capture."+(109===d?"js":"css"),V(f),h)}else{h=g[105];var m=g[106],r=g[91];b=g[107];g=N(g[14]);if(h)if(r)if(r=tb(h))h=f.replace(r,m);else return t("capture."+(109===d?"js":"css"),"invalid regex",h),F&&J("capture."+(109===d?"js":"css"),["invalid regex",h]),a;else h=f.replace(h,m);else h=m;g[e]=h;g[20]=f;h={match:k,action:"rewrite",src:f,rewritten:h,el:a};if(D&&b){g[19]=d;var I=Fa(a,g);c(a,d);P(D,[b,"capture.timing",V(f)],function(){Ia(a).replaceChild(I,
a)})}else U(a,g),Ra("capture."+(109===d?"js":"css"),V(f),h)}}});return a}la=function(a){var b=v(N(a[1]));a[0]&&(a=[v(z(a[0])),b],hc.push(a));P(fc,b[92],kc);P(gc,b[93],kc)};
