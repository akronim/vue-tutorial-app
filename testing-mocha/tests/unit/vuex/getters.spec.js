import getters from '@/store/getters.js'
import { expect } from 'chai'

// Since we are testing the getters in isolation,
// we have to manually pass the state

const dogs = [
  { name: 'lucky', breed: 'poodle', age: 1 },
  { name: 'pochy', breed: 'dalmatian', age: 2 },
  { name: 'blackie', breed: 'poodle', age: 4 }
]
const state = { dogs }

describe('getters', () => {
  it('returns poodles', () => {
    const actual = getters.poodles(state)

    expect(actual).to.deep.eq([dogs[0], dogs[2]])
  })

  it('returns poodles by age', () => {
    // we can stub getters.poodles in a way that
    // we pass in the result it would return
    const poodles = [dogs[0], dogs[2]]
    const actual = getters.poodlesByAge(state, { poodles })(1)

    expect(actual).to.deep.eq([dogs[0]])
  })
})
