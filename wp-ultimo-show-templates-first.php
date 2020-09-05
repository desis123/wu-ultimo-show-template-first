<?php

/**
* Plugin Name: WP ULTIMO SHOW TEMPLATES FIRST
* Plugin URI: https://ordershop.net
* Description: This Plugin Allow To show all templates first before signup process
* Version: 1.0.0
* Author: Farhad Kabir
* Author URI: https://ordershop.net
* License: GPL2
*/

add_action('plugins_loaded', 'wu_show_template_first');


function wu_show_template_first() {
	if( is_plugin_active( 'wp-ultimo/wp-ultimo.php' ) ) {
     include_once(WP_PLUGIN_DIR."/wp-ultimo/inc/class-wu-admin-settings.php");	
	 include_once(WP_PLUGIN_DIR."/wp-ultimo/inc/class-wu-signup.php");	
     include_once(WP_PLUGIN_DIR."/wp-ultimo/inc/models/wu-plan.php");
     include_once(WP_PLUGIN_DIR."/wp-ultimo/inc/class-wu-plans.php");	
    }
	
	
	add_filter('wp_ultimo_redirect_url_after_signup', 'my_custom_url_redirect', 10, 4);
    add_action( 'login_footer', 'pop_html_at_footer' );
	
	
     function my_custom_url_redirect($url, $site_id, $user_id, $transient) {
          return get_site_url($site_id);
     } 
	
   
    if(isset($_GET['cs'])){ 
       

        $key = WU_Signup::get_transient_key($_GET['cs']);
        $transient = get_site_transient($key);

	
       if (isset($transient['plan_id'])) {
         $plan_id = $transient['plan_id'];
	
       }
	
	   if(class_exists('WU_PLANS')){
	     $plans = WU_Plans::get_plans();
	   }
	
       if(class_exists('WU_Plan')) {
		  $selected_plan = new WU_Plan($plan_id);
	    }
		
		
	
       if (isset($transient['template'])) {
	     $choosen_template = $transient['template'];	 
	   }
	
	
     foreach($plans as $plan){
		
		
	  if(!empty($choosen_template)){
	  
	   if(!in_array( $choosen_template, array_keys($plan->templates))){ //This will find, where choose template not present 
		   $args[] = $plan->id;
		  }
	  }  
	 
	}
	
	
	 $url = WU_Signup()->get_register_url( network_site_url('wp-signup.php') );
     $url_parsed = parse_url($url);
     $url_path = $url_parsed['path'];
	 
	 
	 global $wp;
     if (stristr(add_query_arg( $wp->query_vars, home_url( $wp->request ) ), ltrim($url_path,'/')) !== false){
        add_action( 'login_enqueue_scripts',  function() use ( $args ) { 
               wustf_enqueue_script( $args ); } );
			   
	   		   
     }
	
	
	//print_r($plans_arry);
	
	
	//when both plan and template is selected now check
	if(!empty($choosen_template) && !empty($selected_plan->templates)){
	  if(in_array( $choosen_template, array_keys($selected_plan->templates))){
	   //Do Nothing , Everything is okk
	  }else{
		 
		  
	   wc_add_notice('Some error information text','error');
	//  wp_redirect('wp-signup.php?susignerr=upgradePlan');
	  
	  wp_redirect( WU_Signup()->get_register_url( network_site_url('wp-signup.php') ).'?susignerr=upgradePlan');

     // echo 's'; //This echo is required for redirect , otherwise redirect is not working :(
  exit;


	  
	  }
	  
	  
	}
	
	
	
 } //end cs 
}









function wustf_enqueue_script($dataToPass) {
	
	
	wp_enqueue_script( 'wustf-js',  plugin_dir_url( __FILE__ ) .'/wustf.js', false );
	wp_localize_script( 'wustf-js', 'passedData', $dataToPass );
	wp_enqueue_style('jquery-modal-style', plugin_dir_url( __FILE__ ) .'/jquery.modal.min.css', false );
     wp_enqueue_script('jquery-modal-js', plugin_dir_url( __FILE__ ) .'/jquery.modal.js', false );
	wp_enqueue_script('typed-js', plugin_dir_url( __FILE__ ) .'/typed.js', false );
	
	
}



         

function pop_html_at_footer(){

echo '';


}






?>