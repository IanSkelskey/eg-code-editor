import { Component, output } from '@angular/core';

@Component({
  selector: 'eg-fab-help-button',
  standalone: true,
  templateUrl: './fab-help-button.component.html',
  styleUrls: ['./fab-help-button.component.css']
})
export class FabHelpButtonComponent {
  // Emits when the button is clicked
  clicked = output<void>();
}
