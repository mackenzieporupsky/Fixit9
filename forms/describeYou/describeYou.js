





rbnDescribe.onclick=function(){
  let userChoice = $("input[name=rbnDescribe]:checked").prop("value")
  lblResponse.value = `I would agree that you are a ${userChoice} person too!`
}

btnToNext.onclick=function(){
  ChangeForm(favExercises)
}
