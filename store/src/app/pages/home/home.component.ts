import { Component } from '@angular/core';
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
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductBoxComponent } from './components/product-box/product-box.component';

const ROW_HEIGHT:{[id:number]:number}={1:400,3:335,4:350};
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
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
        MatSnackBarModule,HeaderComponent,ProductsHeaderComponent,FiltersComponent,ProductBoxComponent],
  templateUrl:'./home.component.html',
  styles: [

  ]
})
export class HomeComponent {

  cols =3 ;
  rowHeight= ROW_HEIGHT[this.cols];
  category : string | undefined;

  onColumnsCountChange(colNum:number):void{
    this.cols =   colNum;
    this.rowHeight= ROW_HEIGHT[this.cols];

  }

  onShowCategory(newCategory:string):void{
      this.category= newCategory;
  }

}
