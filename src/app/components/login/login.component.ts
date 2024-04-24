import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forgotEmail: string = ''; // Declare the forgotEmail property
  showForgotPasswordForm: boolean = false; // Declare the showForgotPasswordForm property

  loginForm!: FormGroup ;

  constructor(
    private service: JwtService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',[ Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  submitForm() {
    this.service.login(this.loginForm.value).subscribe(
      (response) => {
        console.log(response);
        if (response.jwtToken != null) {
          alert("Hello, Your token is " + response.jwtToken);
          const jwtToken = response.jwtToken;
          localStorage.setItem('jwt', jwtToken);
          this.router.navigateByUrl("/dashboard"); // Navigate to dashboard route
          this.toastr.success('Login is successfully', '', {
            timeOut: 5000,
            positionClass: 'toast-bottom-left'
          });
        } else {
          this.toastr.warning('Login failed. Please check your credentials.', '', {
            timeOut: 5000,
            positionClass: 'toast-bottom-left'
          });
        }
      },
      (error) => {
        console.error(error); // Log the error for debugging purposes
        this.toastr.error('Your information is not valide.', '', {
          timeOut: 5000,
          positionClass: 'toast-bottom-left'
        });
      }
    );
  }

  submitForgotPasswordForm() {
    // Handle forgot password form submission
  }
  

}  