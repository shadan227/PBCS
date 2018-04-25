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
          // document.write(response.aa[0][a]);
          // document.write(response.bb[0].name);
          $('#myModal').empty();
          $('#cone').empty();
          $('#sidemid').empty();
          var l1=a.length, l2 = b.length, l3 = c.length, l4 = d.length;
          var num1=0,num2=0,num3=0,num4=0;
          var count = 0;
          if(l1>0)
          {
            count++;
          }
          if(l2>0)
          {
            count++;
          }
          if(l3>0)
          {
            count++;
          }
          if(l4>0)
          {
            count++;
          }
          // alert(l1+" "+l2+" "+l3+" "+l4);
          var r1=0,r2=0,r3=0,r4=0;
          // alert(r1+" "+r2+" "+r3+" "+r4);
          if(count == 4)
          {
            num1 = response.aa[0][a];
            num2 = response.aa[0][b];
            num3 = response.aa[0][c];
            num4 = response.aa[0][d];
            var arr = [num1, num2, num3, num4];
            arr.sort();
            if(arr[0] == num1)
            {
              r1 = 4;
            }
            else if(arr[0] == num2)
            {
              r2 = 4;
            }
            else if(arr[0] == num3)
            {
              r3 = 4;
            }
            else
            {
              r4 = 4;
            }
            if(arr[1] == num1)
            {
              r1 =3;
            }
            else if(arr[1] == num2)
            {
              r2 = 3;
            }
            else if(arr[1] == num3)
            {
              r3 = 3;
            }
            else
            {
              r4 = 3;
            }
            if(arr[2] == num1)
            {
              r1 = 2;
            }
            else if(arr[2] == num2)
            {
              r2 = 2;
            }
            else if(arr[2] == num3)
            {
              r3 = 2;
            }
            else
            {
              r4 = 2;
            }
            if(arr[3] == num1)
            {
              r1 = 1;
            }
            else if(arr[3] == num2)
            {
              r2 = 1;
            }
            else if(arr[3] == num3)
            {
              r3 = 1;
            }
            else
            {
              r4 = 1;
            }
                                    $('#cmp').append(''+
                                    '<br>'+
                                    '<hr>'+
                                    '<div id="cmp1">'+
                                    '<div id="cmp_1"><h2>Compare</h2></div>'+
                                    '<div id="cmp_2"><h3>Compare Laptops</h3></div>'+
                                    '</div>'+
                                    '<hr>'+
                                    '<div id="cmp2">'+
                                    '<div id="cmp_21">Features</div>'+
                                    '<div id="cmp_22">'+
                                    '<div class="cmp_221">&nbsp;'+response.bb[0].name+'</div>'+
                                    '<div class="cmp_222"><i>vs</i></div>'+
                                    '<div class="cmp_221">&nbsp;'+response.bb[1].name+'</div>'+
                                    '<div class="cmp_222"><i>vs</i></div>'+
                                    '<div class="cmp_221">&nbsp;'+response.bb[2].name+'</div>'+
                                    '<div class="cmp_222"><i>vs</i></div>'+
                                    '<div class="cmp_221">&nbsp;'+response.bb[3].name+'</div>'+
                                    '</div></div>'+
                                    '<div id="cmp2dup">'+
                                        '<div id="cmp_21dup">Features</div>'+
                                        '<div id="cmp_22dup">'+
                                          '<div class="cmp_221dup">&nbsp;'+response.bb[0].name+'</div>'+
                                          '<div class="cmp_222dup"><i>vs</i></div>'+
                                          '<div class="cmp_221dup">&nbsp;'+response.bb[1].name+'</div>'+
                                          '<div class="cmp_222dup"><i>vs</i></div>'+
                                          '<div class="cmp_221dup">&nbsp;'+response.bb[2].name+'</div>'+
                                          '<div class="cmp_222dup"><i>vs</i></div>'+
                                          '<div class="cmp_221dup">&nbsp;'+response.bb[3].name+'</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div id="zcmp">'+
                                        '<table>'+
                                            '<tr class="tr_1">'+
                                               '<td class="td_11" id="td_1111">Features</td>'+
                                                '<td class="td_12 non1">'+response.bb[0].name+'</td>'+
                                                '<td class="td_12 non1">'+response.bb[1].name+'</td>'+
                                                '<td class="td_12 non1">'+response.bb[2].name+'</td>'+
                                                '<td class="td_12 non1">'+response.bb[3].name+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2" id="ztrid">'+
                                                '<td class="td_11 exttr"><div id="differences">Differences</div></td>'+
                                                '<td class="td_12 non exttd">'+
                                                    '<table>'+
                                                        '<tr>'+
                                                            '<td class="insidetr1">'+
                                                                '<img src="'+response.bb[0].img+'" alt="no" height="30" width="50">'+
                                                            '</td>'+
                                                            '<td class="insidetr2">'+
                                                                response.bb[0].price+
                                                            '</td>'+
                                                            '<td class="insidetr3">'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                            '</td>'+
                                                        '</tr>'+
                                                    '</table>'+
                                                '</td>'+
                                                '<td class="td_12 non exttd">'+
                                                    '<table>'+
                                                        '<tr>'+
                                                            '<td class="insidetr1">'+
                                                                '<img src="'+response.bb[1].img+'" alt="no" height="30" width="50">'+
                                                            '</td>'+
                                                            '<td class="insidetr2">'+
                                                                response.bb[1].price+
                                                            '</td>'+
                                                            '<td class="insidetr3">'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                            '</td>'+
                                                        '</tr>'+
                                                    '</table>'+
                                                '</td>'+
                                                '<td class="td_12 non exttd">'+
                                                    '<table>'+
                                                        '<tr>'+
                                                            '<td class="insidetr1">'+
                                                                '<img src="'+response.bb[2].img+'" alt="no" height="30" width="50">'+
                                                            '</td>'+
                                                            '<td class="insidet2">'+
                                                                response.bb[2].price+
                                                            '</td>'+
                                                            '<td class="insidetr3">'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                            '</td>'+
                                                        '</tr>'+
                                                    '</table>'+
                                                '</td>'+
                                                '<td class="td_12 non exttd">'+
                                                    '<table>'+
                                                        '<tr>'+
                                                            '<td class="insidetr1">'+
                                                                '<img src="'+response.bb[3].img+'" alt="no" height="30" width="50">'+
                                                            '</td>'+
                                                            '<td class="insidetr2">'+
                                                                response.bb[3].price+
                                                            '</td>'+
                                                            '<td class="insidetr3">'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star checked"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                               '<span class="fa fa-star"></span>'+
                                                            '</td>'+
                                                        '</tr>'+
                                                    '</table>'+
                                                '</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</div><hr>'+
                                    '<div id="cmp3">'+
                                        '<div id="cmp_31">'+
                                            '&nbsp;&nbsp;Show:'+
                                            '<br><br>'+
                                            '<div id="cmp_311">List Of All Features</div>'+
                                        '</div>'+
                                        '<div id="cmp_32">'+
                                          '<div class="cmp_321">'+
                                              '<div class="cmp_3211"><img src="'+response.bb[0].img+'" alt="no image" width="230px" height="135px"></div>'+
                                              '<div class="cmp_3212">Rs. '+response.bb[0].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321">'+
                                              '<div class="cmp_3211"><img src="'+response.bb[1].img+'" alt="no image" width="230px" height="135px"></div>'+
                                              '<div class="cmp_3212">Rs. '+response.bb[1].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321">'+
                                              '<div class="cmp_3211"><img src="'+response.bb[2].img+'" alt="no image" width="230px" height="135px"></div>'+
                                              '<div class="cmp_3212">Rs. '+response.bb[2].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321">'+
                                              '<div class="cmp_3211"><img src="'+response.bb[3].img+'" alt="no image" width="230px" height="135px"></div>'+
                                              '<div class="cmp_3212">Rs. '+response.bb[3].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                        '</div>'+
                                        '<hr>'+
                                        '<div id="cmp_33">'+
                                            '<div class="cmp_331">'+
                                                '<div class="cmp_3311">Add Another Product</div>'+
                                            '</div>'+
                                            '<div class="cmp_331">'+
                                                '<div class="cmp_3311">Add Another Product</div>'+
                                            '</div>'+
                                            '<div class="cmp_331">'+
                                                '<div class="cmp_3311">Add Another Product</div>'+
                                            '</div>'+
                                            '<div class="cmp_331">'+
                                                '<div class="cmp_3311">Add Another Product</div>'+
                                            '</div>'+
                                        '</div>'+
                                    '</div>'+
                                    '<div id="cmp3dup">'+
                                        '<div id="cmp_31dup">'+
                                            '&nbsp;&nbsp;Show:'+
                                            '<br><br>'+
                                            '<div id="cmp_311dup">List Of All Features</div>'+
                                        '</div>'+
                                        '<div id="cmp_32dup">'+
                                          '<div class="cmp_321dup">'+
                                              '<div>'+
                                                  '<div class="cmp_3211dup"><img src="'+response.bb[0].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                  '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                              '</div>'+
                                              '<div class="cmp_3212dup">Rs. '+response.bb[0].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321dup">'+
                                              '<div>'+
                                                  '<div class="cmp_3211dup"><img src="'+response.bb[1].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                  '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                              '</div>'+
                                              '<div class="cmp_3212dup">Rs. '+response.bb[1].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321dup">'+
                                              '<div>'+
                                                  '<div class="cmp_3211dup"><img src="'+response.bb[2].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                  '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                              '</div>'+
                                              '<div class="cmp_3212dup">Rs. '+response.bb[2].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                          '<div class="cmp_321dup">'+
                                              '<div>'+
                                                  '<div class="cmp_3211dup"><img src="'+response.bb[3].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                  '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                              '</div>'+
                                              '<div class="cmp_3212dup">Rs. '+response.bb[3].price+' <br>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star checked"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                                '<span class="fa fa-star"></span>'+
                                              '</div>'+
                                          '</div>'+
                                        '</div>'+
                                    '</div><br><br>'+
                                    '<div id="cmp4">'+
                                        '<table>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Overview</td>'+
                                                '<td id="td_12" colspan="3">Advantages (Factors To Decide Which Device You Should Buy)</td>'+
                                                '<td class="td_12" id="td_13"><div id="rmv">Remove All Devices</div></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Rankings</strong></td>'+
                                                '<td class="td_12 non"><div class="rank"># '+r1+'</div></td>'+
                                                '<td class="td_12 non e"><div class="rank"># '+r2+'</div></td>'+
                                                '<td class="td_12 non"><div class="rank"># '+r3+'</div></td>'+
                                                '<td class="td_12 non e"><div class="rank"># '+r4+'</div></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Specs Score</strong></td>'+
                                                '<td class="td_12 non">'+
                                                  '<center>'+
                                                  '<div class="progress" id="pro">'+
                                                     '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num1+'%"></div>'+
                                                   '</div>'+
                                                   '<div class="score">'+
                                                     num1+'/100'+
                                                   '</div>'+
                                                 '</center>'+
                                                '</td>'+
                                                '<td class="td_12 non e">'+
                                                  '<center>'+
                                                  '<div class="progress" id="pro">'+
                                                     '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num2+'%"></div>'+
                                                   '</div>'+
                                                   '<div class="score">'+
                                                     num2+'/100'+
                                                   '</div>'+
                                                 '</center>'+
                                                '</td>'+
                                                '<td class="td_12 non">'+
                                                  '<center>'+
                                                  '<div class="progress" id="pro">'+
                                                     '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num3+'%"></div>'+
                                                   '</div>'+
                                                   '<div class="score">'+
                                                     num3+'/100'+
                                                   '</div>'+
                                                 '</center>'+
                                                '</td>'+
                                                '<td class="td_12 non e">'+
                                                  '<center>'+
                                                  '<div class="progress" id="pro">'+
                                                     '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num4+'%"></div>'+
                                                   '</div>'+
                                                   '<div class="score">'+
                                                     num4+'/100'+
                                                   '</div>'+
                                                 '</center>'+
                                               '</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">General</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Series</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Series+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Series+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Series+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Series+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Model</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Model+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Model+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Model+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Model+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Utility</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Utility+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Utility+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Utility+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Utility+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>OS</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.OS+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.OS+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.OS+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.OS+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Dimensions</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Dimensions+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Dimensions+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Dimensions+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Dimensions+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Weight</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Weight+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Weight+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Weight+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Weight+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Warranty</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Warranty+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Warranty+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Warranty+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.General.Warranty+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Display</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Type</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Type+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Type+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Type+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.Type+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Touch</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Touch+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Touch+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Touch+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.Touch+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Size</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Size+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Size+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Size+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.Size+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Resolution</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Resolution+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Resolution+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Resolution+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.Resolution+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>PPI</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.PPI+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.PPI+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.PPI+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.PPI+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Aspect Ratio</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Surface</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Surface+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Surface+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Surface+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Display.Surface+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Processor</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Processor</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Processor+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Processor+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Processor+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Processor+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Speed</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Speed+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Speed+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Speed+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Speed+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Cache</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Cache+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Cache+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Cache+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Cache+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Brand</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Brand+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Brand+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Brand+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Brand+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Series</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Series+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Series+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Series+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Series+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Model</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Model+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Model+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Model+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Processor.Model+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Graphics</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>GPU</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.GPU+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.GPU+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics.GPU+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Graphics.GPU+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Dedicated Memory</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Brand</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.Brand+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.Brand+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics.Brand+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Graphics.Brand+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Memory</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>RAM</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory.RAM+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory.RAM+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory.RAM+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory.RAM+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>RAM Bus Speed</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Maximum RAM Supported</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>RAM Slots</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Hard Disk Capacity</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Hard Disk Speed</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Connectivity</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Ethernet</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>WiFi</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Bluetooth</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Lan Port</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>USB Ports</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>HDMI</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Card Reader</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Microphone In</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Security Lock Port</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Input</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Camera</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Camera+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Camera+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Camera+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input.Camera+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Keyboard</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Keyboard+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Keyboard+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Keyboard+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input.Keyboard+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Keyboard Backlit</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Pointer Device</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Inbuilt Microphone</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Speakers</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Speakers+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Speakers+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Speakers+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input.Speakers+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Sound</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Sound+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Sound+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Sound+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input.Sound+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Optical Drive</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Optical Drive Speed</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Battery</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Battery</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery.Battery+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery.Battery+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Battery.Battery+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Battery.Battery+'</td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Battery Backup</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                            '</tr>'+
                                            '<tr id="tr_1">'+
                                                '<td class="td_11" id="td_11">Extra</td>'+
                                                '<td id="td_12" colspan="4"></td>'+
                                            '</tr>'+
                                            '<tr class="tr_2">'+
                                                '<td class="td_11"><strong>Sales Package</strong></td>'+
                                                '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                '<td class="td_12 non e">'+response.bb[3].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                            '</tr>'+
                                        '</table>'+
                                    '</div>'+
                                    '<br/><br/>'+
                                    '<div id="lt">Give Your Priority Here</div>'+
                                    '<br/><br/>'+
                                    '<div id="drp" class="lt1">'+
                                      '<table>'+
                                        '<tr class="select1" id="drp1">'+
                                          '<td class="select11">'+
                                            '<select id="select1">'+
                                              '<option value="" selected disabled>First priority</option>'+
                                              '<option id="op1" value="Processor">Processor</option>'+
                                              '<option id="op2" value="RAM">RAM</option>'+
                                              '<option id="op3" value="Hard_Disc">Hard Disc</option>'+
                                              '<option id="op4" value="Battary">Battary</option>'+
                                              '<option id="op5" value="Price">Price</option>'+
                                            '</select>'+
                                          '</td>'+
                                          '<td class="select12"></td>'+
                                          '<td class="select13">'+
                                            '<button type="button" name="button" class="btnn" id="btnn1">Add</button>'+
                                          '</td>'+
                                        '</tr>'+
                                        '<tr class="select1" id="drp2">'+
                                          '<td class="select11">'+
                                            '<select id="select2">'+
                                              '<option value="" selected disabled>Second priority</option>'+
                                              '<option id="op11" value="Processor">Processor</option>'+
                                              '<option id="op22" value="RAM">RAM</option>'+
                                              '<option id="op33" value="Hard_Disc">Hard Disc</option>'+
                                              '<option id="op44" value="Battary">Battary</option>'+
                                              '<option id="op55" value="Price">Price</option>'+
                                            '</select>'+
                                          '</td>'+
                                          '<td class="select12"></td>'+
                                          '<td class="select13">'+
                                            '<button type="button" name="button" class="btnn" id="btnn2">Add</button>'+
                                          '</td>'+
                                        '</tr>'+
                                        '<tr class="select1" id="drp3">'+
                                          '<td class="select11">'+
                                            '<select id="select3">'+
                                              '<option value="" selected disabled>Third priority</option>'+
                                              '<option id="op111" value="Processor">Processor</option>'+
                                              '<option id="op222" value="RAM">RAM</option>'+
                                              '<option id="op333" value="Hard_Disc">Hard Disc</option>'+
                                              '<option id="op444" value="Battary">Battary</option>'+
                                              '<option id="op555" value="Price">Price</option>'+
                                            '</select>'+
                                          '</td>'+
                                          '<td class="select12"></td>'+
                                          '<td class="select13">'+
                                            '<button type="button" name="button" class="btnn" id="btnn3">Add</button>'+
                                          '</td>'+
                                        '</tr>'+
                                        '<tr class="select1" id="drp4">'+
                                          '<td class="select11">'+
                                            '<select id="select4">'+
                                              '<option value="" selected disabled>Fourth priority</option>'+
                                              '<option id="op1111" value="Processor">Processor</option>'+
                                              '<option id="op2222" value="RAM">RAM</option>'+
                                              '<option id="op3333" value="Hard_Disc">Hard Disc</option>'+
                                              '<option id="op4444" value="Battary">Battary</option>'+
                                              '<option id="op5555" value="Price">Price</option>'+
                                            '</select>'+
                                          '</td>'+
                                          '<td class="select12"></td>'+
                                          '<td class="select13">'+
                                            '<button type="button" name="button" class="btnn" id="btnn4">Add</button>'+
                                          '</td>'+
                                        '</tr>'+
                                        '<tr class="select1" id="drp5">'+
                                          '<td class="select11">'+
                                            '<select id="select5">'+
                                              '<option value="" selected disabled>Fifth priority</option>'+
                                              '<option id="op11111" value="Processor">Processor</option>'+
                                              '<option id="op22222" value="RAM">RAM</option>'+
                                              '<option id="op33333" value="Hard_Disc">Hard Disc</option>'+
                                              '<option id="op44444" value="Battary">Battary</option>'+
                                              '<option id="op55555" value="Price">Price</option>'+
                                            '</select>'+
                                          '</td>'+
                                          '<td class="select12"></td>'+
                                          '<td class="select13">'+
                                            '<button type="button" name="button" class="btnn" id="btnn5">Add</button>'+
                                          '</td>'+
                                        '</tr>'+
                                      '</table>'+
                                    '</div>'+
                                    '<br>'+
                                    '<button id="nc" type="button" name="button">Now Compare</button>'+
                            '<br/><br/><br/><br/>');
                      
                                  }
                                  else if(count == 3)
                                  {
                                    // alert("Inside here");
                                    num1 = response.aa[0][a];
                                    num2 = response.aa[0][b];
                                    num3 = response.aa[0][c];
                                    num4 = response.aa[0][d];
                                    // alert(num1+" "+num2+" "+num3+" "+num4);
                                    var arr;
                                    if(num1 == undefined)
                                    {
                                      num1 = num4;
                                    }
                                    else if(num2 == undefined)
                                    {
                                      num2 = num4;
                                    }
                                    else if(num3 == undefined)
                                    {
                                      num3 = num4;
                                    }
                                    arr = [num1, num2, num3];
                                    // alert(arr);
                                    arr.sort();
                                    if(arr[0] == num1)
                                    {
                                      r1 = 3;
                                    }
                                    else if(arr[0] == num2)
                                    {
                                      r2 = 3;
                                    }
                                    else
                                    {
                                      r3 = 3;
                                    }
                                    if(arr[1] == num1)
                                    {
                                      r1 =2;
                                    }
                                    else if(arr[1] == num2)
                                    {
                                      r2 = 2;
                                    }
                                    else
                                    {
                                      r3 = 2;
                                    }
                                    if(arr[2] == num1)
                                    {
                                      r1 = 1;
                                    }
                                    else if(arr[2] == num2)
                                    {
                                      r2 = 1;
                                    }
                                    else
                                    {
                                      r3 = 1;
                                    }
                                    // alert(r1+" "+r2+" "+r3);
                                                              $('#cmp').append(''+
                                                              '<br>'+
                                                              '<hr>'+
                                                              '<div id="cmp1">'+
                                                              '<div id="cmp_1"><h2>Compare</h2></div>'+
                                                              '<div id="cmp_2"><h3>Compare Laptops</h3></div>'+
                                                              '</div>'+
                                                              '<hr>'+
                                                              '<div id="cmp2">'+
                                                              '<div id="cmp_21">Features</div>'+
                                                              '<div id="cmp_22">'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[0].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[1].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[2].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '</div></div>'+
                                                              '<div id="cmp2dup">'+
                                                                  '<div id="cmp_21dup">Features</div>'+
                                                                  '<div id="cmp_22dup">'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[0].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[1].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[2].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="zcmp">'+
                                                                  '<table>'+
                                                                      '<tr class="tr_1">'+
                                                                         '<td class="td_11" id="td_1111">Features</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[0].name+'</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[1].name+'</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[2].name+'</td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2" id="ztrid">'+
                                                                          '<td class="td_11 exttr"><div id="differences">Differences</div></td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[0].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+
                                                                                          response.bb[0].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[1].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+
                                                                                          response.bb[1].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[2].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidet2">'+
                                                                                          response.bb[2].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div><hr>'+
                                                              '<div id="cmp3">'+
                                                                  '<div id="cmp_31">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32">'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[0].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[1].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[1].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[2].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[2].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                                  '<hr>'+
                                                                  '<div id="cmp_33">'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="cmp3dup">'+
                                                                  '<div id="cmp_31dup">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311dup">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32dup">'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[0].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[1].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[1].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[2].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[2].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                              '</div><br><br>'+
                                                              '<div id="cmp4">'+
                                                                  '<table>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Overview</td>'+
                                                                          '<td id="td_12" colspan="3">Advantages (Factors To Decide Which Device You Should Buy)</td>'+
                                                                          '<td class="td_12" id="td_13"><div id="rmv">Remove All Devices</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Rankings</strong></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># '+r1+'</div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank"># '+r2+'</div></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># '+r3+'</div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank">#</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Specs Score</strong></td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num1+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num1+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num2+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num2+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num3+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num3+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num4+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                         '</td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">General</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Utility</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>OS</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dimensions</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Weight</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Warranty</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Display</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Type</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Touch</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Size</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Resolution</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>PPI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Aspect Ratio</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Surface</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Processor</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Processor</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Cache</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Graphics</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>GPU</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dedicated Memory</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Memory</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Bus Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Maximum RAM Supported</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Slots</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Capacity</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Connectivity</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Ethernet</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>WiFi</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Bluetooth</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Lan Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>USB Ports</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>HDMI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Card Reader</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Microphone In</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Security Lock Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Input</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Camera</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard Backlit</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Pointer Device</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Inbuilt Microphone</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speakers</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sound</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Battery</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery Backup</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Extra</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sales Package</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non">'+response.bb[2].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div>'+
                                                              '<br/><br/>'+
                                                              '<div id="lt">Give Your Priority Here</div>'+
                                                              '<br><br>'+
                                                              '<div id="drp" class="lt1">'+
                                                                '<table>'+
                                                                  '<tr class="select1" id="drp1">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select1">'+
                                                                        '<option value="" selected disabled>First priority</option>'+
                                                                        '<option id="op1" value="Processor">Processor</option>'+
                                                                        '<option id="op2" value="RAM">RAM</option>'+
                                                                        '<option id="op3" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4" value="Battary">Battary</option>'+
                                                                        '<option id="op5" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn1">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp2">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select2">'+
                                                                        '<option value="" selected disabled>Second priority</option>'+
                                                                        '<option id="op11" value="Processor">Processor</option>'+
                                                                        '<option id="op22" value="RAM">RAM</option>'+
                                                                        '<option id="op33" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44" value="Battary">Battary</option>'+
                                                                        '<option id="op55" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn2">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp3">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select3">'+
                                                                        '<option value="" selected disabled>Third priority</option>'+
                                                                        '<option id="op111" value="Processor">Processor</option>'+
                                                                        '<option id="op222" value="RAM">RAM</option>'+
                                                                        '<option id="op333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op444" value="Battary">Battary</option>'+
                                                                        '<option id="op555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn3">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp4">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select4">'+
                                                                        '<option value="" selected disabled>Fourth priority</option>'+
                                                                        '<option id="op1111" value="Processor">Processor</option>'+
                                                                        '<option id="op2222" value="RAM">RAM</option>'+
                                                                        '<option id="op3333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4444" value="Battary">Battary</option>'+
                                                                        '<option id="op5555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn4">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp5">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select5">'+
                                                                        '<option value="" selected disabled>Fifth priority</option>'+
                                                                        '<option id="op11111" value="Processor">Processor</option>'+
                                                                        '<option id="op22222" value="RAM">RAM</option>'+
                                                                        '<option id="op33333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44444" value="Battary">Battary</option>'+
                                                                        '<option id="op55555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn5">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                '</table>'+
                                                              '</div>'+
                                                              '<br>'+
                                                              '<button id="nc" type="button" name="button">Now Compare</button>'+
                                                      '</center>'+
                                                      '<br><br><br><br>');

                                  }
                                  else if(count == 2)
                                  {
                                    num1 = response.aa[0][a];
                                    num2 = response.aa[0][b];
                                    num3 = response.aa[0][c];
                                    num4 = response.aa[0][d];
                                    // alert(num1+" "+num2+" "+num3+" "+num4);
                                    var arr;
                                    if(num1 == undefined && num2 == undefined)
                                    {
                                      num1 = num4;
                                      num2 = num3;
                                    }
                                    else if(num1 == undefined && num3 == undefined)
                                    {
                                      num1 = num4;
                                    }
                                    else if(num1 == undefined && num4 == undefined)
                                    {
                                      num1 = num3;
                                    }
                                    else if(num2 == undefined && num3 == undefined)
                                    {
                                      num2 = num4;
                                    }
                                    else if(num2 == undefined &&  num4 == undefined)
                                    {
                                      num2 = num3;
                                    }
                                    arr = [num1, num2];
                                    // alert(arr);
                                    arr.sort();
                                    if(arr[0] == num1)
                                    {
                                      r1 = 2;
                                      r2 = 1;
                                    }
                                    else
                                    {
                                      r2 = 2;
                                      r1 = 1;
                                    }
                                    // alert(r1+" "+r2+" "+r3);
                                                              $('#cmp').append(''+
                                                              '<br>'+
                                                              '<hr>'+
                                                              '<div id="cmp1">'+
                                                              '<div id="cmp_1"><h2>Compare</h2></div>'+
                                                              '<div id="cmp_2"><h3>Compare Laptops</h3></div>'+
                                                              '</div>'+
                                                              '<hr>'+
                                                              '<div id="cmp2">'+
                                                              '<div id="cmp_21">Features</div>'+
                                                              '<div id="cmp_22">'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[0].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[1].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '</div></div>'+
                                                              '<div id="cmp2dup">'+
                                                                  '<div id="cmp_21dup">Features</div>'+
                                                                  '<div id="cmp_22dup">'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[0].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[1].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="zcmp">'+
                                                                  '<table>'+
                                                                      '<tr class="tr_1">'+
                                                                         '<td class="td_11" id="td_1111">Features</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[0].name+'</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[1].name+'</td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2" id="ztrid">'+
                                                                          '<td class="td_11 exttr"><div id="differences">Differences</div></td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[0].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+
                                                                                          response.bb[0].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[1].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+
                                                                                          response.bb[1].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidet2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div><hr>'+
                                                              '<div id="cmp3">'+
                                                                  '<div id="cmp_31">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32">'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[0].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[1].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[1].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                                  '<hr>'+
                                                                  '<div id="cmp_33">'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="cmp3dup">'+
                                                                  '<div id="cmp_31dup">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311dup">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32dup">'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[0].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[1].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[1].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                              '</div><br><br>'+
                                                              '<div id="cmp4">'+
                                                                  '<table>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Overview</td>'+
                                                                          '<td id="td_12" colspan="3">Advantages (Factors To Decide Which Device You Should Buy)</td>'+
                                                                          '<td class="td_12" id="td_13"><div id="rmv">Remove All Devices</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Rankings</strong></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># '+r1+'</div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank"># '+r2+'</div></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># </div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank">#</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Specs Score</strong></td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num1+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num1+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num2+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num2+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num3+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num4+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                         '</td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">General</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Utility</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>OS</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dimensions</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Weight</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Warranty</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Display</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Type</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Touch</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Size</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Resolution</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>PPI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Aspect Ratio</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Surface</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Processor</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Processor</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Cache</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Graphics</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>GPU</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dedicated Memory</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Memory</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Bus Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Maximum RAM Supported</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Slots</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Capacity</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Connectivity</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Ethernet</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>WiFi</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Bluetooth</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Lan Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>USB Ports</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>HDMI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Card Reader</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Microphone In</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Security Lock Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Input</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Camera</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard Backlit</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Pointer Device</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Inbuilt Microphone</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speakers</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sound</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Battery</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery Backup</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Extra</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sales Package</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non e">'+response.bb[1].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div>'+
                                                              '<br/><br/>'+
                                                              '<div id="lt">Give Your Priority Here</div>'+
                                                              '<br><br>'+
                                                              '<div id="drp" class="lt1">'+
                                                                '<table>'+
                                                                  '<tr class="select1" id="drp1">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select1">'+
                                                                        '<option value="" selected disabled>First priority</option>'+
                                                                        '<option id="op1" value="Processor">Processor</option>'+
                                                                        '<option id="op2" value="RAM">RAM</option>'+
                                                                        '<option id="op3" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4" value="Battary">Battary</option>'+
                                                                        '<option id="op5" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn1">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp2">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select2">'+
                                                                        '<option value="" selected disabled>Second priority</option>'+
                                                                        '<option id="op11" value="Processor">Processor</option>'+
                                                                        '<option id="op22" value="RAM">RAM</option>'+
                                                                        '<option id="op33" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44" value="Battary">Battary</option>'+
                                                                        '<option id="op55" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn2">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp3">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select3">'+
                                                                        '<option value="" selected disabled>Third priority</option>'+
                                                                        '<option id="op111" value="Processor">Processor</option>'+
                                                                        '<option id="op222" value="RAM">RAM</option>'+
                                                                        '<option id="op333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op444" value="Battary">Battary</option>'+
                                                                        '<option id="op555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn3">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp4">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select4">'+
                                                                        '<option value="" selected disabled>Fourth priority</option>'+
                                                                        '<option id="op1111" value="Processor">Processor</option>'+
                                                                        '<option id="op2222" value="RAM">RAM</option>'+
                                                                        '<option id="op3333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4444" value="Battary">Battary</option>'+
                                                                        '<option id="op5555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn4">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp5">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select5">'+
                                                                        '<option value="" selected disabled>Fifth priority</option>'+
                                                                        '<option id="op11111" value="Processor">Processor</option>'+
                                                                        '<option id="op22222" value="RAM">RAM</option>'+
                                                                        '<option id="op33333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44444" value="Battary">Battary</option>'+
                                                                        '<option id="op55555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn5">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                '</table>'+
                                                              '</div>'+
                                                              '<br>'+
                                                              '<button id="nc" type="button" name="button">Now Compare</button>'+
                                                      '</center>'+
                                                      '<br><br><br><br>');
                                  }
                                  else if(count == 1)
                                  {
                                    num1 = response.aa[0][a];
                                    num2 = response.aa[0][b];
                                    num3 = response.aa[0][c];
                                    num4 = response.aa[0][d];
                                    // alert(num1+" "+num2+" "+num3+" "+num4);
                                    var arr;
                                    if(num1 == undefined && num2 != undefined)
                                    {
                                      num1 = num2;
                                    }
                                    else if(num1 == undefined && num3 != undefined)
                                    {
                                      num1 = num3;
                                    }
                                    else
                                    {
                                      num1 = num4;
                                    }
                                    r1 = 1;
                                                              $('#cmp').append(''+
                                                              '<br>'+
                                                              '<hr>'+
                                                              '<div id="cmp1">'+
                                                              '<div id="cmp_1"><h2>Compare</h2></div>'+
                                                              '<div id="cmp_2"><h3>Compare Laptops</h3></div>'+
                                                              '</div>'+
                                                              '<hr>'+
                                                              '<div id="cmp2">'+
                                                              '<div id="cmp_21">Features</div>'+
                                                              '<div id="cmp_22">'+
                                                              '<div class="cmp_221">&nbsp;'+response.bb[0].name+'</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '<div class="cmp_222"><i>vs</i></div>'+
                                                              '<div class="cmp_221">&nbsp;</div>'+
                                                              '</div></div>'+
                                                              '<div id="cmp2dup">'+
                                                                  '<div id="cmp_21dup">Features</div>'+
                                                                  '<div id="cmp_22dup">'+
                                                                    '<div class="cmp_221dup">&nbsp;'+response.bb[0].name+'</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                    '<div class="cmp_222dup"><i>vs</i></div>'+
                                                                    '<div class="cmp_221dup">&nbsp;</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="zcmp">'+
                                                                  '<table>'+
                                                                      '<tr class="tr_1">'+
                                                                         '<td class="td_11" id="td_1111">Features</td>'+
                                                                          '<td class="td_12 non1">'+response.bb[0].name+'</td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                          '<td class="td_12 non1"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2" id="ztrid">'+
                                                                          '<td class="td_11 exttr"><div id="differences">Differences</div></td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="'+response.bb[0].img+'" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+
                                                                                          response.bb[0].price+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidet2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non exttd">'+
                                                                              '<table>'+
                                                                                  '<tr>'+
                                                                                      '<td class="insidetr1">'+
                                                                                          '<img src="" alt="no" height="30" width="50">'+
                                                                                      '</td>'+
                                                                                      '<td class="insidetr2">'+

                                                                                      '</td>'+
                                                                                      '<td class="insidetr3">'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star checked"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                         '<span class="fa fa-star"></span>'+
                                                                                      '</td>'+
                                                                                  '</tr>'+
                                                                              '</table>'+
                                                                          '</td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div><hr>'+
                                                              '<div id="cmp3">'+
                                                                  '<div id="cmp_31">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32">'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="'+response.bb[0].img+'" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321">'+
                                                                        '<div class="cmp_3211"><img src="" alt="no image" width="230px" height="135px"></div>'+
                                                                        '<div class="cmp_3212"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                                  '<hr>'+
                                                                  '<div id="cmp_33">'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                      '<div class="cmp_331">'+
                                                                          '<div class="cmp_3311">Add Another Product</div>'+
                                                                      '</div>'+
                                                                  '</div>'+
                                                              '</div>'+
                                                              '<div id="cmp3dup">'+
                                                                  '<div id="cmp_31dup">'+
                                                                      '&nbsp;&nbsp;Show:'+
                                                                      '<br><br>'+
                                                                      '<div id="cmp_311dup">List Of All Features</div>'+
                                                                  '</div>'+
                                                                  '<div id="cmp_32dup">'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="'+response.bb[0].img+'" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup">Rs. '+response.bb[0].price+' <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                    '<div class="cmp_321dup">'+
                                                                        '<div>'+
                                                                            '<div class="cmp_3211dup"><img src="" alt="no image" width="210px" height="135px"></div>'+
                                                                            '<div class="cmp_3213dup"><a href="#"><img src="../Images/download.png" alt="no" height="15px;" width="15px;"></a></div>'+
                                                                        '</div>'+
                                                                        '<div class="cmp_3212dup"> <br>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star checked"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                          '<span class="fa fa-star"></span>'+
                                                                        '</div>'+
                                                                    '</div>'+
                                                                  '</div>'+
                                                              '</div><br><br>'+
                                                              '<div id="cmp4">'+
                                                                  '<table>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Overview</td>'+
                                                                          '<td id="td_12" colspan="3">Advantages (Factors To Decide Which Device You Should Buy)</td>'+
                                                                          '<td class="td_12" id="td_13"><div id="rmv">Remove All Devices</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Rankings</strong></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># '+r1+'</div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank"># </div></td>'+
                                                                          '<td class="td_12 non"><div class="rank"># </div></td>'+
                                                                          '<td class="td_12 non e"><div class="rank">#</div></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Specs Score</strong></td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:'+num1+'%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               num1+'/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                              '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                          '</td>'+
                                                                          '<td class="td_12 non e">'+
                                                                            '<center>'+
                                                                            '<div class="progress" id="pro">'+
                                                                               '<div class="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width:0%"></div>'+
                                                                             '</div>'+
                                                                             '<div class="score">'+
                                                                               '/100'+
                                                                             '</div>'+
                                                                           '</center>'+
                                                                         '</td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">General</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Series+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Model+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Utility</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Utility+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>OS</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.OS+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dimensions</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Dimensions+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Weight</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Weight+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Warranty</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.General.Warranty+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Display</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Type</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Type+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Touch</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Touch+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Size</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Size+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Resolution</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Resolution+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>PPI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.PPI+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Aspect Ratio</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display['Aspect Ratio']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Surface</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Display.Surface+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Processor</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Processor</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Processor+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Speed+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Cache</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Cache+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Brand+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Series</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Series+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Model</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Processor.Model+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Graphics</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>GPU</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.GPU+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Dedicated Memory</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics['Dedicated Memory']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Brand</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Graphics.Brand+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Memory</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory.RAM+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Bus Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Bus Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Maximum RAM Supported</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Maximum RAM Supported']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>RAM Slots</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['RAM Slots']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Capacity</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Capacity']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Hard Disk Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Memory['Hard Disk Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Connectivity</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Ethernet</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Ethernet+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>WiFi</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.WiFi+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Bluetooth</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.Bluetooth+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Lan Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Lan Port']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>USB Ports</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['USB Ports']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>HDMI</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity.HDMI+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Card Reader</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Card Reader']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Microphone In</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Microphone In']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Security Lock Port</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Connectivity['Security Lock Port']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Input</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Camera</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Camera+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Keyboard+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Keyboard Backlit</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Keyboard Backlit']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Pointer Device</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Pointer Device']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Inbuilt Microphone</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Inbuilt Microphone']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Speakers</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Speakers+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sound</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input.Sound+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Optical Drive Speed</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Input['Optical Drive Speed']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Battery</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery.Battery+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Battery Backup</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Battery['Battery Backup']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                      '<tr id="tr_1">'+
                                                                          '<td class="td_11" id="td_11">Extra</td>'+
                                                                          '<td id="td_12" colspan="4"></td>'+
                                                                      '</tr>'+
                                                                      '<tr class="tr_2">'+
                                                                          '<td class="td_11"><strong>Sales Package</strong></td>'+
                                                                          '<td class="td_12 non">'+response.bb[0].specifications.full_specs.Extra['Sales Package']+'</td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                          '<td class="td_12 non"></td>'+
                                                                          '<td class="td_12 non e"></td>'+
                                                                      '</tr>'+
                                                                  '</table>'+
                                                              '</div>'+
                                                              '<br/><br/>'+
                                                              '<div id="lt">Give Your Priority Here</div>'+
                                                              '<br><br>'+
                                                              '<div id="drp" class="lt1">'+
                                                                '<table>'+
                                                                  '<tr class="select1" id="drp1">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select1">'+
                                                                        '<option value="" selected disabled>First priority</option>'+
                                                                        '<option id="op1" value="Processor">Processor</option>'+
                                                                        '<option id="op2" value="RAM">RAM</option>'+
                                                                        '<option id="op3" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4" value="Battary">Battary</option>'+
                                                                        '<option id="op5" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn1">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp2">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select2">'+
                                                                        '<option value="" selected disabled>Second priority</option>'+
                                                                        '<option id="op11" value="Processor">Processor</option>'+
                                                                        '<option id="op22" value="RAM">RAM</option>'+
                                                                        '<option id="op33" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44" value="Battary">Battary</option>'+
                                                                        '<option id="op55" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn2">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp3">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select3">'+
                                                                        '<option value="" selected disabled>Third priority</option>'+
                                                                        '<option id="op111" value="Processor">Processor</option>'+
                                                                        '<option id="op222" value="RAM">RAM</option>'+
                                                                        '<option id="op333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op444" value="Battary">Battary</option>'+
                                                                        '<option id="op555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn3">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp4">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select4">'+
                                                                        '<option value="" selected disabled>Fourth priority</option>'+
                                                                        '<option id="op1111" value="Processor">Processor</option>'+
                                                                        '<option id="op2222" value="RAM">RAM</option>'+
                                                                        '<option id="op3333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op4444" value="Battary">Battary</option>'+
                                                                        '<option id="op5555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn4">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                  '<tr class="select1" id="drp5">'+
                                                                    '<td class="select11">'+
                                                                      '<select id="select5">'+
                                                                        '<option value="" selected disabled>Fifth priority</option>'+
                                                                        '<option id="op11111" value="Processor">Processor</option>'+
                                                                        '<option id="op22222" value="RAM">RAM</option>'+
                                                                        '<option id="op33333" value="Hard_Disc">Hard Disc</option>'+
                                                                        '<option id="op44444" value="Battary">Battary</option>'+
                                                                        '<option id="op55555" value="Price">Price</option>'+
                                                                      '</select>'+
                                                                    '</td>'+
                                                                    '<td class="select12"></td>'+
                                                                    '<td class="select13">'+
                                                                      '<button type="button" name="button" class="btnn" id="btnn5">Add</button>'+
                                                                    '</td>'+
                                                                  '</tr>'+
                                                                '</table>'+
                                                              '</div>'+
                                                              '<br>'+
                                                              '<button id="nc" type="button" name="button">Now Compare</button>'+
                                                      '</center>'+
                                                      '<br><br><br><br>');
                                  }
                                  else
                                  {
                                    alert("Not possible");
                                  }
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
        // console.log("Success "+response.length);
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
  // var screenArray = [];
  // var screenResolutionArray = [];
  // var cpuArray = [];
  // var hdRPMArray = [];
  // var hdArray = [];
  // var ramArray = [];
  // var osArray = [];
  // var batteryArray = [];
  $(".common").click(function(){
    priceArray = [];
    brandsArray = [];
    // screenArray = [];
    // screenResolutionArray = [];
    // cpuArray = [];
    // hdRPMArray = [];
    // hdArray = [];
    // ramArray = [];
    // osArray = [];
    // batteryArray = [];
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
        priceArray.push("100001");
      }
      if(pr == "7")
      {
        priceArray.push("100000");
        priceArray.push("120001");
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

    $.ajax({
      url: 'http://localhost:3000/filter',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(
        {
          pr: priceArray,
          brand: brandsArray
        }
      ),
      success: function(response)
      {
        // console.log("Success "+response);
        // alert("response from server is "+response[0].key);
        // alert("Success");
        $('#fill').empty();
        var length = response.length;
        // alert(length);
        // debugger;
        for(var i=0 ; i<length ; i++)
        {
          $('#fill').append(''+
          '<div class="product">'+
            '<div class="left_product">'+
              '<center><a href="http://localhost:3000/pro/'+response[i].key+'"><img src="'+response[i].img+'" alt="no laptop" width="100" height="100"></a></center>'+
            '</div>'+
            '<div class="mid_product">'+
              '<div class="mid_product_up">'+
                '<a href="http://localhost:3000/pro/'+response[i].key+'" class="nm">'+response[i].name+'</a>'+
              '</div>'+
              '<div class="mid_product_down">'+
                '<div class="mid_product_down_up">'+
                  '<div class="mid_product_down_up_left">'+
                    '<b>Product Features:</b>'+
                  '</div>'+
                  '<div class="mid_product_down_up_right">'+
                    '<a href="http://localhost:3000/pro/'+response[i].key+'">See Full Specifications</a>'+
                  '</div>'+
                '</div>'+
                '<div style="height:2px"></div>'+
                '<div class="mid_product_down_down">'+
                  '<div class="mid_product_down_down_left">'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.Processor.Processor+
                    '<br>'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.Processor.Speed+' Clock Speed'+
                    '<br>'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.Memory.RAM+' RAM'+
                    '<br>'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.Memory['Hard Disk Capacity']+' Hard Disk'+
                  '</div>'+
                  '<div class="mid_product_down_down_right">'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+
                     response[i].specifications.full_specs.Graphics.GPU+
                    '<br>'+
              '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.Display.Size+', '+response[i].specifications.full_specs.Display.Resolution+
                    '<br>'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.General.OS+ 'OS'+
                    '<br>'+
                    '<i class="fa fa-check" aria-hidden="true"></i>&nbsp;'+response[i].specifications.full_specs.General.Warranty+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="right_product">'+
              '<div class="right_product_up">'+
                '<center><b>Rs. '+response[i].price+'</b></center>'+
              '</div>'+
              '<div class="right_product_down">'+
                '<center>'+
                  '<button type="button" class='+response[i].key+' id="comp" name="compare" onclick="openCompare(this)"><i class="fa fa-plus-square" aria-hidden="true">'+
                    '</i>&nbsp;compare'+
                  '</button>'+
                  '<button type="button" class='+response[i].key+' id="comp1" name="compare" onclick="openCompare1(this)"><i class="fa fa-remove" aria-hidden="true">'+
                    '</i>&nbsp;compare'+
                  '</button>'+
                '</center>'+
              '</div>'+
            '</div>'+
          '</div><div style="height:2px"></div>');
        }
      }
    });
  });
});
