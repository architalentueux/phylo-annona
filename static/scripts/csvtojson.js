import csvtojson from "csvtojson";
import { promises as fs } from "fs";



const jsonFilePath = "BrassiToL_metadata.json";
const csvFilePath = "BrassiToL_metadata_Anogenus.csv";
fs.access(csvFilePath, fs.constants.F_OK, (err) => {
	if (err) {
	  console.error(`Error: File does not exist. Check to make sure the file path to your csv is correct.`);
	}

});
csvtojson({
	delimiter: ";", // Have to set the delimiter to a semicolon apparently
})
	.fromFile(csvFilePath)
	.then(async (json) => {
		await fs.writeFile(jsonFilePath, JSON.stringify(json, null, 4));
		console.log("Conversion completed, JSON saved to " + jsonFilePath);
	})
	.catch((error) => {
		console.error("An error occurred:", error);
	});
