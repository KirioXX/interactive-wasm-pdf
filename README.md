# Interactive WASM Pdf

Test your wasm-pdf template in a interactive playground.</br>
Try it here: https://kirioxx.github.io/interactive-wasm-pdf/

It combines [wasm-pdf](https://github.com/jussiniinikoski/wasm-pdf) </br>
and [json-template](https://github.com/datavis-tech/json-templates) </br>
to generate PDFs in the browser.

<details>
  <summary>To get started you can use the following example JSON</summary>

```json
    {
    "title": "Example Document",
    "template": {
        "top": 50,
        "left": 50,
        "right": 50,
        "bottom": 50
    },
    "contents": [{
            "obj_type": "Paragraph",
            "params": {
                "text": "{{title}}",
                "font_size": 18,
                "leading": 24,
                "font_name": "Helvetica-Bold"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "This PDF document was generated dynamically in your browser. No server resources were utilized.",
                "font_name": "Helvetica-Bold",
                "font_size": 12,
                "align": "left"
            }
        },
        {
            "obj_type": "Table",
            "params": {
                "style": {
                    "grid": {
                        "width": 0.25,
                        "color": [0.6, 0.6, 0.6]
                    },
                    "padding": {
                        "left": 5.0,
                        "right": 5.0,
                        "top": 5.0,
                        "bottom": 5.0
                    },
                    "align": {
                        "vertical": "middle"
                    }
                },
                "rows": [{
                        "obj_type": "Row",
                        "params": {
                            "cells": [{
                                    "obj_type": "Cell",
                                    "params": {
                                        "span": 3,
                                        "style": {
                                            "background_color": [0.9, 0.9, 0.95]
                                        },
                                        "contents": [{
                                                "obj_type": "Paragraph",
                                                "params": {
                                                    "text": "This is a Table defined in JSON",
                                                    "align": "center",
                                                    "font_name": "Helvetica-Bold"
                                                }
                                            },
                                            {
                                                "obj_type": "Paragraph",
                                                "params": {
                                                    "text": "Check out examples/text-example.json from this repository. It's easy to create content with JSON.",
                                                    "font_size": 10,
                                                    "leading": 10,
                                                    "align": "center"
                                                }
                                            },
                                            {
                                                "obj_type": "Paragraph",
                                                "params": {
                                                    "text": "This cell spans 3 columns...",
                                                    "font_size": 10,
                                                    "leading": 10,
                                                    "align": "center"
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "obj_type": "Cell",
                                    "params": {
                                        "contents": [{
                                            "obj_type": "Paragraph",
                                            "params": {
                                                "text": "Red Cell",
                                                "align": "center",
                                                "color": [1, 1, 1]
                                            }
                                        }],
                                        "style": {
                                            "background_color": [1, 0, 0]
                                        }
                                    }
                                },
                                {
                                    "obj_type": "Cell",
                                    "params": {
                                        "contents": [{
                                                "obj_type": "Paragraph",
                                                "params": {
                                                    "text": "Sample Image",
                                                    "align": "center",
                                                    "font_name": "Courier-Oblique",
                                                    "font_size": 10,
                                                    "padding": {
                                                        "bottom": 5
                                                    }
                                                }
                                            },
                                            {
                                                "obj_type": "Image",
                                                "params": {
                                                    "src": "./pizza.jpg",
                                                    "fit_width": true
                                                }
                                            },
                                            {
                                                "obj_type": "Paragraph",
                                                "params": {
                                                    "text": "Yummy!",
                                                    "align": "center",
                                                    "font_name": "courier-bold-oblique",
                                                    "font_size": 10,
                                                    "padding": {
                                                        "top": 5
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                },
                                {
                                    "obj_type": "Cell",
                                    "params": {
                                        "contents": [{
                                            "obj_type": "Paragraph",
                                            "params": {
                                                "text": "Cell 4"
                                            }
                                        }]
                                    }
                                }
                            ]
                        }
                    },
                    {
                        "obj_type": "Row",
                        "params": {
                            "cells": [{
                                "obj_type": "Cell",
                                "params": {
                                    "contents": [{
                                            "obj_type": "Paragraph",
                                            "params": {
                                                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus quis est ac ultrices. Pellentesque turpis massa, interdum at tempus ac, tincidunt sit amet neque. Cras nisl sapien, molestie sed nibh vitae, tincidunt fermentum nisl. Vivamus sed velit finibus, congue libero vel, elementum dui. Vestibulum nulla odio, laoreet a aliquam id, fermentum at eros.",
                                                "font_size": 10,
                                                "leading": 10,
                                                "align": "left"
                                            }
                                        },
                                        {
                                            "obj_type": "Paragraph",
                                            "params": {
                                                "text": "Centered Text",
                                                "align": "center"
                                            }
                                        }
                                    ]
                                }
                            }]
                        }
                    },
                    {
                        "obj_type": "Row",
                        "params": {
                            "cells": [{
                                "obj_type": "Cell",
                                "params": {
                                    "contents": [{
                                        "obj_type": "Path",
                                        "params": {
                                            "points": [
                                                [0, 20],
                                                [0, 0],
                                                [30, 0],
                                                [30, 20],
                                                [15, 30]
                                            ],
                                            "stroke_color": [1, 0, 0],
                                            "stroke_width": 2.0,
                                            "fill_color": [0, 0, 1],
                                            "align": "center"
                                        }
                                    },
                                    {
                                        "obj_type": "Paragraph",
                                            "params": {
                                                "text": "Here is a custom path",
                                                "align": "center",
                                                "font_name": "Helvetica-Bold",
                                                "color": [1, 0, 0]
                                            }
                                    }
                                ]
                                }
                            }]
                        }
                    }
                ]
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tincidunt nisl. Integer bibendum, leo sed lobortis mollis, orci ante vulputate velit, id ultricies diam mauris consequat neque. Integer et nibh lectus. Cras felis massa, vehicula eget consequat sit amet, bibendum et est. Morbi ultrices id metus quis mollis. Suspendisse condimentum tristique est, sit amet tempor nulla semper sit amet. Aliquam luctus lacinia porta. In et tellus tincidunt, faucibus nisi in, vestibulum urna. Vestibulum eu neque massa. Morbi id tellus euismod, congue diam non, varius ligula. Etiam vel diam gravida eros molestie iaculis dictum ac ligula. Sed rutrum sagittis massa eu feugiat. Etiam blandit iaculis bibendum.",
                "font_name": "Helvetica",
                "font_size": 12,
                "align": "center"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
            "text": "Another Centered Image",
            "align": "center",
            "font_size": 18,
            "padding": {
                "top": 5,
                "bottom": 10
            }
            }
        },
        {
            "obj_type": "Image",
            "params": {
            "src": "./pizza.jpg",
            "align": "center"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "This centered text is generated with Times font",
                "font_size": 18,
                "leading": 24,
                "align": "center",
                "padding": {
                    "bottom": 5,
                    "top": 10
                },
                "font_name": "times-bold"

            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tincidunt nisl. Integer bibendum, leo sed lobortis mollis, orci ante vulputate velit, id ultricies diam mauris consequat neque. Integer et nibh lectus. Cras felis massa, vehicula eget consequat sit amet, bibendum et est. Morbi ultrices id metus quis mollis. Suspendisse condimentum tristique est, sit amet tempor nulla semper sit amet. Aliquam luctus lacinia porta. In et tellus tincidunt, faucibus nisi in, vestibulum urna. Vestibulum eu neque massa. Morbi id tellus euismod, congue diam non, varius ligula. Etiam vel diam gravida eros molestie iaculis dictum ac ligula. Sed rutrum sagittis massa eu feugiat. Etiam blandit iaculis bibendum.",
                "font_name": "Times",
                "font_size": 12,
                "align": "left"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tincidunt nisl. Integer bibendum, leo sed lobortis mollis, orci ante vulputate velit, id ultricies diam mauris consequat neque. Integer et nibh lectus. Cras felis massa, vehicula eget consequat sit amet, bibendum et est.",
                "font_name": "Times",
                "font_size": 12,
                "bullet": "•",
                "bullet_indent": 12,
                "padding": {
                    "left": 20.0,
                    "right": 0.0,
                    "top": 10.0,
                    "bottom": 0.0
                }
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Another bullet generated here.",
                "font_name": "Times",
                "font_size": 12,
                "bullet": "•",
                "bullet_indent": 12,
                "padding": {
                    "left": 20.0,
                    "right": 0.0,
                    "top": 10.0,
                    "bottom": 0.0
                }
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "This is Courier",
                "font_size": 18,
                "leading": 24,
                "font_name": "Courier-Bold-Oblique"

            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Courier is fixed width font. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tincidunt nisl. Integer bibendum, leo sed lobortis mollis, orci ante vulputate velit, id ultricies diam mauris consequat neque. Integer et nibh lectus. Cras felis massa, vehicula eget consequat sit amet, bibendum et est.",
                "font_name": "courier",
                "font_size": 12,
                "align": "left"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Courier is fixed width font. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus tincidunt nisl. Integer bibendum, leo sed lobortis mollis, orci ante vulputate velit, id ultricies diam mauris consequat neque. Integer et nibh lectus. Cras felis massa, vehicula eget consequat sit amet, bibendum et est.",
                "font_name": "courier",
                "font_size": 12,
                "align": "left"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "As you can see, this text flows dynamically to another page.",
                "font_size": 14,
                "align": "center",
                "font_name": "Helvetica-Bold"
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "After this paragraph, comes a 100 point spacer element.",
                "font_size": 14,
                "align": "center",
                "font_name": "Helvetica-Bold",
                "color": [1, 0, 0]
            }
        },
        {
            "obj_type": "Spacer",
            "params": {
                "height": 100
            }
        },
        {
            "obj_type": "Paragraph",
            "params": {
                "text": "Thanks!",
                "font_size": 24,
                "align": "center",
                "font_name": "Helvetica-Bold-Oblique"
            }
        }
    ]
    }
```
</details>
