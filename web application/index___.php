<html>
     <head>
          <title>Site Title</title>
          <link rel="stylesheet" href="style.css" type="text/css" />
     </head>
     <body>
	 this is only a test
          <?php
               //begin PHP code
               @require('functions.php');
               @include('header.php');
               @include('lpane.php');  

               if(isset($_GET['page']) && isValidPage($_GET['page']))
               {
                    @include($_GET['page'] . '.php');
               } else {
                    @include('main.php');
               }

               @include('footer.php');
          ?>
     </body>
</html>