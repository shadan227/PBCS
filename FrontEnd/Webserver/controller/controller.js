var mongoose = require('mongoose');
var request = require('request');

module.exports.report = function(req, res, next)
{
  console.log("Here in web report controller");
  console.log(req.body.name+" "+req.body.email+" "+req.body.mob+" "+req.body.subject+" "+req.body.request);
  var requestOptions = {
    url: "http://localhost:3000/api/repo",
    method: "POST",
    json: req.body
  }
  console.log("we are ready to go to the api controller");
  request(requestOptions, function(error, response, body){
    if(error)
    {
      res.json({Status:"Server error"});
    }
    else {
      if(response.statusCode == 400)
      {
        res.json({Status:"Server error"});
      }
      res.json({Status:"SUCCESS"});
    }
  });

  // res.json({Status:"Success"});
}

module.exports.feed = function(req, res, next)
{
    consol.log("Here is in feedback web controller");
    res.json({Status:"SUCCESS"});
    // console.log(req.body.name+" "+req.body.email+" "+req.body.mob+" "+req.body.request);
    // var requestOptions = {
    //   url: "http://localhost:3000/api/fdback",
    //   method: "POST",
    //   json: req.body
    // }
    // request(requestOptions, function(error, response, body){
    //   if(error)
    //   {
    //     res.json({Status:"Server error"});
    //   }
    //   else {
    //     if(response.statusCode == 400)
    //     {
    //       res.json({Status:"Server error"});
    //     }
        // alert("Thank you for your feedback...");
    //   }
    // });
}


module.exports.front1 = function(req, res, next)
{
  res.redirect("/1");
}

module.exports.front = function(req, res, next) {
  console.log("here in webcontroller");
  var page = req.params.page || 1;
  console.log("Page no is "+page);
  var requestOptions = {
    url: 'http://localhost:3000/api/front',
    method: 'get',
    json: {
      pageno: req.params.page || 1
    }
  }
request(requestOptions, function(error, response, body){
  if(error)
  {
    return res.status(500).send(error);
  }
  else {
    if(response.statusCode == 400)
    {
      console.log("Server side error");
      response.json({Status:"Server side error"});
    }
    var tt = {pp: body.resu, pages: body.pages, current: body.current};
    res.render('index', tt);
  }
});
}

module.exports.key_info = function(req, res, next)
{
  // console.log("Here in key information");
  var k = req.params.KEY;
  // console.log("key is in web controller "+k);
  var requestOptions = {
    url: 'http://localhost:3000/api/key_info',
    method: 'POST',
    json:{
      key: k
    }
  }
  request(requestOptions, function(error, response, body){
    if(error)
    {
      return res.status(500).send(error);
    }
    else {
      var tt = {pp:body[0]};
      res.render('product_info',tt);
    }
  });
}

module.exports.filter = function(req, res, next)
{
  var requestOptions = {
    url: 'http://localhost:3000/api/filter',
    method: 'POST',
    json: req.body
  }
  request(requestOptions, function(error, response, body){
    if(error)
    {
      return res.status(500).send(error);
    }
    else {
      console.log(body);
      console.log(body.STATUS);
      if((body.STATUS).valueOf() === "SUCCESS")
      {
        console.log("Here");
        res.redirect("/1");
      }
      else {
        console.log("Here1");
        res.send({STATUS:"SUCCESSOR"});
      }
    }
  });
  // res.send({STATUS:"SUCCESS"});
}
