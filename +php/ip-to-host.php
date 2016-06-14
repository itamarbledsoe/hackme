<?php

/*
	Make use of "arp -a"! This can help uniquely identify devices so as to keep logins from geting mixed up!
*/

$debug = isset($_GET['debug']);
$print = isset($_GET['print']);
$setvars = isset($_GET['setvars']);

if (isset($_GET['ip']))
{
	$ip = $_GET['ip'];
	if ($debug) print "GET['ip']=$ip\r\n";
}
else
{
	$ip = $_SERVER['REMOTE_ADDR'];
	if ($debug) print "SERVER['REMOTE_ADDR']=$ip\r\n";
}

// Get Computer Names from IP
if (isset($_GET['DNS']))
{
	$res = shell_exec("nslookup $ip");
	if ($debug) print "\r\n________________________\r\nDNS:\r\n{$res}________________________\r\n";
	
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
	
	if ($print) print implode("\r\n", $final);
	if ($setvars) $DNS = $final;
}
else
// Get Computer MAC from IP
if (isset($_GET['MAC']))
{
	$res = shell_exec("arp -a");
	if ($debug) print "\r\n________________________\r\nMAC:\r\n{$res}________________________\r\n";
	
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
	
	if ($print) print implode("\r\n", $final);
	if ($setvars) $MAC = $final;
}

?>