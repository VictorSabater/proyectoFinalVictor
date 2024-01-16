import {Schema} from "mongoose";

export const NoticiaSchema: Schema =
    new Schema(
        {
            title: {type: String, required: true},
            subtitle: {type: String, required: true},
            section: {
                name: {type: String, required: true},
                icon: {type: String, required: true}
            },
            author: {type: String, required: true},
            date: {type: String, required: true},
            content: {type: String, required: true},
            images: [{type: String, required: true}],
            comments: [{type: String, required: false}]

        }, {versionKey: false}
    )
