// Main Flux (Flummox) Class
import Flummox from 'flummox'

import MessageActions from './actions/messageActions'
import MessageStore from './stores/messageStore'

export default class Flux extends Flummox {
    constructor() {
        super()
        this.createActions('messages', MessageActions)
        this.createStore('messages', MessageStore, this)
    }
}
