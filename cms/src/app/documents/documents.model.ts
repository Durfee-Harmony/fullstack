import { Injectable } from '@angular/core';

@Injectable()
export class Document {
  constructor(public id: string,
              public name: string,
              public desc: string,
              public url: string,
              public children: Document[]) { }
}


// export class Document {
//   public documentId: number;
//   public name: string;
//   public desc: string;
//   public url: string;
//   public children: string[];

//   constructor(documentId: number, name: string, desc: string, url: string, children: string[]) {
//     this.documentId = documentId;
//     this.name = name;
//     this.desc = desc;
//     this.url = url;
//     this.children = children;
//   }
// }