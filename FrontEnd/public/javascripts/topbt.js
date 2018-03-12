window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

//sidebar.html

function displayDiv1()
{
    if(document.getElementById("sideleft11").style.display == "none")
        {
            document.getElementById("sideleft11").style.display = "block";
        }
    else{
        document.getElementById("sideleft11").style.display = "none";
    }
}

// below function is used to uncheck all the check box of the particular webpage
function uncheckAll()
{
    $('input[type="checkbox"]:checked').prop('checked',false);
}

function uncheckAllDiv1()
{
  var _this = this;
  $('#sideleft11').find('input[name="price"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv2()
{
    if(document.getElementById("sideleft12").style.display == "none")
        {
            document.getElementById("sideleft12").style.display = "block";
        }
    else{
        document.getElementById("sideleft12").style.display = "none";
    }
}

function uncheckAllDiv2()
{
  var _this = this;
  $('#sideleft12').find('input[name="brand"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv3()
{
    if(document.getElementById("sideleft13").style.display == "none")
        {
            document.getElementById("sideleft13").style.display = "block";
        }
    else{
        document.getElementById("sideleft13").style.display = "none";
    }
}

function uncheckAllDiv3()
{
  var _this = this;
  $('#sideleft13').find('input[name="type"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv4()
{
    if(document.getElementById("sideleft14").style.display == "none")
        {
            document.getElementById("sideleft14").style.display = "block";
        }
    else{
        document.getElementById("sideleft14").style.display = "none";
    }
}

function uncheckAllDiv4()
{
  var _this = this;
  $('#sideleft14').find('input[name="screen"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv5()
{
    if(document.getElementById("sideleft15").style.display == "none")
        {
            document.getElementById("sideleft15").style.display = "block";
        }
    else{
        document.getElementById("sideleft15").style.display = "none";
    }
}

function uncheckAllDiv5()
{
  var _this = this;
  $('#sideleft15').find('input[name="screenresolution"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv6()
{
    if(document.getElementById("sideleft16").style.display == "none")
        {
            document.getElementById("sideleft16").style.display = "block";
        }
    else{
        document.getElementById("sideleft16").style.display = "none";
    }
}

function uncheckAllDiv6()
{
  var _this = this;
  $('#sideleft16').find('input[name="cpu"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv7()
{
    if(document.getElementById("sideleft17").style.display == "none")
        {
            document.getElementById("sideleft17").style.display = "block";
        }
    else{
        document.getElementById("sideleft17").style.display = "none";
    }
}

function uncheckAllDiv7()
{
  var _this = this;
  $('#sideleft17').find('input[name="cpug"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv8()
{
    if(document.getElementById("sideleft18").style.display == "none")
        {
            document.getElementById("sideleft18").style.display = "block";
        }
    else{
        document.getElementById("sideleft18").style.display = "none";
    }
}

function uncheckAllDiv8()
{
  var _this = this;
  $('#sideleft18').find('input[name="cpus"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv9()
{
    if(document.getElementById("sideleft19").style.display == "none")
        {
            document.getElementById("sideleft19").style.display = "block";
        }
    else{
        document.getElementById("sideleft19").style.display = "none";
    }
}

function uncheckAllDiv9()
{
  var _this = this;
  $('#sideleft19').find('input[name="rpm"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDiv10()
{
    if(document.getElementById("sideleft110").style.display == "none")
        {
            document.getElementById("sideleft110").style.display = "block";
        }
    else{
        document.getElementById("sideleft110").style.display = "none";
    }
}

function uncheckAllDiv10()
{
  var _this = this;
  $('#sideleft110').find('input[name="hd"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivram()
{
    if(document.getElementById("sideleftram1").style.display == "none")
        {
            document.getElementById("sideleftram1").style.display = "block";
        }
    else{
        document.getElementById("sideleftram1").style.display = "none";
    }
}

function uncheckAllDivram()
{
  var _this = this;
  $('#sideleftram1').find('input[name="ram"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivgraphics()
{
    if(document.getElementById("sideleftgraphics1").style.display == "none")
        {
            document.getElementById("sideleftgraphics1").style.display = "block";
        }
    else{
        document.getElementById("sideleftgraphics1").style.display = "none";
    }
}

function uncheckAllDivgraphics()
{
  var _this = this;
  $('#sideleftgraphics1').find('input[name="graphics"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivfeatures()
{
    if(document.getElementById("sideleftfeatures1").style.display == "none")
        {
            document.getElementById("sideleftfeatures1").style.display = "block";
        }
    else{
        document.getElementById("sideleftfeatures1").style.display = "none";
    }
}

function uncheckAllDivfeatures()
{
  var _this = this;
  $('#sideleftfeatures1').find('input[name="features"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivos()
{
    if(document.getElementById("sideleftos1").style.display == "none")
        {
            document.getElementById("sideleftos1").style.display = "block";
        }
    else{
        document.getElementById("sideleftos1").style.display = "none";
    }
}

function uncheckAllDivos()
{
  var _this = this;
  $('#sideleftos1').find('input[name="os"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivbb()
{
    if(document.getElementById("sideleftbb1").style.display == "none")
        {
            document.getElementById("sideleftbb1").style.display = "block";
        }
    else{
        document.getElementById("sideleftbb1").style.display = "none";
    }
}

function uncheckAllDivbb()
{
  var _this = this;
  $('#sideleftbb1').find('input[name="bb"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function displayDivw()
{
    if(document.getElementById("sideleftw1").style.display == "none")
        {
            document.getElementById("sideleftw1").style.display = "block";
        }
    else{
        document.getElementById("sideleftw1").style.display = "none";
    }
}

function uncheckAllDivw()
{
  var _this = this;
  $('#sideleftw1').find('input[name="w"]').each(function() {

    if ($(_this).is(':checked')) {
      $(this).prop('checked', true);
    } else {
      $(this).prop('checked', false);
    }
  });
}

function nextFun()
{
  var first = document.getElementById("fir").text;
  var second = document.getElementById("sec").text;
  var third = document.getElementById("thir").text;
  // alert(first+" "+second+" "+third);
  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);
  document.getElementById("fir").text = first+1;
  document.getElementById("sec").text = second+1;
  document.getElementById("thir").text = third+1;
}

function prevFun()
{
  var first = document.getElementById("fir").text;
  var second = document.getElementById("sec").text;
  var third = document.getElementById("thir").text;
  // alert(first+" "+second+" "+third);
  first = parseInt(first);
  second = parseInt(second);
  third = parseInt(third);
  if(first != 1)
  {
    document.getElementById("fir").text = first-1;
    document.getElementById("sec").text = second-1;
    document.getElementById("thir").text = third-1;
  }
}
