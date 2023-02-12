import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, Validators } from '@angular/forms';
// import { passwordMatch } from './password-match/password.match.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) { }

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        mobileNumber: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      }
    );
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('Form Invalid');
    } else {
      console.log(JSON.stringify(this.registerForm.value));
      this.registerForm.reset();
      this.registerForm.removeValidators;
    }
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

}
