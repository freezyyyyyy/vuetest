<template>
    <div class="flex pb-8 items-center gap-11">

        <button v-on:click="goBack"
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Back</button>
        <label class="text-2xl font-bold">Create New Book</label>
    </div>
    <div>
        <div>
            <div>
                <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                <input type="text" v-model="newBook.title"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="author" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author</label>
                <input type="text" v-model="newBook.author"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="bookType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                <input type="text" v-model="newBook.bookType"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>
            <div>
                <label for="bookType" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release
                    Date</label>
                <input type="date" v-model="currentDate" @change="setDateFormat"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            </div>

            <div>
                <label for="multi" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genre </label>
                <Multiselect v-model="newBook.genre" :options="genres" :multiple="true" placeholder="Select Genre"
                    label="name" track-by="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </Multiselect>
            </div>
        </div>

        <div class="p-8 flex justify-center">
            <button v-on:click="submitNewBook"
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Create Book Data</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { genres } from '@/assets/helper/genres';
import router from '@/router';
import { useBookStore } from '@/stores/books.store';
import { onMounted } from 'vue';
import Multiselect from 'vue-multiselect';

onMounted(() => {
    newBookService.getGenreOptionsData()
})

let currentDate = ""

const goBack = () => {
    router.push("/")
}

const setDateFormat = (e: Event) => {
    console.log(currentDate)
    currentDate = e.target.value
    newBook.releaseDate = new Date(currentDate).getTime();

}

const submitNewBook = () => {
    newBookService.createNewBook(newBook);
}

const newBook = useBookStore().newBookData;
const newBookService = useBookStore();

</script>