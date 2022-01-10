import { IQUESTION } from '../types/document/IQuestion';
import { MainQuestion } from '../Repositories/Question.repositories';
import CustomeError from '../utills/error';
import { Route, Tags, Post, Body, Put, Delete, SuccessResponse } from "tsoa";
import { SaveUpdateResQUESTION } from '../types/responses/Question.responses';
import { DeleteQuestion, GetQuestion, SaveReqQUESTION, UpdateReqQUESTION } from '../types/Request/Question.request';
import { Number } from 'mongoose';
@Route('question')
@Tags('Question')
export class QuestionController {
    constructor() { }
    @Post("/getquestion")
    async getquestion(@Body() getreq: GetQuestion): Promise<SaveUpdateResQUESTION> {
        const question: any = await new MainQuestion().getQuestion(getreq.id);
        if (question === null) throw new CustomeError(404, 'Question not found');
        return <SaveUpdateResQUESTION>question;
    }
    @Post('/savequestion')
    async savequestion(@Body() Question: SaveReqQUESTION): Promise<SaveUpdateResQUESTION> {
        const new_question: IQUESTION = await new MainQuestion().saveQuestion(<IQUESTION>(Question));
        return <SaveUpdateResQUESTION>(new_question);
    }
    @Put('/updatequestion')
    async updateQuestion(@Body() Question: UpdateReqQUESTION): Promise<SaveUpdateResQUESTION> {
        const update_question: any = await new MainQuestion().updateQuestion(<IQUESTION>(Question));
        if (update_question === null)
            throw new CustomeError(400, 'Question not updated');
        return <SaveUpdateResQUESTION>update_question;
    }
    @Delete('/deletequestion')
    @SuccessResponse("200", "Questioon Deleted")
    async deletequestion(@Body() delreq: DeleteQuestion) {
        return await new MainQuestion().deletQuestion(delreq.id);
    }
    @Post('/getquestionlist')
    async getquestionList(): Promise<SaveUpdateResQUESTION[]> {
        const question: IQUESTION[] = await new MainQuestion().getQuestionslist();
        return <SaveUpdateResQUESTION[]>(question);
    }
    @Post('/checkanswer')
    async checkanswer(id: string, UserAnswer: string): Promise<number> {
        const result = await new MainQuestion().checkanswer(id, UserAnswer);
        return (result);
    }

}
