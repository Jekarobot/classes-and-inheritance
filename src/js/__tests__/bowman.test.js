import Bowman from '../bowman.js'


test('Create a Bowman character', () => {
    const bowman = new Bowman('Robin')
    const correct = {
        name: 'Robin',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defenсe: 25
    }
    expect(bowman).toEqual(correct)
  })