import { Component, OnInit } from '@angular/core';
import { Document } from '../documents.model';
import { DocumentService } from '../documents.service';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {
    this.documents = this.documentService.getDocuments();}

  ngOnInit(): void {
  }

  onDocumentSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
  }
}