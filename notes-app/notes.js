const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your Notes ..."
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach((note) => console.log(note.title));
} 

const removeNote = (title) => {
    console.log("To remove "+title)
    const notes = loadNotes()
    const notesToSave = notes.filter((note) => note.title !== title)
    
    if (notes.length === notesToSave.length) {
        console.log(chalk.red("no notes to remove"))
        return
    }
    saveNotes(notesToSave)    
    console.log(chalk.green("note removed"))
}

const addNote = (title,body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push(
            {title:title, body:body}
        )
    
        saveNotes(notes)    
        console.log(chalk.green("note added"))
    } else {
        console.log(chalk.red("note title taken"))
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(chalk.green("note title: ")+chalk.blue(note.title))
    } else {
        console.log(chalk.red("note not found"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        return JSON.parse(dataBuffer.toString())    
    } catch (e) {
        return []
    }
}


const saveNotes = (notes) => {
    fs.writeFileSync("notes.json",JSON.stringify(notes))
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}
