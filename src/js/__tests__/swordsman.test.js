import Swordsman from '../swordsman.js'


test('Create a Swordsman character', () => {
    const swordsman = new Swordsman('Robin')
    const correct = {
        name: 'Robin',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(swordsman).toEqual(correct)
  })