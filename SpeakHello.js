

(function(this){
var helloSpeaker={};
var speakWord = "Helloo";
helloSpeaker.speak=function(names){
      console.log(speakWord + " " + names);
}
this.helloSpeaker=helloSpeaker

})(window);