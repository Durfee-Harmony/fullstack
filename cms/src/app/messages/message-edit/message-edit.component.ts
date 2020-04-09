import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../messages.model';
import { MessageService } from '../messages.service';
import { Contact } from '../../contacts/contacts.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject', { static: false }) subjectInputRef: ElementRef;
  @ViewChild('msgText', { static: false }) msgTextInputRef: ElementRef;
  currentSender: Contact = {
    _id: null, id: '25',
    name: 'Harmony',
    email: 'dur18011@byui.edu',
    phone: '000-000-0000',
    imageUrl: 'https://image.shutterstock.com/image-vector/music-notes-background-colorful-gclef-260nw-626501552.jpg',
    group: null
  };

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const subject = this.subjectInputRef.nativeElement.value;
    const msgText = this.msgTextInputRef.nativeElement.value;
    const newMessage = new Message(null, 'id', subject, msgText, this.currentSender.id);
    this.messageService.addMessage(newMessage);
  }

}
