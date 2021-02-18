const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hellor Vue.js!',
    isChecked: true,
  }
})

const vm1 = new Vue({
    el: '#list',
    data:{
        items:[
            {title: '項目1', id: 1},
            {title: '項目2', id: 2},
            {title: '項目3', id: 3},
        ]
    }
})

const vm3 = new Vue({
    el: '#event',
    data: {
        counter: 0
    },
    methods: {
        add :function(){
            this.counter ++
        },
    },
})