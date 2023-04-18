
export function renderComment(list, obj) {
    
    list.innerHTML = obj.map((el,index)=> el=`
          <li class="comment" data-index='${index}'>
            <div class="comment-header">
              <div class="comment-author">${el.name}</div>
              <div class="comment-time">${el.time}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${el.text}
              </div>
            </div>
            <div class="comment-footer">
              
              <div class="likes">
                <span class="likes-counter">${el['likes-counter']}</span>
                <button class="like-button ${el['likes-class'] } "></button>
              </div>
            </div>
          </li>`).join('');  

    likes(list);         
}

//------------------------------------------------------------------------------------

function likes(list) {
 
    const listItems = list.querySelectorAll('.comment');
    

    for(let key of listItems) {

        const likeButton = key.querySelector('.like-button');
        const likeCounter = key.querySelector('.likes-counter');
        
        likeButton.addEventListener('click',(event) => {
          
            event.stopPropagation();  

            likeButton.classList.add('-loading-like');
            
            delay(2000).then(() => {

                likeButton.classList.toggle('-active-like');
                likeButton.classList.contains('-active-like') ? likeCounter.innerHTML++ : likeCounter.innerHTML--;
                likeButton.classList.remove('-loading-like');

            })
        })
    }
}

//---------------------------------------------------------------------------------------

function delay(interval = 300) {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, interval);
    });
}

//---------------------------------------------------------------------------------------

