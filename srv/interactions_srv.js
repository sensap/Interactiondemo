const cds = require('@sap/cds');

module.exports = cds.service.impl(function(){

 this.on('sleep',async ()=>{
     try{
        const db = await cds.connect.to('db')
        var inp = ""
        const inparray = []
        inp ={
            IN_SECONDS : 5,
            NAME: "senthil"
        }

        inparray.push({...inp});
        inp ={
            IN_SECONDS : 10,
            NAME : "test"
        }
        inparray.push({...inp})

        inp ={
            IN_SECONDS : 20,
            NAME : "senthil"
        }
        inparray.push({...inp})
        const dbClass = require("sap-hdbext-promisfied")
        let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials))
        const hdbext = require("@sap/hdbext")
        const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'sleep')
        const output = await dbConn.callProcedurePromisified(sp, inparray)
       return output.outputScalar.OUT_SECONDS

     }
   catch(error){
    console.error(error)
    return false
} 
 })

this.on('test',async req=>{
    const data = req.data
    let str = data
    
return str;
})

this.on("construct_array", () => {
    var months = [{ "id": 1, "name": "January" }, { "id": 2, "name": "February" }];
    console.log(JSON.stringify(months));
    var monthNames = ["January", "February"];
    var month = {};
    var monthsArray = [];
    for (let i = 0; i < 2; i++) {
        month.id = (i + 1);
        month.name = monthNames[i];
        monthsArray.push({ ...month });
    }
    console.log(JSON.stringify(monthsArray));
});


})