import BookDetail from "@/views/BookDetail.vue";
import BooksList from "@/views/BooksList.vue";
import CreateBook from "@/views/CreateBook.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: "/", component: BooksList, name: "BooksData" },
    { path: "/book/:id", component: BookDetail, name: "BookDetail" },
    { path: "/book-new", component: CreateBook, name: "CreateBook" },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router
