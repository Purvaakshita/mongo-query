db.users.insertMany([
    {
        name:" Mike",
        email: "mike@email.com",
        pass:"1234",
    },
    {
        name:" Cathy",
        email: "cathy@email.com",
        pass:"1234",

    },
]);

db.users.find()