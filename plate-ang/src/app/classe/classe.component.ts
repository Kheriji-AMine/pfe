import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classe } from '../shared/classes/classe';
import { ClassesService } from '../shared/services/classe.service';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent implements OnInit {

  
  classes:Classe[];
classe:Classe;
  user: any;
  id: any;
  sub: any;

  constructor(private classeService:ClassesService, private router:Router, private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.actroute.params.subscribe( parms=>{
      this.id = +parms['id'];
    });
    console.log(this.id);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getClasses(this.user.token);
    }, 1000);
  }


  getClasses(token): void {
    this.classeService.getClasses(token)
        .subscribe(specialite => {
          this.classes = specialite["records"];
          console.log(this.classes);
          this.classes = this.classes.filter(s=>{
            return s.section_id == this.id;
          })
          console.log('classes liste',this.classes);
        });
  }

}
