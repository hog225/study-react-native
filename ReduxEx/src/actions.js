export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
import uuidV4 from 'uuid/v4'

export function addBook (book) {
    console.log('ADD Action book Obj: ', book)
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: uuidV4()
        }
    }
}

export function removeBook(book) {
    console.log('DEL Action book Obj: ', book)
    return {
        type: REMOVE_BOOK,
        book
    }
}