Vue.component('my-component', {
    template: '<div>{{message}}, A gloval component!!</div>',
    data: function(){
        return {
            message: 'Hello!!'
        }
    }
})

const vm = new Vue({
    el: '#example',
})

var Child = {
    template: '<div>A local component!!</div>'
}
const vm2 = new Vue({
    el: '#example2',
    components: {
        'my-component': Child
    }
})

Vue.component('child', {
    props: ['message'],
    template: '<span>{{message}}</span>'
})
const vm3 = new Vue({
    el: '#example-3'
})

Vue.component('child', {
    props: ['myMessage'],
    template: '<span>{{myMessage}}</span>'
})

const vm4 = new Vue({
    el: '#example-4',
    data: {
        parentMsg: 'Message from parent'
    }
})

Vue.component('todo-item', {
    props: ['text', 'isComplete'],
    template: '<div>{{text}} - {{isComplete}}</div>'
})
const vm5 = new Vue({
    el: '#example-5',
    data: {
        todos: [
        {
            text: 'Learn Vue',
            isComplete: false,
        },
        {
            text: 'Learn Vue-2',
            isComplete: true,
        },
    ]
    }
})

Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function(){
        return {
            counter: 0
        }
    },
    methods: {
        incrementCounter: function(){
            this.counter += 1
            this.$emit('increment')
        }
    }
})

const vmcounter = new Vue({
    el: '#counter-event-example',
    data: {
        total: 0
    },
    methods: {
        incrementTotal: function(){
            this.total += 1
        }
    }
})