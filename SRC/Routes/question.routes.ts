import express from "express";
import { QuestionController } from "../controller/Question.controller";
import {DeleteQuestion, GetQuestion, SaveReqQUESTION, UpdateReqQUESTION,} from "../types/Request/Question.request";
import { SaveUpdateResQUESTION } from "../Types/responses/Question.responses";
export class QuestionRoutes {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.post("/getquestion", async (req, res, next) => {
            try {
                const getreq: GetQuestion = req.body;
                const question: SaveUpdateResQUESTION =
                    await new QuestionController().getquestion(getreq);
                res.send(question);
            } catch (error) {
                next(error);
            }
        });
        this.router.post("/savequestion", async (req, res, next) => {
            try {
                const question: SaveReqQUESTION = req.body;
                const newQuestion: SaveUpdateResQUESTION =
                    await new QuestionController().savequestion(question);
                res.status(200).json({
                    message: newQuestion,
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.put("/updatequestion", async (req, res, next) => {
            try {
                const question: UpdateReqQUESTION = req.body;
                const upadated_question: SaveUpdateResQUESTION =
                    await new QuestionController().updateQuestion(question);
                const response = {
                    upadated_question: upadated_question,
                };
                res.status(200).json({
                    message: response,
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.delete("/deletequestion", async (req, res, next) => {
            try {
                const delreq: DeleteQuestion = req.body;
                const Deleted_question = await new QuestionController().deletequestion(
                    delreq
                );
                res.status(200).json({
                    message: "question deleted",
                });
            } catch (error) {
                next(error)
                ;
            }
        });
        this.router.post("/getquestionlist", async (req, res, next) => {
            try {
                const questionList: SaveUpdateResQUESTION[] =
                    await new QuestionController().getquestionList();
                res.status(200).json({
                    result: questionList,
                });
            } catch (error) {
                next(error);
            }
        });
        this.router.post("/checkanswer", async (req, res, next) => {
            try {
                const id = req.body.id;
                const UserAnswer = req.body.UserAnswer;

                const result: Number = await new QuestionController().checkanswer(
                    id,
                    UserAnswer
                );
                if (result > 0) {
                    res.status(200).json({
                        message: "Your Answer is right",
                    });
                } else {
                    res.status(200).json({
                        message: "Your answe is wrong",
                    });
                }
            } catch (error) {
                next(error);
            }
        });
    }
}
export const QuestionRoutesApi = new QuestionRoutes().router;
