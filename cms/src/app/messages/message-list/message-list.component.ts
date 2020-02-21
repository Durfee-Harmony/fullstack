import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Message } from '../messages.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  @Output() messageWasSelected = new EventEmitter<Message>();
  messages: Message[] = [
    new Message(1, 'subject', 'text', 'sender'),
    new Message(2, 'another subject', 'mroe text', 'diffferent sender'),
    new Message(3, 'this', 'can be done', 'more senders')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMessageSelected(message: Message) {
    this.messageWasSelected.emit(message);
  }

  onMessageAdd(message: Message) {
    this.messages.push(message);
  }
}
