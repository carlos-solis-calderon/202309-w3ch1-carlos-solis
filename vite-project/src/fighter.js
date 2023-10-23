import { Character } from './character';
export class Fighter extends Character {
    phrasePersonal = 'Primero pego y luego pregunto';
    skill;
    weapon;
    constructor(name, family, age, status, years) {
        super(name, family, age, status);
        this.skill = skill;
        this.weapon = weapon;
    }
    phrase() {
        return super.phrase(this.phrasePersonal);
    }
}
