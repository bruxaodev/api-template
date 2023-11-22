import { Schema, model } from 'mongoose'

const testSchema = new Schema({
    name: { type: String, default: '' },
    number: { type: Number, default: 0 },
});

export const Test = model('test', testSchema);