export async function getDataFromAPI (apiUrl) {

      let response = await fetch(apiUrl);
      let responseData =await response.json(); 
      return responseData;  
    
}

//---------------------------------------------------------------------------------------

export async function postDataToAPI (apiUrl, comment, name) {
      
      let response = await fetch(apiUrl, {

            method: "POST",
      
            body: JSON.stringify({ 
                      text:comment.value,
                      name: name.value,
                      forceError: true
                      })
      });

      if (response.status == 400) {
            throw new Error(400);
      }

      if (response.status == 500) {
            throw new Error(500);
      }
            
      let responseData = await response.json();
      return responseData;
}

//---------------------------------------------------------------------------------------
