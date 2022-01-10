import { Document } from 'mongoose';
export interface IQUESTION extends Document {
    questionText: String,
    options:
    {
        optionname: String
        optionvalue: String
    }

    Answer: String
}
