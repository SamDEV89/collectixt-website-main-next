

$("#closeBtn").on('click', function () {
    $("#modal").hide();
  });
  $("#modalOpen").on('click', function () {
    $("#modal").show();
  });
  function showModal() {
  
    $("#modal").show();
  }
  
  
  
  
  $("#closeBtn").on('click', function () {
    $("#ETH-modal").hide();
  });
  $("#modalOpen").on('click', function () {
    $("#ETH-modal").show();
  });
  function showModal() {
  
    $("#ETH-modal").show();
  }
  
  
  
  $("#closeBtn1").on('click', function () {
    $("#USDT-modal").hide();
  });
  $("#modalOpen1").on('click', function () {
    $("#USDT-modal").show();
  });
  function showModal() {
  
    $("#USDT-modal").show();
  }
  
  
  $("#closeBtn2").on('click', function () {
    $("#CARD-modal").hide();
  });
  $("#modalOpen2").on('click', function () {
    $("#CARD-modal").show();
  });
  function showModal() {
  
    $("#CARD-modal").show();
  }
  
  
  
  $(function() {
    const API_URL = "https://api.collectixt.com/api/v1"
  
    $.ajax({
      url: `${API_URL}/projects/current`,
      success: function(data){
        let values = JSON.parse(data)
  
        console.log(values)
  
        $('.telegram-btn').attr('href', values.social_media.telegram)
        $('.twitter-btn').attr('href', values.social_media.twitter)
      }
    });
  
    
  });