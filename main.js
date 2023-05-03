

// Variable for Grade Tab
var mandatorySub = document.getElementById('mandatory-sub');

var subOnePartOne = document.getElementById('sub_one_part_one');
var subOnePartTwo = document.getElementById('sub_one_part_two');

var subTwoPartOne = document.getElementById('sub_two_part_one');
var subTwoPartTwo = document.getElementById('sub_two_part_two');

var subThreePartOne = document.getElementById('sub_three_part_one');
var subThreePartTwo = document.getElementById('sub_three_part_two');

var form = document.getElementById('studyForm');



form.addEventListener('submit', function(event){

    event.preventDefault();


    var selectFieldsNotEmpty = !mandatorySub.value || !subOnePartOne.value || !subOnePartTwo.value || !subTwoPartOne.value || !subTwoPartTwo.value || !subThreePartOne.value || !subThreePartTwo.value;

    var pointsFieldIsEmpty = mandatorySubPoints.value === null || subOnePartOnePoints.value === null || subOnePartTwoPoints.value === null || subTwoPartOnePoints.value === null || subTwoPartTwoPoints.value === null || subThreePartOnePoints.value === null || subThreePartTwoPoints.value === null;
    

    if ( selectFieldsNotEmpty ){
        alert("Please double check all fields & press ok!");
    }else{
        
        var mandatorySubVal = parseFloat(mandatorySub.value);
        var subOnePartOneVal = parseFloat(subOnePartOne.value);
        var subOnePartTwoVal = parseFloat(subOnePartTwo.value);

        var subTwoPartOneVal = parseFloat(subTwoPartOne.value);
        var subTwoPartTwoVal = parseFloat(subTwoPartTwo.value);

        var subThreePartOneVal = parseFloat(subThreePartOne.value);
        var subThreePartTwoVal = parseFloat(subThreePartTwo.value);

        var GradePoints = mandatorySubVal + subOnePartOneVal + subOnePartTwoVal + subTwoPartOneVal + subTwoPartTwoVal + subThreePartOneVal + subThreePartTwoVal;

        var finalGradePoints = GradePoints / 7;
        var grandFinalResult = finalGradePoints.toFixed(2);

        showResult.innerHTML = "CGPA Point : <br><br><span class='amount'>"  + grandFinalResult + "  </span>";

        if( grandFinalResult >= 4  ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A+ </span>";
        }else if(grandFinalResult >= 3.75 && grandFinalResult < 4 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A </span>";
        }else if(grandFinalResult >= 3.5 && grandFinalResult < 3.75 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A- </span>";
        }else if(grandFinalResult >= 3.25 && grandFinalResult < 3.5 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B+ </span>";
        }else if(grandFinalResult >= 3 && grandFinalResult < 3.25 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B </span>";
        }else if(grandFinalResult >= 2.75 && grandFinalResult < 3 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B- </span>";
        }else if(grandFinalResult >= 2.5 && grandFinalResult < 2.75 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  C+ </span>";
        }else if(grandFinalResult >= 2.25 && grandFinalResult < 2.5 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  C </span>";
        }else if(grandFinalResult >= 2 && grandFinalResult < 2.25 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  D </span>";
        }else if(grandFinalResult === 0 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  F </span>";
        }else{
            "Select All field that applied!";
        }

    }



});


// Variable for Grade Tab
var mandatorySubPoints = document.getElementById('mandatory-sub-points');

var subOnePartOnePoints = document.getElementById('sub_one_part_one_points');
var subOnePartTwoPoints = document.getElementById('sub_one_part_two_points');

var subTwoPartOnePoints = document.getElementById('sub_two_part_one_points');
var subTwoPartTwoPoints = document.getElementById('sub_two_part_two_points');

var subThreePartOnePoints = document.getElementById('sub_three_part_one_points');
var subThreePartTwoPoints = document.getElementById('sub_three_part_two_points');

var form = document.getElementById('studyForm');





form.addEventListener('submit', function(event){

    event.preventDefault();


    var selectFieldsIsEmpty = mandatorySub.value === null || subOnePartOne.value === null || subOnePartTwo.value === null || subTwoPartOne.value === null || subTwoPartTwo.value === null || subThreePartOne.value === null || subThreePartTwo.value === null;

    var pointsFieldNotEmpty = !mandatorySubPoints.value  || !subOnePartOnePoints.value || !subTwoPartOnePoints.value || !subTwoPartTwoPoints.value || !subThreePartOnePoints.value || !subThreePartTwoPoints.value;

    if ( pointsFieldNotEmpty ){
        alert("Please double check all fields & press ok!");
    }else{


        var mandatorySubPointsVal = parseFloat(mandatorySubPoints.value);
        var subOnePartOnePointsVal = parseFloat(subOnePartOnePoints.value);
        var subOnePartTwoPointsVal = parseFloat(subOnePartTwoPoints.value);

        var subTwoPartOnePointsVal = parseFloat(subTwoPartOnePoints.value);
        var subTwoPartTwoPointsVal = parseFloat(subTwoPartTwoPoints.value);

        var subThreePartOnePointsVal = parseFloat(subThreePartOnePoints.value);
        var subThreePartTwoPointsVal = parseFloat(subThreePartTwoPoints.value);

        var GradePoints = mandatorySubPointsVal + subOnePartOnePointsVal + subOnePartTwoPointsVal + subTwoPartOnePointsVal + subTwoPartTwoPointsVal + subThreePartOnePointsVal + subThreePartTwoPointsVal;

        var finalGradePoints = GradePoints / 7;
        var grandFinalResult = finalGradePoints.toFixed(2);

        showResult.innerHTML = "CGPA Point : <br><br><span class='amount'>"  + grandFinalResult + "  </span>";

        if( grandFinalResult >= 4  ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A+ </span>";
        }else if(grandFinalResult >= 3.75 && grandFinalResult < 4 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A </span>";
        }else if(grandFinalResult >= 3.5 && grandFinalResult < 3.75 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  A- </span>";
        }else if(grandFinalResult >= 3.25 && grandFinalResult < 3.5 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B+ </span>";
        }else if(grandFinalResult >= 3 && grandFinalResult < 3.25 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B </span>";
        }else if(grandFinalResult >= 2.75 && grandFinalResult < 3 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  B- </span>";
        }else if(grandFinalResult >= 2.5 && grandFinalResult < 2.75 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  C+ </span>";
        }else if(grandFinalResult >= 2.25 && grandFinalResult < 2.5 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  C </span>";
        }else if(grandFinalResult >= 2 && grandFinalResult < 2.25 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  D </span>";
        }else if(grandFinalResult === 0 ){
            showGPA.innerHTML = "CGPA Grade : <br><br><span class='amount'>  F </span>";
        }else{
            "Select All field that applied!";
        }

    }


});
