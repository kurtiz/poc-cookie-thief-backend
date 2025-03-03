import cookiesSchema from "../models/cookies.model.js";
import Cookie from "../models/cookies.model.js";

const saveData = async (req, res) => {
    try {
        const {profile, url, data, localData} = req.body;

        console.log({profile, url, data, localData});

        // Step 1: Check if the profile exists and if the URL already exists in cookiesList
        const existingCookie = await Cookie.findOne({profile, "cookiesList.url": url});

        if (existingCookie) {
            // Step 2: If the URL exists, update the data and localData fields
            await Cookie.updateOne(
                {profile, "cookiesList.url": url},
                {
                    $set: {
                        "cookiesList.$[elem].data": data,
                        "cookiesList.$[elem].localData": localData,
                    },
                },
                {
                    arrayFilters: [{"elem.url": url}],
                }
            );
        } else {
            // Step 3: If the URL does not exist, add it to the cookiesList
            await Cookie.updateOne(
                {profile}, // Find the document by profile
                {
                    $push: {
                        cookiesList: {
                            url,
                            data,
                            localData,
                        },
                    },
                },
                {upsert: true} // Create the profile if it doesn't exist
            );
        }

        console.log("Data saved successfully");
        res.status(201).json({success: true});
    } catch (error) {
        console.error("Error saving data:", error);
        res.status(500).json({success: false});
    }
};

const getData = async (req, res) => {
    try {
        const spec = req.headers["spec"];

        if (spec !== process.env.SPEC) {
            return res.status(401).json({success: false});
        }

        const data = await Cookie.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false});
    }
}

export {
    saveData,
    getData
};