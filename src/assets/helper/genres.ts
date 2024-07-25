import type { Genre } from "@/stores/books.store";
import { ref } from "vue";

export const genres = ref<Genre[]>([
    { name: "Classic" },
    { name: "Tragedy" },
    { name: "Dystopian" },
    { name: "Science Fiction" },
    { name: "Historical Fiction" },
    { name: "Romance" },
    { name: "Fantasy" },
    { name: "Adventure" },
    { name: "Literary Fiction" }
]);