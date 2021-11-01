const ping = async (req, res) => {
    res.status(200).json({
        "status": "Up"
    });
};
module.exports = {
    ping
};
