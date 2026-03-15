<?php

$to = 'agpc888@agpartners.io'; // 받는 메일
$from = 'agpc888@agpartners.io'; // 발신 메일
$subject = 'Contact us';


$contents = "이름 : ".$_POST['name'].'<br><br>';
$contents .= "메일 : ".$_POST['email'].'<br><br>';
$contents .= "내용 : ".$_POST['message'].'<br><br>';



$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: base64\r\n";
$headers .= 'From: '.$from;
$result = mail($to, $subject, base64_encode($contents), $headers);

$msg = ' 완료 되었습니다.';


?>
<script>
	window.history.back();
</script>