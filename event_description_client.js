document.addEventListener("DOMContentLoaded", function(event) {
    var xhr = new  XMLHttpRequest();
    var location=sessionStorage.getItem('location');
    var event_id=sessionStorage.getItem('event_id');
    console.log('location=',location);
    console.log('event id=',event_id);
    var images=[];
    for (var i = 1; i <= 6; i++){
        images.push(document.getElementById("image"+i))
    }
    var event_title = document.getElementsByClassName("event_title")[0];
    var event_age_restriction=document.getElementById("age-restriction");
    var event_dates=document.getElementsByTagName("time")[0];
    var event_description=document.getElementsByClassName("event_short_title")[0];
    var event_place_address = document.getElementById("address");
    var event_place_telephone = document.getElementById("phone");
    var event_place_title = document.getElementById("place_title");
    var event_price = document.getElementById("price");
    var event_publ_date=document.getElementsByClassName("post-pubdate")[0];
    
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
    xhr.open("GET","/api/get/event/"+ event_id,true);
    xhr.onload = function(){
    var results= JSON.parse(xhr.responseText);
    console.log("results=",results);
        event_title.innerHTML=results.title!=null?results.title:"";
        event_age_restriction.innerHTML = (results.age_restriction!=null&&results.age_restriction!="0")?" "+results.age_restriction:" 0+";
        event_place_address.innerHTML=results.place!=null?results.place.address:"-";
        event_place_title.innerHTML=results.place!=null?results.place.title:"-";
        event_place_telephone.innerHTML=(results.place!=null)?((results.place.phone!=""&&results.place.phone!=null)?results.place.phone:"-"):"-";
        event_description.innerHTML = results.description!=null?results.description:"";
        event_price.innerHTML = (results.price!=null&&results.price!="")?results.price:"Бесплатно";
        event_publ_date.innerHTML = new Date(results.publication_date).toLocaleString();
        for(var k=0; k < results.dates.length;k++){
            event_dates.innerHTML = (results.dates[k].start_date!=null?results.dates[k].start_date:"") + " " + (results.dates[k].start_time!=null?results.dates[k].start_time:"") + " - " + (results.dates[k].end_date!=null?results.dates[k].end_date:"")  + " " + (results.dates[k].end_time!=null?results.dates[k].end_time:"");
        }
        for (var i = 1; i <= 6; i++){
            images[i-1].src=results.images[i-1]!=null?results.images[i-1].image:"http://www.kensap.org/wp-content/uploads/empty-photo.jpg";
        }
        
    }
    xhr.onerror = function(){
        console.log("Error!!! ")
    }
    xhr.send();
});