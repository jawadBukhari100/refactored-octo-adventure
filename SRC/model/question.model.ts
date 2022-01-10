import { Schema, model } from 'mongoose';
import { IQUESTION } from '../types/document/IQuestion';
const IQUESTIONSchema = new Schema({
    questionText: { type: String, required: true, unique: true },
    options: [
        {
            optionname: { type: String },
            optionvalue: { type: String }
        }

    ],
    Answer: { type: String },
    Subject: { type: String },
    Topic: { type: String },
    Appearedin: [
        {
            PostName: { type: String },
            TestingBody: { type: String },
            Year: { type: String }
        }
    ]
},
    { timestamps: true }
);
export const QUESTIONSchema = model<IQUESTION>('IQUESTIONSchema', IQUESTIONSchema);
