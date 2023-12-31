// Promise söz vermek
const onDakikaSonraOradayim = new Promise( (resolve, reject)=>{

    const yagmurlu = true;

    setTimeout( ()=>{

      if(yagmurlu){
        reject("Burası İstanbul, yağmur yağar söz uçar...")
      }else{
        resolve("Sözümü her zaman tutarım :)")
      }

    }, 10000);



} );


onDakikaSonraOradayim.then( (message)=>{ console.log(message)} ).catch( (err)=>{ console.log(err)   } );



//
function getWorks(){

    const workList = null;

    return new Promise( (resolve, reject)=>{

      if(workList){
        resolve("iş listesi alındı");
      }else{
        reject("İş listesi alınamadı");
      }

    } )


}


getWorks()
.then( (result)=>{ console.log(result)})
.catch( (err)=>{console.log(err)} )