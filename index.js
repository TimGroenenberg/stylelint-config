"use strict";

module.exports = {
    "extends": "stylelint-config-recommended-scss",
    "rules": {
        "at-rule-empty-line-before": [
            "always", {
                "except": [
                    "blockless-after-same-name-blockless",
                    "first-nested",
                ],
                "ignore": [
                    "after-comment"
                ],
                "ignoreAtRules": [
                    "import"
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
