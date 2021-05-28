import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../shared/classes/message';
import { MessagesService } from '../shared/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  
  messages:Message[];
message:Message;
  user: any;

  constructor(private messageService:MessagesService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getMessages(this.user.token);
      console.log(this.getMessages["records"]);
    }, 1000);
  }


  getMessages(token): void {
    this.messageService.getMessages(token)
        .subscribe(specialite => {
          this.messages = specialite["records"];
          console.log('messages liste',this.messages);
        });
  }

}
