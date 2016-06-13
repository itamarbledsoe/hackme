<?php

/*
	Make use of "arp -a"! This can help uniquely identify devices so as to keep logins from geting mixed up!
*/

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

// Get Computer Names from IP
if (isset($_GET['DNS']))
{
	$res = shell_exec("nslookup $ip");
	print "\r\n________________________\r\nDNS:\r\n{$res}________________________\r\n";
	
	$reg = "/[^\s]*\.diwip\.\w+(?=[\r\n]*\w*\:\s*$ip)/i";
	if (preg_match($reg, $res))
	{
		preg_match_all($reg, $res, $arr);
		$final = $arr[0];
	}
	else
	{
		$final = array("Unknown");
	}
	
	print implode("\r\n", $final);
}

// Get Computer MAC from IP
if (isset($_GET['MAC']))
{
	$res = shell_exec("arp -a");
	print "\r\n________________________\r\nMAC:\r\n{$res}________________________\r\n";
	
	$reg = "/$ip\s*([\w\d\-\:]{17})/i";
	if (preg_match($reg, $res))
	{
		preg_match_all($reg, $res, $arr);
		$final = $arr[1];
	}
	else
	{
		$final = array("Unknown");
	}
	
	print implode("\r\n", $final);
}

?>