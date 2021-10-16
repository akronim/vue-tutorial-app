import { mutations, getters } from '../../src/store_2'

describe('store 2:  extending an existing object with additional property', () => {
  let username = ''
  let state = null
  let expected = null

  beforeEach(() => {
    username = 'John'

    state = {
      user: {
        id: 1
      }
    }

    expected = {
      user: {
        id: 1,
        name: username
      }
    }
  })

  it('mutations: setUserName1()', () => {
    mutations.setUserName1(state, username)
    expect(state).toEqual(expected)

    const actualUsername = getters.getUserName(state)
    expect(actualUsername).toEqual(username)
  })

  it('mutations: setUserName2()', () => {
    mutations.setUserName2(state, username)
    expect(state).toEqual(expected)

    const actualUsername = getters.getUserName(state)
    expect(actualUsername).toEqual(username)
  })

  it('mutations: setUserName3()', () => {
    mutations.setUserName3(state, username)
    expect(state).toEqual(expected)

    const actualUsername = getters.getUserName(state)
    expect(actualUsername).toEqual(username)
  })
})

describe('store 2: Modifying state array', () => {
  let newUser = null
  let state = null
  let expected = null
  let expectedUserNames = null

  beforeEach(() => {
    newUser = {
      id: 3,
      name: 'Angie'
    }

    state = {
      users: [
        {
          id: 1,
          name: 'Adam'
        },
        {
          id: 2,
          name: 'Jolene'
        }
      ]
    }

    expected = [...state.users, newUser]
    expectedUserNames = expected.map((x) => x.name)
  })

  it('mutations: addUser1()', () => {
    mutations.addUser1(state, newUser)
    expect(state.users).toEqual(expected)

    const actual = getters.getUsersNames(state)
    expect(actual).toEqual(expectedUserNames)
  })

  it('mutations: addUser2()', () => {
    mutations.addUser2(state, newUser)
    expect(state.users).toEqual(expected)

    const actual = getters.getUsersNames(state)
    expect(actual).toEqual(expectedUserNames)
  })

  it('mutations: updateUserName1()', () => {
    mutations.updateUserName1(state, { index: 0, name: 'Mark' })
    expect(state.users[0].name).toEqual('Mark')

    const actual = getters.getUsersNames(state)
    expect(actual[0]).toEqual('Mark')
  })

  it('mutations: updateUserName2()', () => {
    mutations.updateUserName2(state, { index: 0, name: 'Mark' })
    expect(state.users[0].name).toEqual('Mark')

    const actual = getters.getUsersNames(state)
    expect(actual[0]).toEqual('Mark')
  })
})
