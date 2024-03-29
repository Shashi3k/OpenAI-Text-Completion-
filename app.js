const openAI_secret_key=""

async function fetchData(){
    const response = await fetch("https://api.openai.com/v1/completions",{
        /**You can also use https://api.openai.com/v1/chat/completions to complete your chats. When 
        you do that, remember to use model gpt-3.5-turbo-1160. You can also
        use gpt-4 model for higher performance but unfortunately, that api key is not free.
        You can learn more about it from here: https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4
        */
        method: "POST",
        headers:{
            Authorization: "Bearer " + openAI_secret_key,
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            model:"gpt-3.5-turbo-instruct",
            prompt:"hello there!",
            max_tokens:7,
            temperature:0.5,
            top_p:1.0,
            frequency_penalty:0.0,
            presence_penalty:0.0,
            stop:""
    })

})
    const data = await response.json()
    console.log(data)
}

fetchData()
