import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/shared/classes/publication';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  publication: Publication = new Publication();
  submitted = false;

  constructor(private publicationService: PublicationService,
    private router: Router) { }

  ngOnInit() {
  }

  newPublication(): void {
    this.submitted = false;
    this.publication = new Publication();
  }

  save() {
    this.publicationService.createPublication(this.publication)
      .subscribe(data => console.log(data), error => console.log(error));
    this.publication = new Publication();
    //this.gotoList();    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/publications']);
  }

}
