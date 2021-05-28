import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from '../shared/classes/profil';
import { ProfilsService } from '../shared/services/profil.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  
  profils:Profil[];
profil:Profil;
  user: any;

  constructor(private profilService:ProfilsService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
    setTimeout(() => {
      this.getProfils(this.user.token);
      console.log(this.getProfils["records"]);
    }, 1000);
  }


  getProfils(token): void {
    this.profilService.getProfils(token)
        .subscribe(specialite => {
          this.profils = specialite["records"];
          console.log('profils liste',this.profils);
        });
  }

}
