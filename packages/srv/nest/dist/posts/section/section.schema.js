"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const { Types } = mongoose_1.Schema;
exports.SectionSchema = new mongoose_1.Schema({
    _id: { type: Types.ObjectId },
    name: { type: String, intl: true },
});
//# sourceMappingURL=section.schema.js.map