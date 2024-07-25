<template>
    <div>
        <div class="flex justify-between mb-8">
            <div>
                <label class="text-2xl font-bold">Books List</label>
            </div>
            <div>
                <button v-on:click="goToCreate" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">Add New Book</button>
            </div>
        </div>
        <div class="w-full relative overflow-x-auto">
            <DataTable :head="books.bookHeaders" :body="books.bookData"></DataTable>
        </div>
    </div>
</template>

<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import router from '@/router';
import { useBookStore } from '@/stores/books.store';
import { onMounted } from 'vue';

const books = useBookStore();

const goToCreate = () => {
    router.push({name: "CreateBook"})
}

onMounted(() => {
    books.getBookData();
    books.getBookHeader();
})

</script>

<style></style>