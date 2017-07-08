import dispatcher from '../dispatcher.jsx'

export function getStyles() {
    dispatcher.dispatch({ type: 'STYLES'})
}

