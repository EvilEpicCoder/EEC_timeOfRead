/************************************
* Project to calculate average time *
* read of the article.              *
* EEC_timeOfRead by EEC             *
************************************/
var jEEC_tfr={
 'inID':'textForCalc',
 'outID':'calcTime',
 'avReadPerWord':1,
 'arrWordForCalc':[],
 'initTFR':function (){
   console.log('start HERE');
   this.arrWordForCalc=document.getElementById(this.inID);// [This is first art]
   var tExtract=document.getElementById(this.outID);//[field1]
   var arr=this.arrWordForCalc.value.split(' ');
   var sec=((arr.length*this.avReadPerWord)%60);
   tExtract.value="average: "+sec+"sec read";
 }
};
window.onload=function(){
  console.log('start');
  var a=new Object(jEEC_tfr);
  a.initTFR();
}
