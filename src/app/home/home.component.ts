import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface BannerItem {
  title: string;
  description: string;
  route: string;
  image: string;
  size: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  banners: BannerItem[] = [
    {
      title: 'Email 1',
      description: 'Promotional email for healthcare professionals, highlighting treatment benefits and patient outcomes.',
      route: 'assets/emails/email-1/index.html',
      image: 'assets/images/email_1/preview.png',
      size: 'Healthcare Professionals',
      tags: ['HTML5', 'CSS']
    },
    {
      title: 'Email 2',
      description: 'Medical communication presenting clinical information, indications, and available treatment options.',
      route: 'assets/emails/email-2/index.html',
      image: 'assets/images/email_2/preview.png',
      size: 'Healthcare Professionals',
      tags: ['HTML5', 'CSS']
    },
    {
      title: 'Email 3',
      description: 'Informational email for patients, offering tools to find doctors, read reviews, and access trusted healthcare resources.',
      route: 'assets/emails/email-3/index.html',
      image: 'assets/images/email_3/preview.png',
      size: 'Healthcare Professionals',
      tags: ['HTML5', 'CSS']
    }
  ];
}