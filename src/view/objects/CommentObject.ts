export class CommentObject {
    constructor(public id: number,
                public author: string,
                public text: string,
                public mail: string,
                public author_to: string,
                public mail_to: string,
                public kyun: number
    ) {}
}