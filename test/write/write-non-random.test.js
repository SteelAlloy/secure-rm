const fs = require('fs')
const util = require('util')
const { write } = require('../../lib/write')
const expected = require('./write-non-random-expectation.js')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const unlink = util.promisify(fs.unlink)

beforeEach(() => {
  return writeFile('testfile', Buffer.from([0x05, 0xfa, 0x6a, 0x63, 0xe0, 0x2e, 0xea, 0x92, 0x65, 0xf9]))
})

describe('Non-random write functions are correct:', () => {
  for (let i = 0; i < expected.length; i++) {
    it(expected[i].description, done => {
      write.init('testfile')
        .then(() => {
          return expected[i].arg
            ? write[expected[i].function]('testfile', expected[i].arg, 10)
            : write[expected[i].function]('testfile', 10)
        })
        .then(() => readFile('testfile'))
        .then((result) => {
          expect(result).toStrictEqual(expected[i].expectedValue)
          done()
        })
        .catch((err) => { throw err })
    })
  }
})

afterAll(() => {
  return unlink('testfile')
})
