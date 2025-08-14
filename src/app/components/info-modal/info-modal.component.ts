import { Component, HostListener, input, output } from '@angular/core';

@Component({
  selector: 'eg-info-modal',
  standalone: true,
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent {
  // Control visibility from parent
  open = input<boolean>(false);
  // Notify parent when user closes the modal
  closed = output<void>();

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open()) this.closed.emit();
  }
}
