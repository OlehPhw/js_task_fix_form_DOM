function e(e){var t="";t+=e[0].toUpperCase();for(var r=1;r<e.length;r++)e[r].toUpperCase()===e[r]?t+=" "+e[r]:t+=e[r];return t}document.querySelectorAll("input").forEach(function(t){var r=document.createElement("label");r.classList.add("field-label"),r.setAttribute("for",t.id),r.textContent=e(t.name),t.setAttribute("placeholder",e(t.name)),t.before(r)});
//# sourceMappingURL=index.8b24b2c0.js.map
