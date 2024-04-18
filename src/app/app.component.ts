import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar: boolean = false;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.showNavbar = event.url === '/home'; // Check if the current route is '/home'
    });
  }

  menuCheckBox: boolean = false; // Declare menuCheckBox property

  toAboutSection() {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
      }
      this.menuCheckBox = false;
  }

  toContactSection() {
    const aboutSection = document.getElementById("contact");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    this.menuCheckBox = false;
}
}
