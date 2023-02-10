import { Component } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  template: `
    <div class="home-menu">
      <div class="home-menu__container">
        <div class="home-menu__container__titleWrapper">
          <h2 class="home-menu__container__titleWrapper__title">
            Découvrez notre menu
          </h2>
          <p class="home-menu__container__titleWrapper__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit, sit.
          </p>
        </div>
        <div class="home-menu__container__navigationWrapper">
          <nav class="home-menu__container__navigationWrapper__nav">
            <ul
              *ngFor="let navMenu of navMenuList"
              class="home-menu__container__navigationWrapper__nav__listWrapper"
            >
              <li
                class="home-menu__container__navigationWrapper__nav__listWrapper__elements"
              >
                {{ navMenu }}
              </li>
            </ul>
          </nav>
        </div>
        <div class="home-menu__container__menuWrapper">
          <div class="home-menu__container__menuWrapper__leftContainer">
            <figure
              class="home-menu__container__menuWrapper__leftContainer__pictureWrapper"
            >
              <img
                class="home-menu__container__menuWrapper__leftContainer__pictureWrapper__picture"
                [src]="menuPicture"
                alt="menu"
              />
            </figure>
          </div>
          <div class="home-menu__container__menuWrapper__rightContainer">
            <ul
              *ngFor="let menuItem of menuItems"
              class="home-menu__container__menuWrapper__rightContainer__listWrapper"
            >
              <li
                *ngFor="let product of menuItem.products"
                class="home-menu__container__menuWrapper__rightContainer__listWrapper__elements"
              >
                <h3
                  class="home-menu__container__menuWrapper__rightContainer__listWrapper__elements__title"
                >
                  {{ product.name }}
                </h3>
                <p
                  class="home-menu__container__menuWrapper__rightContainer__listWrapper__elements__overview"
                >
                  {{ product.description }}
                </p>
                <p
                  class="home-menu__container__menuWrapper__rightContainer__listWrapper__elements__price"
                >
                  {{ product.price }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent {
  navMenuList = ['LOS TACOS', 'PLATS', 'Á PARTAGER', 'DESSERTS', 'BOISSONS'];

  menuPicture = 'assets/images/menu.webp';

  menuItems = [
    {
      name: 'losTacos',
      products: [
        {
          name: 'CLÀSICO',
          description:
            "Effiloché de boeuf mariné, cheddar, pico de gallo*, pickles d'oignons rouges, sauce Buffalo* + accompagnement au choix",
          price: '9.90€ x2 | 12.50€ x3',
        },
        {
          name: 'BONIATO',
          description:
            "Accras de patate douce, guacamole, pico de gallo*, pickles d'oignons rouges, sauce Boniato* + accompagnement au choix",
          price: '9.90€ x2 | 12.50€ x3',
        },
        {
          name: 'POLLO',
          description:
            "Poulet mariné, guacamole, pico de gallo*, pickles d'oignons rouges, sauce Boniato* + accompagnement au choix",
          price: '9.90€ x2 | 12.50€ x3',
        },
        {
          name: 'DEL MAR',
          description:
            "Poisson pané, guacamole, pico de gallo*, pickles d'oignons rouges, sauce Blanche, fromage + accompagnement au choix",
          price: '9.90€ x2 | 12.50€ x3',
        },
      ],
    },
    {
      name: 'plats',
      // products: [
      //   {
      //     name: 'Tacos de boeuf',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, adipisci.',
      //     price: '10',
      //   },
      // ],
    },
    {
      name: 'aPartager',
      // products: [
      //   {
      //     name: 'Tacos de boeuf',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      //     price: '10',
      //   },
      // ],
    },
    {
      name: 'desserts',
      // products: [
      //   {
      //     name: 'Tacos de boeuf',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      //     price: '10',
      //   },
      // ],
    },
    {
      name: 'boissons',
      // products: [
      //   {
      //     name: 'Tacos de boeuf',
      //     description:
      //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      //     price: '10',
      //   },
      // ],
    },
  ];
}
