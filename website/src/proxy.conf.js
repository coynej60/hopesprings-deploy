const PROXY_CONFIG = [
    {
        context: [
            "/v3/smtp/email"
        ],
        target: "https://sendinblue.com",
        secure: true,
        logLevel: "debug",
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;