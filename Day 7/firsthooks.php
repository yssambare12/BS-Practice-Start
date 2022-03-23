function first_hook_filter(){
    echo 'Post Published $date';
}
add_action( 'init', 'first_hook_filter');