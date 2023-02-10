import { Component } from '@angular/core';

// ********** ICONS **********
import { faAsterisk } from '@fortawesome/free-solid-svg-icons/faAsterisk';

@Component({
  selector: 'app-preview',
  template: `
    <div class="preview">
      <div class="leftContainer">
        <figure class="leftContainer__imageWrapper">
          <img
            class="leftContainer__imageWrapper__image"
            [src]="leftPreviewPicture"
            alt="staff"
          />
        </figure>
      </div>
      <div class="centerContainer">
        <div class="centerContainer__textWrapper">
          <h3 class="centerContainer__textWrapper__subtitle">Riche & Frais</h3>
          <h2 class="centerContainer__textWrapper__title">
            Ingrédients de haute qualité & de saison
          </h2>
          <p class="centerContainer__textWrapper__overview">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eius
            modi, molestiae nulla porro soluta!
          </p>
          <ul class="centerContainer__textWrapper__listWrapper">
            <li class="centerContainer__textWrapper__listWrapper__elements">
              <fa-icon
                class="centerContainer__textWrapper__listWrapper__elements--icon"
                [icon]="asteriskIcon"
              ></fa-icon>
              Simple et facile à déguster
            </li>
            <li class="centerContainer__textWrapper__listWrapper__elements">
              <fa-icon
                class="centerContainer__textWrapper__listWrapper__elements--icon"
                [icon]="asteriskIcon"
              ></fa-icon>
              Plaisir d'un moment partagé entre amis
            </li>
            <li class="centerContainer__textWrapper__listWrapper__elements">
              <fa-icon
                class="centerContainer__textWrapper__listWrapper__elements--icon"
                [icon]="asteriskIcon"
              ></fa-icon>
              Lorem ipsum dolor sit amet.
            </li>
          </ul>
        </div>
      </div>
      <div class="rightContainer">
        <figure class="rightContainer__imageWrapper">
          <img
            class="rightContainer__imageWrapper__image"
            [src]="rightPreviewPicture"
            alt="food"
          />
        </figure>
      </div>
    </div>
  `,
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  leftPreviewPicture = 'assets/images/leftPreview.jpg';
  rightPreviewPicture = 'assets/images/rightPreview.png';

  asteriskIcon = faAsterisk;
}
