import Undead from '../undead.js'


test('Create a Undead character', () => {
    const undead = new Undead('Vladimir')
    const correct = {
        name: 'Vladimir',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    }
    expect(undead).toEqual(correct)
})