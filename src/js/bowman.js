import Character from './app.js';

export default class Bowman extends Character {
  constructor (name) {
    super(name, 'Bowman')
    this.attack = 25
    this.defenсe = 25
  }
}