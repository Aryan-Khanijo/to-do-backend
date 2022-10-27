const { ToDo } = require('./connection')
const { v1: uuidv1 } = require('uuid');

const createNote = async (req, res, next) => {
    let noteObj = {
        id: uuidv1(),
        title: req.body.title,
        content: req.body.content,
        completeStatus: false
    }

    try {
        await ToDo.insertOne(noteObj);
        console.log('Note Created');
        res.status(200).json({
            message: "Note Created",
            id: noteObj.id
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({message: "Error"});
    }

}

const updateNote = async (req, res) => {
    let id = req.body.id;
    try {
        await ToDo.updateOne(
            { id: id},
            { $set: req.body }
        );
        console.log('Note Updated');
        res.status(200).json({
            message: "Note Updated",
            id: id
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({message: "Error"});
    }
}

const deleteNote = async (req, res) => {
    let id = req.body.id;
    try {
        await ToDo.deleteOne({ id: id });
        console.log("Note Deleted");
        res.status(200).json({
            message: "Note Deleted",
            id: id
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({message: "Error"});
    }
}

const getAllNotes = async (req, res) => {
    try {
        let cursor = ToDo.find();
        const data = []
        await cursor.forEach(note => {
            data.push(note);
        });
        console.log("Note Fetched");
        res.status(200).json({
            Notes: data
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({message: "Error"});
    }
}

module.exports = {
    createNote,
    updateNote,
    deleteNote,
    getAllNotes
}