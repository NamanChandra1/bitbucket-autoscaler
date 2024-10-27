const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;
const workspace = process.env.WORKSPACE
const BITBUCKET_API_URL = 'https://api.bitbucket.org/2.0/repositories/${workspace}'; 
const BITBUCKET_TOKEN = process.env.BITBUCKET_WORKSPACE_TOKEN; 
app.use(express.json());

app.get('/:serviceName', async (req, res) => {
    const serviceName = req.params.serviceName;

    try {
        const response = await axios.get(`${BITBUCKET_API_URL}/${serviceName}/pipelines/`, {
            headers: {
                'Authorization': `Bearer ${BITBUCKET_TOKEN}`,
                'Accept': 'application/json'
            },
            params: {
                'sort': '-created_on',
                'pagelen': 3,
            }
        });	
       
        const pipelines = response.data.values;
	console.log(pipelines)
	const inProgressPipeline = pipelines.some(pipeline => pipeline.state.name === 'IN_PROGRESS');
	console.log(inProgressPipeline)
        if (inProgressPipeline) {
            res.status(200).json({ result: 1 }); // 1 if IN_PROGRESS
        } else {
            res.status(200).json({ result: 0 }); // 0 if no IN_PROGRESS
       }

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch pipelines' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
