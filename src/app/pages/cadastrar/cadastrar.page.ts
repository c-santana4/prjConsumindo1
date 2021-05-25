import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  constructor(private apiService: ApiService, private router: Router, public alertController: AlertController) {
    this.showData()
  }

  ngOnInit() {
  }

  showData() {
    this.apiService.getData().subscribe(data => {
      //console.log(data)
    })
  }

 user = {
   name: '',
   email: ''
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
    //console.log('@&#$y@#&eAY87FSFY87E')
    //console.log(this.user)
    this.router.navigate([''])
    this.successAlert()
  }
}
