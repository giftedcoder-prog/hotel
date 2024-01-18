<?php
//include connection
include("dbconnect.php");
if(isset($_POST["submit"])){
	$names=mysqli_real_escape_string($connect, $_POST["fullNames"]);
	$email=mysqli_real_escape_string($connect, $_POST["email"]);
	$contact=mysqli_real_escape_string($connect, $_POST["contact"]);
	$message=mysqli_real_escape_string($connect, $_POST["message"]);
	$date=mysqli_real_escape_string($connect, $_POST["date"]);
	$location=mysqli_real_escape_string($connect, $_POST["location"]);
	//insert data
	$save="INSERT INTO enquiries (names,email,contact,message,datee,location) VALUES('$names','$email','$contact','$message','$date','$location')";
	$query=mysqli_query($connect,$save);

	//check if data is saved
	if($query){
		echo '<script type="text/javascript">alert("Enqiury has been sent");history.back();</script>';

	}else{
		die("hell" .mysqli_error($connect));
		echo '<script type="text/javascript">alert("Unable to send enquiry");history.back();</script>';

	}


}else{
	echo '<script type="text/javascript">alert("you cannot submit an empty form"); history.back();</script>';

}
?>
