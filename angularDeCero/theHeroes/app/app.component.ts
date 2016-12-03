import {Component, OnInit} from '@angular/core';
import {Hero} from "./classes/hero";
import {HeroService} from "./hero-detail/hero.service";

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title: string = "List Heroes";

    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService){}

    getHeroes(): void{
        //this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void{
        this.getHeroes();
    }

    onSelect(hero: Hero){
        this.selectedHero = hero;
    }
}
