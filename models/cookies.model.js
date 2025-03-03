import {model, Schema} from "mongoose";

// Define the schema for the cookies collection
const cookiesSchema = new Schema(
    {
        profile: {type: String, required: true}, // The profile name or identifier
        cookiesList: [ // Array of objects representing the list of cookies under the profile
            {
                url: {type: String, required: true}, // URL associated with the cookie
                data: {type: String}, // Data field
                localData: {type: String}, // Local data field
            },
        ],
    },
    {timestamps: true} // Automatically add createdAt and updatedAt fields
);

// Create the model
const Cookie = model("Cookie", cookiesSchema);

export default Cookie;