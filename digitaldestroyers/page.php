<?php 

	get_header(); 

	
    ?>

    
    <?php
    if (have_posts()==true)

	{

		while(have_posts()==true)
		{

			the_post();

            ?>
            

            <div>

            <?php

      
                the_content();
                


                
            ?>

            </div> 
            

            <?php
		}
	}
	

  get_footer(); 

 ?>