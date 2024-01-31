const openAI_secret_key=""

async function fetchData(){
    const response = await fetch("https://api.openai.com/v1/completions",{
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
