import dispatcher from '../dispatcher.jsx'

export function getStarted() {
    dispatcher.dispatch({ type: 'START'})
}
export function getClear() {
    dispatcher.dispatch({ type: 'CLEAR'})
}
