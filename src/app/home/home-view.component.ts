import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'home-view',
  template: `
<form>
<label for="name">Name</label>

<input type="text" id="name" class="form-control"
       required minlength="4" maxlength="24"
       name="name" [formControl]="testctrl" >
<div>testctrl.pristine : {{testctrl.pristine}}</div><br/>
<div>testctrl.status : {{testctrl.status}}</div>
<hr/>
<span [hidden]="testctrl.pristine || testctrl.status === 'VALID'">EROR should be hidden at the beginning</span>
</form>`
})
export class HomeView {
    public testctrl  = new FormControl();
}
