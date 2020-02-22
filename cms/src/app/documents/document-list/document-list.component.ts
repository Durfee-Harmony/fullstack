import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [
    new Document(1, 'document name', 'document description', 'document url', null),
    new Document(2, 'another document', 'another document description', 'another document url', null),
    new Document(3, 'document 3.0', 'document desc 3.0', 'document url 3.0', null),
    new Document(4, 'fourth document', 'fourth document description', 'fourth document url', null)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document);
  }
}
