import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-button-event-binding';

  isDisabled: boolean = true

  toggle() {
    this.isDisabled = !this.isDisabled
    this.isDisabled ? "Currently Disabled" : "Currently Enabled"
  }
}
