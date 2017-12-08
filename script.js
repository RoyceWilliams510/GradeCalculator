
var numbers = [1,2,3,4,5,6,7,8,9,10];
function calculateCurrentGrade() {
    document.getElementById("error").innerHTML = "";

    var qGrade = document.getElementById("quizzes").value;
    var qGradeArray = convertString(qGrade);
    var qAverage = AverageArray(qGradeArray);
    gradeColor(document.getElementById("1"), qAverage);
    document.getElementById("quizAveraged").innerHTML = "Total quiz grade: " + qAverage;
    console.log(qAverage);
    var hwGrade = document.getElementById("homework").value;
    var hwGradeArray = convertString(hwGrade);
    var hwAverage = AverageArray(hwGradeArray);
    gradeColor(document.getElementById("2"), hwAverage);
    document.getElementById("hwAveraged").innerHTML = "Total homework grade: " + hwAverage;
    console.log(hwAverage);
    var tGrade = document.getElementById("tests").value;
    var tGradeArray = convertString(tGrade);
    var tAverage = AverageArray(tGradeArray);
    gradeColor(document.getElementById("3"), tAverage);
    document.getElementById("testAveraged").innerHTML = "Total test grade: " + tAverage;
    console.log(tAverage);
    var mTGrade = document.getElementById("midTerm").value;
    var mTGradeArray = convertString(mTGrade);
    var mTAverage = AverageArray(mTGradeArray);
    gradeColor(document.getElementById("4"), mTAverage);
    document.getElementById("mtAveraged").innerHTML = "Total midterm grade: " + mTAverage;
    console.log(mTAverage);
    var currentGrade = gradeWeigher(qAverage, hwAverage, tAverage, mTAverage);
    document.getElementById("grades").innerHTML = "Your current grade is: " + currentGrade;
    document.getElementById("final").innerHTML = "Grade needed on final: " + gradeNeeded(currentGrade);
}


function gradeWeigher(qa,hwa,ta,ma ) {
    var q =document.getElementById("QWeight").value/100;
    var hw =document.getElementById("hWWeight").value/100;
    var t =document.getElementById("tWeight").value/100;
    var mt =document.getElementById("mTWeight").value/100;
    var fw =document.getElementById("finalWeight").value/100;
    var weightsCombined= q+hw+t+mt+ fw;
    if(isNaN(weightsCombined)==true){
        document.getElementById("error").innerHTML = "ERROR: One of the characters entered in the grade weight section was not a number please only submit numbers. ";
    }
    if(weightsCombined>1){
        return "Weights have to add up to 100 please enter valid weights";
    }
    var fq= qa*q;
    var fhw= hwa*hw;
    var fta= ta*t;
    var fma= ma*mt;
    console.log(fma + fta + fhw+ fq);
    return (fma + fta + fhw+ fq);
}



function gradeNeeded(x){
    var fw =document.getElementById("finalWeight").value/100;
    var gw =document.getElementById("gradeWanted").value;
    if(isNaN(gw)==true){
        document.getElementById("error").innerHTML = "ERROR: One of the characters entered was not a number please only submit numbers. ";
    }
    return ((gw-x)/fw);
}


function convertString(x){

    var gradeArray = x.split(",");
    for (var i = 0; i < gradeArray.length; i++) {
        gradeArray[i] = parseInt(gradeArray[i]);
    }
    for(var i = 0; i < gradeArray.length; i ++) {
        if (isNaN(x[i]) == true) {
            document.getElementById("error").innerHTML = " ERROR: One of the characters entered in the grades section was not a number please only submit numbers. ";
        }
    }
    console.log(gradeArray);
    return gradeArray;
}

function AverageArray(gradeArray){
    var sum = 0;
    console.log(gradeArray);
    for(var i =0; i <gradeArray.length; i++){
        sum+=gradeArray[i];
    }
    return (sum/gradeArray.length);
}

function gradeColor(x,score){
    if(score>=90){
        x.style.background= "ForestGreen"
    }
    if(score>=80&& score< 90) {
        x.style.background = "YellowGreen"
    }
    if(score>= 70&& score< 80){
        x.style.background= "Yellow"
    }
    if(score>= 60 && score < 70){
        x.style.background= "Tomato"
    }
    if(score<60){
        x.style.background= "FireBrick"
    }
}