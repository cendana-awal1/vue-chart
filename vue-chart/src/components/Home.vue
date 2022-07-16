<template>

<div class="container">
    <div class="row">
        {{indahData}}
        <br>
        <br>
        <div class="col-md-10">
            <ul v-for="item in dataPils" :key="item">
                <li >
                    {{ item.name }} - {{ item.suara }}

                </li>
            </ul>
        </div>
    </div>
</div>


</template>
<script setup>
import pilkadas from '../firebase';
import {getDocs, doc, deleteDoc} from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { computed } from '@vue/reactivity';

const dataPils = ref([]);


const fetchData = async () => {

    const docs = await getDocs(pilkadas);
    let dataPil = [];
    docs.forEach(doc => {
        let data = doc.data();
        data.id = doc.id;
        dataPil.push(data);
    });
    dataPils.value = dataPil;
    console.log(dataPil);
};

onMounted(() => {
    fetchData();
});

const deletePil = async (id) => {
    await deleteDoc(pilkadas, id);
    fetchData();
};
const sumData = computed(() => {
  return  dataPils.value.reduce((acc, cur) => {
        return acc + cur.suara;
    }, 0);
});

const indahData = computed(() => {
    return dataPils.value.filter((item) => {
        if(item.name === 'Indah Putri'){
            item.name.includes('Indah Putri');
        }
    });
});


</script>
<style scoped></style>