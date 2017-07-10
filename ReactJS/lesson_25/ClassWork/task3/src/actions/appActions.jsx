import dispatcher from '../dispatcher.jsx'

export function plusWorker() {
    dispatcher.dispatch({ type: 'PLUS'})
}
export function minusWorker() {
    dispatcher.dispatch({ type: 'MINUS'})
}
export function multiWorker() {
    dispatcher.dispatch({ type: 'MULTI'})
}
export function divideWorker() {
    dispatcher.dispatch({ type: 'DIVIDE'})
}