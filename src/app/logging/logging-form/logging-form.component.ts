import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggingService } from 'src/app/shared/service/logging.service';

@Component({
  selector: 'app-logging-form',
  templateUrl: './logging-form.component.html',
  styleUrls: ['./logging-form.component.scss']
})
export class LoggingFormComponent implements OnInit {
  username: '';
  password: '';
  connectionForm: AbstractControl;
  errorLogin: boolean;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly router: Router,
              private readonly loggingService: LoggingService) { }

  ngOnInit() {
    this.errorLogin = false;
    this.connectionForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitt(): void {
    console.log('Tentative de connexion');
    this.loggingService.Login(this.username, this.password)
    .subscribe(
      () => {
        console.log('succes');
        this.errorLogin = false;
        this.router.navigate(['/computers']);
      }, (error => {
        console.log(error);
        this.errorLogin = true;
        this.router.navigate(['/logging']);
      })
    );
  }
  submit(): void {
    console.log('Tentative de connexion');
    if (this.username === 'username' && this.password === 'password') {
      console.log('succes');
      this.errorLogin = false;
      this.router.navigate(['/computers']);
    } else {
      console.log('error');
      this.errorLogin = true;
      this.router.navigate(['/logging']);
    }
  }
}
