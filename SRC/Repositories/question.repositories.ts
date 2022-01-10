import { QUESTIONSchema } from '../model/question.model';
import { IQUESTION } from '../types/document/IQuestion';
export class MainQuestion {
    constructor() { }
    getQuestion(_id: string) {
        return QUESTIONSchema.findById(_id);
    }

    saveQuestion(Question: IQUESTION) {
        return new QUESTIONSchema(Question).save();
    }
    updateQuestion(Question: IQUESTION) {
        return QUESTIONSchema.findByIdAndUpdate(Question._id, Question, {
            new: true
        });
    }
    deletQuestion(_id: string) {
        return QUESTIONSchema.findByIdAndDelete(_id);
    }
    getQuestionslist() {
        return QUESTIONSchema.find();
    }
    checkanswer(id: string, UserAnswer: string) {
        return QUESTIONSchema.find({ _id: id, Answer: UserAnswer }).count();
    }
    generateQuiz(subject: string,) {
        //return QUESTIONSchema.find({_id: id, Answer:UserAnswer}).count();
    }


}
