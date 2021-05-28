import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enseignant } from '../shared/classes/enseignant';
import { EnseignantsService } from '../shared/services/enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {

  
  enseignants:Enseignant[];
enseignant:Enseignant;
  user: any;

  constructor(private enseignantsService:EnseignantsService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getEnseignants(this.user.token);
      console.log(this.getEnseignants["records"]);
    }, 1000);
  }


  getEnseignants(token): void {
    this.enseignantsService.getEnseignants(token)
        .subscribe(specialite => {
          this.enseignants = specialite["records"];
          console.log('enseignants liste',this.enseignants);
        });
  }

}
