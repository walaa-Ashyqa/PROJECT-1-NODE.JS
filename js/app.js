
//core modules 
 
  const fs = require("fs")

  fs.writeFileSync( "data1.txt" , "WALA' ASHYQA" )

////////////////////////////////////////////////////////////////////////////////////////////////////////

 const data10 = require("./data10")
const yargs = require("yargs")

yargs.command ({
    command : "add",
    describe : "to add a person",
    builder: {
      id : {
        describe: "this is the id description in add command",
        demandOption: true,
        type : "string"
     },

       firstName : {
         describe: "this is the first name description in add command",
         demandOption: true,
         type : "string"
      },
      lastName : {
        describe: "this is the last name description in add command",
         demandOption: true,
        type : "string"
     },
     age : {
      describe: "this is the age description in add command",
      demandOption: true,
      type : "string"
   },
   city : {
    describe: "this is the city description in add command",
    demandOption: true,
    type : "string"
 },
    },
    handler:(x)=> {
      data10.addPerson(x.id , x.firstName , x.lastName,x.age , x.city)
    }
})



yargs.command({
  command : "delete",
  describe : "to delete an item",
  builder: {
    id : {
       describe: "this is the id  description idn delete command",
       demandOption: true,
       type : "string"
    },
  },
  handler:(x)=> {
     data10.deleteData(x.id)
  }

})

yargs.command({
  command: "read",
  describe : "to read data",
  builder : {
     id : {
       describe : "this is id desc in read command",
       demandOption : true,
       type : "string"
     }
  },
  handler: (x)=> {
     data10.readData(x.id)
  }
})

yargs.command ({
  command : "list",
  describe : "to list data" ,
  handler : () => {
    data10.listData()
  }
})

yargs.parse()


  








 