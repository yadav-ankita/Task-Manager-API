const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, msg = "name is required"],
        trim:true,
        maxlength: [100, msg = "name must be within 20 words"]
    },
    Completed: {
        type: Boolean,
        default: false
    }
}
)
module.exports=mongoose.model('task', TaskSchema);