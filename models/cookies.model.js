import {model, Schema} from "mongoose";

const cookiesSchema = new Schema(
    {
        url: {type: String, required: true},
        data: {type: String},
        localData: {type: String},
    },
    {timestamps: true}
);

const Cookie = model("Cookie", cookiesSchema);

export default Cookie;