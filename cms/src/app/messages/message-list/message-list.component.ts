import { Component, OnInit } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../messages.service';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
    this.messages = this.messageService.getMessages();
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messagesChanged
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      );
  }

  onMessageSelected(message: Message) {
    this.messageService.messageSelectedEvent.emit(message);
  }
}
