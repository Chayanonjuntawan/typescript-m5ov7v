
const xx='test'
// console.log('HI'+xx);
// console.log(`HI ${xx}`);
const department = {departmentCode:'UN',departmentName:'Union',status:1
,bungle:2500};
// console.log(JSON.stringify(department)); 
// console.log('myObject',department);

department.departmentCode='MydepartmentCode'
// console.log('myObject',department);
// เพราะทำอยู่ในไฟล์ typescript .ts 
const departmentDotProperties = {};
departmentDotProperties.departmentName = 'Union';
departmentDotProperties.departmentCode = 'UN';
departmentDotProperties.status = 1;

const departmentNoCheck = {};
departmentNoCheck['departmentName'] = 'Union';
departmentNoCheck['departmentCode'] = 'UN';
departmentNoCheck['status'] = 1;

// console.log(departmentNoCheck['departmentName']);
// <1> ข้อมูล object ชั้นเดียว
const abilityData = {agi:20,def:30};
abilityData.agi=100
console.log(abilityData)
// โจทย์ (1) จาก object abilityData จงเขียน Code เปลี่ยนค่า property agi ให้มีค่า 100 แล้วทำการแสดง object นี้ออกทาง console

// <2> ข้อมูล object สองชั้น
const secondLayerData = {bag:{sword:'Monaka',game:'uno'},hp:20};
secondLayerData.bag.sword='Katana'
secondLayerData.bag.yoyo='hono'
console.log(secondLayerData)
// โจทย์ (2) จาก object secondLayerData จงเขียน Code เปลี่ยนค่า property sword ให้เป็น 'Katana' แล้วทำการแสดง object นี้ออกทาง console
