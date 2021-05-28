import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../shared/classes/publication';
import { PublicationsService } from '../shared/services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  
  publications:Publication[];
publication:Publication;
  user: any;

  constructor(private publicationService:PublicationsService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getPublications(this.user.token);
      console.log(this.getPublications["records"]);
    }, 1000);
  }


  getPublications(token): void {
    this.publicationService.getPublications(token)
        .subscribe(specialite => {
          this.publications = specialite["records"];
          console.log('publications liste',this.publications);
        });
  }

}
