import {Schema} from "mongoose";

export const NoticiaSchema: Schema =
    new Schema(
        {
            title: {type: String, required: true},
            subtitle: {type: String, required: true},
            section: {
                name: {type: String, required: true},
                icon: {type: String, required: true},
                route: {type: String, required: false}
            },
            author: {type: String, required: true},
            date: {type: String, required: true},
            content: {type: String, required: true},
            images: [{type: String, required: true}],
            comments: [
                {
                    name: {type: String, required: true},
                    email: {type: String, required: true},
                    comment: {type: String, required: false}
                }
            ]

        }, {versionKey: false}
    )
