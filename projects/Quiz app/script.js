function result(){
    let score=0;
    if (document.getElementById('correct1').checked){
     score++
    }
    if (document.getElementById('correct2').checked) {
        score++
    }
    if (document.getElementById('correct3').checked) {
        score++
    }
    if (document.getElementById('correct4').checked) {
        score++
    }
    if (document.getElementById('correct5').checked) {
        score++
    }
    
    alert("Your score is 👍" +score + " "+"Thanks for playing")

    // alert("Your score is  👍" + " " +score)
    // document.write("Your score is  👍" + " " +score)
// document.getElementsByClassName("box").innerHTML="style.display-none"
    

}