import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from './pages/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-header></app-header>
    <router-outlet></router-outlet> 

  `,
    styles: [],
    imports: [RouterOutlet,
      // BrowserModule,
        MatSidenavModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule,
        MatTableModule,
        MatBadgeModule,
        MatSnackBarModule, HeaderComponent,HomeComponent]
})
export class AppComponent {
  title = 'store';
}
