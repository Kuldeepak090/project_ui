import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        userName: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    this.authService.login();
    console.log(JSON.stringify(this.loginForm.value));
    // if (this.loginForm.invalid) {
    //   alert('Form Invalid');
    // } else {
    //   console.log(JSON.stringify(this.loginForm.value));
    //   this.loginForm.reset();
    //   this.loginForm.removeValidators;
    // }
  }

}
