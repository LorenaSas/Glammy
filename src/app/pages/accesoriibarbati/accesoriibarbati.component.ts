import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductManagementService } from 'src/app/product-management.service';

@Component({
  selector: 'app-accesoriibarbati',
  templateUrl: './accesoriibarbati.component.html',
  styleUrls: ['./accesoriibarbati.component.css']
})
export class AccesoriibarbatiComponent implements OnInit {

  constructor(private products: ProductManagementService, private router: Router) { }

  ngOnInit(): void {
  }

  cumpara(id) {
    if (localStorage.getItem('glammy_user') !== null) {
      let titlu = document.getElementById("Titlu" + id).innerText;
      let pret = document.getElementById("Pret" + id).innerText;
      let descriere = document.getElementById("Descriere" +id).innerText;
      this.products.cumpara(parseInt(localStorage.getItem('glammy_user')),titlu,pret,descriere);
    } else {
      this.router.navigate(["cont"], {replaceUrl: true});
    }
  }

}
