document.addEventListener("DOMContentLoaded", function(event) {
    var loc=sessionStorage.getItem('location')!=null?sessionStorage.getItem('location'):'spb';
    var xhr = new  XMLHttpRequest();
    var items=[];
    var items_event_id=[];
    var items_image=[];
    var items_event_title=[];
    var items_age_restriction=[];
    for (var i = 1; i <=15; i++){
        var el = document.getElementsByClassName("item"+i)[0];
        items.push(el);
        items_image.push(el.getElementsByClassName("item_image")[0]);
        items_event_title.push(el.getElementsByClassName("event_title")[0]);
        items_age_restriction.push(el.getElementsByClassName("age-restr")[0]);
    }
    document.getElementsByClassName("switcher")[0].innerHTML=loc;
    document.getElementById("exhibition").addEventListener("click",function(){
        sessionStorage.setItem('category','exhibition');
        sessionStorage.setItem('location',loc);
    });
    document.getElementById("loc-msk").addEventListener("click",function(){
        loc ='msk';
        sessionStorage.setItem('location',loc);
        document.getElementsByClassName("switcher")[0].innerHTML=loc;
        fill();
    });
    document.getElementById("loc-spb").addEventListener("click",function(){
        loc ='spb';
        sessionStorage.setItem('location',loc);
        document.getElementsByClassName("switcher")[0].innerHTML=loc;
        fill();
    });
    document.getElementById("concert").addEventListener("click",function(){
        sessionStorage.setItem("category","concert");
        sessionStorage.setItem("location",loc);
    });
    document.getElementById("theater").addEventListener("click",function(){
        sessionStorage.setItem("category","theater");
        sessionStorage.setItem("location",loc);
    });
    document.getElementById("festival").addEventListener("click",function(){
        sessionStorage.setItem("category","festival");
        sessionStorage.setItem("location",loc);
    });
    document.getElementById("education").addEventListener("click",function(){
        sessionStorage.setItem("category","education");
        sessionStorage.setItem("location",loc);
    });
    document.getElementById("shopping").addEventListener("click",function(){
        sessionStorage.setItem("category","shopping");
        sessionStorage.setItem("location",loc);
    });
    document.getElementById("games").addEventListener("click",function(){
        sessionStorage.setItem("category","games");
        sessionStorage.setItem("location",loc);
    });
    document.getElementsByClassName("item1")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[0]);
        console.log("was clicled! Event id=" ,items_event_id[0]);
        fill();
    });
    document.getElementsByClassName("item2")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[1]);
        console.log("was clicled! Event id=" ,items_event_id[1]);
        fill();
    });
    document.getElementsByClassName("item3")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[2]);
        console.log("was clicled! Event id=" ,items_event_id[2]);
        fill();
    });
    document.getElementsByClassName("item4")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[3]);
        console.log("was clicled! Event id=" ,items_event_id[3]);
        fill();
    });
    document.getElementsByClassName("item5")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[4]);
        console.log("was clicled! Event id=" ,items_event_id[4]);
        fill();
    });
    document.getElementsByClassName("item6")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[5]);
        console.log("was clicled! Event id=" ,items_event_id[5]);
        fill();
    });
    document.getElementsByClassName("item7")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[6]);
        console.log("was clicled! Event id=" ,items_event_id[6]);
        fill();
    });
    document.getElementsByClassName("item8")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[7]);
        console.log("was clicled! Event id=" ,items_event_id[7]);
        fill();
    });
    document.getElementsByClassName("item9")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[8]);
        console.log("was clicled! Event id=" ,items_event_id[8]);
        fill();
    });
    document.getElementsByClassName("item10")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[9]);
        console.log("was clicled! Event id=" ,items_event_id[9]);
        fill();
    });
    document.getElementsByClassName("item11")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[10]);
        console.log("was clicled! Event id=" ,items_event_id[10]);
        fill();
    });
    document.getElementsByClassName("item12")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[11]);
        console.log("was clicled! Event id=" ,items_event_id[11]);
        fill();
    });
    document.getElementsByClassName("item13")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[12]);
        console.log("was clicled! Event id=" ,items_event_id[12]);
        fill();
    });
    document.getElementsByClassName("item14")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[13]);
        console.log("was clicled! Event id=" ,items_event_id[13]);
        fill();
    });
    document.getElementsByClassName("item15")[0].addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[14]);
        console.log("was clicled! Event id=" ,items_event_id[14]);
        fill();
    });
    function fill(){
        xhr.open("GET","/api/start_page/location/"+loc,true)
        xhr.onload = function(){
        var results = JSON.parse(xhr.responseText);
        console.log("results=",results);
        for(var i = 0; i < 15; i++) {
            items_event_title[i].innerHTML=results[i].title;
            items_event_id[i]=results[i].id;
            items_age_restriction[i].innerHTML = (results[i].age_restriction!=null&&results[i].age_restriction!="0")?" "+results[i].age_restriction:" 0+";
            items_image[i].src=results[i].images[0].image;
        }
        }

        xhr.onerror = function(){
            console.log("Error!!! ")
        }
        xhr.send()
    }
    fill();
});
