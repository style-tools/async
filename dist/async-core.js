var aa=[],l={};function n(a,b){b=b||0;aa.length<b&&(aa.length=b);p(a.split(","),function(a,d){aa[b+d]=a;l[a]=b+d})}n("rel,as,type,head,href,src,css,all,preload,media,load,link,style,target,attributes,dependencies,ref,after,before,data-c,data-src,querySelector");function q(a){try{return(isNaN(a)?a:aa[a]||a).toString()}catch(b){}}function r(a){var b=x(a);a=y(a);p(a,function(b,d,e){ba(b,1)&&(e={},ca(b,function(a,b){b=b in l?l[b]:b;a=ba(a)?r(a):a in l?l[a]:a;e[b]=a}),a[d]=e)});return b?a:a[0]};var z=window,A=z.document,B,da,C,ea,D,F,fa,ha,ia,ja,G,H,K,M,N,ka,O,la,P,Q,R,ma=setTimeout,na,oa,pa=A.addEventListener,qa=q(21);function x(a){return a instanceof Array}function ba(a,b){return"object"===typeof a?!b||!x(a):!1}function ra(a){return"function"===typeof a}function S(a){return"undefined"===typeof a}function T(a,b){if(!ba(a)||x(a)||null===a){var c={};b&&(c[b]=a)}return c||a}function y(a){x(a)||(a=[a]);return a}function p(a,b){for(var c=0,d=a.length;c<d;c++)b(a[c],c)}
function ca(a,b,c){for(e in a)if(a.hasOwnProperty(e)){var d=a[e];if(c){var e=q(e);d=q(d)}b(d,e)}}function sa(a,b,c){c||(c=z);a=y(a);c=y(c);p(a,function(a){a=q(a);p(c,function(c){if(pa)c.addEventListener(a,b,!1);else if(c.attachEvent)a===q(59)&&(a=q(10),c=z),c.attachEvent("on"+a,b);else try{c["on"+a]=b}catch(h){}})})}function U(a,b,c,d){ra(a)?a.apply(null,[b,c]):c&&!d&&c()}function ta(a,b){var c={},d;for(d in a)c[d]=a[d];for(d in b)c[d]=b[d];return c};Q=function(){var a=(K||M).apply(null,arguments);ra(a)&&(Q.then=a);return Q};z.$async=Q;function ua(){var a;if(!(a=A.head)){var b=b||A;a=b.getElementsByTagName(q(3))[0]}return a}function va(a,b,c){b||(b=A);return b[qa+(c?"All":"")](a)}function wa(a,b){a=A.createElement(q(a));b&&V(a,b);return a}function xa(a,b){a=a.cloneNode(!0);b&&V(a,b);return a}function ya(a,b){b=y(b);p(b,function(b){a.appendChild(b)})}function V(a,b,c){a=y(a);p(a,function(a){ca(b,function(b,c){a.setAttribute(c,b)},!c)})}function za(a,b){b=b||1;for(a=a.parentElement;1<b;)return za(a,--b);return a}
function Aa(a,b){Ba(a)?(a=Ba(a),za(a).insertBefore(b,a)):ya(za(a),b)}function Ba(a,b){b=b||1;for(a=a&&a.nextSibling;a&&1<b;)return Ba(a,--b);return a}da=wa(11);try{B=da.relList.supports(q(8))}catch(a){};
