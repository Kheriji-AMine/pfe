import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/shared/classes/publication';
@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  publications:Publication[];
publication:Publication;

  constructor(private publicationService:PublicationService, private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.getPublications();
      console.log(this.getPublications);
    }, 1000);
  }


  getPublications(): void {
    this.publicationService.getPublications()
        .subscribe(specialite => {
          this.publications = specialite["records"];
          console.log('publications liste',this.publications);
        });
  }

  

  deletePublication(publication:Publication): void {
    this.publicationService.deletePublication(publication).subscribe(
      data => {
        console.log(data);
        this.getPublications();
      },
      error => console.log(error)
    );
    //window.location.replace('/publications');

  }

  publicationDetails(id: number){
    this.router.navigate(['detail', id]);
  }

  EditPublication(id: number){
    this.router.navigate(['edit', id]);
  }

}
