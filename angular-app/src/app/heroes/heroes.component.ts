import { Component } from '@angular/core';
import { Hero } from '../hero'; // import the hero interface

// You always import the Component symbol from the Angular core library and annotate the component class with @Component.
// its a decorator function that specifies the Angular metadata for the component.
@Component({
  // these are the three properties generated from ng generate
  selector: 'app-heroes',
  standalone: true,
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})

// now can import in other components
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
