import dispatcher from '../dispatcher.jsx'

export function addItem(item) {
    dispatcher.dispatch({
        type: 'ADD_ITEM',
        item
    })
}
export function removeItem(id) {
    dispatcher.dispatch({
        type: 'REMOVE',
        id
    })
}
export function checkItem(id) {
    dispatcher.dispatch({
        type: 'CHECK',
        id
    })
}