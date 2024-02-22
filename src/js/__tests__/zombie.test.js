import Zombie from '../zombie.js'


test('Create a Zombie character', () => {
    const zombie = new Zombie('John')
    const correct = {
        name: 'John',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    }
    expect(zombie).toEqual(correct)
})