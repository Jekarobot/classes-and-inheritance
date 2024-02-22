import { Character } from '../app'

test('Create a wrong name to test an error', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters')
})
