import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First app angular 2';
  visible = false;

  decirAdios(){
  	this.visible = true;
  }
}
