const { log } = require('async');
const Budget = require('../models').budget;
const Stock = require('../models').stock;
const Tobuy = require('../models').tobuy;


// const getEmployees = async function (req, res) {
//   let err;
//   let response = { name: 'Boopathi' };
//   console.log('getEmployees: ');
//   // [err, response] = await to(Employee.findAll());
//   if (err) return ReE(res, err, 422);
//   return ReS(res, { response });
// }
// module.exports.getEmployees = getEmployees;

// const createEmployee = async function (req, res) {
//   let err;
//   let body = req.body;
//   let addemployee;
//   [err, addemployee] = await to(Employee.create(body));
//   console.log('createEmployee: ', addemployee);
//   if (err) return ReE(res, err, 422);
//   return ReS(res, { addemployee });
// }
// module.exports.createEmployee = createEmployee;

// const getrole = async function (req, res) {
//   let err;
//   let Role;
//   [err, Role] = await to(role.findAll());
//   console.log('Role: ', Role);
//   if (err) return ReE(res, err, 422);
//   return ReS(res, { Role });
// }
// module.exports.getrole = getrole;






//get budget api call
const getbudget = async function (req, res) {
  let err;
  let getbudget;
  [err, getbudget] = await to(Budget.findAll());
  console.log('budget: ', getbudget);
  if (err) return ReE(res, err, 422);
  return ReS(res, { getbudget });
}
module.exports.getbudget = getbudget;

//add budget api call
const addbudget = async function (req, res) {
  let err;
  let body = req.body;
  console.log(body);
  let addbudget;
  [err, addbudget] = await to(Budget.create(body));
  console.log('createbudget: ', addbudget);
  if (err) return ReE(res, err, 422);
  return ReS(res, { addbudget });
}
module.exports.addbudget = addbudget;

//delete budget api call
const deletebudget = async function (req, res) {
  let err;
  let deletebudget;
  console.log(req.body.Date);
  [err, deletebudget] = await to(Budget.destroy({
    where: { Date: req.body.Date }
  }));
  console.log('deletebudget: ', deletebudget);
  if (err) return ReE(res, err, 422);
  return ReS(res, { deletebudget });
}
module.exports.deletebudget = deletebudget;

//get single record from budget table to fill in form field (frontend)
const getbudgetrecord = async function (req, res) {
  let err;
  let getbudgetrecord;
  [err, getbudgetrecord] = await to(Budget.findOne({
    where: { Date: req.body.Date }
  }));
  console.log('getbudgetrecord: ', getbudgetrecord);
  if (err) return ReE(res, err, 422);
  return ReS(res, { getbudgetrecord });
}
module.exports.getbudgetrecord = getbudgetrecord;

//to edit the single item from budget table
const editbudget = async function (req, res) {
  let err;
  let editbudget;
  for(let i=0;i<req.body.length;i++){
    [err, editbudget] = await to(Budget.update(req.body[i],{
      where: { id: req.body[i].id }
    }));
  }
  console.log('editbudget: ', editbudget);
  if (err) return ReE(res, err, 422);
  return ReS(res, { editbudget });

}

module.exports.editbudget = editbudget;

//..................................................................................................

//get stock api call
const getstock = async function (req, res) {
  let err;
  let getstock;
  [err, getstock] = await to(Stock.findAll());
  console.log('stock: ', getstock);
  if (err) return ReE(res, err, 422);
  return ReS(res, { getstock });
}
module.exports.getstock = getstock;

//add stock api call
const addstock = async function (req, res) {
  let err;
  let body = req.body;
  console.log(body);
  let addstock;
  [err, addstock] = await to(Stock.create(body));
  console.log('createstock: ', addstock);
  if (err) return ReE(res, err, 422);
  return ReS(res, { addstock });
}
module.exports.addstock = addstock;

//delete stock api call
const deletestock = async function (req, res) {
  let err;
  let deletestock;
  console.log(req.body.Name);
  [err, deletestock] = await to(Stock.destroy({
    where: { Name: req.body.Name }
  }));
  console.log('deletestock: ', deletestock);
  if (err) return ReE(res, err, 422);
  return ReS(res, { deletestock });
}
module.exports.deletestock = deletestock;

//get single record from stock table to fill in form field (frontend)
const getstockrecord = async function (req, res) {
  let err;
  let getstockrecord;
  [err, getstockrecord] = await to(Stock.findOne({
    where: { Name: req.body.Name }
  }));
  console.log('getstockrecord: ', getstockrecord);
  if (err) return ReE(res, err, 422);
  return ReS(res, { getstockrecord });
}
module.exports.getstockrecord = getstockrecord;

//to edit the single item from stock table
const editstock = async function (req, res) {
  let err;
  let editstock;
  [err, editstock] = await to(Stock.update(req.body,{
    where: { id: req.body.id }
  }));
  console.log('editstock: ', editstock);
  if (err) return ReE(res, err, 422);
  return ReS(res, { editstock });
}
module.exports.editstock = editstock;

//..................................................................................................
//get tobuy api call
const gettobuy = async function (req, res) {
  let err;
  let gettobuy;
  [err, gettobuy] = await to(Tobuy.findAll());
  console.log('tobuy: ', gettobuy);
  if (err) return ReE(res, err, 422);
  return ReS(res, { gettobuy });
}
module.exports.gettobuy = gettobuy;

//add tobuy api call
const addtobuy = async function (req, res) {
  let err;
  let body = req.body;
  console.log(body);
  let addtobuy;
  [err, addtobuy] = await to(Tobuy.create(body));
  console.log('createTobuy: ', addtobuy);
  if (err) return ReE(res, err, 422);
  return ReS(res, { addtobuy });
}
module.exports.addtobuy = addtobuy;

//delete tobuy api call
const deletetobuy = async function (req, res) {
  let err;
  let deletetobuy;
  console.log(req.body.Item);
  [err, deletetobuy] = await to(Tobuy.destroy({
    where: { Item: req.body.Item }
  }));
  console.log('deletetobuy: ', deletetobuy);
  if (err) return ReE(res, err, 422);
  return ReS(res, { deletetobuy });
}
module.exports.deletetobuy = deletetobuy;

//get single record from tobuy table to fill in form field (frontend)
const gettobuyrecord = async function (req, res) {
  let err;
  let gettobuyrecord;
  [err, gettobuyrecord] = await to(Tobuy.findOne({
    where: { Item: req.body.Item }
  }));
  console.log('gettobuyrecord: ', gettobuyrecord);
  if (err) return ReE(res, err, 422);
  return ReS(res, { gettobuyrecord });
}
module.exports.gettobuyrecord = gettobuyrecord;

//to edit the single item from tobuy table
const edittobuy = async function (req, res) {
  let err;
  let edittobuy;
  [err, edittobuy] = await to(Tobuy.update(req.body,{
    where: { id: req.body.id }
  }));
  console.log('edittobuy: ', edittobuy);
  if (err) return ReE(res, err, 422);
  return ReS(res, { edittobuy });
}
module.exports.edittobuy = edittobuy;
