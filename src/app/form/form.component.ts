import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  userForm: FormGroup;
  isFocused: { [key: string]: boolean } = { name: false, email: false, password: false, confirmPassword: false };
  isPasswordVisible: boolean = false; // For showing/hiding password
  isConfirmPasswordVisible: boolean = false; // For showing/hiding confirm password

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    // Ensure that both fields are filled out
    if (!confirmPassword) {
      return { passwordMismatch: false }; // Return mismatch if confirmPassword is empty
    }
  
    // Check if passwords match
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  // Handles focus state
  onFocus(field: string) {
    this.isFocused[field] = true;
  }

  // Handles blur state
  onBlur(field: string) {
    if (!this.userForm.get(field)?.value) {
      this.isFocused[field] = false;
    }
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  toggleConfirmPasswordVisibility() {
    this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      this.userForm.reset();

      // Remove active class from all labels
      Object.keys(this.isFocused).forEach((key) => {
        this.isFocused[key] = false;
      });
    }
  }
}

