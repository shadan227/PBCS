var mongoose = require('mongoose');
var PythonShell = require('python-shell');
mongoose.Promise = global.Promise;

var product = mongoose.model('product');
var feedbck = mongoose.model('feedback');
var repo = mongoose.model('report');
var sendJSONresponse = function(res, status, content) {
  console.log("We are gere in apiController sendJSONResponse");
  res.status(status);
  res.json(content);
};

module.exports.front = function(req, res, next)
{
  var page = req.body.pageno;
  // console.log("Page no on rest api is "+page);
  var perpage = 10;
  product.find({}).skip((perpage * page) - perpage).limit(perpage).exec(function(err, result){
    product.count().exec(function(err, count){
      if(err)
      {
        // console.log("There is some error to fetch front page data");
        sendJSONresponse(res, 400, err);
      }
      else {
        // console.log(resu);
        var ob = {resu: result, current: page, pages: Math.ceil(count / perpage)};
        // res.json(resu);
        // console.log(ob);
        // console.log("reached finally");
        res.json(ob);
        // console.log("Now we go from apiController to webController");
      }
    });
  });
}

module.exports.key_info = function(req, res, next)
{
  var key = req.body.key;
  // console.log("Here key is "+key);
  product.find().where({key:key}).exec(function(error, result){
    if(error)
    {
      sendJSONresponse(res, 406, error);
    }
    else {
      res.json(result);
    }
  });
}

module.exports.key_i = function(req, res, next)
{
  var key = req.body.key;
  // console.log("Here key is "+key);
  product.find().where({key:key}).exec(function(error, result){
    if(error)
    {
      sendJSONresponse(res, 406, error);
    }
    else {
      res.json(result);
    }
  });
}

module.exports.compItems = function(req, res, next)
{
  var v1 = req.body.dat1;
  var v2 = req.body.dat2;
  var v3 = req.body.dat3;
  var v4 = req.body.dat4;
  var options = {
  mode: 'json',
  pythonPath: 'python',
  pythonOptions: ['-u'],
  scriptPath: '../Comparator/',
  args: [v1,v2,v3,v4]
};

PythonShell.run('MainComparator.py', options, function (err, results) {
  if (err)
  {
    console.log(err);
  }
  // var tt = results;
  // res.json(results);
  product.find().where({key:{$in:[v1,v2,v3,v4]}}).exec(function(error, result){
    if(error)
    {
      sendJSONresponse(res, 406, error);
    }
    else {
      // console.log("Here in rest API");
      // console.log("Inside");
      // console.log(tt);
      var rr = {aa:results, bb:result};
      // console.log(rr);
      res.json(rr);
    }
  });
});
}

module.exports.filter = function(req, res, next)
{
  // console.log("we are here in filter api");
  var parr = req.body.pr;
  var brand = req.body.brand;

  var parrl = parr.length;
  var brandl = brand.length;

    // console.log("I am here with filtering 1");
    // console.log(scn);
    // console.log(scn[0]+" "+scn[1]+" "+scn[scnl-1]);
    // product.find({$and:[{"specifications.full_specs.Processor.Brand": {$in: cpu}}]}).find({brand:{$in: brand}})
    // console.log(parr[0]+" "+parr[parrl-1]);
    // product.find({price:{$gt:parr[0], $lt:parr[parrl-1]}})
    // product.find({$or:[{"specifications.full_specs.Display.Touch":scn[0]},{"specifications.full_specs.Display.Size":{$gte:scn[1], $lte:scn[scnl-1]}}]})
    // console.log(screenresolution);
    // console.log(cpu);
    // product.find({"specifications.full_specs.Display.Resolution":{$in:screenresolution}})
    // product.find({$or:[{"specifications.full_specs.Processor.Brand": {$in: cpu}},{"specifications.full_specs.Processor.Series": {$in: cpu}}]})
    // console.log(rpm);
    // product.find({"specifications.full_specs.Memory.Hard Disk Speed": {$in:rpm}})
    // console.log(hd);
    // product.find({$or:[{"specifications.full_specs.Memory.Hard Disk Capacity": {$in:hd}}, {"specifications.full_specs.Memory.Hard Disk Capacity": {$gte:hd[0]}}]})
    // console.log(ram);
    // product.find({$or:[{"specifications.full_specs.Memory.RAM": {$in:ram}}, {"specifications.full_specs.Memory.RAM": {$gte:ram[0]}}]})
    // console.log(os);
    // product.find({"specifications.full_specs.General.OS": {$in:os}})
    // console.log(parr);
    // console.log(parr[0]);
    // console.log(parr[parrl-1]);
    product.find({price:{$gte:parr[0], $lte:parr[parrl-1]}}).exec(function(error, result){
      if(error){
        console.log("here is an error in filtering");
      }
      else {
            // console.log("Rest API with only price result "+result);
            res.json(result);
      }
    });
}

module.exports.filter1 = function(req, res, next)
{
  // console.log("we are here in filter api");
  var parr = req.body.pr;
  var brand = req.body.brand;

  var parrl = parr.length;
  var brandl = brand.length;
    product.find({price:{$gt:parr[0], $lt:parr[parrl-1]}}).find({brand:{$in: brand}}).exec(function(error, result){
      if(error){
        console.log("here is an error in filtering");
      }
      else {
            // console.log("Rest API with brand and price result  "+result);
            res.json(result);
      }
    });
}

module.exports.filter2 = function(req, res, next)
{
  // console.log("we are here in filter api");
  var parr = req.body.pr;
  var brand = req.body.brand;

  var parrl = parr.length;
  var brandl = brand.length;
    product.find({brand:{$in: brand}}).exec(function(error, result){
      if(error){
        console.log("here is an error in filtering");
      }
      else {
            // console.log("Rest API with only brand result "+result);
            res.json(result);
      }
    });
}

module.exports.search = function(req, res, next)
{
  // console.log("We are here in restAPI");
  var cap = req.body.dat;
  console.log("console "+cap);
  // var small = req.body.dat2;
  console.log(cap);
  product.find({name:{$regex:cap, $options:'si'}}).exec(function(error, result){
    if(error)
    {
      console.log("Here is some error in searching");
    }
    else {
      console.log("Success in searching");
      // console.log(result);
      var count = result.length;
      console.log(count);
      res.json(result);
      // res.json(STATUS:"SUCCESS");
    }
  });
}

module.exports.feedbk = function(req, res, next)
{
  console.log("Here is in api feedback controller");
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.mob;
  var feed = req.body.request;
  console.log(name+" "+email+" "+contact+" "+feed);
  feedbck.create({
    name: name.trim(),
    email: email.trim(),
    contact: contact.trim(),
    feedback: feed.trim()
  },function(error, result){
    if(error)
    {
      sendJSONresponse(res, 400, error);
    }
    else {
      var tt = {status:"success"};
      sendJSONresponse(res, 200, tt);
    }
  });
}

module.exports.reprt = function(req, res, next)
{
  console.log("here is in api report controller");
  var name = req.body.name;
  var email = req.body.email;
  var contact = req.body.mob;
  var subject = req.body.subject;
  var description= req.body.request;
  console.log(name+" "+email+" "+contact+" "+subject+" "+description);
repo.create({
  name: name.trim(),
  email: email.trim(),
  contact: contact.trim(),
  subject: subject.trim(),
  description: description.trim()
},function(error, result){
  if(error)
  {
    sendJSONresponse(res, 400, error);
  }
  else
    {
      var tt = {status:"success"};
      sendJSONresponse(res, 200, tt);
    }
});
}
