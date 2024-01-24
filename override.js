document.documentElement.style.setProperty('--standard-creamsicle-orange', '#b86f42');
document.documentElement.style.setProperty('--standard-red-orange', '#a14e40');
document.documentElement.style.setProperty('--standard-medium-orange', '#9d532e');
if (document.getElementById("bar_banner")) { //if we have an error banner, update colors which are used elsewhere
    //otherwise leave it as the normal color, it only looks bad when it's used for oversaturated warnings
    document.documentElement.style.setProperty('--standard-light-pink', '#a07f7f');
    document.documentElement.style.setProperty('--important-post','#c9ac0f');
    document.documentElement.style.setProperty('--standard-vibrant-yellow', '#a88c00');
}