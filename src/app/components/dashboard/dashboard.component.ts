import { Component } from '@angular/core';
import { JwtService } from 'src/app/service/jwt.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  message : string;
  constructor(
    private service: JwtService
  ) { this.message = ''; }

  ngOnInit() {
    this.success();
  }

  success() {
    this.service.success().subscribe(
      (response) => {
        console.log(response);
        this.message = response.message;

      }
    )
  }

}
