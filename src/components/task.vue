<template>
  <div>
    <h2>{{ msg }}</h2>
    <form>
      <button class="addTodo" v-on:click="addTodo()">追加</button>
      <button class="removeTodo" @click="removeTodo()">削除</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p class="task">task: {{ newTodo }}</p>
    </form>
    <div class="task-list">
      <h3>List</h3>
      <label class="task-list_item"
             v-for="todo in todos"
             v-bind:class="{ 'task-list_item--checked': todo.done }">
        <input class="remove" type="checkbox" v-model="todo.done"><span class="check-parts">完了</span>
        <input type="checkbox" v-model="todo.editing"><span class="editing_btn">編集</span>
        <input class="editing_box"
              v-if="todo.editing"
              v-model="todo.text"
              @keyup.enter="todo.editing = !todo.editing">
        <span class="todo_txt" v-else>{{ todo.text }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'TODO APP',
      todos : [

      ],
      newTodo : ""
    }
  },
  methods:{
    addTodo:function(event){
      var text = this.newTodo && this.newTodo.trim()
      if(!text){
        return
      }
      this.todos.push({
        text:text,
        done:false,
        editing: false

      })
      this.newTodo = ''
    },
    removeTodo:function(event){
      for (var i = this.todos.length - 1; i >= 0; i-- ){
        if(this.todos[i].done)this.todos.splice(i,1)
      }

    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@mixin flexbox() {
  display: flex;
  display: -ms-flex-box;

}
h2{
  font-size: 1.5em;
  margin-top: 30px;
}
  form{
  button{
    font-size: 1em;
    border:none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    padding:.5em 1em;
    margin-right: 1em;

  }
  p{
    margin-top: 20px;
      font-size: 1.5em;
      input{
        width: 300px;
        height: 30px;
        font-size: 0.7em;
      }
  }
  .task{
    font-size: 1.5em;
    font-weight: bold;
    background: #000;
    color:#fff;
    padding: 10px 0;
    position: relative;
    &::after{
      content: '▼';
      display: inline-block;
      position: absolute;
      bottom: -20px;
      left: 48%;
      color: #000;
      transform: scaleX(3);
    }
  }
  .addTodo{
    background: #48AF7B;
  }
  .removeTodo{
    background: #fd3f67;
  }
}
.task-list {
  @include flexbox;
  flex-direction:column;
  align-items: center;
  h3{
    text-align: left;
    font-size: 1.5em;
    width: 80%;
  }
  &_item {
    width: 80%;
    text-align: left;
    font-size: 1.2em;
    border-bottom: 1px solid #c3c3c3;
    padding:10px 0;
    &--checked {
      color: #85a6c6;
    }
    input.remove{
      display: none;

    }
    .check-parts{
      padding-left: 20px;
      position:relative;
      margin-right: 20px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 4px;
        left: 0;
        width: 16px;
        height: 16px;
        border: 1px solid #999;
        border-radius: 50%;
        background: #f1f1f1;
      }
    }
    .remove:checked + .check-parts::after{
      content: "";
      display: block;
      position: absolute;
      top: 6.5px;
      left: 3px;
      width: 12px;
      height: 12px;
      transform: rotate(40deg);
      background: #fd3f67;
      border-radius: 50%;
  }
  .editing_btn{
    padding-right: 100px;
  }
  .editing_box{
    font-size: 1.1em;
  }
  .todo_txt{
    font-size: 1.1em;
  }

}
}
</style>
