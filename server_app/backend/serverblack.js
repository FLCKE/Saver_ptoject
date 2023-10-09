const express = require('express');
const axios = require('axios');
const { async, window } = require('rxjs');

const app = express();
const port = process.env.port || 3005;
const b2 = require('backblaze-b2');
const B2 = new b2({
    accountID: '6013e30dd2a3',
    applicationKey: '005163403d3ee98518fca43ad8d093cf2c121a7cdc',
})

// configuration cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
// route pour accéder a blackblaze
app.get('/getdocumentbyid', async (req, res) => {
    const fugId = '4_z36b0b1d33e23208d8da20a13_f103253524a388804_d20230923_m155342_c005_v0501010_t0048_u01695484422908';
    const b2Url = `https://f005.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=${fugId}`;
    // fetch(b2Url)
    //     .then(response => {
    //         console.log(response);
    //     });
    // const content=indow.URL.createObjectURL(new Blob([response.data]));
    // const link = document.createElement('a');
    // link.href = content;
    // link.click();
     try {
        const response = await axios.get(b2Url);
        // const reponse2=JSON.parse(response.data);
        // console.log(reponse2);
        
        res.status(response.status).send(response.data);
        // const pdf=document.createElement('iframe');
        // pdf=response.data;
        // document.appendChild('pdf');
    } catch (error) {
        res.status(error.response.status).send(error.response.data);
    }
    // B2.downloadFileById({ fugId })
    //     .then((response) => {
    //         response.data.pipe(res);
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //         res.status(500).send('Erreur lors de la récupération du fichier PDF depuis Backblaze.');
    //     });
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});