var xmlHttp=CreateNewXmlObject();

function CreateNewXmlObject(){
    var xmlHttp;
    if(window.XMLHttpRequest){
        xmlHttp=new XMLHttpRequest();
    }
    else{
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
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
            try {
                 dataHandler();
            } catch (error) {
                alert(error.toString());
            }  
        }
        else{
            alert(xmlHttp.statusText);
        }
    }
}

function dataHandler(){
    var responseData=xmlHttp.responseXML;
    var root=responseData.documentElement;
    var totalname=root.getElementsByTagName("name");
    var totalssn=root.getElementsByTagName("ssn");
    var data1;

    for(var i=0;i<name.length;i++){
        data1+="name= "+ totalname.item(i).firstChild.data+ " ssn="+ totalssn.item(i).firstChild.data;
    }
    var displayData=document.getElementById("displayData");
    displayData.innerHTML=data1;

}
