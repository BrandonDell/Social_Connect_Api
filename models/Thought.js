const { Schema, model } = require("mongoose");
const reactionSchema = require("./Reaction");
const dateFormat = require("../utils/dateFormat");

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString()
        },
        username: {
            type: String,
            required: trusted
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: { getters: true },
        toObject: { getters: true }
    }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
// create the Thought Model
const thought = model('Thought', thoughtSchema);

module.exports = Thought;
