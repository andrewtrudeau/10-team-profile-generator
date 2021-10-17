
// This code populates the webpage with cards about the employees //

const html = (cardData) => {

    let cards = ``;
    cardData.forEach(e => {

        cards += `
            <div class="card">
                <div class="top-half">
                    <h3 class="name">${e.name}</h3>
                    <h4 class="profession">${e.role}</h4>
                </div>

                <ul class="info">
                    <li>ID: ${e.id}</li>
                    <li>Email: <a href="mailto:${e.email}">${e.email}</a></li>
                    <li>${e.extra.key}: ${e.extra.value}</li>
                </ul>
            </div>
            `
    });

    return `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="./style.css">
            <title>Company Portfolios</title>
        </head>

        <body>
            <header>
                <h1>My Team</h1>
            </header>

            <div class="card-wrapper">
                ${cards}   
            </div>

        </body>

        </html>
    `

}

const css = `
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
}

:root {
    --text: #d1d8e6;
    --primary: #6E85B2;
    --primary2: #5C527F;
    --secondary: #3E2C41;
    --tertiary: #261C2C;
}


header {
    background-color: var(--secondary);
    color: var(--text);
    border-bottom: var(--tertiary) solid 2px;
    position: absolute;
    width: 100%;
    height: 15%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    padding-top: 10px;
}

body {
    background-color: var(--primary);
}

.card-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: 150px;
}

.card {
    background-color: var(--primary2);
    box-shadow: 10px 5px 5px var(--secondary);
    margin: 20px;
    border-radius: 4px;
    position: relative;
    min-width: 300px;
    min-height: 375px;
}

.top-half {
    position: absolute;
    top: 0px;
    width: 90%;
    padding-left: 10%;
    background-color: var(--tertiary);
    color: var(--primary);
    border-radius: 4px 4px 0px 0px;
}

.info {
    margin-top: 49%;
    list-style: none;
}
.info li {
    background-color: var(--primary);
    border: var(--primary2) solid 1px;
    color: var(--secondary);
    width: 68%;
    padding: 20px;
}

.info li a {
    color: var(--tertiary);

}
.info li:first-child{
    border-radius: 4px 4px 0px 0px;
}

.info li:last-child{
    border-radius: 0px 0px 4px 4px;
}
`

module.exports = {
    html: html,
    css: css
}