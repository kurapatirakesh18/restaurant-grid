import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
logOut() {
throw new Error('Method not implemented.');
}
  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder,private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login successful', this.loginForm.value);
      this.router.navigate(['home']);
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }
  home(){
    this.router.navigate(['home']);
  }
  
}
