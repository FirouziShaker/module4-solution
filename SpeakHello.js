

(function(this){
var helloSpeaker={};
var speakWord = "Hello";
helloSpeaker.speak=function(names){
      console.log(speakWord + " " + names);
}
this.helloSpeaker=helloSpeaker

})(window);