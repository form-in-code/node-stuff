const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'add a note',
    builder: {
        title: {
            describe: "Note titele",
            demandOption: true,
            type:'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder: {
        title: {
            describe: "Note titele",
            demandOption: true,
            type:'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    description: 'read a note',
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    description: 'list a note',
    handler() {
        console.log(chalk.blue("Notes: "))
        notes.listNotes()
    }
})

yargs.parse()