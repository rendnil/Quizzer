(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{151:function(e,t,n){e.exports=n(297)},160:function(e,t,n){},278:function(e,t,n){},280:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(38),u=n.n(c),o=n(29),i=n(30),s=n(61),l=n(59),m=n(63),d=n(311),E=n(298),f=n(18),h=n(306),p=n(304),g=n(303),b=n(312),y=(n(160),n(308)),v="https://frozen-dusk-50684.herokuapp.com/api/v1",w=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"fetchCategories",value:function(){return fetch("".concat(v,"/categories")).then(function(e){return e.json()})}},{key:"fetchCategoryQuestions",value:function(e){return fetch("".concat(v,"/categories/").concat(e)).then(function(e){return e.json()})}}]),e}(),Q=function(e){return Math.floor(Math.random()*e.length)},C=function(){function e(t,n){Object(o.a)(this,e),this.name=t,this.allQuestions=n,this.questions=[]}return Object(i.a)(e,[{key:"selectQuestions",value:function(){for(var e=1,t=[];e<=5;){for(var n=this.constructQuestionObj(this.allQuestions[Q(this.allQuestions)]);t.includes(n.id);)n=this.constructQuestionObj(this.allQuestions[Q(this.allQuestions)]);this.questions.push(n),t.push(n.id),e++}}},{key:"constructAnswers",value:function(e){var t=[];t.push(e.answer);for(var n=1;n<=3;n++){for(var r=this.allQuestions[Q(this.allQuestions)];t.includes(r.answer);)r=this.allQuestions[Q(this.allQuestions)];t.push(r.answer)}return t.sort()}},{key:"constructQuestionObj",value:function(e){return{id:e.id,prompt:e.question,correctAnswer:e.answer,answers:this.constructAnswers(e),value:e.value}}},{key:"constructQuiz",value:function(){return this.selectQuestions(),{categoryName:this.name,questions:this.questions,correctQs:[],incorrectQs:[],completed:!1}}}]),e}(),A=n(310),O=Object(f.b)(function(e){return{selectedCategory:e.selectedCategory}},function(e){return{fetchQuestions:function(t){return e(function(e){return function(t){w.fetchCategoryQuestions(e).then(function(e){var n=new C(e.name,e.questions);t({type:"CREATE_QUIZ",payload:n.constructQuiz()})})}}(t))},selectCategory:function(t){return e(function(e){return{type:"SELECT_CATEGORY",payload:e}}(t))}}})(function(e){var t=function(){e.selectCategory(e.category),e.fetchQuestions(e.category.id)};return a.a.createElement(a.a.Fragment,null,e.selectedCategory&&e.category.id===e.selectedCategory.id?a.a.createElement(A.a,{className:"category-box",textAlign:"center",inverted:!0,color:"orange",onClick:t},a.a.createElement("h3",null,e.category.name)):a.a.createElement(A.a,{className:"category-box",textAlign:"center",onClick:t},a.a.createElement("h3",null,e.category.name)))}),j=Object(f.b)(function(e){return{categories:e.categories.categories}})(function(e){var t=e.categories;return a.a.createElement("div",{className:"category-grid-wrapper"},a.a.createElement(y.a,{columns:4},t.map(function(e){return a.a.createElement(y.a.Column,{key:e.id},a.a.createElement(O,{category:e}))})))}),z=n(305),q=function(e){var t=e.message;return a.a.createElement(z.a,{id:"start-message",warning:!0,header:t})},N=Object(f.b)(function(e){return{selectedCategory:e.selectedCategory,loading:e.categories.loading}})(function(e){return e.loading?a.a.createElement(p.a,{active:!0,inverted:!0},a.a.createElement(g.a,{inverted:!0},"Loading")):a.a.createElement("div",{className:"selection-page-wrapper"},a.a.createElement(j,null),e.selectedCategory?null:a.a.createElement(q,{message:"Select a category to start!"}),function(){if(e.selectedCategory)return a.a.createElement("div",{id:"start-button"},a.a.createElement(b.a,{to:"/quiz"},a.a.createElement(h.a,{size:"massive",color:"green",basic:!0},"Start ",e.selectedCategory.name," Quiz")))}())}),k=n(309),S=n(313),T=(n(278),Object(f.b)(function(e){return{selectedAnswer:e.currentQuiz.selectedAnswer}},function(e){return{selectAnswer:function(t){return e(function(e){return{type:"SELECT_ANSWER",payload:e}}(t))}}})(function(e){var t=function(){e.selectAnswer(e.answer)};return e.answer===e.selectedAnswer?a.a.createElement(A.a,{className:"answer-item",inverted:!0,color:"blue",onClick:t},a.a.createElement("h3",null,e.answer.toUpperCase())):a.a.createElement(A.a,{className:"answer-item",onClick:t},a.a.createElement("h3",null,e.answer.toUpperCase()))})),R=function(e){var t=e.answers;return a.a.createElement("div",{id:"answers-wrapper"},t.map(function(e){return a.a.createElement(T,{key:e,answer:e})}))},_=function(e){var t=e.number,n=e.question;return a.a.createElement("div",null,a.a.createElement(z.a,{id:"question-prompt",warning:!0},a.a.createElement(z.a.Header,null,"Question #",t),a.a.createElement(z.a.Content,null,n.prompt)),a.a.createElement(R,{answers:n.answers}))},I=n(24),x=n(97),L=Object(f.b)(function(e){return{currentQuiz:e.currentQuiz,selectedAnswer:e.currentQuiz.selectedAnswer}},function(e){return{submitAnswer:function(t){return e(function(e){var t=e.questions[e.questionNumber-1],n=Object(x.a)(e.correctQs),r=Object(x.a)(e.incorrectQs);return t.correctAnswer===e.selectedAnswer?n.push(t):r.push(t),function(t){e.questionNumber===e.questions.length?(t({type:"SUBMIT_ANSWER",payload:Object(I.a)({},e,{correctQs:n,incorrectQs:r,questionNumber:e.questionNumber+1,completed:!0})}),t({type:"RESET_CATEGORY"})):(t({type:"SUBMIT_ANSWER",payload:Object(I.a)({},e,{correctQs:n,incorrectQs:r,questionNumber:e.questionNumber+1})}),t({type:"CLEAR_SELECTED_ANSWER"}))}}(t))}}})(function(e){var t=function(){e.submitAnswer(e.currentQuiz)};return e.currentQuiz&&!e.currentQuiz.completed?a.a.createElement("div",{className:"quiz-page-wrapper"},a.a.createElement(k.a,{as:"h4",id:"question-number"},e.currentQuiz.questionNumber," of ",e.currentQuiz.questions.length),a.a.createElement(k.a,{id:"quiz-title",as:"h1",textAlign:"center"},e.currentQuiz.categoryName," Quiz"),a.a.createElement(_,{number:e.currentQuiz.questionNumber,question:e.currentQuiz.questions[e.currentQuiz.questionNumber-1]}),e.selectedAnswer?a.a.createElement("div",{id:"submit-answer-btn"},a.a.createElement(h.a,{onClick:t,basic:!0,size:"large",primary:!0},"Submit")):null):a.a.createElement(S.a,{to:"/results"})}),W=function(e){var t=e.question;return a.a.createElement("div",{className:"incorrect-item"},a.a.createElement(z.a,{attached:!0,color:"red"},a.a.createElement(z.a.Header,null,"Question: ",t.prompt)),a.a.createElement(z.a,{attached:"bottom",info:!0},a.a.createElement(z.a.Header,null,"Correct Answer: ",t.correctAnswer.toUpperCase())))},U=function(e){var t=e.currentQuiz;return a.a.createElement("div",{id:"incorrect-box-wrapper"},a.a.createElement(k.a,{as:"h2",textAlign:"center"},"Incorrect Answers"),t.incorrectQs.map(function(e){return a.a.createElement(W,{key:e.id,question:e})}))},G=(n(280),Object(f.b)(function(e){return{currentQuiz:e.currentQuiz}})(function(e){var t=e.currentQuiz;return t?a.a.createElement("div",{id:"result-page-wrapper"},a.a.createElement(z.a,{info:!0,id:"result-message"},a.a.createElement(z.a.Header,null,"YOU ANSWERED"),a.a.createElement(z.a.Content,null,t.correctQs.length," out of ",t.questions.length," Correctly")),a.a.createElement("div",{id:"back-home-btn"},a.a.createElement(b.a,{to:"/"},a.a.createElement(h.a,{color:"yellow",size:"large"},"Back to Home"))),t.incorrectQs.length?a.a.createElement(U,{currentQuiz:t}):null):a.a.createElement(S.a,{to:"/"})})),H=n(307),B=function(e){return a.a.createElement(H.a,{inverted:!0,borderless:!0,color:"green"},a.a.createElement(H.a.Item,{fitted:"vertically",id:"navbar-header"},a.a.createElement(b.a,{to:"/"},"Quizzer")))},D=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(d.a,{basename:"/Quizzer"},a.a.createElement(a.a.Fragment,null,a.a.createElement(B,null),a.a.createElement(E.a,{exact:!0,path:"/",render:function(){return a.a.createElement(N,null)}}),a.a.createElement(E.a,{exact:!0,path:"/quiz",render:function(){return a.a.createElement(L,null)}}),a.a.createElement(E.a,{exact:!0,path:"/results",render:function(){return a.a.createElement(G,null)}}))))}}]),t}(r.Component),F=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchCategories()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null)}}]),t}(a.a.Component),M=Object(f.b)(null,function(e){return{fetchCategories:function(){return e(function(e){e({type:"LOADING"}),w.fetchCategories().then(function(t){e({type:"FETCH_CATEGORIES",payload:t})})})}}})(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(34),J={loading:!1,categories:[]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CATEGORIES":return{loading:!1,categories:t.payload};case"LOADING":return Object(I.a)({},e,{loading:!0});default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_CATEGORY":return t.payload;case"RESET_CATEGORY":return null;default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_QUIZ":return Object(I.a)({},t.payload,{questionNumber:1});case"SELECT_ANSWER":return e.selectedAnswer===t.payload?Object(I.a)({},e,{selectedAnswer:null}):Object(I.a)({},e,{selectedAnswer:t.payload});case"CLEAR_SELECTED_ANSWER":return Object(I.a)({},e,{selectedAnswer:null});case"SUBMIT_ANSWER":return t.payload;default:return e}},P=Object(Y.c)({categories:Z,selectedCategory:$,currentQuiz:K}),V=n(140),X=Object(Y.d)(P,Object(Y.a)(V.a));u.a.render(a.a.createElement(f.a,{store:X},a.a.createElement(a.a.Fragment,null,a.a.createElement(M,null),a.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[151,2,1]]]);
//# sourceMappingURL=main.8ed1e843.chunk.js.map