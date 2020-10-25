
hmbMenu.onclick=function(s){
  if (typeof(s) == "object") {
    return
  } else {
  switch (s) { 
  case "Login": 
    ChangeForm(Login)
    break
  case "Dessert Voting": 
    ChangeForm (dessertVoting)
    break 
  case "Describe Me":
    ChangeForm (describeYou) 
    break 
  case "Favorite Exercises": 
    ChangeForm (favExercises) 
    break
  }
  }
}

