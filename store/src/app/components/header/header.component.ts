import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
// import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,
    // BrowserModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl:'./header.component.html',
})
export class HeaderComponent {

}
