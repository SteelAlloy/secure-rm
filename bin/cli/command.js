const { Command, flags } = require('@oclif/command')
const Parser = require('@oclif/parser')
const { methods } = require('../../lib/methods')
const handle = require('./handle')
const table = require('./table')

flags.custom = (opts = {}, action) => {
  return Parser.flags.boolean(Object.assign(
    opts, {
      parse: (_, cmd) => {
        action()
        cmd.exit(0)
      }
    }))
}

class SecureRmCommand extends Command {
  async run () {
    const { flags, argv } = this.parse(SecureRmCommand)
    handle(argv, flags.method, flags.keep, flags.force)
  }
}

SecureRmCommand.description = `Simple tool to securely erase files
...
Extra documentation goes here
`

SecureRmCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({ char: 'v' }),
  // add --help flag to show CLI version
  help: flags.help({ char: 'h' }),
  method: flags.option({
    char: 'm',
    description: 'erasure method',
    options: Array.from(Array(methods.length).keys()).map(x => x.toString())
  }),
  force: flags.boolean({ char: 'f', description: 'avoid checks' }),
  table: flags.custom({ char: 't', description: 'show the methods table' }, table())
}

SecureRmCommand.args = [{ name: 'path', required: true }]

SecureRmCommand.strict = false

module.exports = SecureRmCommand
