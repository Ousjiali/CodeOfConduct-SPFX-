require("@rushstack/eslint-config/patch/modern-module-resolution");
module.exports = {
  extends: ["@microsoft/eslint-config-spfx/lib/profiles/react"],
  project: "tsconfig.eslint.json",
  parserOptions: { tsconfigRootDir: __dirname },
};
