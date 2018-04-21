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
    // console.log(tt);
    res.render('index', tt);
    // res.render('comparison', tt);
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

module.exports.key_i = function(req, res, next)
{
  // console.log("We are here in webserver key_i");
  var k = req.body.KEY;
  // console.log(k);
  var requestOptions = {
    url: 'http://localhost:3000/api/key_i',
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
      // debugger;
      // console.log("Key_i "+body[0].price);
      // var tt = {pp:body[0]};
      // res.render('product_info',tt);
      res.json(body[0]);
      // return tt;
    }
  });
}

module.exports.search = function(req, res, next)
{
  var requestOptions = {
    url: 'http://localhost:3000/api/search',
    method: 'POST',
    json: req.body
  }
  request(requestOptions, function(error, response, body){
    if(error)
    {
      return res.status(500).send(error);
    }
    else {
      // console.log(body);
      res.json(body);
      console.log("Done finally");
    }
  })
}

module.exports.compItems = function(req, res, next)
{
  var key1 = req.body.dat1;
  console.log("first key is "+key1);
  var requestOptions = {
    url: 'http://localhost:3000/api/compItems',
    method: 'POST',
    json: req.body
  }
  request(requestOptions, function(error, response, body){
    if(error)
    {
      return res.status(500).send(error);
    }
    else {
      console.log("we are return on webserver with result");
      // console.log("web server " +body);
      // var tt = body;
      // console.log("value of key 1 is "+tt.key1);
      // var parsedJSON = JSON.parse(tt);
      // console.log(parsedJSON);
      // var tt = body;
      // res.render('comparison',tt);
      res.json(body);
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
      // console.log(body);
      // console.log(body.STATUS);
      // if((body.STATUS).valueOf() === "SUCCESS")
      // {
      //   console.log("Here");
      //   res.redirect("/1");
      // }
      // else {
      //   console.log("Here1");
      //   res.send({STATUS:"SUCCESSOR"});
      // }
    }
  });
  // res.send({STATUS:"SUCCESS"});
}
