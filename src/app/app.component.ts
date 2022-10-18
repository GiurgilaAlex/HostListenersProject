import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  clickedValue: string = '';
  keyPressed: { [key: string]: number } = {};

  @HostListener('document:keydown', ['$event'])
  onKeyPressed(event: KeyboardEvent): void {
    if(Object.keys(this.keyPressed).find(k => k === event.key)) {
      this.keyPressed[event.key]++;
    } else {
      this.keyPressed[event.key] = 1;
    }
  }

  @HostListener('click', ['$event']) 
  onClick(event: MouseEvent): void {
    this.clickedValue = (event.target as any)['innerText'];
  }

  getData(): string[] {
    return Object.keys(this.keyPressed);
  }

  getValue(): number[] {
    return Object.values(this.keyPressed);
  }
}
