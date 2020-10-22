module.exports = {
    extends: ["eta-dev"],
    env: {
        jest: true,
        node: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "script"
    }
}
