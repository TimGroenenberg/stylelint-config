"use strict";

module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
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
        "indentation": 4,
        "no-descending-specificity": null,
        "number-leading-zero": "never",
        "property-no-unknown": [
            true,
            {
                "ignoreProperties": [
                    "font-icon"
                ]
            }
        ]
    },
};
