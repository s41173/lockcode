
function code(){
  
  let d  = new Date();
  var tgl = '0';
  if (d.getDate() < 10){ tgl = '0'+d.getDate(); }else{ tgl = d.getDate; }

  var month = parseInt(d.getMonth()+1);
  var nilai = '{ "description":"testing", "startDate":"'+d.getFullYear()+'-'+month+'-'+tgl+'T12:00:00+07:00", "durationCode": 1 }';
  $.ajax({
    url: 'https://partnerapi.igloohome.co/v1/locks/IGB2-C2A4P2_69ac6f/lockcodes',
    headers: {
        'X-IGLOOHOME-APIKEY':'KAMISPACE-7det1dtlI05Ya7lHWGV90sQn62AjeSiq',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: nilai,
    success: function(data){
      //console.log('succes: '+data.code);
      // toast(data);
      $("#titcode").css("display", "block");
      $("#codex").html(data.code);
      setTimeout(function(){ 
        $("#titcode").css("display", "none");
        $("#codex").html('');
      }, 30000);
      
    },
    error: function (request, status, error) {
      toast('Request Failed...! - '+request.responseText);
      // setTimeout(function(){ navigator.app.exitApp(); }, 1500);
    }
  });

}