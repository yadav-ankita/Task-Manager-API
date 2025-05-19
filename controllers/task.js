const Task = require('../models/task');
const asyncWrapper = require('../middleware/asyncWrapper');
const allTask = asyncWrapper(async (req, res) => {
    const task = await Task.find({});
    res.status(200).json({ tasks: task });
})
const createTask = asyncWrapper(async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json(task);
})
const getTask = asyncWrapper(async (req, res) => {

    //aa destructing no use kare che aetle req.params.id ae TaskId ma aavi jay
    const { id: TaskId } = req.params;
    const task = await Task.findOne({ _id: TaskId });
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${TaskId} is found` });
    }
    res.status(200).json({ tasks: task });

})
const deleteTask = asyncWrapper(async (req, res) => {

    const { id: TaskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: TaskId });
    if (!task) {
        return res.status(404).json({ msg: `no task with id ${TaskId} is found` });
    }
    res.status(200).json({ msg: "success to deleting the task" });

})
const updateTask = asyncWrapper(async (req, res) => {

    const { id: TaskId } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: TaskId }, req.body, {
        //in req.body is not to be empty///this is the option feild
        new: true,
        runValidators: true
    });
    if (!task) {
        return res.status(404).json({ msg: `the requested id ${TaskId} is not found` });
    }
    res.json({ task });
    // res.json({ success: "okk" });


})
module.exports = {
    allTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
}