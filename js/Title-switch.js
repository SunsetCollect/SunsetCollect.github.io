Default_title = document.title;
window.addEventListener('visibilitychange',function (){
    if(document.visibilityState == 'hidden'){
        document.title = '(⌯꒪꒫꒪)੭|记得回来看看';
    }
    else if(document.visibilityState == 'visible'){
        document.title = '( ╯▽╰)|欢迎回家!';
        setTimeout(function(){
            document.title = Default_title;
        },2000);
    }
    else document.title = Default_title;
});