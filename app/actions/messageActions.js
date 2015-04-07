import { Actions } from 'flummox'

export default class MessageActions extends Actions {
    newMessage(content) {
        return {
            content,
            id: Date.now()
        }
    }
}
