"use strict";
// Enum :
// enum is the set of value which returns index or define index or return or return value
// syntax 
// enum name {}
// enum Students{
//     ali,yaqoob,sufiyan,asghar
// }
// const student : Students= Students.sufiyan;
// console.log(student);
var off_Management;
(function (off_Management) {
    off_Management[off_Management["shakeel"] = 0] = "shakeel";
    off_Management[off_Management["ali"] = 1] = "ali";
    off_Management[off_Management["mirza"] = 2] = "mirza";
    off_Management[off_Management["yousuf"] = 3] = "yousuf";
})(off_Management || (off_Management = {}));
const office = off_Management.ali;
console.log(office);
