var xmlHttp=CreateNewXmlObject();

function CreateNewXmlObject(){
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }
    else{
        xmlHttp=new ActiveXObject();
    }

    return xmlHttp;
}

function process(){
    if(xmlHttp){
        try {
            xmlHttp.open("GET","person.xml",true);
            xmlHttp.onreadystatechange = handleServerResponse;
            xmlHttp.send(null);
            
        } catch (e) {
            alert(e.toString());
        }
    }
    else{
        alert("Error At Process");
    }
}

function handleServerResponse(){
    if(xmlHttp.readyState==4){
        if(xmlHttp.status==200){
            dataHandler();
        }
        else{
            alert("Someting wrong in handleServerResponse");
        }
    }else{
        alert(xmlHttp.statusText);
    }
}

function dataHandler(){
    var responseData=xmlHttp.response;
    var totalname=responseData.getElementsByTagName("name");
    var totalssn=responseData.getElementsByTagName("ssn");
    var data1;

    for(var i=0;i<name.length;i++){
        data1+="name= "+ totalname.item(i).firstChild+ " ssn="+ totalssn.item(i).firstChild;
    }
    var displayData=document.getElementById("displayData");
    displayData.innerHTML=data1;

}