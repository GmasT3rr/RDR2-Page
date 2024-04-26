import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GangMemberComponent } from './gang/gang-member/gang-member.component';
import { ItemComponent } from './itemsList/item/item.component';
import { NavComponent } from './navbar/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faArrowUpRightFromSquare,
  faChevronDown,
  faGlobe,
  faX,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitch,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    CommonModule,
    RouterOutlet,
    GangMemberComponent,
    ItemComponent,
    NavComponent,
    FontAwesomeModule,
  ],
})
export class AppComponent {
  faChevronDown = faChevronDown;
  faGlobe = faGlobe;
  faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  faXTwitter = faXTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faTwitch = faTwitch;
  gangMembers = [
    {
      name: 'Arthur Morgan',
      class: 'arthur',
      description:
        'The stalwart lieutenant of the gang, epitomizes loyalty and honor.His stoic demeanor masks a heart of gold, as he fiercely protectshis family and comrades. Arthur´s moral compass guides him throughlife´s challenges, as he grapples with questions of morality andloyalty amidst a changing world.',
      imageSrc: 'assets/images/arthur.png',
    },
    {
      name: 'John Marston',
      class: 'john',
      description:
        'A former outlaw seeking redemption, possesses a rugged yet introspective demeanor. His past experiences have instilled in him asense of duty and determination to right his wrongs. Despite hisrough exterior, John harbors a deep sense of loyalty and compassiontowards those he cares about.',
      imageSrc: 'assets/images/marston.png',
    },
    {
      name: 'Dutch Vanderlinde',
      class: 'dutch',
      description:
        'The magnetic leader of the gang, exudes charm and charisma. His captivating speeches and idealistic vision inspire unwaveringloyalty among his followers. However, beneath his charismatic facadelies a man willing to push moral boundaries in pursuit of hisutopian ideals.',
      imageSrc: 'assets/images/dutch.png',
    },
  ];

  itemList = [
    {
      title: 'Story',
      imageSrc: 'assets/images/story.jpg',
    },
    {
      title: 'Characters',
      imageSrc: 'assets/images/characters.jpg',
    },
    {
      title: 'Gameplay',
      imageSrc: 'assets/images/gameplay.jpg',
    },
    {
      title: 'Weaponry',
      imageSrc: 'assets/images/weaponry.jpg',
    },
    {
      title: 'Wildlife',
      imageSrc: 'assets/images/wildlife.jpg',
    },
    {
      title: 'Soundtrack',
      imageSrc: 'assets/images/soundtrack.jpg',
    },
  ];
}
