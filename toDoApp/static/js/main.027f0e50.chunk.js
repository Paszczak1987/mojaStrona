(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=(a(15),a(6)),s=a(1),o=a(2),u=a(4),d=a(3),h=a(5),m=(a(16),a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",checked:!1,date:a.minDate},a.handleText=function(e){a.setState({text:e.target.value})},a.handleCheckbox=function(){a.setState({checked:!a.state.checked})},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.checked,l=e.date;t.length>2?a.props.add(t,l,n)&&a.setState({text:"",checked:!1,date:a.minDate}):console.log("kr\xf3tka nazwa")},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",l.a.createElement("div",{className:"form"},l.a.createElement("label",{htmlFor:"text"},"Zadanie:"),l.a.createElement("input",{type:"text",placeholder:"tre\u015b\u0107 zadania",value:this.state.text,onChange:this.handleText}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"date"},"Do kiedy zrobi\u0107:"),l.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"important"},"Ustaw priorytet"),l.a.createElement("input",{className:"checkbox",type:"checkbox",checked:this.state.checked,onChange:this.handleCheckbox}),l.a.createElement("br",null),l.a.createElement("button",{className:"addBtn",onClick:this.handleClick},"Dodaj"))}}]),t}(n.Component)),k=function(e){var t=e.task,a=t.text,n=t.date,c=t.id,r=t.active,i=t.important,s=t.finishDate;if(r)return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",{style:i?{color:"red"}:null},a)," - do"," ",l.a.createElement("span",null,n," "),l.a.createElement("button",{className:"doneBtn",onClick:function(){return e.change(c)}},"Zrobione")," ",l.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.delete(c)}},"x")));var o=new Date(s).toLocaleDateString();return l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("strong",null,a),l.a.createElement("em",null," (do ",n,")"),l.a.createElement("br",null),l.a.createElement("span",null,"- wykonano ",o," "),l.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.delete(c)}},"x")))},f=(a(18),function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active});a.length>=2&&a.sort(function(e,t){return e.finishDate<t.finishDate?1:e.finishDate>t.finishDate?-1:0}),t.length>=2&&t.sort(function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0});var n=t.map(function(t){return l.a.createElement(k,{key:t.id,task:t,change:e.change,delete:e.delete})}),c=a.map(function(t){return l.a.createElement(k,{key:t.id,task:t,change:e.change,delete:e.delete})});return l.a.createElement("div",null,l.a.createElement("div",{className:"active"},l.a.createElement("h3",null,"Lista zada\u0144 do wykonania ",l.a.createElement("em",null,"(",t.length,")")),n.length>0?n:l.a.createElement("p",null,"Brak zada\u0144.")),l.a.createElement("hr",null),l.a.createElement("div",{className:"done"},l.a.createElement("h3",null,"Zadania wykonane ",l.a.createElement("em",null,"(",a.length,")")),0===a.length?l.a.createElement("p",null,"Brak zada\u0144."):null,a.length>5&&l.a.createElement("span",null,"Pi\u0119\u0107 ostatnio wykonanych zada\u0144:"),c.slice(0,4)))}),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).counter=0,a.state={tasks:[]},a.deleteTask=function(e){var t=Object(i.a)(a.state.tasks);t=t.filter(function(t){return t.id!==e}),a.setState({tasks:t})},a.changeTaskStatus=function(e){console.log("change status "+e);var t=Array.from(a.state.tasks);t.forEach(function(n){n.id===e&&(n.active=!1,n.finishDate=(new Date).getTime()),a.setState({tasks:t})})},a.addTask=function(e,t,n){var l={id:a.counter,text:e,date:t,important:n,active:!0,finishDate:null};return a.counter++,a.setState(function(e){return{tasks:[].concat(Object(i.a)(e.tasks),[l])}}),!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,"To Do List app"),l.a.createElement("hr",null),l.a.createElement(m,{add:this.addTask}),l.a.createElement("hr",null),l.a.createElement(f,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component);r.a.render(l.a.createElement(E,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.027f0e50.chunk.js.map