export default async function handler(req, res) {
    const wait = 15000;
    console.log("Starting request for slow api, wait=", wait);
    await new Promise(r => setTimeout(r, wait));
    console.log("Finished wait time. Returning");
    res.status(200).json({
        message: `You have successfully waited ${wait/1000} seconds`
    });
}