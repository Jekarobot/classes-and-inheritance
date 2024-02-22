import Magician from '../magician.js'


test('Create a Magician character', () => {
        const magician = new Magician('Harry')
        const correct = {
                name: 'Harry',
                type: 'Magician',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40
        }
        expect(magician).toEqual(correct)
    })