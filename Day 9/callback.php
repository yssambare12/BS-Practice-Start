function wporg_custom( $post_id, $post ) {
        echo 'Something showing on DOM';
}
add_action('init', 'wporg_callback_run_me_late', 11);
call_user_func(array($obj, 'myCallbackMethod'));