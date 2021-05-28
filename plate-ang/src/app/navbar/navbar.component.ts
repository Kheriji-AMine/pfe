import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../shared/classes/departement';
import { Section } from '../shared/classes/section';
import { DepartementsService } from '../shared/services/departement.service';
import { SectionsService } from '../shared/services/section.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  departements:Departement[];
departement:Departement;
  user: any;
  section: Section[];
  sections: Section[];

  constructor(private departementService:DepartementsService, private sectionService:SectionsService,private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getDepartements(this.user.token);
      console.log(this.getDepartements);
    }, 1000);

    setTimeout(() => {
      this.getSections(this.user.token);
      console.log(this.getSections);
    }, 1000);
  }


  getDepartements(token): void {
    this.departementService.getDepartments(token)
        .subscribe(specialite => {
          this.departements = specialite["records"];
          console.log('departements liste',this.departements);
        });
  }

  getSections(token): void {
    this.sectionService.getSections(token)
        .subscribe(specialite => {
          this.sections = specialite["records"];
          console.log('sections liste',this.sections);
        });
  }
 

}
