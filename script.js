var names=["yakoov", "James" ,"john","taghi","ali" , "jorjina","ajid","mehdi"];

for(var i=0 ; i<names.length ; i++){
    var first= names[i].charAt(0);
    if(first=="j" || first=="J" ){
            console.log("Goodbye "+names[i])
    }else{ console.log("Hello "+names[i])
    }
}
