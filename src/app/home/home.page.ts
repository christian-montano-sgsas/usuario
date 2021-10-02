import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public mFilter: any;
  public mUsuarios: any;
  public mMensaje: any;

  constructor(private users: UsersService,
              public navCtrl: NavController) {
    this.obtenerUsuarios();
  }

  refresh(ev) {
    setTimeout(() => {
      this.obtenerUsuarios();
      ev.detail.complete();
    }, 2000);
  }

  obtenerUsuarios(){
    this.users.obtenerUsuarios()
    .subscribe(
      (data) => {
        this.mUsuarios = data;
      }
    )
  }

  filtroUsuario(pEvent) {
    this.mFilter = pEvent.detail.value;

    this.mMensaje = this.mUsuarios.filter(it => {
      return it.name.toLowerCase().includes(this.mFilter);
    });
  }

  async irVerPublicacones(id) {
    this.navCtrl.navigateForward(["/publicacion/",id]);
  }

}
