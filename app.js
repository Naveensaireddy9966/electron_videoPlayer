var videos = [
    "THERE",
    "Hello",
    "World",
]; 
function playArray(index,ele,array,listener){
    //ele.removeEventListener(listener?listener:0);
    ele.innerHTML = array[index];
    //ele.load();
    //ele.play();
    index++
    if(index>=array.length){
        index=0;
    }
    setTimeout(function(){
        playArray(index,ele,array,listener);
    },500);
}
playArray(0,document.getElementsById("myVid"),videos);