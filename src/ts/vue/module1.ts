let app = new Vue({
    el: '#app',
    data: {
        message: "hello world!"
    }
})


let app2 = new Vue({
    el: '#app-2',
    data: {
        message: "shis"
    }
});



let app3 = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})



let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})

app4.$data.todos.push({
    text: 'shit'
})




let app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})



let app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
let app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { text: 'Vegetables' },
      { text: 'Cheese' },
      { text: 'Whatever else humans are supposed to eat' }
    ]
  }
});




let vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello This is Silver\'s Vuejs'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
    now: function () {
        return Date.now()
   }
  },
  methods: {
      nowmethod: function(){
          return Date.now();
      }
  }
});


var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
    // ajax请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle), 参考: https://lodash.com/docs#debounce
    getAnswer:  
      function () {
        var vm = this
        if (this.question.indexOf('?') === -1) {
          vm.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
         vm.answer = 'yes , this is a shit';
      } 
      
  }
})


 