export { Character } from .'/characters';

class King extends Character {
  years: number;
  personalQuote: string = 'Vais a morir todos';

  constructor(name: string, family: string, age: number, status: boolean, years: number) {
    super(name, family, age, status);
    this.years = years;
}
}
phrase() {
  return super.phrase(this.PersonalQuote);

}
