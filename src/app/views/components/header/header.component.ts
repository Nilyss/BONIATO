import { Component } from '@angular/core';

// ********** ICONS **********
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  template: `
    <header id="header">
      <div class="headerWrapper">
        <div class="header__topContainer">
          <nav class="header__topContainer__nav">
            <ul class="header__topContainer__nav__leftContainer">
              <li
                *ngFor="let element of topNavElements"
                class="header__topContainer__nav__leftContainer__elements"
              >
                <fa-icon
                  [icon]="element.icon"
                  class="header__topContainer__nav__leftContainer__elements__icons"
                ></fa-icon>
                <p
                  *ngIf="element.text !== '05.46.42.47.26'"
                  class="header__topContainer__nav__leftContainer__elements__texts"
                >
                  {{ element.text }}
                </p>
                <a
                  *ngIf="element.text === '05.46.42.47.26'"
                  class="header__topContainer__nav__leftContainer__elements__texts--link"
                  href="tel:0546424726"
                  >{{ element.text }}</a
                >
              </li>
            </ul>
            <div class="header__topContainer__nav__rightContainer">
              <button class="header__topContainer__nav__rightContainer__button">
                Crée un compte
              </button>
            </div>
          </nav>
        </div>
        <div class="header__bottomContainer">
          <figure class="header__bottomContainer__logoWrapper">
            <img
              [src]="logo"
              alt="logo"
              class="header__bottomContainer__logoWrapper__logo"
            />
          </figure>
          <nav class="header__bottomContainer__nav">
            <ul
              *ngFor="let element of bottomNavElements"
              class="header__bottomContainer__nav__list"
            >
              <li class="header__bottomContainer__nav__list__elements">
                {{ element }}
              </li>
            </ul>
          </nav>
          <div class="header__bottomContainer__buttonContainer">
            <div
              class="header__bottomContainer__buttonContainer__buttonWrapper"
            >
              <button
                class="header__bottomContainer__buttonContainer__buttonWrapper__button"
              >
                Connexion
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  topNavElements = [
    { icon: SolidIcons.faClock, text: '12h00 - 14h00  |   19h00 - 21h30' },
    { icon: SolidIcons.faPhone, text: '05.46.42.47.26' },
  ];
  logo: string = 'assets/images/logo.webp';
  bottomNavElements = ['Accueil', 'Menu', 'A propos', 'Contact'];
}
