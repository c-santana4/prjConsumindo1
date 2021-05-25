import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  user = {
    name: '',
    email: ''
  };
  constructor(
    private apiService: ApiService,
    private router: Router,
    public alertController: AlertController,
  ) {
    this.apiService.insertData(this.user);
  }

  ngOnInit() {
  }

  async successAlert() {
  const alert = await this.alertController.create({
    header: 'Perfeito!',
    message: 'Cadastrado com sucesso!',
    buttons: ['Ok']
  });

  await alert.present();

  const { role } = await alert.onDidDismiss();
  //console.log('onDidDismiss resolved with role', role);
  }
  onSubmit(){
    if(this.user.name === '' || this.user.email === ''){
      return;
    }
    console.log(this.user);
    const name = this.user.name;
    const email = this.user.email;
    this.apiService.insertData({name, email}).subscribe();
    this.router.navigate(['']);
    this.successAlert();
  }
}
