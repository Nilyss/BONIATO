import { Component } from '@angular/core';

// ********** ICONS **********
import * as BrandIcons from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-banner',
  template: `
    <div class="banner">
      <div class="banner__containerTop">
        <div class="banner__titleWrapper">
          <p class="banner__titleWrapper__subtitle">Le meilleur du tex mex</p>
          <h1 class="banner__titleWrapper__title">
            Dégustez nos tacos
            <span class="banner__titleWrapper__title--altColor">Boniato</span>
            et autres tex mex
          </h1>
        </div>
        <figure class="banner__titleImageWrapper">
          <img
            class="banner__titleImageWrapper__image"
            [src]="titleImage"
            alt="tacos"
          />
        </figure>
      </div>
      <div class="banner__containerMiddle">
        <div class="banner__orderButtonContainer">
          <div class="banner__orderButtonContainer__wrapper">
            <button class="banner__orderButtonContainer__wrapper__button">
              Commander !
            </button>
          </div>
        </div>
        <p class="banner__orderPrice">Prix : 9.90€</p>
      </div>
      <div class="banner__containerBottom">
        <div
          *ngFor="let socialNetwork of socialNetworks"
          class="banner__socialNetworks"
        >
          <a
            class="banner__socialNetworks__link"
            [href]="socialNetwork.link"
            target="_blank"
            [title]="socialNetwork.name"
          >
            <fa-icon
              [icon]="socialNetwork.icon"
              class="banner__socialNetworks__link__icon"
            ></fa-icon>
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  titleImage = 'assets/images/title.png';

  socialNetworks = [
    {
      name: 'twitter',
      link: 'https://twitter.com/',
      icon: BrandIcons.faTwitter,
    },
    {
      name: 'facebook',
      link: 'https://facebook.com/',
      icon: BrandIcons.faFacebookF,
    },
    {
      name: 'instagram',
      link: 'https://instagram.com/',
      icon: BrandIcons.faInstagram,
    },
    {
      name: 'linkedin',
      link: 'https://linkedin.com/',
      icon: BrandIcons.faLinkedinIn,
    },
  ];
}
