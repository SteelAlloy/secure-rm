module.exports = [
  {
    function: 'zeroes',
    description: 'Write zeroes: 0x00',
    expectedValue: Buffer.from([0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00])
  },
  {
    function: 'ones',
    description: 'Write ones: 0xff',
    expectedValue: Buffer.from([0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff])
  },
  {
    function: 'complementary',
    description: 'Write binary complement',
    expectedValue: Buffer.from([0xfa, 0x05, 0x95, 0x9c, 0x1f, 0xd1, 0x15, 0x6d, 0x9a, 0x06])
  },
  {
    function: 'byte',
    name: 'byte-0x22',
    description: 'Write a byte: 0x22',
    arg: 0x22,
    expectedValue: Buffer.from([0x22, 0x22, 0x22, 0x22, 0x22, 0x22, 0x22, 0x22, 0x22, 0x22])
  },
  {
    function: 'byte',
    name: 'byte-0xab',
    description: 'Write a byte: 0xab',
    arg: 0xab,
    expectedValue: Buffer.from([0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab, 0xab])
  },
  {
    function: 'bytes',
    name: 'bytes-array-3',
    description: 'Write bytes array: [0x76, 0x6d, 0x3b]',
    arg: [0x76, 0x6d, 0x3b],
    expectedValue: Buffer.from([0x76, 0x6d, 0x3b, 0x76, 0x6d, 0x3b, 0x76, 0x6d, 0x3b, 0x76])
  },
  {
    function: 'bytes',
    name: 'bytes-array-5',
    description: 'Write bytes array: [0x64, 0x44, 0x18, 0x2c, 0x4b]',
    arg: [0x64, 0x44, 0x18, 0x2c, 0x4b],
    expectedValue: Buffer.from([0x64, 0x44, 0x18, 0x2c, 0x4b, 0x64, 0x44, 0x18, 0x2c, 0x4b])
  },
  {
    function: 'cycleBytes',
    description: 'Cycle through bytes: [0x4c, 0x13, 0x36]',
    arg: [0x4c, 0x13, 0x36],
    expectedValue: Buffer.from([0x36, 0x4c, 0x13, 0x36, 0x4c, 0x13, 0x36, 0x4c, 0x13, 0x36])
  },
  {
    function: 'incrementByte',
    name: 'incrementByte-0x11-0x00-0xee',
    description: 'Increment by 0x11 from 0x00 to 0xee',
    arg: { start: 0x00, end: 0xee, increment: 0x11 },
    expectedValue: Buffer.from([0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee, 0xee])
  },
  {
    function: 'incrementByte',
    name: 'incrementByte-0x10-0x00-0x45',
    description: 'Increment by 0x10 from 0x00 to 0x45: should not increment past 0x40',
    arg: { start: 0x00, end: 0x45, increment: 0x10 },
    expectedValue: Buffer.from([0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40])
  }
]