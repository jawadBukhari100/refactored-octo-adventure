
export interface SaveReqQUESTION {
    _id: string;
    questionText: String,
    options:
    {
        optionname: String
        optionvalue: String
    }

    Answer: String
}

export interface UpdateReqQUESTION {
    _id: string;
    questionText: String,
    options:
    {
        optionname: String
        optionvalue: String
    }

    Answer: String
}

export interface GetQuestion {
    id: string

}
export interface DeleteQuestion {
    id: string
}

