import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  userList: any = [];

  constructor(private api: ApiService) {
    this.api.getData();
  }
  getData(){
    this.api.getData().subscribe((data) => {
      this.userList = data;
    });
  }
  ngOnInit() {
    this.getData();
  }

}
