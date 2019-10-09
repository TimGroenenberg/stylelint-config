"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        "indentation": 4,
        "number-leading-zero": "never",
        "at-rule-no-unknown": [
            true,
            {
                "ignoreAtRules": [
                    "include",
                    "mixin",
                    "extends"
                ]
            }
        ],
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": [
                    "font-icon"
                ]
            }
        ],
        "no-descending-specificity": null
    },
};
