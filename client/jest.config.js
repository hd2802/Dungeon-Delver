module.exports = {
    testEnvironment: 'jsdom',
    "moduleNameMapper": {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "client/config/CSSStub.js",
        "\\.(scss|sass|css)$": "identity-obj-proxy"
      },
};