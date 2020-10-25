var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

favExercises.onshow=function(){
  selExercises.clear()
  for (i=0; i <= exercises.length - 1; i++)
    selExercises.addItem(exercises[i])
  for (i=0; i <= coreExercises.length - 1; i++)
    selExercises.addItem(coreExercises[i])

}


btnDone.onclick=function() {
  if (selExercises.text.length == 2) { 
    let message = "You chose " 
    for (i = 0; i <= selExercises.text.length - 1;i++)
      message = message + selExercises.text[i] + " and "
    message = message.slice(0, -5);
    message = `${message} - those are the two core exercises.`
    lblMessage.value = message 
  } else { 
    lblMessage.value = "You did not pick the two core exercises."
    }
}

btnForward.onclick=function() {
  ChangeForm(mobileNav)
}

