import { Character } from './character';
export class Asesor extends Character {
    advisor;
    phrasePersonal = 'No sé por qué, pero creo que voy a morir pronto';
    constructor(name, family, age, status, advise) {
        super(name, family, age, status);
        this.advisor = advise;
    }
    phrase() {
        return super.phrase(this.phrasePersonal);
    }
}
