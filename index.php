<?php

$index_file = ( isset($_GET['frame']) ? 'index_empty.html' : 'index_app.html' );
file_exists( $index_file ) or die('Internal error.');
print( file_get_contents($index_file) );

?>