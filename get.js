window.onload=function()
{
var city=document.getElementById('city').value;
console.log(city);

var xmlhttp;
var massage;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        massage=JSON.parse(xmlhttp.responseText);
        console.log(massage);
        document.getElementById("temp").innerHTML=massage.HeWeather6[0].now.tmp+"°";
        document.getElementById('weather').innerHTML=massage.HeWeather6[0].now.cond_txt;
        document.getElementById('wind').innerHTML=massage.HeWeather6[0].now.wind_dir;
    }
  }
  switch(city){
      case "bejing":xmlhttp.open("GET",'https://free-api.heweather.net/s6/weather/now?location=beijing&key=db58f87b64db4b62ad44d15d3670b792',true);break;
      case "shanghai":xmlhttp.open("GET",'https://free-api.heweather.net/s6/weather/now?location=shanghai&key=db58f87b64db4b62ad44d15d3670b792',true);break;
      case "chongqing":xmlhttp.open("GET",'https://free-api.heweather.net/s6/weather/now?location=beijing&key=db58f87b64db4b62ad44d15d3670b792',true);break;
      case "chengdu":xmlhttp.open("GET",'https://free-api.heweather.net/s6/weather/now?location=chengdu&key=db58f87b64db4b62ad44d15d3670b792',true);break;

  }xmlhttp.send();

}