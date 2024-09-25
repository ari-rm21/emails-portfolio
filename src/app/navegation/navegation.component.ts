import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.scss'
})
export class NavegationComponent {
  title = 'EMAILS PORTFOLIO';
  menuOpen: boolean = false;
  toggleMenu(event: Event) {
    this.menuOpen = !this.menuOpen;
    this.setActiveLink(event);
    let menu = document.querySelectorAll('.navegation__nav-links');
    menu.forEach(element => {
        (element as HTMLElement).style.height = '100%';
    });
    console.log(menu);
}

  setActiveLink(event: Event) {
    const links = document.querySelectorAll('.navegation__nav-links a');
    links.forEach(link => link.classList.remove('active-link'));
    (event.target as HTMLElement).classList.add('active-link');
  }
  
}
