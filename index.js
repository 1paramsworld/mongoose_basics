const mongoose = require("mongoose");

const main = async () => {
    await mongoose.connect("mongodb://0.0.0.0:27017/paramshah");

    const dataschema = new mongoose.Schema({
        email: String,
        password: String, 
    });

    const datamodel = new mongoose.model("paramdata", dataschema);

    let data = new datamodel({ email: "jahnavi3983@gmail.com", password: "28062002" });
    const result = await data.save();
    console.log(result);
};

main();
