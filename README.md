# payassist
A react project implemeting container method of getting state

#to mock the DATA 

npm install json-server

then create a file on root i.e db.json , then populate it with this data, you can also duplicate it too....

# Run the json-server with the db file specified

npm start json-server --watch db.json
 {
      Account :[

 {
        id: Long,
    lastName: "lekan",
    firstName: "Ade",
    middleName: "ola",
    phoneNumber: 08129014778,
    email: salkchitin@gmail.com,
    address: "United Kingdom",
    bank: "FBN",
    bankAccountNumber: "1234567890",
    serviceId : 232, 
    serviceTypeId: 3, 
    updatedOn:29-10-2018,
    anniversary: 29-10-2018
},
{
        id: Long,
    lastName: "lekan",
    firstName: "Ade",
    middleName: "ola",
    phoneNumber: 08129014778,
    email: salkchitin@gmail.com,
    address: "United Kingdom",
    bank: "FBN",
    bankAccountNumber: "1234567890",
    serviceId : 232, 
    serviceTypeId: 3, 
    updatedOn:29-10-2018,
    anniversary: 29-10-2018
}
     ]
 }




{
    Service :[
      {
    id:232,  
    serviceProviderId:3,
    tenor: 30,
     amount: 10000,
  name: E-payment,
  description: payment

},
 {
    id:232,  
    serviceProviderId:3,
    tenor: 30,
     amount: 10000,
  name: E-payment,
  description: payment

}
    ]
}