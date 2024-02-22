import { Daemon } from '../daemon.js'


test('Create a Daemon character', () => {
        const daemon = new Daemon('Gregory')
        const correct = {
                name: 'Gregory',
                type: 'Daemon',
                health: 100,
                level: 1,
                attack: 10,
                defence: 40
        }
        expect(daemon).toBe(correct)
    })