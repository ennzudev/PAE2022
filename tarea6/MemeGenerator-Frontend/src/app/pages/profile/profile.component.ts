import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(router: Router, authService: AuthService) {
    if(!authService.isLoggedIn()) {
      // Redirect to login
      router.navigate(['/signup']);
    }
  }

  ngOnInit(): void {
  }

}
