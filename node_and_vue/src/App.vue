<script setup>
import { ref } from "vue";
import { getRawRecipeHtml, urlValidator } from "./utils";
const inputValue = ref("https://www.tasteofhome.com/recipes/soy-sauce-chicken/")
const onChangeConsole = (e) => {
  e.preventDefault();
  console.log({e})
  console.log(inputValue)
  console.log(inputValue.value)
}

const onSubmit = (e) => {
  console.log({e})
  if(urlValidator(inputValue.value)) {
    getRawRecipeHtml(inputValue.value)
  }
}
</script>

<template>
  <div>
      <label>
        URL
        <input type="url" v-model="inputValue" @change="(e)=> onChangeConsole(e)" />
      </label>
      <br />
      <button @click="(e) => onSubmit(e)">Get me the Recipe</button>
      <br /><br />
      <code>
        InputValue: {{ inputValue }}
      </code>


  </div>
</template>

<style scoped>
input {
  width: 230px;
  height: 35px;
  font-size: large;
  border-radius: 5px;
}
</style>
