// @ts-nocheck

//This is built off of the "replace_builtin_sprites.js" example mod! https://github.com/tobspr/shapez.io/tree/modloader/mod_examples
const METADATA = {
    website: "https://waffledevsalt.github.io",
    author: "WaffleDevs",
    name: "Colored Paint Brushes",
    version: "1",
    id: "paint-brush-colors",
    description: "Changes Color Sprites To Paint Brushes",
};

class Mod extends shapez.Mod {
    init() {
        // Replace a builtin sprite
        ["red", "green", "blue", "yellow", "purple", "cyan", "white"].forEach(color => {
            this.modInterface.registerSprite("sprites/colors/" + color + ".png", RESOURCES[color + ".png"]);
        });
    }
}

////////////////////////////////////////////////////////////////////////

const RESOURCES = {
    "red.png":
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAC/pJREFUeF7tXb2SHDUQng1sIKIIyPBb8AiE4ARTJgBnpoDMTjAvYDJfARnOfCF3T4SpcxVPAclSmp8dSdNS/6hbo5ndTe5qV/339adWazQ7e+iUXjddd5SqOnQFwqjRSTtmJfc58BmmDvULGJDR+ajr3KfqLxWlLvlaeGjp0UCqmi9EQxYkKCZAycwPkkQEQSOxHB2tuaVNgnYIwMkKcSw/eb4EX5roVtGwjRGgHoiH7tAd5W3InJSkyxax8HU2QIDQ6ZIlgB9+0eRpSJgYOTCMT4C8rU0tAUTY7BJ9cgD2RNW/hLKYAKU2VyRAwvXJo8Y2laVAa7GSXwHylhcE4AT64ur18dNnT4mxeZo5RrLa1RThMdQ0dei6Y2ICmBMAR6LrXlz9cZyuS0AEkPdRNVEerz6BJiv6QQHcG/NV1x3ExTFx7YnpgiPA65MP9AqQNrOE2z4BXAvc8WxQiQI2FYARnZ9853NPAIY8MU5wWCUzhC1hJoqFk5DX8khsCMDICkiASV4eF8MDyVCmY8zhSY8CPTpK/7m+7c19cP9e9/3jh+7yR9FBCnsXkCVAgATdM3nPEENPt8mjka/3MKzCmgsxw5mJAL7Ixx992H3z+WfsXDodbCE6ARhRjfgOf8Ikoik1mGWcboURpcpQiACT4mfffsnOJ1vAhAAq0BCVoIwi6llp2D/XN9l5yyVBMQH+w64DNAh4gy7hdBqdfjD2AE7AnX0MTUD4mkhAiVOZAJPJvGmKYzgipSNgL6B3aVGNExPrDaTBj3KfXN8uU+5sRpmkVgIFAnznXVEZeKn5ouK1HEeV9L2VyEDRAnqUVPsVIIdzkgCRHwoEeDq0bQoBplSIVAOB0qgpskbmfClWD97cerMdmPqeJ44EWDQqBBhsYqZoQ8hIZkwSPGGZOQ02U4y7M5l+Nab/6s3NsevTm35RlgFPAz06fyeANoF4bCuNoMabH0fVohXkRACnDyPBe/fudT9+/TDLkvlDRiQpAjBUaOFRR49CYGwVCQGfAD0Jrm+jlS1cFrAqwF4CfMR/vnp9/BfbBhanCEYifJcNb7FXlBVPYgSKxH/vRIDxzRMBEu2AKQFcgM/JbT8lSf4YyngJxHVlyFEQB8IVIN0MKhNg6SWdAMtWkRjzMmOjoF0VEHtGa4ej4wSONZAAmc2AMgGWueASINaQDD6HyrRw9asfBz7e7M/faUy8DxkqagUu4z1AGGOKAJMLRT0Abwnggc8fXYCqCY9sTg05BHDz4zlyQFSJAFFyUrmi5pA6jssit69O3YxHK+5ci+kKloiRQwDnDG8JEABbugQIEINFBL4HirjyWLvODYxo35YAXKfH8c/XvENC6DMoRkyCxORSdfwOYvzQda+GmyWC1/I6QNwDPHJlLely8RIwaVapBIQEEIZI8tO8TDzzJ4dxAuRvElEjwODQ3tPTXnxJAoxbw74HyLitTIDmJ9LsYHu5FIHXWAUQxUAS2nK+OL5zxjrgXl3f9ifxqRdvF0BKxXkN4iakdnN5NhWARjuVdNFMNTIqTYChCWi/ApxfzlSpExJgSLp/NIDdFXS+TaBqGiJlFUkNVYCYALlQGyBARbRqL9CWJBt19wRY8zQwH+PaycW4T7tNtEIePRM8zC5NYN3sNGft6vrm9KwGqBLImkAeCVVAMTdpbkAFBpYS3ZtCWaYvg9dGAEu+8w+b/W5MA00gDGVLE3ZYZ+dOK+653C0EyC36Ffiy7AR5BGgJ8Qpw5UxkG6se5/w3cmq7D3lDSX7TFaA2iM4efF0dSbYCF6Z9XLYcQ3YStim3gk34NrsE1CQAdDWNZ5/BgtRQ8vu4LersN6oA21pLsH00SIQoB3hKeHQqGc1JvhEBIPfbJAV2kLKIRCPTOR3jZ1Iz3OTbEmDNnBNs+5dQQcClWUhNX219nh1J4mU9AAHYkvJVS3aa+YvtnOq+2O0c3XcDbKJ6//797ofHXxRrJynYSd77TIBlv+AwxSa99bSSCAC6U8iKQnERQn7ysYpcUlZFzlkLJQCXE8DaYQP9aMd/7LpnT/jP2jNwtZrKsyEAmnzitfNqmalkaDcEACuc9yZGgN2VfCKBEAKssVITPWcMw6/t007OGCbrDi1I024qQIh4iEieAMfu2RP3/bnzfJkEXkBIkyxcyn8aVhMC5LIIkcOaMDkCnOvaL7sSaDI/bZXmks85NrX1cj3t1StA7VD55X+uR9aVqTYWkD0hARqFBnCLT4AW0lLgAzM1QgIUOGgoGv+YBWTq7d0d6sHNby/bwoWZVDRAb0BbgXI8j8ZiyZ8wpBDAqRaTwDBZBfAkRW0JUAmMdPKXRz5UAjjX/2ytEhgwQIUAlfIMho/N/FjoRACi0ze/vxy+bruVFzEuYBvIlCQBYqEzNHwiAHa+O4pRK8Bkhb8UaMWspSefKJUKQOKC0SASATxyTASY4MVg5hPAKFAjtToEwFA0ct6pNV8CKH3AivGXQqtDgFIvCuTFBBhtLnIXvWFWARohzRkRYFgH7HuAJZvluZZLUufUPgjAuK97DQJQk7HGuH0QYIFcekvAJ8Av2WftrpE0TZs7IwC+F8wTYFlyzXoAzSz2umTLxeYIEIdJ2gZ6YPMrQKVzAVn+imnUNgF8UBIAle4CMAS3UwGwSODPCQSIkV+Jqon4JgJQveJUAKdT5Twg5VzSaWo0sqT7UgQClBvR1zADNBAAX/snH96+uwt/P+GkCga9bgWol/gJj40SYKYUdwn4++4uPNtBMK9LAP2pgmk8OwIESwBhwm2bAHiAdQiA+4ERNfn5XAFoywCnB3BGt00AHNY6BMD9EI/QbAIhnrZFAP2ZxCSAsgMK6igE8M3svgIwMWUSQDxRzQS5TSBEgACzCMC2KoA+jM0SgEpkkACZdiBdAVbYBlKD1M/7SWOzBKDGnKsAEL6OAP77EwD9Ly8B9/6tXwGsWDLo3TUBIBLtvgegzpxxnJwAbGKyBeZQMqIaPUDO0PoVgAQDM+2hzlC4IE9iLwoEFwRALgdcKkB4ciyvAAVJ0xTVrQCDZ/4caKkCaOI26apKAIvi4gjA0cupAE6vymmgReaUdFYlgJLPgRq4AgAP3R1/1OGvxJdDZxKFdNpKBeBMAh/AnRIgTbVLBVi2fPmJKaUWc7pLzaA9QNQUpghwsj/9M/7dSgVA4U4ALK4A0oShjjIHxATA/FrcD4DYa4YAWGBM3ERNoJEPQtcHsXwF8J/Yvd4XQ4oCNBZmVoAcBdahB7oERAByegAn2kwFMCICkwBGXmTUYrTqCYBc/PF10AkwSJ0VATCw66cfsBg5SasA87awvymUQbhSAqhhqqbIX/3P+jCIhmgpAZqYNAjhTx/TIGkrpGwFAJaGyxJAvA6wBTI4H3/qvxcwvgj3haIE6AOfo2+mAhglRLEJNPIQKTjl3w3M+90MAYwKL5sA66Q5HX3uplDIV7QCRKaKCEAFizrOgARsAvg+iPwWCeEEoGLz9u4dfO9XoEC2BCiHRg2paFwRAYosKwlDTWAuEVUrgFKMZmrsftbQzOWFYs5TQp3whQDEXUC9FJZZShIgsSO4EKCEAGNtbWmto10JnINWIUBLAJDmT9rhfA+wgUBJF4KAJ4WScLscBlFhWm9cSAD899dVKoBpuAWz7uAeaMZ7snW2AhS4YgqRrxwkgDseTPxyN0iAVKCHrrv5lfeQqC1gFm/lZQ8YayTSVXoAEb0bASzyva8AbbpGQ5n9jKDgrmA88qIrgbQQVh21ywtBS0TnLpC+BAzkaJ0AOIXz/NoHAQingBMMIQFw+BwB8FFrTmK5d05yHwTw8U+QYYIp/sEILHWtVwDMf+zzXRGAMhfa3wZiKdP9PCQABUGxfRvlpF1A5kJQ/hpZ+z2AOB2joGEFsEl4vGshXQn0UJorgDsKGx8ymkHxsgSgFLNLNGoa/WLIqGEnl4ItkDasAJT0lY/Bl4CwK8z1ABDAlwpQniOCBjm3oSeF5rSRmkBPQUAAuZsEDNYZUlYBBICwRIiD8Sowg0siwDh877N/6qeqUI+YS7Ev1GcFxY+JOxmcpsJ4mIYn3zoiMRQswbIKwDIlGMzEmFIJKBUAT74glkZF/gcwbuu/Q8NVXwAAAABJRU5ErkJggg==",

    "green.png":
        "data:image/png;base64,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",

    "purple.png":
        "data:image/png;base64,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",

    "blue.png":
        "data:image/png;base64,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",

    "yellow.png":
        "data:image/png;base64,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",

    "cyan.png":
        "data:image/png;base64,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",

    "white.png":
        "data:image/png;base64,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",
};