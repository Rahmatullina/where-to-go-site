document.addEventListener("DOMContentLoaded", function(event) {
    var xhr = new  XMLHttpRequest();
    var location=sessionStorage.getItem('location')!=null?sessionStorage.getItem('location'):'spb';
    var category=sessionStorage.getItem('category');
    var results=[];
    var num_page=0;
    console.log('location=',location);
    console.log('category=',category);
    var items_event_id=[];
    var items_image=[];
    var items_event_title=[];
    var items_age_restriction=[];
    var items_description=[];
    var items_dates=[];
    var items_place=[];
    for (var i = 1; i <=21; i++){
        var el = document.getElementById("item"+i);
        items_image.push(el.getElementsByClassName("item_image")[0]);
        items_event_title.push(el.getElementsByClassName("event_title")[0]);
        items_age_restriction.push(el.getElementsByClassName("age-restr")[0]);
        items_description.push(el.getElementsByClassName("post-description")[0]);
        items_dates.push(el.getElementsByTagName("time")[0]);
        items_place.push(el.getElementsByClassName("place")[0]);
    }
    document.getElementsByClassName("switcher")[0].innerHTML= location;
    document.getElementsByClassName("page_Title")[0].getElementsByTagName("span")[0].innerHTML =  category + " in ";
    document.getElementById("loc-msk").addEventListener("click",function(){
        location ='msk';
        sessionStorage.setItem('location',location);
        document.getElementsByClassName("switcher")[0].innerHTML=location;
        fill();
    });
    document.getElementById("loc-spb").addEventListener("click",function(){
        location ='spb';
        sessionStorage.setItem('location',location);
        document.getElementsByClassName("switcher")[0].innerHTML=location;
        fill();
    });
    document.getElementById("item1").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[0]);
        console.log("was clicled! Event id=" ,items_event_id[0]);
    });
    document.getElementById("item2").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[1]);
        console.log("was clicled! Event id=" ,items_event_id[1]);
    });
    document.getElementById("item3").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[2]);
        console.log("was clicled! Event id=" ,items_event_id[2]);
    });
    document.getElementById("item4").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[3]);
        console.log("was clicled! Event id=" ,items_event_id[3]);
    });
    document.getElementById("item5").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[4]);
        console.log("was clicled! Event id=" ,items_event_id[4]);
    });
    document.getElementById("item6").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[5]);
        console.log("was clicled! Event id=" ,items_event_id[5]);
    });
    document.getElementById("item7").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[6]);
        console.log("was clicled! Event id=" ,items_event_id[6]);
    });
    document.getElementById("item8").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[7]);
        console.log("was clicled! Event id=" ,items_event_id[7]);
    });
    document.getElementById("item9").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[8]);
        console.log("was clicled! Event id=" ,items_event_id[8]);
    });
    document.getElementById("item10").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[9]);
        console.log("was clicled! Event id=" ,items_event_id[9]);
    });
    document.getElementById("item11").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[10]);
        console.log("was clicled! Event id=" ,items_event_id[10]);
    });
    document.getElementById("item12").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[11]);
        console.log("was clicled! Event id=" ,items_event_id[11]);
    });
    document.getElementById("item13").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[12]);
        console.log("was clicled! Event id=" ,items_event_id[12]);
    });
    document.getElementById("item14").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[13]);
        console.log("was clicled! Event id=" ,items_event_id[13]);
    });
    document.getElementById("item15").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[14]);
        console.log("was clicled! Event id=" ,items_event_id[14]);
    });
    document.getElementById("item16").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[15]);
        console.log("was clicled! Event id=" ,items_event_id[15]);
    });
    document.getElementById("item17").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[16]);
        console.log("was clicled! Event id=" ,items_event_id[16]);
    });
    document.getElementById("item18").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[17]);
        console.log("was clicled! Event id=" ,items_event_id[17]);
    });
    document.getElementById("item19").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[18]);
        console.log("was clicled! Event id=" ,items_event_id[18]);
    });
    document.getElementById("item20").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[19]);
        console.log("was clicked! Event id=" ,items_event_id[19]);
    });
    document.getElementById("item21").addEventListener("click",function(){
        sessionStorage.setItem('event_id',items_event_id[20]);
        console.log("was clicked! Event id=" ,items_event_id[20]);
    });
    document.getElementById("exhibition").addEventListener("click",function(){
        sessionStorage.setItem('category','exhibition');
        sessionStorage.setItem('location',loc);
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
    document.getElementById("next_page").addEventListener("click",function(){
        num_page++;
        fill_events();
    });
    function fill(){
        xhr.open("GET","/api/fill-event/location/"+ location +"/category/"+ category,true);
        xhr.onload = function(){
        results= JSON.parse(xhr.responseText);
        console.log("results=",results);
        fill_events();
        }
        
        xhr.onerror = function(){
            console.log("Error!!! ")
        }
        xhr.send();
    }
    function fill_events(){
        if(num_page>4) num_page=0;
        for(var i = 0; i < 21; i++) {
            items_event_title[i].innerHTML=results[i+21*num_page].title!=null?results[i+21*num_page].title:"";
            items_event_id[i]=results[i+21*num_page].id;
            items_age_restriction[i].innerHTML = (results[i+21*num_page].age_restriction!=null&&results[i+21*num_page].age_restriction!="0")?" "+results[i+21*num_page].age_restriction:" 0+";
            items_image[i].src=results[i+21*num_page].images[0].image!=null?results[i+21*num_page].images[0].image:"http://www.kensap.org/wp-content/uploads/empty-photo.jpg";
            items_place[i].innerHTML=results[i+21*num_page].place!=null?results[i+21*num_page].place.title:"";
            items_description[i].innerHTML=results[i+21*num_page].description!=null?results[i+21*num_page].description:"";
            for(var k=0; k < results[i+21*num_page].dates.length;k++){
                items_dates[i].innerHTML = (results[i+21*num_page].dates[k].start_date!=null?results[i+21*num_page].dates[k].start_date:"") + " " + (results[i+21*num_page].dates[k].start_time!=null?results[i+21*num_page].dates[k].start_time:"") + " - " + (results[i+21*num_page].dates[k].end_date!=null?results[i+21*num_page].dates[k].end_date:"")  + " " + (results[i+21*num_page].dates[k].end_time!=null?results[i+21*num_page].dates[k].end_time:"");
            }
        }
    }
    
    fill();
});
