import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private translate = inject(TranslateService);
  langs = ['es', 'en'];
  currentLang = 'es';
  isOpen = false;
  constructor() {
    this.translate.addLangs(this.langs);
    const saved = localStorage.getItem('lang');
    const initial = saved ?? this.translate.getBrowserLang() ?? 'es';
    this.switchLang(initial);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    this.translate.setDefaultLang(lang); 
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }
}
