import { MessageRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessageRepository;
  constructor() {
    // service is creating its own dependencies
    // DONT DO THIS IN REAL APPS
    this.messagesRepo = new MessageRepository();
  }
}
