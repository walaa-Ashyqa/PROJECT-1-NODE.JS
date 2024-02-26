

 const fs = require("fs");

 const addPerson = (id ,firstName , lastName , age , city) => {

      const allData = loadData()

      const duplicatedDate = allData.filter((obj) => {
        return obj.id === id 
      })

      if (!duplicatedDate.length) {
        allData.push({
            id : id,
            firstName : firstName,
            lastName : lastName,
            age : age,
            city : city
         })
         console.log("this person has been added successfully!")
         savaAllData(allData)
      } 
      else 
      {
        console.log("ERROR Duplicated Id")
      }

 }
 //////////////////////////

  const loadData = () => {
    try {
        const DataJson = fs.readFileSync("fileData.json").toString()
        return  JSON.parse(DataJson)
    }
    catch {
        return []
    }
    
  }

  //////////////////////////

  const savaAllData = (allData) => {
      const AllDataJson = JSON.stringify(allData)
      fs.writeFileSync("fileData.json" , AllDataJson )
      console.log("Data saved.")
  }

  ////////////////////////// 

  const deleteData = (id) => {
     const allData = loadData()

     const newData = allData.filter((obj) => {
        return obj.id !== id 
       
     })
     savaAllData(newData)
     
     console.log("you have already deleted an Item")
  }
  //////////////////////////
  const  listData = () => {
    const allData = loadData()
    console.log("id    firstName    lastName    age      city")
    console.log("-----------------------------------------------")
    allData.forEach((obj) => {
        console.log(obj.id+"      "+obj.firstName +"         "+ obj.lastName +"      "+ obj.age+"      "+obj.city)
    })
}
//////////////////////////
const readData = (id) => {

  const allData = loadData()

  const itemNeeded = allData.find((obj)=>{
     return  obj.id == id 
  })

  if (itemNeeded) {
    console.log(itemNeeded.id, itemNeeded.firstName , itemNeeded.lastName , itemNeeded.age, itemNeeded.city)
  } else {
    console.log("This person was not found!")
  }
 
}

  ///////////////////////////////////////////////////////////////////////////////
  module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
  }