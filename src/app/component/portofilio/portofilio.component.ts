import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portofilio',
  imports: [CommonModule,NgClass],
  templateUrl: './portofilio.component.html',
  styleUrl: './portofilio.component.css'
})
export class PortofilioComponent {

  imagesURL: string[] = [
    './images/port1.png',
    './images/port2.png',
    './images/port3.png',
    './images/port1.png',
    './images/port2.png',
    './images/port3.png'
  ];








  flag: boolean = true;
  currentImage: number = 0;


  closeLightBox(e: Event): void {
    e.stopPropagation();
    this.flag = true;
  }



  openLightBox(): void {
    this.flag = false;
  }


  currentImageIndex(currentIndex: number): void {
    this.currentImage = currentIndex;
  }


  imgLightBox(e: Event): void {
    e.stopPropagation();
  }















}
