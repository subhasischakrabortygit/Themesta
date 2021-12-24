if(document.querySelector('.popup'))
{
    
    const getEvent = document.querySelector('.available_options')

    getEvent.addEventListener("click", () => {
        var current_value = document.querySelector('input[name = "fav_bg"]:checked').value;
        if ((current_value.localeCompare('Dark'))==0){ 
            chrome.tabs.executeScript({
                file: 'changeBgColorDark.js'
            })
        }
        else if ((current_value.localeCompare('Light'))==0){ 
            chrome.tabs.executeScript({
                file: 'changeBgColorLight.js'
            })
        }
        else if ((current_value.localeCompare('Reading Mode'))==0){ 
            chrome.tabs.executeScript({
                file: 'changeBgColorRead.js'
            })
        }
        
    })
}