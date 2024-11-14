const common = `
--require-module ts-node/register
--require setup/hooks.ts
--require step-definitions/*.ts
`

module.exports = {
    default: `${common} feature/**/*.feature --publish-quiet`
}
