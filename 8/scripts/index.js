var n=document.querySelector(".navigation"),a=document.querySelector(".navigation__toggle");n.classList.remove("navigation--nojs");n.classList.add("navigation--closed");a.onclick=function(){n.classList.contains("navigation--closed")?(n.classList.remove("navigation--closed"),n.classList.add("navigation--opened")):(n.classList.add("navigation--closed"),n.classList.remove("navigation--opened"))};