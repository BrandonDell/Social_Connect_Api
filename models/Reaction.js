const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => new Date(timestamp).toLocaleString(),
        },
    },
    {
        toJSON: { getters: true },
        toObject: { getters: true },
        _id: false,  // Disables the automatic creation of the _id field in subdocument. It is useful for nested schemas
    }
);

module.exports = reactionSchema;
