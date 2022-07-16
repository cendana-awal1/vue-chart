<template>
  <div class="container">
    <div class="row">
      <div class="col-md-10">
        <div class="card">
          <form  @submit.prevent="create">
            <div class="card-header">
              <h4>Create</h4>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label for="name">Name</label>
                <select  id="name" class="form-control">
                  <option value=""> --pilih-- </option>
                  <option v-for="item in items" :value="item.name">{{ item.name }}</option>
                </select>
              </div>
              <div class="form-group">
                <label for="number">Jumlah Suara</label>
                <input
                  type="number"
                  class="form-control"
                  id="email"
                  v-model="data.suara"
                />
              </div>
              <div class="card-footer">
                <button type="submit" class="btn btn-primary" >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import pilkadas from "../firebase";
import { addDoc } from "@firebase/firestore";
import { reactive } from "vue";
import { async } from "@firebase/util";

const items =reactive([
  {name: "Indah Putri"},
  {name: "Karim"},
  {name: "Rizki"},
  {name: "Tahar"},
  {name: "Yudha"},
])
const data = reactive({
  name: "",
  suara: ""
});


const create = async () => {
  const pilkada = {
    name: data.name,
    suara: data.suara
  };
    await addDoc(pilkadas, pilkada);
    data.name = "";
    data.suara = "";
  
};
  





</script>
<style scoped></style>
