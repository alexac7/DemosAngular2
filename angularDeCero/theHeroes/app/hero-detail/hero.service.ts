import {Injectable} from "@angular/core";
import {Hero} from "../classes/hero";
import {HEROES} from "./mock-heroes";
/**
 * Created by Administrador on 12/2/2016.
 */

@Injectable()
export class HeroService{

    /*getHeroes(): Hero[]{
        return HEROES;
    }*/

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}
