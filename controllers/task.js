const Task = require('../models/task');
const allTask = async (req, res) => {
    try {
        const task = await Task.find({});
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        //aa destructing no use kare che aetle req.params.id ae TaskId ma aavi jay
        const { id: TaskId } = req.params;
        const task = await Task.findOne({ _id: TaskId });
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${TaskId} is found` });
        }
        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const deleteTask = async (req, res) => {
    try {
        const { id: TaskId } = req.params;
        const task = await Task.findOneAndDelete({ _id: TaskId });
        if (!task) {
            return res.status(404).json({ msg: `no task with id ${TaskId} is found` });
        }
        res.status(200).json({ msg: "success to deleting the task" });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}
const updateTask = async (req, res) => {
    try {
        const { id: TaskId } = req.params;
        const task = await Task.findByIdAndUpdate({ _id: TaskId }, req.body, {
            //in req.body is not to be empty///this is the option feild
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({ msg: `the requested id ${TaskId} is not found` });
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ msg: error });
    }

}
module.exports = {
    allTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}