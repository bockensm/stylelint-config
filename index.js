module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "import",
        "include",
        "mixin",
        "use"
      ]
    } ],
    "color-hex-length": "long",
    "declaration-block-no-duplicate-properties": true,
    "declaration-empty-line-before": "never",
    "font-family-no-missing-generic-family-keyword": [ true, {
      "ignoreFontFamilies": [
        "FontAwesome"
      ]
    } ],
    "indentation": "tab",
    "max-empty-lines": null,
    "no-descending-specificity": null,
    "number-no-trailing-zeros": null,
    "order/order": [
      "custom-properties",
      "declarations"
    ],
    "order/properties-alphabetical-order": true
  },
}
