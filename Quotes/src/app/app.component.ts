import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { CommonService } from './common.service';

import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quotes';

  constructor (private newService: CommonService) {}
  Repdata;
  valbutton = "Save";
  address;
  name;
  id;

  ngOnInit() {
    this.newService.getUser().subscribe(data => this.Repdata = data);
  }

  onSave = function(user,isValid: boolean){
    user.mode = this.valbutton;
    this.newService.saveUser(user)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
      }, error => this.errorMessage = error )
  }
  edit = function(user) {
    this.id = user._id;
    this.name = user.name;
    this.address = user.address;
    this.valbutton = "Update";
  }

  delete = function(id) {
    this.newService.deleteUser(id)
      .subscribe(data => {
        alert(data.data);
        this.ngOnInit();
      }, error => this.errorMessage = error)
  }
}
