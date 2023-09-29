
(function(this){
var helloSpeaker={};
var speakWord = "Helloo";
helloSpeaker.speak=function(name){
      console.log(speakWord + " " + name);
}
this.helloSpeaker=helloSpeaker

})(window);