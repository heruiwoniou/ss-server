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
  .option('-e,--enter <runtime>', 'set default page')
program.command('run [dir] [port] [runtime] [enter]').action(
  function (dir, port, runtime, enter) {
    server.run(
      dir || (program.dir ? (/^\w:/.test(program.dir) ? program.dir : (process.cwd() + '/' + program.dir)) : process.cwd()),
      port || (program.port ? program.port : 3000),
      runtime || (program.runtime ? '\\' + program.runtime : ''),
      enter || 'index.html'
    )
  })
program.parse(process.argv)
