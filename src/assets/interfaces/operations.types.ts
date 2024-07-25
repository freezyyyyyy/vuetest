interface HttpOperation {
    name: string
    code: string
}


export const httpOperations: HttpOperation[] = [
    {
        name: "GET",
        code: "01"
    },
    {
        name: "POST",
        code: "02"
    },
    {
        name: "PUT",
        code: "03"
    },
    {
        name: "DELETE",
        code: "04"
    },
    {
        name: "PATCH",
        code: "05"
    }
]