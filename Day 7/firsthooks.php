function first_hook_action(){
    echo 'Post Published $date';
}
add_action( 'init', 'first_hook_action');
