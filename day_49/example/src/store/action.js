import { ADD_TODO, DELETE_TODO, EDIT_TODO } from './constants'

// tạo function trả về obj gọi dispatch

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
}

export const editTodo = (newTodo) => {
    return {
        type: EDIT_TODO,
        payload: newTodo
    }
}