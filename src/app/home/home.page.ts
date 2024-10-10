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
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, HttpClientModule, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent],
})
export class HomePage implements OnInit {
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    this.fetchDetails();
  }

  private fetchDetails() {
    this.http.get('https://fakestoreapi.com/products').subscribe(
      (response:any) => {
        console.log(response);
      }
    )
  }
}
