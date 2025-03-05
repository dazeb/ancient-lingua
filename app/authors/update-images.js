"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
// Read the authors data file
var authorsDataPath = path.join(__dirname, 'data.ts');
var authorsData = fs.readFileSync(authorsDataPath, 'utf8');
// Final fixes for remaining images
var finalFixes = {
    aristophanes: {
        url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Aristophanes_-_Project_Gutenberg_eText_12788.png",
        attribution: "Unknown artist",
        license: "pd",
        source: "https://commons.wikimedia.org/wiki/File:Aristophanes%20-%20Project%20Gutenberg%20eText%2012788.png"
    },
    euripides: {
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Seated_Euripides_Louvre_Ma343.jpg",
        attribution: "Unknown artist",
        license: "pd",
        source: "https://commons.wikimedia.org/wiki/File:Seated%20Euripides%20Louvre%20Ma343.jpg"
    }
};
// Function to add image attribution data
function addAttributionData(data, authorId, info) {
    var imagePattern = new RegExp("(id:\\s*[\"']".concat(authorId, "[\"'].*?image:\\s*[\"'].*?[\"'],)\\s*(tags:)"), 's');
    var attributionData = "$1\n    imageAttribution: \"".concat(info.attribution, "\",\n    imageLicense: \"").concat(info.license, "\",\n    imageSource: \"").concat(info.source, "\",\n    $2");
    return data.replace(imagePattern, attributionData);
}
// Fix Aesop's duplicate fields
authorsData = authorsData.replace(/imageAttribution:.*?,\s*imageAttribution:/, 'imageAttribution:');
// Add missing attribution data
Object.entries(finalFixes).forEach(function (_a) {
    var authorId = _a[0], info = _a[1];
    authorsData = addAttributionData(authorsData, authorId, info);
});
// Write the updated data back to the file
fs.writeFileSync(authorsDataPath, authorsData);
console.log('Final image fixes completed!');
