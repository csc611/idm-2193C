//click the button to go to the story list page!

function story_list() {
  window.location = "./stories/storylist.html";
}

// click the button to go to a random story page!
function random_story() {
  var myRandomStory = Math.round(Math.random()*2);
  var link1= "./stories/baldandfly/index.html";
  var link1= "./stories/sunandwind/index.html";
  var link3= "./stories/lionandmouse/index.html";
  if (myRandomStory==0) {
    window.location = link1;
  }else if (myRandomStory==1){
    window.location = link2;
  }else if (myRandomStory==2){
    window.location = link3;
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
})