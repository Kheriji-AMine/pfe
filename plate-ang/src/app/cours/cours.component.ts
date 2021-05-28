import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cour } from '../shared/classes/cour';
import { CoursService } from '../shared/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  
  cours:Cour[];
cour:Cour;
  user: any;

  constructor(private coursService:CoursService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getCours(this.user.token);
      console.log(this.getCours["records"]);
    }, 1000);
  }


  getCours(token): void {
    this.coursService.getCours(token)
        .subscribe(specialite => {
          this.cours = specialite["records"];
          console.log('cours liste',this.cours);
        });
  }

}
