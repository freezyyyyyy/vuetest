import router from "@/router";
import axios from "axios";
import { defineStore } from "pinia";

export interface Book {
    title: string
    author: string
    bookID: string
    bookType: string
    releaseDate: number
    genre: Genre[]
}

export interface Head {
    name: string
}

export interface Genre {
    name: string
}

export const useBookStore = defineStore("book", {
    state: () => {
        return {
            bookDetail: null as Book | null,
            bookData: [] as Book[],
            bookHeaders: [] as Head[],
            newBookData: {} as Book,
            genreData: [] as Genre[]
        }
    },

    actions: {
        async getBookHeader() {
            try {
                const url = "http://localhost:3000/books-headers"
                const { data } = await axios.get(url);
                this.bookHeaders = data;
            } catch (error) {
                console.log(error)
            }
        },
        async getBookData() {
            try {
                const url = "http://localhost:3000/books"
                const { data } = await axios.get(url);
                this.bookData = data;
            } catch (error) {
                console.log(error);
            }
        },
        async getBookDetail(id: string) {
            try {
                const url = "http://localhost:3000/books/" + id
                const { data } = await axios.get(url);
                this.bookDetail = data;
            } catch (error) {
                console.log(error)
            }
        },
        async createNewBook(newBook: Book) {
            try {
                const url = "http://localhost:3000/books"
                const { data } = await axios.post(url, newBook);
                this.newBookData = {};
                router.push("/")
            } catch (error) {
                console.log(error)
            }
        },

        async updateBook(bookID: string, bookData: Book) {
            try {
                const url = "http://localhost:3000/books/" + bookID;
                const { data } = await axios.put(url, bookData);
                console.log(data);
                router.push("/")
            } catch (error) {
                console.log(error);
            }
        },

        async deleteBook(bookID: string) {
            try {
                const url = "http://localhost:3000/books/" + bookID;
                const { data } = await axios.delete(url);
                this.getBookData();
            } catch (error) {
                console.log(error);
            }
        },

        async getGenreOptionsData() {
            try {
                const url = "http://localhost:3000/genre-data";
                const { data } = await axios.get(url);
                this.genreData = data;
            } catch (error) {
                console.log(error)
            }
        }
    }
})