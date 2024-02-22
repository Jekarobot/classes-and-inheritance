// TODO: write your code here
class Character {
    constructor (name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name must be a string with length between 2 and 10 characters')
      }
      this.name = name
      this.type = type
      this.health = 100
      this.level = 1
    }
  }

  export { Character }
