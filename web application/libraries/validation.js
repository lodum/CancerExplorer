
//************************************************************************ regarding SIR/CI Visualization input
// function to check if there is an input at the SIR/CI Panel
function sir_input_check() {

var sir_message_cancer="";
var sir_message_year="";
var sir_message_gender="";
var test_variable=0;


if ($('input[name="obsType"]:checked').length == 0){
sir_message_cancer="A cancer type"
test_variable=1;
}

if ($('input[name="obsType1"]:checked').length == 0) {
sir_message_year="A year"
test_variable=1;
}

if ($('input[name="obsType2"]:checked').length == 0) {
sir_message_gender="A gender"
test_variable=1;
}

if (test_variable==1){
alert(" Please choose:\n"+sir_message_cancer+"\n"+sir_message_year+"\n"+sir_message_gender);
return false
}else{
return true}
test_variable=0;
}

// function to empty the radio buttons

function sir_clear() {

$('input[name=obsType]').removeAttr('checked');
$('input[name=obsType1]').removeAttr('checked');
$('input[name=obsType2]').removeAttr('checked');
}

// Carcinogen information input check
function inci_input_check() {
if ($('input[name="obsType3"]:checked').length == 0){
alert(" Please choose a cancer type");
return false
}else{
return true}
}


