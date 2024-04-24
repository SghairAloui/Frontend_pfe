import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  
})

export class DashboardComponent {
  isSidebarOpen: boolean = false;

  message : string;
  constructor(private router: Router,
    private service: JwtService
  ) { this.message = ''; }

  ngOnInit() {
    this.success();
  }


  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log('vbvv')
  }

 

  success() {
    this.service.success().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;

      }
    )
  }

  logout() {
    // For example, remove tokens from local storage
    localStorage.removeItem('token');
    // Add logic to clear authentication tokens or user session data

    // Navigate the user to the login page
    this.router.navigate(['/login']);
  }

}