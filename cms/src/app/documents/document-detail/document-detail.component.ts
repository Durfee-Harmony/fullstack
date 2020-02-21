import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../documents.model';

@Component({
  selector: 'cms-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  @Input() doc: Document;

  constructor() { }

  ngOnInit() {
  }

}
