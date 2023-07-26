/* Set Varaibles */
let cells = document.querySelectorAll('.row>div'); /* pulls all items that are inside of rows class in html */
    info = document.querySelector('info');  /* pulls the info tagged elements into javascrips  */
    counter = 0; /* control varaible for turns */
    let win = [
        ['.tl','.tm','.tr'],
        ['.ml','.mm','.mr'],
        ['.br','.bm','.bl'],
        ['.tl','.mm','.br'],
        ['.tr','.mm','.bl'],
        ['.tm','.mm','.bm'],
        ['.tr','.mr','.br'],
        ['.tl','.mm','.bl'],
    ]; /* control varaible for winning arrays */

/* build a loop for the events */

