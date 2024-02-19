import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../app'

test('Create a wrong name to test an error', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters')
})

test('Create a wrong type to test an error', () => {
  expect(() => new Character('Bob', 'WrongType')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
})

test('Create a Bowman character', () => {
  const bowman = new Bowman('Robin')
  expect(bowman.name).toBe('Robin')
  expect(bowman.type).toBe('Bowman')
  expect(bowman.health).toBe(100)
  expect(bowman.level).toBe(1)
  expect(bowman.attack).toBe(25)
  expect(bowman.defenсe).toBe(25)
})

test('Create a Swordsman character', () => {
  const swordsman = new Swordsman('Arthur')
  expect(swordsman.name).toBe('Arthur')
  expect(swordsman.type).toBe('Swordsman')
  expect(swordsman.health).toBe(100)
  expect(swordsman.level).toBe(1)
  expect(swordsman.attack).toBe(40)
  expect(swordsman.defence).toBe(10)
})

test('Create a Magician character', () => {
  const magician = new Magician('Harry')
  expect(magician.name).toBe('Harry')
  expect(magician.type).toBe('Magician')
  expect(magician.health).toBe(100)
  expect(magician.level).toBe(1)
  expect(magician.attack).toBe(10)
  expect(magician.defence).toBe(40)
})

test('Create a Daemon character', () => {
  const daemon = new Daemon('Gregory')
  expect(daemon.name).toBe('Gregory')
  expect(daemon.type).toBe('Daemon')
  expect(daemon.health).toBe(100)
  expect(daemon.level).toBe(1)
  expect(daemon.attack).toBe(10)
  expect(daemon.defence).toBe(40)
})

test('Create a Undead character', () => {
  const undead = new Undead('Vladimir')
  expect(undead.name).toBe('Vladimir')
  expect(undead.type).toBe('Undead')
  expect(undead.health).toBe(100)
  expect(undead.level).toBe(1)
  expect(undead.attack).toBe(25)
  expect(undead.defence).toBe(25)
})

test('Create a Zombie character', () => {
  const zombie = new Zombie('John')
  expect(zombie.name).toBe('John')
  expect(zombie.type).toBe('Zombie')
  expect(zombie.health).toBe(100)
  expect(zombie.level).toBe(1)
  expect(zombie.attack).toBe(40)
  expect(zombie.defence).toBe(10)
})
