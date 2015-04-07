import { Store } from 'flummox'
import Immutable from 'immutable'

export default class MessageStore extends Store {
    constructor(flux) {
        super()
        const messageActions = flux.getActions('messages')
        this.register(messageActions.newMessage, this.handleNewMessage)
        this.state = { list: Immutable.List(), count: 0 }
    }

    handleNewMessage(data) {
        this.setState({
            list: this.state.list.push(data),
            count: this.state.count + 1
        })
    }

    getCount() {
        return this.state.count
    }

    getMessages() {
        return this.state.list
    }

}
