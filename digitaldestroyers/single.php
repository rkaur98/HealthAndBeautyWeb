<?php

  get_header();

  // The loop
  if ( has_post_thumbnail() ) {
    the_post_thumbnail();
  }

  if(have_posts()==true)
  {
    while(have_posts()==true)
    {
      // Iterates the next post

      the_post();

      
      
      

      // get out of php
      ?>
      
      <?php

      
      the_content();
      

      

       ?>
       
      
       
      <?php

      // get back to php
    }

  }
  
  get_footer();



 ?>
 