import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {
  public mUsuario: any;
  public mPublicaciones: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private users: UsersService,
    private navCtrl: NavController
  ) { 
    this.mUsuario = null;
  }

  ngOnInit() {
     const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.users.obtenerUsuarioEspecifico(id)
    .subscribe(
      (data) => {
        this.mUsuario = data;
        this.obtenerPublicaciones(this.mUsuario.id);
      }
    )
  }

  obtenerPublicaciones(userId){
    this.users.obtenerPublicaciones(userId)
    .subscribe(
      (data) => {
        this.mPublicaciones = data;
      }
    )
  }

  onClickNavBack() {
    this.navCtrl.navigateBack("/home");
  }

}
