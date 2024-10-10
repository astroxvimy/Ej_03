import {Component, OnInit} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardSubtitle, IonCardHeader, IonCardContent
} from '@ionic/angular/standalone';
import { NgFor } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number,
  }
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NgFor, IonHeader, IonToolbar, IonTitle, IonContent, HttpClientModule, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent],
})
export class HomePage implements OnInit {
  products: Product[] = [];
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetchDetails();
  }

  private fetchDetails() {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (response:any) => {
        this.products = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching data', error);
      }
    )
  }
}
