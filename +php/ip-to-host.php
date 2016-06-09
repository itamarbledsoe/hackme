<?php

if (isset($_GET['ip']))
{
	$ip = $_GET['ip'];
	print "GET['ip']=$ip\r\n";
}
else
{
	$ip = $_SERVER['REMOTE_ADDR'];
	print "SERVER['REMOTE_ADDR']=$ip\r\n";
}
$res = shell_exec("nslookup $ip");
// print $res."________________________\r\n";
preg_match_all("/[^\s]*\.diwip\.com(?=[\r\n]*\w*\:\s*$ip)/is", $res, $arr);
print implode("\r\n", $arr[0]);

?>