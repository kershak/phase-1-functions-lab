// Code your solution in this file!
    
function distanceFromHqInBlocks(blockStart) {
    if (blockStart > 42){
        return blockStart - 42;
    }
    else {
        return 42 - blockStart;
    }
}

function distanceFromHqInFeet(blockStart){
    return distanceFromHqInBlocks(blockStart) * 264;
}

function distanceTravelledInFeet(start, finalDestination){
    if (start < finalDestination) {
        return (finalDestination - start) * 264
    }
    else {
        return (start - finalDestination) * 264
    }
}

function calculatesFarePrice(start, finalDestination) {
    const distance = distanceTravelledInFeet(start, finalDestination);

    if (distance <= 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return 0.02 * (distance     - 400);
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
