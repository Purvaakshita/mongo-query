db.employees.insertOne({
        name:"Cathy George",
        email:"cathy@gmail.com",
        address:{city:"Jacksonville",state:"FL"},
        department:"HR",
        salary:2500,
        score:[6,2,6,4],
        skills:["Java","Python","Reactjs","MongoDB"],
        date:Date(),
    });

    db.employees.insertOne({
        name:"John",
        email:"john@gmail.com",
        address:{city:"ville",state:"LR"},
        department:"Admin",
        salary:1456,
        score:[4,2,1,5],
        skills:["Java","Python"],
        date:Date(),
    });

    db.employees.insertOne({
        name:"Mike",
        email:"Mike@gmail.com",
        address:{city:"hyd",state:"goa"},
        department:"finance",
        salary:50000,
        score:[6,5,4,9],
        skills:["Java","Reactjs","MongoDB"],
        date:Date(),
    });

    db.employees.find(
        {"address.city":"hyd"}
    );