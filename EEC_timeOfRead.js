/************************************
* Project to calculate average time *
* read of the article.              *
* EEC_timeOfRead by EEC             *
************************************/
var jEEC_tfr={
 'inID':'textForCalc',
 'outID':'calcTime',
 'avReadPerWord':0.4,
 'arrWordForCalc':[],
 'initTFR':()=>{
   console.log('start HERE');
   jEEC_tfr.arrWordForCalc=document.getElementById(jEEC_tfr.inID);// [This is first art]
   const tExtract=document.getElementById(jEEC_tfr.outID);//[field1]
   const arr=jEEC_tfr.arrWordForCalc.value.split(' ');
   let years, months, days, hours, minutes, seconds;
   let finalString="";
   seconds=parseInt(jEEC_tfr.avReadPerWord * arr.length);
   console.log(arr.length);
     if(seconds%31104000 && seconds>31104000)
     years=parseInt(seconds/31104000);//(12*30*24*60*60);
     seconds=seconds%31104000;
     if(seconds%2592000&&seconds>2592000)
     months=parseInt(seconds/2592000); //(30*24*60*60);
     seconds=seconds%2592000;
     if(seconds%86400&&seconds>86400)
     days=parseInt(seconds/86400);     //(24*60*60);
     seconds=seconds%86400;
     if(seconds%3600&&seconds>3600)
     hours=parseInt(seconds/3600);     //(60*60);
     seconds=seconds%3600;
     if(seconds%60&&seconds>60)
     minutes=parseInt(seconds/60);     //(60)
     seconds=seconds%60;
    console.log(years+" years");
    console.log(months+" months");
    console.log(days+" days");
    console.log(minutes+" minutes");
    console.log(seconds+" seconds");

  if(years!==0&&years!==undefined)
  finalString+=years+" y, ";
  if(months!==0&&months!==undefined)
  finalString+=months+" m,";
  if(days!==0&&days!==undefined)
  finalString+=days+" d, ";
  if(hours!==0&&hours!==undefined)
  finalString+=hours+" h, ";
  if(minutes!==0&&minutes!==undefined)
  finalString+=minutes+" min, ";
  if(seconds!==0&&seconds!==undefined)
  finalString+=seconds+" sec";
   tExtract.value=finalString;
 }
};
window.onload=function(){
  console.log('start');
  var a=new Object(jEEC_tfr);
  a.initTFR();
  const button=document.getElementById("button");
  button.addEventListener("click",a.initTFR,false);
}
