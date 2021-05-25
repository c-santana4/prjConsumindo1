import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Cadastrar', url: 'cadastrar', icon: 'log-in' },
    { title: 'Lista', url: 'lista', icon: 'list' },
  ];
  constructor() {}
}
