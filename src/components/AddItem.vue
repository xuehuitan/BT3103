<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
      <label>Item Name</label>
      <input type="text" v-model.lazy="item.name" required>
      <inline class="inline">
      <label>Item Category</label>
      <ul>
        <li v-for="cat in categories" v-bind:key = "cat">
        <input type="checkbox" v-model.lazy="item.category" v-bind:value="cat" required/> <!-- v-bind:value is what causes the checks -->
        {{ cat }}
        </li>
      </ul>
      </inline>
      <label>Time Added</label>
      <input type="time" v-model.lazy="item.timestamp" required/>
      <br>
      <button v-on:click.prevent="addItem">Add Item</button>
    </form>
  </div>
</template>

<script>

import database from '../firebase.js'
export default {
  data(){
    return{
        msg:"Add Item",
        item:{
          name:'',
          category: [],
          timestamp: '',
        },
        categories: ['Beverage', 'Poultry', 'Fruits',
                    'Vegetables', 'Cereal', 'Pastry',
                    'Dairy', 'Chilled', 'Raw'
        ],
    }
  },
  methods:{
    addItem:  function () {
          //Save item to database
          database.collection('items').add(this.item);
          this.item.name="";
          this.item.category="";
          //database.collection('items').add(this.item);
          alert("I am in the DB .... :-) Item saved successfully")
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}

ul {
  list-style-type:none;
  padding: 0;
}
ul li {
  display: inline;
}
.inline {
  display: inline-flex;
}
</style>