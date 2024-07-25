<template>
    <div class="flex justfy-start items-center gap-11 pb-3 pr-3">
        <button v-on:click="goBack"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Back</button>
        <label class="text-xl font-bold">Edit Book</label>
    </div>
    <div class="flex flex-col">
        <div>
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
            <input type="text" v-model="detail.title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div>
            <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
            <input type="text" v-model="detail.author"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        </div>
        <div>
            <label for="bookType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <input type="text" v-model="detail.bookType"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        </div>
        <div>
            <label for="bookType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release
                Date</label>
            <input type="date" v-model="(formattedDate)" @change="setDateFormat"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        </div>
        <div>
            <label for="multi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre </label>
            <Multiselect v-model="detail.genre" :options="genres" :multiple="true" placeholder="Select Genre"
                label="name" track-by="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </Multiselect>

        </div>
    </div>
    <div class="flex justify-center p-8">
        <button v-on:click="editBook"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Change
            Book Data</button>
    </div>
</template>

<script setup lang="ts">

import { genres } from '@/assets/helper/genres';
import router from '@/router';
import { useBookStore } from '@/stores/books.store';
import { onMounted, ref } from 'vue';
import Multiselect from 'vue-multiselect';
import { useRoute } from 'vue-router';

const route = useRoute();
const bookService = useBookStore();
const detail = ref('');

const goBack = () => {
    router.push('/')
}

let currentDate = ""

const setDateFormat = (e: Event) => {
    currentDate = e.target.value
    detail.value.releaseDate = new Date(currentDate).getTime();
}

const editBook = () => {
    bookService.updateBook(route.params.id, detail.value)
}

const convertDate = (dateInput: number) => {
    if (!dateInput) {
        return ""
    }
    const date = new Date(dateInput);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

let formattedDate = "";
let roles = ref('');

onMounted(async () => {
    const id = route.params.id
    if (id) {
        await bookService.getBookDetail(id);
        await bookService.getGenreOptionsData();
        detail.value = bookService.bookDetail
        formattedDate = convertDate(detail.value.releaseDate)
        console.log(detail.value.genre)
    }
})


</script>

<style></style>