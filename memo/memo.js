const vm = new Vue({
    el: '#app',
    data: {
      items: [],
      newItemTitle: '',
    },
    methods: {
      updateCheck: function(childChecked, childIndex){  //updateCheckメソッドをまるっと追加
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === childIndex) {
            this.items[i].isChecked = childChecked;
            break;
          }
        }
        this.saveTodo();
      },
      addTodo: function(newTitle){
        let date = Date.now(); //idに利用する数値
        this.items.push({
          title: newTitle,
          isChecked: false,
          id: date  //idを追加
        });
        this.newItemTitle = '';
        this.saveTodo();
      },
      deleteTodo: function(){
        this.items = this.items.filter(function (item) {
          return item.isChecked === false;
        });
        this.saveTodo();
      },
      saveTodo: function(){
        localStorage.setItem('items', JSON.stringify(this.items));
      },
      loadTodo: function(){
        this.items = JSON.parse( localStorage.getItem('items') );
        if( !this.items ){
          this.items = [];
        }
      },
    },
    mounted: function(){
      this.loadTodo();
    },
  })

  Vue.component('todo-item', {
    props: ['title','isChecked','id'],
    template: `
    <li class="list-complete-item">
      <label v-bind:class="{ done: isChecked }">
        <input type="checkbox" v-model="childisChecked" v-on:change="deleteCheck"> {{ title }}
      </label>
    </li>`,
    data: function(){
      return {
        childisChecked: this.isChecked  //v-modelでisCheckedを指定できないため追加
      }
    },
    methods: {
      deleteCheck: function(){
        this.$emit('delete', this.childisChecked, this.id);
      }
    }
  })