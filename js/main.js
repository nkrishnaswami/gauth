// Main function
$(document).on('pagecreate', '#main', async function() {
    // Use exports from locally defined module
    var keysController = new gauth.KeysController();
    await keysController.init();
});
