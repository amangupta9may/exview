/**
 * Created by AM764213 on 6/15/2016.
 */
node_xj = require("xls-to-json");
node_xj({
    input: "chm.xls",  // input xls
    output: "output.json", // output json
    sheet: "Data",  // specific sheetname
}, function(err, result) {
    if(err) {
        console.error(err);
    } else {
        console.log(result);
    }
});