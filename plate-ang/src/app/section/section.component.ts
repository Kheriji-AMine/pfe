import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from '../shared/classes/section';
import { SectionsService } from '../shared/services/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  
  sections:Section[];
section:Section;
  user: any;
  id: any;
  sub: any;

  constructor(private sectionService:SectionsService, private router:Router, private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.actroute.params.subscribe( parms=>{
      this.id = +parms['id'];
    });
    console.log(this.id);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getSections(this.user.token);
    }, 1000);
  }


  getSections(token): void {
    this.sectionService.getSections(token)
        .subscribe(specialite => {
          this.sections = specialite["records"];
          console.log(this.sections);
          this.sections = this.sections.filter(s=>{
            return s.departement_id == this.id;
          })
          console.log('sections liste',this.sections);
        });
  }

}
