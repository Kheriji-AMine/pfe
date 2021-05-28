import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { JarwisService } from './shared/services/jarwis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plate-ang';
  error: any;
  constructor(private formBuilder: FormBuilder,
    private Jarwis: JarwisService,
  private router: Router,)
  {
    const email ='';
    const password = '';
    /*
    this.authservice.login(email,password).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
    */
  }

  /*
  handleResponse(data) {
    this.Token.handle(data);
    console.log(data.user);
    localStorage.setItem('user', JSON.stringify(data));
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  */
}
