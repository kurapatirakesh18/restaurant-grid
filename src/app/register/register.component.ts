

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  userService: any;
  errorMessage: string | undefined;

  constructor(private fb: FormBuilder,private router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  onRegister(): void {
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;
      if (this.userService.register(username, password)) {
        console.log("Registration Successful");
        this.router.navigate(['/login']); // Redirect to login after successful registration
        
      } else {
        this.errorMessage = "Username already exists. Please choose a different username.";
      }
    }
  }
}
