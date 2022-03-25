function gallery_post_type() {
 $labels = array(
  'name'                => _x( 'gallery', 'Post Type General Name', 'acsweb' ),
  'singular_name'       => _x( 'gallery', 'Post Type Singular Name', 'acsweb' ),
  'menu_name'           => __( 'gallery', 'acsweb' ),
  'parent_item_colon'   => __( 'Parent gallery', 'acsweb' ),
  'all_items'           => __( 'All gallery', 'acsweb' ),
  'view_item'           => __( 'View gallery', 'acsweb' ),
  'add_new_item'        => __( 'Add New gallery', 'acsweb' ),
  'add_new'             => __( 'Add New', 'acsweb' ),
  'edit_item'           => __( 'Edit gallery', 'acsweb' ),
  'update_item'         => __( 'Update gallery', 'acsweb' ),
  'search_items'        => __( 'Search gallery', 'acsweb' ),
  'not_found'           => __( 'Not Found', 'acsweb' ),
  'not_found_in_trash'  => __( 'Not found in Trash', 'acsweb' ),
 );
 $args = array(
  'label'               => __( 'gallery', 'acsweb' ),
  'description'         => __( 'gallery news and reviews', 'acsweb' ),
  'labels'              => $labels,
  'supports'            => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', ),
  'taxonomies'          => array( 'genres' ), 
  'hierarchical'        => false,
  'public'              => true,
  'show_ui'             => true,
  'show_in_menu'        => true,
  'show_in_nav_menus'   => true,
  'show_in_admin_bar'   => true,

  'menu_position'       => 5,
  'menu_icon'           => 'dashicons-format-image',
  'can_export'          => true,
  'has_archive'         => true,
  'exclude_from_search' => false,
  'publicly_queryable'  => true,
  'capability_type'     => 'page',
  'taxonomies'          => array( 'category' ),
 );
 register_post_type( 'gallery', $args );
}
add_action( 'init', 'gallery_post_type', 0 );