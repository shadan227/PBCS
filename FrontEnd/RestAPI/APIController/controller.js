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
  // console.log(results);
  // console.log("Here is the result");
  // console.log(v1);
  // console.log("Rest API Controller "+results[0][v1]);
  // var tt = results;
  res.json(results);
});

}

module.exports.filter = function(req, res, next)
{
  // console.log("we are here in filter api");
  var parr = req.body.pr;
  var brand = req.body.brand;
  var scn = req.body.scn;
  var screenresolution = req.body.screenresolution;
  var cpu = req.body.cpu;
  var rpm = req.body.rpm;
  var hd = req.body.hd;
  var ram = req.body.ram;
  var os = req.body.os;
  var battery = req.body.battery;

  var parrl = parr.length;
  var brandl = brand.length;
  var scnl = scn.length;
  var screenresolutionl = screenresolution.length;
  var cpul = cpu.length;
  var rpml = rpm.length;
  var hdl = hd.length;
  var raml = ram.length;
  var osl = os.length;
  var batteryl = battery.length;

  console.log(parr);

  // console.log("price length is "+parrl);
  // console.log("brand length is "+brandl);
  // console.log("price "+parr);
  // console.log("brand "+brand);
  // console.log("screen "+scn);
  // console.log("screenresolution "+screenresolution);
  // console.log("cpu "+cpu);
  // console.log("rpm "+rpm);
  // console.log("hd "+hd);
  // console.log("ram "+ram);
  // console.log("os "+os);
  // console.log("battery "+battery);

  if((parrl == 0 && brandl == 0 && scnl == 0 && screenresolutionl == 0 && cpul == 0 && rpml == 0 && hdl == 0 && raml == 0 && osl == 0 && batteryl == 0) ||
  (parrl == 8 && brandl == 18 && scnl == 7 && screenresolutionl == 4 && cpul == 6 && rpml == 5 && hdl == 4 && raml == 5 && osl == 9 && batteryl == 4))
  {
    console.log("API SUCCESS");
    res.json({STATUS:"SUCCESS"});
  }
  else {
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
    console.log(battery);
    product.find({"specifications.full_specs.Battery.Battery Backup":{$in:battery}}).exec(function(error, result){
      if(error){
        console.log("here is an error in filtering");
      }
      else {
        // console.log(result);
        var l1 = result.length;
            // console.log("Result after filtering is ");
            // console.log(result);
            // console.log(cpu);
                    console.log(l1);
            // console.log("I am here with filtering 2");
            // console.log("API SUCCESSOR");
            res.json({STATUS:"SUCCESSOR"});
      }
    });
  }
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
