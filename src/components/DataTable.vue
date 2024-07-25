<style>
.table__role-card {
    padding: 4px;
    background-color: rgb(176, 217, 255);
    color: rgb(24, 24, 116);
    font-family: sans-serif;
    font-weight: 600;
    border-radius: 6px;
}

.table__role-container {
    display: flex;
    gap: 1em;
}

.multiselect__tags-wrap {
    display: flex;
    gap: 0.5em;
}

table {
    font-family: sans-serif;
}
</style>

<template>
    <div>
        <table class="w-full table-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th class="text-center px-6 py-3" v-for="head in props.head">{{ head.name }}</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    v-for="(book, index) in body">
                    <td>{{ index + 1 }}</td>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {{ book.title }}
                    </td>
                    <td class="px-6 py-4">{{ book.author }}</td>
                    <td class="px-6 py-4">
                        <div class="table__role-container justify-center">
                            <div v-for="genre in book.genre" class="table__role-card">
                                <span>{{ genre.name }}</span>
                            </div>

                        </div>
                    </td>
                    <td>
                        <div>
                            <span>{{ formatTimeStamp(book.releaseDate) }}</span>
                        </div>
                    </td>
                    <td>
                        <div class="flex gap-1 justify-center">
                            <button v-on:click="getId(book.id)"
                                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Edit</button>
                            <button v-on:click="deleteBook(book.id)"
                                class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">Delete</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { formatTimeStamp } from '@/assets/helper/timestampToDate';
import router from '@/router';
import { useBookStore, type Head } from '@/stores/books.store';
import { onMounted } from 'vue';

interface TableProps {
    head: Head[]
    body: any[]
}

const props = defineProps<TableProps>()
const bookService = useBookStore();

const getId = (id: any) => {
    router.push({ name: "BookDetail", params: { id: id } });
}

const deleteBook = (id: any) => {
    bookService.deleteBook(id);
}

onMounted(() => {
})

</script>