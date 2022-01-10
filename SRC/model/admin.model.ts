import { Schema, model } from 'mongoose';
import { IADMIN } from '../types/document/IAdmin';
const IADMINSchema = new Schema(
    {
        FirstName: { type: String },
        LastName: { type: String },
        Desgination: { type: String },
        cell: { type: String },
        JoinDate: { type: String },
        adress: { type: String },
    },
    { timestamps: true }
);
export const ADMINSchema = model<IADMIN>('IADMINSchema', IADMINSchema);
