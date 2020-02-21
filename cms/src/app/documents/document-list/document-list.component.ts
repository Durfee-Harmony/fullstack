import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [ ];

  constructor() { }

  ngOnInit(): void {
  }

  onDocumentSelected(document: Document) {
    this.documentWasSelected.emit(document);
  }
}
