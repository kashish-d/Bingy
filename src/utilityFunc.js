export function HandleSwipe(el, callback) {
    // dist Y,start Y is not used because there was no requirement for up down swipes.
    // http://www.javascriptkit.com/javatutors/touchevents2.shtml
    let touchSurface = el,
        swipedir,
        startX,
        distX = 0,
        threshold = 150,
        allowedTime = 200,
        elapsedTime,
        startTime;

    touchSurface.addEventListener('touchstart', (e) => {
        var touchObj = e.changedTouches[0];
        swipedir = 'none';
        startX = touchObj.pageX;
        // startY = touchObj.pageY;
        startTime = new Date().getTime();
        e.preventDefault();
    });

    touchSurface.addEventListener('touchmove', (e) => {
        e.preventDefault();
    });

    touchSurface.addEventListener('touchend', (e) => {
        var touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        // distY = touchObj.pageY - startY;
        elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            //time condition met
            if (Math.abs(distX) >= threshold) {
                swipedir = distX < 0 ? 'left' : 'right';
            }
        }
        if (swipedir === 'left') {
            callback.left();
        } else if (swipedir === 'right') {
            callback.right();
        } else {
            return;
        }
    });
}
