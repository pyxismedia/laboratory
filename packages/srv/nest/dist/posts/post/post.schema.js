"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Types } = mongoose_1.Schema;
exports.PostSchema = new mongoose_1.Schema({
    _id: { type: Types.ObjectId },
    title: { type: String, intl: true },
    subtitle: { type: String, intl: true },
    content: { type: String, intl: true },
    state: { type: String, intl: true },
    labels: { type: [String] },
    date: { type: Date },
    image: { type: String },
    author: { type: Types.ObjectId },
    section: { type: Types.ObjectId },
});
//# sourceMappingURL=post.schema.js.map