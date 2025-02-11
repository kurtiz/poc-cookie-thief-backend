import cookiesSchema from "../models/cookies.model.js";
import Cookie from "../models/cookies.model.js";

const saveData = async (req, res) => {
    try {
        const {url, data, localData} = req.body;

        await Cookie.findOneAndUpdate({"url": url}, {url, data, localData}, {upsert: true});
        console.log("saved")
        res.status(201).json({success: true});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false});
    }
}

const getData = async (req, res) => {
    try {
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