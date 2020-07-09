export const getCampaign = async () => {
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://i3gy725noe.execute-api.us-east-1.amazonaws.com/default/VisualizatorApi/"; // site that doesn’t send Access-Control-*
        let response = await fetch(proxyurl + url, {
            headers: {
                "x-api-key": "9Iaq5lP41La1PWe8XMRdRTQNTZCypPJ6NbdjHxy9"
            }
        })
        let data = await response.json();
        return data;
    } catch (e) {
        console.log(e)
        return {}
    }
}

export const checkIfComplete = async (stepsArray) => {
    let completed = true;
    if (stepsArray.length < 1) {
        completed = false;
    }
    for (let i = 0; i < stepsArray.length; i++) {
        if (stepsArray[i].status !== 'done') {
            completed = false;
            break;
        }
    }
    return completed;
}