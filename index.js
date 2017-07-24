#!/usr/bin/env node

var
  program = require('commander'),
  server = require('ss-server-base')

program
  .version(require('./package.json').version)
  .usage('[options] [project name]')
  .option('-d,--dir <dir>', 'set dir')
  .option('-p,--port <port>', 'set port')
  .option('-r,--runtime <runtime>', 'set runtime')
program.command('run [dir] [port] [runtime]').action(
  function (dir, port, runtime) {
    server.run(
      dir || (program.dir ? (/^\w:/.test(program.dir) ? program.dir : (process.cwd() + '/' + program.dir)) : process.cwd()),
      port || (program.port ? program.port : 3000),
      runtime || (program.runtime ? '\\' + program.runtime : '')
    )
  })
program.parse(process.argv)
