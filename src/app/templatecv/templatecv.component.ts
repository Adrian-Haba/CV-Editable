import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-templatecv',
  templateUrl: './templatecv.component.html',
  styleUrls: ['./templatecv.component.css'],
  providers: [AuthService]
})
export class TemplatecvComponent implements OnInit{

  public user: any | undefined;

  constructor(private authSvc: AuthService) {}

  async ngOnInit() {
    console.log('templatecv')
    this.user = await this.authSvc.getCurrentUser();
  }

  async onLogout() {
      await this.authSvc.logout();
  }
}
