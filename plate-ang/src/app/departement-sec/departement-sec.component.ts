import { SectionsService } from '../shared/services/section.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departement-sec',
  templateUrl: './departement-sec.component.html',
  styleUrls: ['./departement-sec.component.css']
})
export class DepartementSecComponent implements OnInit {
  id: any;
  sections: any[];
  user: any;

  constructor(private router: Router, private actrouter: ActivatedRoute, private sectionService: SectionsService) { }

  ngOnInit(): void {
    //this.actrouter.queryParams.subscribe(params => {
      this.user = JSON.parse(localStorage.getItem('currentUser'));
      this.id =  this.actrouter.snapshot.paramMap.get('id');
      this.getSections(this.id);
      console.log(this.id); // Print the parameter to the console. 
 // });
  }

  getSections(id): void {
    this.sectionService.getSections(this.user.token)
        .subscribe(specialite => {
          this.sections = specialite["records"];
          console.log('departements liste',this.sections);
          this.sections = this.sections.filter(s => {
            return s.departement_id == id;
          })
        });
        
  }

}
