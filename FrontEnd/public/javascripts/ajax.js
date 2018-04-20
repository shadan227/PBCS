$('document').ready(function(){

  $(".button4").click(function(){
    var a="",b="",c="",d="";
    if(($('#out1').css('display') == 'block') || ($('#out2').css('display') == 'block') || ($('#out3').css('display') == 'block') || ($('#out4').css('display') == 'block'))
    {
      if($('#out1').css('display') == 'block')
      {
        a = $('#cd1').attr('class');
        // alert(a);
      }
      if($('#out2').css('display') == 'block')
      {
        b = $('#cd2').attr('class');
        // alert(b);
      }
      if($('#out3').css('display') == 'block')
      {
        c = $('#cd3').attr('class');
        // alert(c);
      }
      if($('#out4').css('display') == 'block')
      {
        d = $('#cd4').attr('class');
        // alert(d);
      }
      // alert(a+" "+b+" "+c+" "+d);
      $.ajax({
        url: 'http://localhost:3000/compItems',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(
          {
            dat1: a,
            dat2: b,
            dat3: c,
            dat4: d
          }
        ),
        success: function(response)
        {
          // alert("We are in ajax");
          // alert(response);
          document.write(response);
        }
      });
    }
    else {
      alert("Please select minimum one product");
    }
  });

  $(".inpu1").keyup(function(){
    //  debugger;
    var v = $(".inpu1").val();
    $.ajax({
      url: 'http://localhost:3000/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          dat: v
        }
      ),
      success: function(response)
      {
        // alert("here in ajax "+response[0].img);
        console.log("Success "+response.length);
        var len = response.length;
        // alert("response from server is "+response);
        // alert("length is "+len+" "+v.length);
        var ln = v.length;
        if(ln>0)
        {
          // alert("Inside here");
          $('#exc').empty();
          for(var i=0 ; i<len ; i++)
          {
            $('.ex2').css('display', 'block');
            $('#exc').append('<tr><td><img src='+response[i].img+' alt="no laptop" width="50" height="50"></td><td class="searchPro"><a href=http://localhost:3000/pro/'+response[i].key+'>'+response[i].name+'</a></td></tr>');
          }
        }
        else {
          $('.ex2').css('display', 'none');
        }
      }
    });
  });

  $("#search1").keyup(function(){
    //  debugger;
    // alert("We are here");
    var v = $("#search1").val();
    // alert(v);
    $.ajax({
      url: 'http://localhost:3000/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          dat: v
        }
      ),
      success: function(response)
      {
        // alert("here in ajax "+response[0].img);
        console.log("Success "+response.length);
        var len = response.length;
        // alert("response from server is "+response);
        // alert("length is "+len+" "+v.length);
        var ln = v.length;
        if(ln>0)
        {
          // alert("Inside here");
          $('#exam1').empty();
          for(var i=0 ; i<len ; i++)
          {
              // $('.ex2').empty();
            $('#exam1').css('display', 'block');
            $('#exam1').append('<tr><td id='+response[i].key+' onclick="openCompare2(this)" class='+response[i].key+'><a href="#">'+response[i].name+'</a></td></tr>');
          }
        }
        else {
          $('#exam1').css('display', 'none');
        }
      }
    });
  });

  var priceArray = [];
  var brandsArray = [];
  var screenArray = [];
  var screenResolutionArray = [];
  var cpuArray = [];
  var hdRPMArray = [];
  var hdArray = [];
  var ramArray = [];
  var osArray = [];
  var batteryArray = [];
  $(".common").click(function(){
    priceArray = [];
    brandsArray = [];
    screenArray = [];
    screenResolutionArray = [];
    cpuArray = [];
    hdRPMArray = [];
    hdArray = [];
    ramArray = [];
    osArray = [];
    batteryArray = [];
    $("input[name='price']:checked").each(function(){
      var pr = $(this).val();
      if(pr == "1")
      {
        priceArray.push("0");
        priceArray.push("25001");
      }
      if(pr == "2")
      {
        priceArray.push("25000");
        priceArray.push("30001");
      }
      if(pr == "3")
      {
        priceArray.push("30000");
        priceArray.push("40001");
      }
      if(pr == "4")
      {
        priceArray.push("40000");
        priceArray.push("50001");
      }
      if(pr == "5")
      {
        priceArray.push("50000");
        priceArray.push("70001");
      }
      if(pr == "6")
      {
        priceArray.push("70000");
        priceArray.push("100000");
      }
      if(pr == "7")
      {
        priceArray.push("100000");
        priceArray.push("120000");
      }
      if(pr == "8")
      {
        priceArray.push("70000");
        priceArray.push("999999");
      }
    });
    $("input[name='brand']:checked").each(function(){
      brandsArray.push($(this).val());
    });
    $("input[name='screen']:checked").each(function(){
      var scr = $(this).val();
      if(scr == "Yes")
      {
        screenArray.push(scr);
      }
      if(scr == "1")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("0 inches");
          screenArray.push("12 inches");
      }
      if(scr == "2")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("12 inches");
          screenArray.push("13 inches");
      }
      if(scr == "3")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("13 inches");
          screenArray.push("14 inches");
      }
      if(scr == "4")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("14 inches");
          screenArray.push("15 inches");
      }
      if(scr == "5")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("15 inches");
          screenArray.push("16 inches");
      }
      if(scr == "6")
      {
        if(screenArray[0] != "Yes")
        {
          screenArray[0] = "No";
        }
          screenArray.push("16 inches");
          screenArray.push("100 inches");
      }
    });
    $("input[name='screenresolution']:checked").each(function(){
      screenResolutionArray.push($(this).val());
    });
    $("input[name='cpu']:checked").each(function(){
      cpuArray.push($(this).val());
    });
    $("input[name='rpm']:checked").each(function(){
      hdRPMArray.push($(this).val());
    });
    $("input[name='hd']:checked").each(function(){
      var val1 = $(this).val();
      if(val1 == "1")
      {
        hdArray.push("320 GB");
        hdArray.push("500 GB");
        hdArray.push("720 GB");
        hdArray.push("1 TB");
      }
      if(val1 == "2")
      {
        if(hdArray.length == 0)
        {
          hdArray.push("500 GB");
          hdArray.push("720 GB");
          hdArray.push("1 TB");
        }
      }
      if(val1 == "3")
      {
        if(hdArray.length == 0)
        {
          hdArray.push("720 GB");
          hdArray.push("1 TB");
        }
      }
      if(val1 == "4")
      {
        if(hdArray.length == 0)
        {
          hdArray.push("1 TB");
        }
      }
    });
    $("input[name='ram']:checked").each(function(){
      var val1 = $(this).val();
      if(val1 == "1")
      {
        ramArray.push("2 GB");
        ramArray.push("3 GB");
        ramArray.push("4 GB");
        ramArray.push("6 GB");
        ramArray.push("8 GB");
      }
      if(val1 == "2")
      {
        if(ramArray.length == 0)
        {
          ramArray.push("3 GB");
          ramArray.push("4 GB");
          ramArray.push("6 GB");
          ramArray.push("8 GB");
        }
      }
      if(val1 == "3")
      {
        if(ramArray.length == 0)
        {
          ramArray.push("4 GB");
          ramArray.push("6 GB");
          ramArray.push("8 GB");
        }
      }
      if(val1 == "4")
      {
        if(ramArray.length == 0)
        {
          ramArray.push("6 GB");
          ramArray.push("8 GB");
        }
      }
      if(val1 == "5")
      {
        if(ramArray.length == 0)
        {
          ramArray.push("8 GB");
        }
      }
    });
    $("input[name='os']:checked").each(function(){
      var val1 = $(this).val();
      if(val1 == "1")
      {
          osArray.push("Windows 8 (64-bit)");
          osArray.push("Windows 8.1 (64-bit)");
      }
      else if(val1 == "2")
      {
          osArray.push("Windows 7 (64-bit)");
          osArray.push("Windows 7 Professional (64-bit)");
          osArray.push("Windows 7 Home Premium");
          osArray.push("Windows 7 Home Basic (32-bit)");
          osArray.push("Windows 7 Professional (32-bit)");
      }
      else {
          osArray.push($(this).val());
      }
    });
    $("input[name='bb']:checked").each(function(){
      var val1 = $(this).val();
      if(val1 == "1")
      {
        batteryArray.push("Upto 3.5 Hours");
        batteryArray.push("Upto 4 Hours");
        batteryArray.push("Upto 5 Hours");
        batteryArray.push("Upto 4.5 Hours");
        batteryArray.push("Upto 6 Hours");
        batteryArray.push("Upto 6.5 Hours");
        batteryArray.push("Upto 7 Hours");
        batteryArray.push("Upto 7.2 Hours");
        batteryArray.push("Upto 8 Hours");
        batteryArray.push("Upto 8.5 Hours");
      }
      if(val1 == "2")
      {
        batteryArray.push("Upto 5 Hours");
        batteryArray.push("Upto 6 Hours");
        batteryArray.push("Upto 6.5 Hours");
        batteryArray.push("Upto 7 Hours");
        batteryArray.push("Upto 7.2 Hours");
        batteryArray.push("Upto 8 Hours");
        batteryArray.push("Upto 8.5 Hours");
      }
      if(val1 == "3")
      {
        batteryArray.push("Upto 7 Hours");
        batteryArray.push("Upto 8 Hours");
        batteryArray.push("Upto 8.5 Hours");
        batteryArray.push("Upto 7.2 Hours");
      }
      batteryArray.push("Upto 9 Hours");
      batteryArray.push("Upto 10 Hours");
      batteryArray.push("Upto 10.5 Hours");
      batteryArray.push("Upto 11 Hours");
      batteryArray.push("Upto 12 Hours");
      batteryArray.push("Upto 40 Hours");
      batteryArray.push("Upto 45 Hours");
    });

    $.ajax({
      url: 'http://localhost:3000/filter',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          pr: priceArray,
          brand: brandsArray,
          scn: screenArray,
          screenresolution: screenResolutionArray,
          cpu: cpuArray,
          rpm: hdRPMArray,
          hd: hdArray,
          ram: ramArray,
          os: osArray,
          battery: batteryArray
        }
      ),
      success: function(response)
      {
        console.log("Success "+response);
        alert("response from server is "+response);
        // alert("Success");
      }
    });
  });
});
