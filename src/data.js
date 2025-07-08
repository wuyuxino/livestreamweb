// 模拟审核结果数据
const mnsj1 = [
    {
        "userName": "testjxm",
        "taskId": "rcjmgvg8qmknipv6qbf",
        "source": "http://10.1.65.91:8600/cooper-test/xqc.mp4",
        "description": "",
        "preset": "推荐策略",
        "presetId": 22,
        "status": "SUCCESS",
        "label": "REJECT",
        "duration": 149,
        "notification": "",
        "icrCheckResults": [
            {
                "presetType": "imageTextAudit",
                "type": "spamVulgar",
                "presetTypeDesc": "图文审核",
                "typeTitle": "低俗辱骂",
                "topType": "textVulgar",
                "topTypeTitle": "低俗辱骂",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamVulgar",
                        "timeInSeconds": 91,
                        "startTimeInSeconds": 91,
                        "endTimeInSeconds": 92,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00091.jpg",
                            "location": {
                                "leftOffsetInPixel": 602,
                                "topOffsetInPixel": 86,
                                "widthInPixel": 1272,
                                "heightInPixel": 83
                            }
                        }
                    }
                ]
            },
            {
                "presetType": "imageTextAudit",
                "type": "violateTextGeneral",
                "presetTypeDesc": "图文审核",
                "typeTitle": "百度违禁词库",
                "topType": "textLibRule",
                "topTypeTitle": "文本库",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 24,
                        "startTimeInSeconds": 24,
                        "endTimeInSeconds": 25,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "涉政正面人物",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00024.jpg",
                            "location": {
                                "leftOffsetInPixel": 354,
                                "topOffsetInPixel": 750,
                                "widthInPixel": 191,
                                "heightInPixel": 33
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 24,
                        "startTimeInSeconds": 24,
                        "endTimeInSeconds": 25,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "自定义涉政人物敏感词_正面",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00024.jpg",
                            "location": {
                                "leftOffsetInPixel": 354,
                                "topOffsetInPixel": 750,
                                "widthInPixel": 191,
                                "heightInPixel": 33
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 43,
                        "startTimeInSeconds": 43,
                        "endTimeInSeconds": 44,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "涉政正面人物",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00043.jpg",
                            "location": {
                                "leftOffsetInPixel": 1365,
                                "topOffsetInPixel": 824,
                                "widthInPixel": 199,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 43,
                        "startTimeInSeconds": 43,
                        "endTimeInSeconds": 44,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "自定义涉政人物敏感词_正面",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00043.jpg",
                            "location": {
                                "leftOffsetInPixel": 1365,
                                "topOffsetInPixel": 824,
                                "widthInPixel": 199,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 65,
                        "startTimeInSeconds": 65,
                        "endTimeInSeconds": 67,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "涉政正面人物",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00065.jpg",
                            "location": {
                                "leftOffsetInPixel": 1365,
                                "topOffsetInPixel": 854,
                                "widthInPixel": 201,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 65,
                        "startTimeInSeconds": 65,
                        "endTimeInSeconds": 67,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "自定义涉政人物敏感词_正面",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00065.jpg",
                            "location": {
                                "leftOffsetInPixel": 1365,
                                "topOffsetInPixel": 854,
                                "widthInPixel": 201,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 76,
                        "startTimeInSeconds": 76,
                        "endTimeInSeconds": 76,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00076.jpg",
                            "location": {
                                "leftOffsetInPixel": 507,
                                "topOffsetInPixel": 420,
                                "widthInPixel": 944,
                                "heightInPixel": 171
                            },
                            "text": "n"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 92,
                        "startTimeInSeconds": 92,
                        "endTimeInSeconds": 93,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "涉政正面人物",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00092.jpg",
                            "location": {
                                "leftOffsetInPixel": 1350,
                                "topOffsetInPixel": 832,
                                "widthInPixel": 201,
                                "heightInPixel": 33
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 92,
                        "startTimeInSeconds": 92,
                        "endTimeInSeconds": 93,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "自定义涉政人物敏感词_正面",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00092.jpg",
                            "location": {
                                "leftOffsetInPixel": 1350,
                                "topOffsetInPixel": 832,
                                "widthInPixel": 201,
                                "heightInPixel": 33
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 128,
                        "startTimeInSeconds": 128,
                        "endTimeInSeconds": 130,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "涉政正面人物",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00128.jpg",
                            "location": {
                                "leftOffsetInPixel": 442,
                                "topOffsetInPixel": 784,
                                "widthInPixel": 199,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 128,
                        "startTimeInSeconds": 128,
                        "endTimeInSeconds": 130,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "自定义涉政人物敏感词_正面",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00128.jpg",
                            "location": {
                                "leftOffsetInPixel": 442,
                                "topOffsetInPixel": 784,
                                "widthInPixel": 199,
                                "heightInPixel": 32
                            },
                            "text": "人大代表"
                        }
                    }
                ]
            },
            {
                "presetType": "imageTextAudit",
                "type": "spamPolitic",
                "presetTypeDesc": "图文审核",
                "typeTitle": "政治敏感",
                "topType": "textPolitic",
                "topTypeTitle": "涉政",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamPolitic",
                        "timeInSeconds": 23,
                        "startTimeInSeconds": 23,
                        "endTimeInSeconds": 24,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "全国人大",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00023.jpg",
                            "location": {
                                "leftOffsetInPixel": 354,
                                "topOffsetInPixel": 746,
                                "widthInPixel": 130,
                                "heightInPixel": 40
                            },
                            "text": "全国人大"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamPolitic",
                        "timeInSeconds": 126,
                        "startTimeInSeconds": 126,
                        "endTimeInSeconds": 127,
                        "confidence": 0.9184696078300476,
                        "label": "REVIEW",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00126.jpg",
                            "location": {
                                "leftOffsetInPixel": 828,
                                "topOffsetInPixel": 1006,
                                "widthInPixel": 256,
                                "heightInPixel": 41
                            }
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamPolitic",
                        "timeInSeconds": 131,
                        "startTimeInSeconds": 131,
                        "endTimeInSeconds": 133,
                        "confidence": 0.9295763969421387,
                        "label": "REVIEW",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00131.jpg",
                            "location": {
                                "leftOffsetInPixel": 703,
                                "topOffsetInPixel": 1006,
                                "widthInPixel": 509,
                                "heightInPixel": 40
                            }
                        }
                    }
                ]
            },
            {
                "presetType": "imageAudit",
                "type": "terrorArmyForce",
                "presetTypeDesc": "图像审核",
                "typeTitle": "军事部队",
                "topType": "imgTerror",
                "topTypeTitle": "暴恐",
                "items": [
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 21,
                        "startTimeInSeconds": 21,
                        "endTimeInSeconds": 26,
                        "confidence": 0.9891060447758896,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00021.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 117,
                        "startTimeInSeconds": 117,
                        "endTimeInSeconds": 118,
                        "confidence": 0.9592687353156335,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00117.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 129,
                        "startTimeInSeconds": 129,
                        "endTimeInSeconds": 131,
                        "confidence": 0.9721720228903178,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00129.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 41,
                        "startTimeInSeconds": 41,
                        "endTimeInSeconds": 42,
                        "confidence": 0.9921986123370994,
                        "label": "REJECT",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00041.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 45,
                        "startTimeInSeconds": 45,
                        "endTimeInSeconds": 52,
                        "confidence": 0.9935781425386511,
                        "label": "REJECT",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00045.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 68,
                        "startTimeInSeconds": 68,
                        "endTimeInSeconds": 76,
                        "confidence": 0.988023132786577,
                        "label": "REJECT",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00068.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorArmedPersonnel",
                        "subTypeTitle": "武装人员",
                        "timeInSeconds": 20,
                        "startTimeInSeconds": 20,
                        "endTimeInSeconds": 21,
                        "confidence": 0.41891958841859617,
                        "label": "REVIEW",
                        "extra": "武装人员",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00020.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorArmedPersonnel",
                        "subTypeTitle": "武装人员",
                        "timeInSeconds": 116,
                        "startTimeInSeconds": 116,
                        "endTimeInSeconds": 119,
                        "confidence": 0.9259255676182137,
                        "label": "REVIEW",
                        "extra": "武装人员",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00116.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorArmedPersonnel",
                        "subTypeTitle": "武装人员",
                        "timeInSeconds": 124,
                        "startTimeInSeconds": 124,
                        "endTimeInSeconds": 125,
                        "confidence": 0.5957982243062573,
                        "label": "REVIEW",
                        "extra": "武装人员",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00124.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 19,
                        "startTimeInSeconds": 19,
                        "endTimeInSeconds": 21,
                        "confidence": 0.8104694841855413,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00019.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 26,
                        "startTimeInSeconds": 26,
                        "endTimeInSeconds": 29,
                        "confidence": 0.9072221920539014,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00026.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 94,
                        "startTimeInSeconds": 94,
                        "endTimeInSeconds": 95,
                        "confidence": 0.9478232588091833,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00094.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 118,
                        "startTimeInSeconds": 118,
                        "endTimeInSeconds": 122,
                        "confidence": 0.9124354617417759,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00118.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 128,
                        "startTimeInSeconds": 128,
                        "endTimeInSeconds": 129,
                        "confidence": 0.8476259691823786,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00128.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 132,
                        "startTimeInSeconds": 132,
                        "endTimeInSeconds": 136,
                        "confidence": 0.6109417353998522,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00132.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 40,
                        "startTimeInSeconds": 40,
                        "endTimeInSeconds": 41,
                        "confidence": 0.8398748980934516,
                        "label": "REVIEW",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00040.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 62,
                        "startTimeInSeconds": 62,
                        "endTimeInSeconds": 63,
                        "confidence": 0.8787268830200082,
                        "label": "REVIEW",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00062.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorWeapon",
                        "subTypeTitle": "军事武器",
                        "timeInSeconds": 71,
                        "startTimeInSeconds": 71,
                        "endTimeInSeconds": 72,
                        "confidence": 0.8320241425167542,
                        "label": "REVIEW",
                        "extra": "大型军事武器",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00071.jpg"
                        }
                    }
                ]
            },
            {
                "presetType": "audioTextAudit",
                "type": "spamPolitic",
                "presetTypeDesc": "音频文本审核",
                "typeTitle": "政治敏感",
                "topType": "textPolitic",
                "topTypeTitle": "涉政",
                "items": [
                    {
                        "presetType": "audioTextAudit",
                        "type": "spamPolitic",
                        "timeInSeconds": 123,
                        "startTimeInSeconds": 123,
                        "endTimeInSeconds": 133,
                        "confidence": 0.9341700673103333,
                        "label": "REVIEW",
                        "extra": "政治敏感",
                        "evidence": {
                            "originalText": "把青春献给党,是我一生当中最坚定。，"
                        }
                    }
                ]
            },
            {
                "presetType": "imageTextAudit",
                "type": "spamContact",
                "presetTypeDesc": "图文审核",
                "typeTitle": "联系方式",
                "topType": "textPopularize",
                "topTypeTitle": "广告",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamContact",
                        "subType": "contactWebsite",
                        "subTypeTitle": "网址",
                        "timeInSeconds": 0,
                        "startTimeInSeconds": 0,
                        "endTimeInSeconds": 112,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00000.jpg",
                            "location": {
                                "leftOffsetInPixel": 410,
                                "topOffsetInPixel": 178,
                                "widthInPixel": 110,
                                "heightInPixel": 20
                            }
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "spamContact",
                        "subType": "contactWebsite",
                        "subTypeTitle": "网址",
                        "timeInSeconds": 114,
                        "startTimeInSeconds": 114,
                        "endTimeInSeconds": 149,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/a672798151b3178d735243dde44c11a0/rcjmgvg8qmknipv6qbf/thumbnails/00114.jpg",
                            "location": {
                                "leftOffsetInPixel": 415,
                                "topOffsetInPixel": 180,
                                "widthInPixel": 105,
                                "heightInPixel": 16
                            }
                        }
                    }
                ]
            }
        ],
        "createTime": "2025-03-10T03:01:00Z",
        "startTime": "2025-03-10T03:01:02Z",
        "finishTime": "2025-03-10T03:05:29Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": [
            {
                "text": "中国军号☆中国军网 www.81.cn 我们 ",
                "complex": false,
                "timeInSeconds": 0
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 我们 ",
                "complex": false,
                "timeInSeconds": 1
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 我们 ",
                "complex": false,
                "timeInSeconds": 2
            },
            {
                "text": "中国军号 )中国军网 www.81.cn 我们 ",
                "complex": false,
                "timeInSeconds": 3
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn 我们 W ",
                "complex": false,
                "timeInSeconds": 4
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 我们 Wo M ",
                "complex": false,
                "timeInSeconds": 5
            },
            {
                "text": "中国军号 )中国军网 www.81.cn 我们 WO MEN ",
                "complex": false,
                "timeInSeconds": 6
            },
            {
                "text": "八 中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 7
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 8
            },
            {
                "text": "中国军号食 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 9
            },
            {
                "text": "八 中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 10
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 11
            },
            {
                "text": "中国军号 www.81.cn ",
                "complex": false,
                "timeInSeconds": 12
            },
            {
                "text": "中国军号 网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 13
            },
            {
                "text": "中国军号☆中国 www.81.cn ",
                "complex": false,
                "timeInSeconds": 14
            },
            {
                "text": "中国军号 食中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 15
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 16
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 一 ",
                "complex": false,
                "timeInSeconds": 17
            },
            {
                "text": "中国军号 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 18
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 19
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 战场不分男女 ",
                "complex": false,
                "timeInSeconds": 20
            },
            {
                "text": "中国军号 中国军网 www.81.cn 战场不分男女 ",
                "complex": false,
                "timeInSeconds": 21
            },
            {
                "text": "中国军号 中国军网 www.81.cn 因 战斗只分胜负 ",
                "complex": false,
                "timeInSeconds": 22
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 陈欢 全国人大 本八一 不管男兵女兵 ",
                "complex": false,
                "timeInSeconds": 23
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn ★八一 陈欢 全国人大代表 不管男兵女兵 ",
                "complex": false,
                "timeInSeconds": 24
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 陈欢 全国人大代表 上了战场就只有一个身份 ",
                "complex": false,
                "timeInSeconds": 25
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn 上了战场就只有一个身份 ",
                "complex": false,
                "timeInSeconds": 26
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ★ 那就是战斗员 ",
                "complex": false,
                "timeInSeconds": 27
            },
            {
                "text": "中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 28
            },
            {
                "text": "中国军号食 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 29
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 30
            },
            {
                "text": "八 中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 31
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 32
            },
            {
                "text": "八 中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 33
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 34
            },
            {
                "text": "中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 35
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 36
            },
            {
                "text": "中国军号中国军 www.81.cn ",
                "complex": false,
                "timeInSeconds": 37
            },
            {
                "text": "中国军号食中国军厕 www.81.cn ",
                "complex": false,
                "timeInSeconds": 38
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 女飞行员和男飞行员 ",
                "complex": false,
                "timeInSeconds": 39
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 女飞行员和男飞行员 ",
                "complex": false,
                "timeInSeconds": 40
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 一会一 其实异没有更多性别上的区分 ",
                "complex": false,
                "timeInSeconds": 41
            },
            {
                "text": "中国军号 食中国军网 www.81.cn 其实异没有更多性别上的区分 ",
                "complex": false,
                "timeInSeconds": 42
            },
            {
                "text": "中国军号 食中国军网 www.81.cn 张潇 全国人大代表 我们同样要完成高难度的飞行动作 ",
                "complex": false,
                "timeInSeconds": 43
            },
            {
                "text": "中国军号 食中国军网 www.81.cn 张潇 全国人大代表 我们同样要完成高难度的飞行动作 ",
                "complex": false,
                "timeInSeconds": 44
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn 我们同样要完成高难度的飞行动作 ",
                "complex": false,
                "timeInSeconds": 45
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn 也同样要面对飞行中带来的不同危险 ",
                "complex": false,
                "timeInSeconds": 46
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn 也同样要面对飞行中带来的不同危险 ",
                "complex": false,
                "timeInSeconds": 47
            },
            {
                "text": "中国军号★ 中国军网 www.81.cn 也同样要面对飞行中带来的不同危险 ",
                "complex": false,
                "timeInSeconds": 48
            },
            {
                "text": "中国军号★ 中国军国 www.81.cn 当然也会享受飞行中的惊喜与浪漫 ",
                "complex": false,
                "timeInSeconds": 49
            },
            {
                "text": "中国军号★ 中国军国 www.81.cn 当然也会享受飞行中的惊喜与浪漫 ",
                "complex": false,
                "timeInSeconds": 50
            },
            {
                "text": "中国军号★ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 51
            },
            {
                "text": "中国军号 )中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 52
            },
            {
                "text": "中国军号食 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 53
            },
            {
                "text": "中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 54
            },
            {
                "text": "八 中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 55
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 56
            },
            {
                "text": "中国军号 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 57
            },
            {
                "text": "中国军号中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 58
            },
            {
                "text": "中国军号★ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 59
            },
            {
                "text": "八 中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 60
            },
            {
                "text": "中国军号 ☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 61
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 62
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 话 每当和战友们驾驶飞机 ",
                "complex": false,
                "timeInSeconds": 63
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 李宛芯 全 每当和战友们驾驶飞机 ",
                "complex": false,
                "timeInSeconds": 64
            },
            {
                "text": "入 中国军号 ★中国军网 www.81.cn 李宛芯 全国人大代表 从城市上空飞过 ",
                "complex": false,
                "timeInSeconds": 65
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 李宛芯 全国人大代表 ",
                "complex": false,
                "timeInSeconds": 66
            },
            {
                "text": "中国军号 ,食中国军网 www.81.cn 李宛芯 全国人大代表 看着机翼下一片璀璨的万家灯火 ",
                "complex": false,
                "timeInSeconds": 67
            },
            {
                "text": "中国军号 食中国军网 www.81.cn 看着机翼下一片璀璨的万家灯火 ",
                "complex": false,
                "timeInSeconds": 68
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 69
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 会觉得从事的事业是神圣而伟大的 ",
                "complex": false,
                "timeInSeconds": 70
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 会觉得从事的事业是神圣而伟大的 ",
                "complex": false,
                "timeInSeconds": 71
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 会觉得从事的事业是神圣而伟大的 ",
                "complex": false,
                "timeInSeconds": 72
            },
            {
                "text": "中国军号 ☆中国军网 www.81.cn 我为自已是一名飞行员而感到骄傲 ",
                "complex": false,
                "timeInSeconds": 73
            },
            {
                "text": "中国军号食中国军网 www.81.cn 我为自已是一名飞行员而感到骄傲 ",
                "complex": false,
                "timeInSeconds": 74
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn 我为自已是一名飞行员而感到骄傲 ",
                "complex": false,
                "timeInSeconds": 75
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn WOM N ",
                "complex": false,
                "timeInSeconds": 76
            },
            {
                "text": "中国军号食 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 77
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 78
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 79
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 80
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 81
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 82
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 83
            },
            {
                "text": "中国军号 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 84
            },
            {
                "text": "中国军号食 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 85
            },
            {
                "text": "中国军号☆ 中国 www.81.cn ",
                "complex": false,
                "timeInSeconds": 86
            },
            {
                "text": "中国军号 食中国军网 www.81.cn 3m W E E 3 m E W ",
                "complex": false,
                "timeInSeconds": 87
            },
            {
                "text": "中国军号 ,食中国军网 www.81.cn 3m E WE m 3 3 m E ",
                "complex": false,
                "timeInSeconds": 88
            },
            {
                "text": "中国军号 ,中国军网 www.81.cn 3m W E 3 E 山E 3 3 m E W ",
                "complex": false,
                "timeInSeconds": 89
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn 从穿上军装的那一刻起 ",
                "complex": false,
                "timeInSeconds": 90
            },
            {
                "text": "中国军号☆中国军网 拉级通内的垃圾及 www.81.cn 解放 陈 救死扶伤就是我们的使命 ",
                "complex": false,
                "timeInSeconds": 91
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 实验结束 的及时消理掉！ [6 鹤 陈威巍 全国人大代表 PLAGH 救死扶伤就是我们的使命 ",
                "complex": false,
                "timeInSeconds": 92
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 实验结束 内的短及时清理掉！ [6 0 超 陈威巍 全国人大代表 PLAGH 无论是献身卫勤 ",
                "complex": false,
                "timeInSeconds": 93
            },
            {
                "text": "中国军号 中国军网 www.81.cn 无论是献身卫勤 ",
                "complex": false,
                "timeInSeconds": 94
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 还是扎根临床 ",
                "complex": false,
                "timeInSeconds": 95
            },
            {
                "text": "中国军号 ★中国军网 www.81.cn 武 无论是逆行出征 ",
                "complex": false,
                "timeInSeconds": 96
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 还是远洋护航 ",
                "complex": false,
                "timeInSeconds": 97
            },
            {
                "text": "中国军号★中国 www.81.cn 都有我们女军医的身影 ",
                "complex": false,
                "timeInSeconds": 98
            },
            {
                "text": "中国军号★ www.81.cn 都有我们女军医的身影 ",
                "complex": false,
                "timeInSeconds": 99
            },
            {
                "text": "中国军号食 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 100
            },
            {
                "text": "中国军号食 中国军网 www.81.cn WO MEN ",
                "complex": false,
                "timeInSeconds": 101
            },
            {
                "text": "八 中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 102
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 103
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 104
            },
            {
                "text": "八 中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 105
            },
            {
                "text": "uO'18'MMM ",
                "complex": false,
                "timeInSeconds": 106
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 107
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 108
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 109
            },
            {
                "text": "众 中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 110
            },
            {
                "text": "中国军号☆中国军闸 www.81.cn ",
                "complex": false,
                "timeInSeconds": 111
            },
            {
                "text": "O'18'MMM ",
                "complex": false,
                "timeInSeconds": 113
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 114
            },
            {
                "text": "中国军号中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 115
            },
            {
                "text": "中国军号食中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 116
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 陆 ",
                "complex": false,
                "timeInSeconds": 117
            },
            {
                "text": "中国军号 食中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 118
            },
            {
                "text": "中国军号食中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 119
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 120
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 121
            },
            {
                "text": "中国军号 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 122
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 123
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 124
            },
            {
                "text": "中国军号 www.81.cn C ",
                "complex": false,
                "timeInSeconds": 125
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 把青春献给党 ",
                "complex": false,
                "timeInSeconds": 126
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 是我一生当中最坚定最自豪的选择 ",
                "complex": false,
                "timeInSeconds": 127
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 王亚茹 全国人大代表 是我一生当中最坚定最自豪的选择 ",
                "complex": false,
                "timeInSeconds": 128
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 王亚茹 全国人大代表 是我一生当中最坚定最自豪的选择 ",
                "complex": false,
                "timeInSeconds": 129
            },
            {
                "text": "中国军号★ 中国军网 www.81.cn 王亚茹 全国人大代表 是我一生当中最坚定最自豪的选择 ",
                "complex": false,
                "timeInSeconds": 130
            },
            {
                "text": "中国军号★中国军网 www.81.cn 在党旗下举起右拳的那一刻 ",
                "complex": false,
                "timeInSeconds": 131
            },
            {
                "text": "中国军号★中国津网 www.81.cn 在党旗下举起右拳的那一刻 ",
                "complex": false,
                "timeInSeconds": 132
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 铮铮誓言便融入我的血液 ",
                "complex": false,
                "timeInSeconds": 133
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 铮铮誓言便融入我的血液 ",
                "complex": false,
                "timeInSeconds": 134
            },
            {
                "text": "中国军号☆中国警 www.81.cn 铮铮誓言便融入我的血液 ",
                "complex": false,
                "timeInSeconds": 135
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 136
            },
            {
                "text": "A 中国军号☆中国军网 www.81.cn WOMEN ",
                "complex": false,
                "timeInSeconds": 137
            },
            {
                "text": "中国军号☆中国军网 www.81.cn WOMEN ",
                "complex": false,
                "timeInSeconds": 138
            },
            {
                "text": "中国军号中国军网 www.81.cn WOMEN ",
                "complex": false,
                "timeInSeconds": 139
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 140
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 141
            },
            {
                "text": "中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 142
            },
            {
                "text": "八 中国军号☆中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 143
            },
            {
                "text": "中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 144
            },
            {
                "text": "中国军号 )中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 145
            },
            {
                "text": "中国军号☆ 中国军网 www.81.cn ",
                "complex": false,
                "timeInSeconds": 146
            },
            {
                "text": "中国军号食中国军网 www.81.cn 她风采”绽放光芒 66 她力量”彰显担当 ",
                "complex": false,
                "timeInSeconds": 147
            },
            {
                "text": "中国军号☆中国军网 www.81.cn 66 她风采”绽放光芒 “ 她力量”彰显担当 ",
                "complex": false,
                "timeInSeconds": 148
            }
        ]
    },
    {
        "userName": "testjxm",
        "taskId": "rcjkti87a0e4830gc88",
        "source": "http://console.jfjmz.soap.com/web/0/f5c8f852695f3ac2c4e8685bc8c50c7e/2024/12/11/c1d8024861744647ab8b124e1e2b297a_640_360.mp4",
        "description": "",
        "preset": "推荐策略",
        "presetId": 22,
        "status": "SUCCESS",
        "label": "NORMAL",
        "duration": 10,
        "notification": "",
        "icrCheckResults": [],
        "createTime": "2025-03-10T02:44:35Z",
        "startTime": "2025-03-10T02:44:37Z",
        "finishTime": "2025-03-10T02:45:09Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": [
            {
                "text": "主标题副标题 数据来源：某组织 ",
                "complex": false,
                "timeInSeconds": 0
            },
            {
                "text": "主标题 副标题 数据来源：某组织 820.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 1
            },
            {
                "text": "主标题 副标题 数据来源：某组织 932.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 2
            },
            {
                "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 3
            },
            {
                "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 4
            },
            {
                "text": "主标题 副标题 数据来源：某组织 934.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 5
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1290.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 6
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1328.86单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 7
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1330.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 8
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1320.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 9
            }
        ]
    },
    {
        "userName": "testjxm",
        "taskId": "rcgtagb3ujxh39f9mk6",
        "source": "http://10.1.65.91:8701/videoai-webupload/jmfptujfkre/1a7694a6b4a665cf64492ec80c0b01f2_raw.mp4",
        "description": "边防部队，新疆军区，荒漠迷彩，祝福，军人形象",
        "preset": "王磊",
        "presetId": 26,
        "status": "SUCCESS",
        "label": "NORMAL",
        "duration": 49,
        "notification": "",
        "icrCheckResults": [],
        "createTime": "2025-03-07T09:15:26Z",
        "startTime": "2025-03-07T09:15:27Z",
        "finishTime": "2025-03-07T09:15:57Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": []
    },
    {
        "userName": "testjxm",
        "taskId": "rcgt9wt4btux55u8z8s",
        "source": "http://10.1.65.91:8701/videoai-webupload/jmfptujfkre/1a7694a6b4a665cf64492ec80c0b01f2_raw.mp4",
        "description": "边防部队，新疆军区，荒漠迷彩，祝福，军人形象",
        "preset": "王磊",
        "presetId": 26,
        "status": "SUCCESS",
        "label": "REJECT",
        "duration": 49,
        "notification": "",
        "icrCheckResults": [
            {
                "presetType": "imageAudit",
                "type": "adDetect",
                "presetTypeDesc": "图像审核",
                "typeTitle": "广告检测",
                "topType": "imgAdvertising",
                "topTypeTitle": "广告",
                "items": [
                    {
                        "presetType": "imageAudit",
                        "type": "adDetect",
                        "subType": "watermarkGeneral",
                        "subTypeTitle": "通用水印",
                        "timeInSeconds": 0,
                        "startTimeInSeconds": 0,
                        "endTimeInSeconds": 1,
                        "confidence": 0.9678725004196167,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgt9wt4btux55u8z8s/thumbnails/00000.jpg",
                            "location": {
                                "leftOffsetInPixel": 247,
                                "topOffsetInPixel": 1631,
                                "widthInPixel": 654,
                                "heightInPixel": 147
                            }
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "adDetect",
                        "subType": "watermarkGeneral",
                        "subTypeTitle": "通用水印",
                        "timeInSeconds": 3,
                        "startTimeInSeconds": 3,
                        "endTimeInSeconds": 20,
                        "confidence": 0.9963161945343018,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgt9wt4btux55u8z8s/thumbnails/00003.jpg",
                            "location": {
                                "leftOffsetInPixel": 326,
                                "topOffsetInPixel": 1777,
                                "widthInPixel": 419,
                                "heightInPixel": 72
                            }
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "adDetect",
                        "subType": "watermarkGeneral",
                        "subTypeTitle": "通用水印",
                        "timeInSeconds": 22,
                        "startTimeInSeconds": 22,
                        "endTimeInSeconds": 49,
                        "confidence": 0.9974956512451172,
                        "label": "REJECT",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgt9wt4btux55u8z8s/thumbnails/00022.jpg",
                            "location": {
                                "leftOffsetInPixel": 240,
                                "topOffsetInPixel": 1777,
                                "widthInPixel": 592,
                                "heightInPixel": 75
                            }
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "adDetect",
                        "subType": "watermarkGeneral",
                        "subTypeTitle": "通用水印",
                        "timeInSeconds": 2,
                        "startTimeInSeconds": 2,
                        "endTimeInSeconds": 3,
                        "confidence": 0.8991153240203857,
                        "label": "REVIEW",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgt9wt4btux55u8z8s/thumbnails/00002.jpg",
                            "location": {
                                "leftOffsetInPixel": 325,
                                "topOffsetInPixel": 1770,
                                "widthInPixel": 428,
                                "heightInPixel": 126
                            }
                        }
                    }
                ]
            }
        ],
        "createTime": "2025-03-07T09:09:01Z",
        "startTime": "2025-03-07T09:09:03Z",
        "finishTime": "2025-03-07T09:09:38Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": []
    },
    {
        "userName": "testjxm",
        "taskId": "rcgtw32bhhuzh4ihq6s",
        "source": "http://10.1.65.91:8701/videoai-webupload/jmfptujfkre/1a7694a6b4a665cf64492ec80c0b01f2_raw.mp4",
        "description": "边防部队，新疆军区，荒漠迷彩，祝福，军人形象",
        "preset": "王磊",
        "presetId": 26,
        "status": "SUCCESS",
        "label": "REJECT",
        "duration": 49,
        "notification": "",
        "icrCheckResults": [
            {
                "presetType": "imageAudit",
                "type": "terrorArmyForce",
                "presetTypeDesc": "图像审核",
                "typeTitle": "军事部队",
                "topType": "imgTerror",
                "topTypeTitle": "暴恐",
                "items": [
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 1,
                        "startTimeInSeconds": 1,
                        "endTimeInSeconds": 49,
                        "confidence": 0.990131125875549,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgtw32bhhuzh4ihq6s/thumbnails/00001.jpg"
                        }
                    }
                ]
            }
        ],
        "createTime": "2025-03-07T09:07:19Z",
        "startTime": "2025-03-07T09:07:20Z",
        "finishTime": "2025-03-07T09:07:51Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": []
    },
    {
        "userName": "testjxm",
        "taskId": "rcgsun95mmkgrh96jua",
        "source": "http://10.1.65.91:8701/videoai-webupload/jmfptujfkre/1a7694a6b4a665cf64492ec80c0b01f2_raw.mp4",
        "description": "边防部队，新疆军区，荒漠迷彩，祝福，军人形象",
        "preset": "王磊",
        "presetId": 26,
        "status": "SUCCESS",
        "label": "REJECT",
        "duration": 49,
        "notification": "",
        "icrCheckResults": [
            {
                "presetType": "imageTextAudit",
                "type": "violateTextGeneral",
                "presetTypeDesc": "图文审核",
                "typeTitle": "百度违禁词库",
                "topType": "textLibRule",
                "topTypeTitle": "文本库",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 1,
                        "startTimeInSeconds": 1,
                        "endTimeInSeconds": 1,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00001.jpg",
                            "location": {
                                "leftOffsetInPixel": 753,
                                "topOffsetInPixel": 792,
                                "widthInPixel": 16,
                                "heightInPixel": 29
                            },
                            "text": "2"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 4,
                        "startTimeInSeconds": 4,
                        "endTimeInSeconds": 4,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00004.jpg",
                            "location": {
                                "leftOffsetInPixel": 742,
                                "topOffsetInPixel": 820,
                                "widthInPixel": 16,
                                "heightInPixel": 29
                            },
                            "text": "2"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 34,
                        "startTimeInSeconds": 34,
                        "endTimeInSeconds": 34,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00034.jpg",
                            "location": {
                                "leftOffsetInPixel": 803,
                                "topOffsetInPixel": 697,
                                "widthInPixel": 24,
                                "heightInPixel": 40
                            },
                            "text": "2"
                        }
                    }
                ]
            },
            {
                "presetType": "imageAudit",
                "type": "terrorArmyForce",
                "presetTypeDesc": "图像审核",
                "typeTitle": "军事部队",
                "topType": "imgTerror",
                "topTypeTitle": "暴恐",
                "items": [
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 1,
                        "startTimeInSeconds": 1,
                        "endTimeInSeconds": 38,
                        "confidence": 0.990131125875549,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00001.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 41,
                        "startTimeInSeconds": 41,
                        "endTimeInSeconds": 49,
                        "confidence": 0.9842817669626173,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00041.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 38,
                        "startTimeInSeconds": 38,
                        "endTimeInSeconds": 40,
                        "confidence": 0.9476441899545599,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsun95mmkgrh96jua/thumbnails/00038.jpg"
                        }
                    }
                ]
            }
        ],
        "createTime": "2025-03-07T08:56:18Z",
        "startTime": "2025-03-07T08:56:19Z",
        "finishTime": "2025-03-07T08:57:29Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": [
            {
                "text": "三八”国际妇女节 你 某部战士 军功章有我的一半，更 有你的一半 媳妇儿，妇女节快乐！ 我想对爱人说 ",
                "complex": false,
                "timeInSeconds": 0
            },
            {
                "text": "2 3 ",
                "complex": false,
                "timeInSeconds": 1
            },
            {
                "text": "老婆妇女节快乐 ",
                "complex": false,
                "timeInSeconds": 2
            },
            {
                "text": "老婆妇女节快乐 ",
                "complex": false,
                "timeInSeconds": 3
            },
            {
                "text": "2 北 ",
                "complex": false,
                "timeInSeconds": 4
            },
            {
                "text": "别人说我穿军装最帅 ",
                "complex": false,
                "timeInSeconds": 5
            },
            {
                "text": "别人说我穿军装最帅 ",
                "complex": false,
                "timeInSeconds": 6
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 7
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 8
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 9
            },
            {
                "text": "某部战士 石文杰 别人说我是英雄 可你才是我的英雄 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 11
            },
            {
                "text": "别人说我是英雄 可你才是我的英雄 ",
                "complex": false,
                "timeInSeconds": 12
            },
            {
                "text": "因为责任在肩 ",
                "complex": false,
                "timeInSeconds": 13
            },
            {
                "text": "没能常陪在您身边 ",
                "complex": false,
                "timeInSeconds": 14
            },
            {
                "text": "G 没能常陪在您身边 ",
                "complex": false,
                "timeInSeconds": 15
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 17
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 18
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 19
            },
            {
                "text": "某部战士 何涛 妈妈祝你母亲节 快乐 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 20
            },
            {
                "text": "6 ",
                "complex": false,
                "timeInSeconds": 21
            },
            {
                "text": "小时候您为我遮风挡雨 ",
                "complex": false,
                "timeInSeconds": 22
            },
            {
                "text": "小时候您为我遮风挡雨 ",
                "complex": false,
                "timeInSeconds": 23
            },
            {
                "text": "如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 24
            },
            {
                "text": "如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 25
            },
            {
                "text": "C 如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 26
            },
            {
                "text": "某部战士 希望妈妈可以忘记所 有烦恼开心快乐 平安健康！ 我想对妈妈 ",
                "complex": false,
                "timeInSeconds": 27
            },
            {
                "text": "某部战士 希妈妈可以忘记所 有烦恼开心快乐 平安健康！ 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 28
            },
            {
                "text": "穿上军装 ",
                "complex": false,
                "timeInSeconds": 29
            },
            {
                "text": "A 3 ",
                "complex": false,
                "timeInSeconds": 30
            },
            {
                "text": "y 我是保家卫国的战士 ",
                "complex": false,
                "timeInSeconds": 31
            },
            {
                "text": "我是保家卫国的战士 ",
                "complex": false,
                "timeInSeconds": 32
            },
            {
                "text": "y 脱下军装 ",
                "complex": false,
                "timeInSeconds": 33
            },
            {
                "text": "2 ",
                "complex": false,
                "timeInSeconds": 34
            },
            {
                "text": "永远是您牵挂的孩子 ",
                "complex": false,
                "timeInSeconds": 35
            },
            {
                "text": "永远是您牵挂的孩子 ",
                "complex": false,
                "timeInSeconds": 36
            },
            {
                "text": "A 3 ",
                "complex": false,
                "timeInSeconds": 37
            },
            {
                "text": "感谢您对我的支持 ",
                "complex": false,
                "timeInSeconds": 38
            },
            {
                "text": "感谢您对我的支持 ",
                "complex": false,
                "timeInSeconds": 39
            },
            {
                "text": "某部战士 《8 我想对 你守小家，我守国家 此生不负戎装 亦不负你 ",
                "complex": false,
                "timeInSeconds": 40
            },
            {
                "text": "某部战士 我想对爱人说 你守小家，我守国家 此生不负戎装 亦不负你 ",
                "complex": false,
                "timeInSeconds": 41
            },
            {
                "text": "《 军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 42
            },
            {
                "text": "军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 43
            },
            {
                "text": "军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 44
            },
            {
                "text": "★A一 愿岁月从不打败我的 美女妈妈 ",
                "complex": false,
                "timeInSeconds": 45
            },
            {
                "text": "愿岁月从不打败我的 美女妈妈 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 46
            },
            {
                "text": "老妈永远爱你 ",
                "complex": false,
                "timeInSeconds": 47
            },
            {
                "text": "老妈永远爱你 ",
                "complex": false,
                "timeInSeconds": 48
            }
        ]
    },
    {
        "userName": "testjxm",
        "taskId": "rcgsbh6s8stq10knp42",
        "source": "http://10.1.65.91:8701/videoai-webupload/jmfptujfkre/1a7694a6b4a665cf64492ec80c0b01f2_raw.mp4",
        "description": "边防部队，新疆军区，荒漠迷彩，祝福，军人形象",
        "preset": "推荐策略",
        "presetId": 22,
        "status": "SUCCESS",
        "label": "REJECT",
        "duration": 49,
        "notification": "",
        "icrCheckResults": [
            {
                "presetType": "imageTextAudit",
                "type": "violateTextGeneral",
                "presetTypeDesc": "图文审核",
                "typeTitle": "百度违禁词库",
                "topType": "textLibRule",
                "topTypeTitle": "文本库",
                "items": [
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 1,
                        "startTimeInSeconds": 1,
                        "endTimeInSeconds": 1,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00001.jpg",
                            "location": {
                                "leftOffsetInPixel": 753,
                                "topOffsetInPixel": 792,
                                "widthInPixel": 16,
                                "heightInPixel": 29
                            },
                            "text": "2"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 4,
                        "startTimeInSeconds": 4,
                        "endTimeInSeconds": 4,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00004.jpg",
                            "location": {
                                "leftOffsetInPixel": 742,
                                "topOffsetInPixel": 820,
                                "widthInPixel": 16,
                                "heightInPixel": 29
                            },
                            "text": "2"
                        }
                    },
                    {
                        "presetType": "imageTextAudit",
                        "type": "violateTextGeneral",
                        "timeInSeconds": 34,
                        "startTimeInSeconds": 34,
                        "endTimeInSeconds": 34,
                        "confidence": 1.0,
                        "label": "REJECT",
                        "extra": "非法交易",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00034.jpg",
                            "location": {
                                "leftOffsetInPixel": 803,
                                "topOffsetInPixel": 697,
                                "widthInPixel": 24,
                                "heightInPixel": 40
                            },
                            "text": "2"
                        }
                    }
                ]
            },
            {
                "presetType": "imageAudit",
                "type": "terrorArmyForce",
                "presetTypeDesc": "图像审核",
                "typeTitle": "军事部队",
                "topType": "imgTerror",
                "topTypeTitle": "暴恐",
                "items": [
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 1,
                        "startTimeInSeconds": 1,
                        "endTimeInSeconds": 38,
                        "confidence": 0.990131125875549,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00001.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 41,
                        "startTimeInSeconds": 41,
                        "endTimeInSeconds": 49,
                        "confidence": 0.9842817669626173,
                        "label": "REJECT",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00041.jpg"
                        }
                    },
                    {
                        "presetType": "imageAudit",
                        "type": "terrorArmyForce",
                        "subType": "terrorPolice",
                        "subTypeTitle": "警察部队",
                        "timeInSeconds": 38,
                        "startTimeInSeconds": 38,
                        "endTimeInSeconds": 40,
                        "confidence": 0.9476441899545599,
                        "label": "REVIEW",
                        "extra": "警察部队",
                        "evidence": {
                            "thumbnail": "http://10.1.65.91:8701/videoai-middle/b82b7318c0a31899fe1d67ad8d04aa02/rcgsbh6s8stq10knp42/thumbnails/00038.jpg"
                        }
                    }
                ]
            }
        ],
        "createTime": "2025-03-07T08:49:00Z",
        "startTime": "2025-03-07T08:49:02Z",
        "finishTime": "2025-03-07T08:50:10Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": [
            {
                "text": "三八”国际妇女节 你 某部战士 军功章有我的一半，更 有你的一半 媳妇儿，妇女节快乐！ 我想对爱人说 ",
                "complex": false,
                "timeInSeconds": 0
            },
            {
                "text": "2 3 ",
                "complex": false,
                "timeInSeconds": 1
            },
            {
                "text": "老婆妇女节快乐 ",
                "complex": false,
                "timeInSeconds": 2
            },
            {
                "text": "老婆妇女节快乐 ",
                "complex": false,
                "timeInSeconds": 3
            },
            {
                "text": "2 北 ",
                "complex": false,
                "timeInSeconds": 4
            },
            {
                "text": "别人说我穿军装最帅 ",
                "complex": false,
                "timeInSeconds": 5
            },
            {
                "text": "别人说我穿军装最帅 ",
                "complex": false,
                "timeInSeconds": 6
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 7
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 8
            },
            {
                "text": "但我知道你扛起整个家的样子才最美 ",
                "complex": false,
                "timeInSeconds": 9
            },
            {
                "text": "某部战士 石文杰 别人说我是英雄 可你才是我的英雄 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 11
            },
            {
                "text": "别人说我是英雄 可你才是我的英雄 ",
                "complex": false,
                "timeInSeconds": 12
            },
            {
                "text": "因为责任在肩 ",
                "complex": false,
                "timeInSeconds": 13
            },
            {
                "text": "没能常陪在您身边 ",
                "complex": false,
                "timeInSeconds": 14
            },
            {
                "text": "G 没能常陪在您身边 ",
                "complex": false,
                "timeInSeconds": 15
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 17
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 18
            },
            {
                "text": "但您的教导是我坚守岗位的力量 ",
                "complex": false,
                "timeInSeconds": 19
            },
            {
                "text": "某部战士 何涛 妈妈祝你母亲节 快乐 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 20
            },
            {
                "text": "6 ",
                "complex": false,
                "timeInSeconds": 21
            },
            {
                "text": "小时候您为我遮风挡雨 ",
                "complex": false,
                "timeInSeconds": 22
            },
            {
                "text": "小时候您为我遮风挡雨 ",
                "complex": false,
                "timeInSeconds": 23
            },
            {
                "text": "如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 24
            },
            {
                "text": "如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 25
            },
            {
                "text": "C 如今我守护万家灯火 ",
                "complex": false,
                "timeInSeconds": 26
            },
            {
                "text": "某部战士 希望妈妈可以忘记所 有烦恼开心快乐 平安健康！ 我想对妈妈 ",
                "complex": false,
                "timeInSeconds": 27
            },
            {
                "text": "某部战士 希妈妈可以忘记所 有烦恼开心快乐 平安健康！ 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 28
            },
            {
                "text": "穿上军装 ",
                "complex": false,
                "timeInSeconds": 29
            },
            {
                "text": "A 3 ",
                "complex": false,
                "timeInSeconds": 30
            },
            {
                "text": "y 我是保家卫国的战士 ",
                "complex": false,
                "timeInSeconds": 31
            },
            {
                "text": "我是保家卫国的战士 ",
                "complex": false,
                "timeInSeconds": 32
            },
            {
                "text": "y 脱下军装 ",
                "complex": false,
                "timeInSeconds": 33
            },
            {
                "text": "2 ",
                "complex": false,
                "timeInSeconds": 34
            },
            {
                "text": "永远是您牵挂的孩子 ",
                "complex": false,
                "timeInSeconds": 35
            },
            {
                "text": "永远是您牵挂的孩子 ",
                "complex": false,
                "timeInSeconds": 36
            },
            {
                "text": "A 3 ",
                "complex": false,
                "timeInSeconds": 37
            },
            {
                "text": "感谢您对我的支持 ",
                "complex": false,
                "timeInSeconds": 38
            },
            {
                "text": "感谢您对我的支持 ",
                "complex": false,
                "timeInSeconds": 39
            },
            {
                "text": "某部战士 《8 我想对 你守小家，我守国家 此生不负戎装 亦不负你 ",
                "complex": false,
                "timeInSeconds": 40
            },
            {
                "text": "某部战士 我想对爱人说 你守小家，我守国家 此生不负戎装 亦不负你 ",
                "complex": false,
                "timeInSeconds": 41
            },
            {
                "text": "《 军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 42
            },
            {
                "text": "军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 43
            },
            {
                "text": "军功章里永远有你的一半 ",
                "complex": false,
                "timeInSeconds": 44
            },
            {
                "text": "★A一 愿岁月从不打败我的 美女妈妈 ",
                "complex": false,
                "timeInSeconds": 45
            },
            {
                "text": "愿岁月从不打败我的 美女妈妈 我想对妈妈说 ",
                "complex": false,
                "timeInSeconds": 46
            },
            {
                "text": "老妈永远爱你 ",
                "complex": false,
                "timeInSeconds": 47
            },
            {
                "text": "老妈永远爱你 ",
                "complex": false,
                "timeInSeconds": 48
            }
        ]
    },
    {
        "userName": "testjxm",
        "taskId": "rcgs8cnj8ia69i72x56",
        "source": "http://console.jfjmz.soap.com/web/0/f5c8f852695f3ac2c4e8685bc8c50c7e/2024/12/11/c1d8024861744647ab8b124e1e2b297a_640_360.mp4",
        "description": "",
        "preset": "推荐策略",
        "presetId": 22,
        "status": "SUCCESS",
        "label": "NORMAL",
        "duration": 10,
        "notification": "",
        "icrCheckResults": [],
        "createTime": "2025-03-07T08:36:43Z",
        "startTime": "2025-03-07T08:36:44Z",
        "finishTime": "2025-03-07T08:37:15Z",
        "streamId": "",
        "callbackType": "vcr",
        "ocrResults": [
            {
                "text": "主标题副标题 数据来源：某组织 ",
                "complex": false,
                "timeInSeconds": 0
            },
            {
                "text": "主标题 副标题 数据来源：某组织 820.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 1
            },
            {
                "text": "主标题 副标题 数据来源：某组织 932.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 2
            },
            {
                "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 3
            },
            {
                "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 4
            },
            {
                "text": "主标题 副标题 数据来源：某组织 934.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 5
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1290.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 6
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1328.86单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 7
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1330.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 8
            },
            {
                "text": "主标题 副标题 数据来源：某组织 1320.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                "complex": false,
                "timeInSeconds": 9
            }
        ]
    }
]


const mnsj =  [
       {
            "userName": "testjxm",
            "taskId": "rghidb5fn4ypxugm0nv",
            "source": "http://console.jfjmz.soap.com/web/0/f5c8f852695f3ac2c4e8685bc8c50c7e/2024/12/11/c1d8024861744647ab8b124e1e2b297a_640_360.mp4",
            "url": "http://10.1.65.91:8701/videoai-middle/aec3eeb370ed0a4b6b1aea52ae03898c/rghidb5fn4ypxugm0nv/video.mp4",
            "description": "",
            "preset": "推荐策略",
            "presetId": 22,
            "status": "SUCCESS",
            "label": "NORMAL",
            "duration": 10,
            "notification": "",
            "icrCheckResults": [],
            "createTime": "2025-07-08T00:37:56Z",
            "startTime": "2025-07-08T00:37:57Z",
            "finishTime": "2025-07-08T00:38:29Z",
            "streamId": "",
            "callbackType": "vcr",
            "ocrResults": [
                {
                    "text": "主标题副标题 数据来源：某组织 ",
                    "complex": false,
                    "timeInSeconds": 0
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 820.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 1
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 932.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 2
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 20142015 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 3
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 901.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 4
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 934.00单位 1400 1300 1200 1100 1000 900 800 2014 2015 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 5
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 1290.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 6
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 1328.86单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 7
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 1330.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 8
                },
                {
                    "text": "主标题 副标题 数据来源：某组织 1320.00单位 1400 1300 1200 1100 1000 900 800 2014201 201620172018 20192020 ",
                    "complex": false,
                    "timeInSeconds": 9
                }
            ]
        },
        {
            "userName": "testjxm",
            "taskId": "rgguwriyuep77asyuzi",
            "source": "http://console.jfjmz.soap.com/web/0/f5c8f852695f3ac2c4e8685bc8c50c7e/2025/07/01/82c71bdc87db4626998cffedeeac2cec/82c71bdc87db4626998cffedeeac2cec_360p.mp4",
            "description": "",
            "preset": "推荐策略",
            "presetId": 22,
            "status": "SUCCESS",
            "label": "REJECT",
            "duration": 104,
            "notification": "",
            "icrCheckResults": [
                {
                    "presetType": "imageAudit",
                    "type": "terrorArmyForce",
                    "presetTypeDesc": "图像审核",
                    "typeTitle": "军事部队",
                    "topType": "imgTerror",
                    "topTypeTitle": "暴恐",
                    "items": [
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 17,
                            "startTimeInSeconds": 17,
                            "endTimeInSeconds": 27,
                            "confidence": 0.9821897157971564,
                            "label": "REJECT",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00017.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 29,
                            "startTimeInSeconds": 29,
                            "endTimeInSeconds": 31,
                            "confidence": 0.9698992864591605,
                            "label": "REJECT",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00029.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 0,
                            "startTimeInSeconds": 0,
                            "endTimeInSeconds": 1,
                            "confidence": 0.9728466336235303,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00000.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 9,
                            "startTimeInSeconds": 9,
                            "endTimeInSeconds": 10,
                            "confidence": 0.9677976840167429,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00009.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 33,
                            "startTimeInSeconds": 33,
                            "endTimeInSeconds": 35,
                            "confidence": 0.9736720204274362,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00033.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 39,
                            "startTimeInSeconds": 39,
                            "endTimeInSeconds": 40,
                            "confidence": 0.9797131691954082,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00039.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 42,
                            "startTimeInSeconds": 42,
                            "endTimeInSeconds": 44,
                            "confidence": 0.9866615675317444,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00042.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 47,
                            "startTimeInSeconds": 47,
                            "endTimeInSeconds": 50,
                            "confidence": 0.9667226338714224,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00047.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 58,
                            "startTimeInSeconds": 58,
                            "endTimeInSeconds": 62,
                            "confidence": 0.9914538559989079,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00058.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 64,
                            "startTimeInSeconds": 64,
                            "endTimeInSeconds": 67,
                            "confidence": 0.9955817311419616,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00064.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 76,
                            "startTimeInSeconds": 76,
                            "endTimeInSeconds": 84,
                            "confidence": 0.9974598852852778,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00076.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 89,
                            "startTimeInSeconds": 89,
                            "endTimeInSeconds": 101,
                            "confidence": 0.9992718950552444,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00089.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 5,
                            "startTimeInSeconds": 5,
                            "endTimeInSeconds": 8,
                            "confidence": 0.945705701048042,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00005.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 10,
                            "startTimeInSeconds": 10,
                            "endTimeInSeconds": 12,
                            "confidence": 0.8774928498998468,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00010.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 14,
                            "startTimeInSeconds": 14,
                            "endTimeInSeconds": 16,
                            "confidence": 0.9228148072961581,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00014.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 18,
                            "startTimeInSeconds": 18,
                            "endTimeInSeconds": 19,
                            "confidence": 0.9356925813675193,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00018.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 22,
                            "startTimeInSeconds": 22,
                            "endTimeInSeconds": 25,
                            "confidence": 0.9494381597546491,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00022.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 28,
                            "startTimeInSeconds": 28,
                            "endTimeInSeconds": 29,
                            "confidence": 0.8892724359270859,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00028.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 35,
                            "startTimeInSeconds": 35,
                            "endTimeInSeconds": 38,
                            "confidence": 0.9199686283191117,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00035.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 41,
                            "startTimeInSeconds": 41,
                            "endTimeInSeconds": 42,
                            "confidence": 0.9119382976570487,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00041.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 52,
                            "startTimeInSeconds": 52,
                            "endTimeInSeconds": 53,
                            "confidence": 0.6086976279485016,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00052.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 67,
                            "startTimeInSeconds": 67,
                            "endTimeInSeconds": 70,
                            "confidence": 0.9421773002212186,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00067.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 1,
                            "startTimeInSeconds": 1,
                            "endTimeInSeconds": 3,
                            "confidence": 0.8769503841778726,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00001.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 32,
                            "startTimeInSeconds": 32,
                            "endTimeInSeconds": 33,
                            "confidence": 0.8801131526930951,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00032.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 44,
                            "startTimeInSeconds": 44,
                            "endTimeInSeconds": 47,
                            "confidence": 0.8905690621958207,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00044.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 63,
                            "startTimeInSeconds": 63,
                            "endTimeInSeconds": 64,
                            "confidence": 0.7611875285297494,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00063.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 75,
                            "startTimeInSeconds": 75,
                            "endTimeInSeconds": 76,
                            "confidence": 0.8433414156119732,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00075.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 97,
                            "startTimeInSeconds": 97,
                            "endTimeInSeconds": 98,
                            "confidence": 0.8280587523924072,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00097.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 101,
                            "startTimeInSeconds": 101,
                            "endTimeInSeconds": 102,
                            "confidence": 0.8554620617102721,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00101.jpg"
                            }
                        }
                    ]
                },
                {
                    "presetType": "audioTextAudit",
                    "type": "spamTerror",
                    "presetTypeDesc": "音频文本审核",
                    "typeTitle": "暴恐违禁",
                    "topType": "textTerror",
                    "topTypeTitle": "暴恐违禁",
                    "items": [
                        {
                            "presetType": "audioTextAudit",
                            "type": "spamTerror",
                            "timeInSeconds": 50,
                            "startTimeInSeconds": 50,
                            "endTimeInSeconds": 51,
                            "confidence": 0.8404718041419983,
                            "label": "REVIEW",
                            "extra": "暴恐违禁",
                            "evidence": {
                                "originalText": "箭炮对外射击。，"
                            }
                        }
                    ]
                },
                {
                    "presetType": "imageTextAudit",
                    "type": "spamContact",
                    "presetTypeDesc": "图文审核",
                    "typeTitle": "联系方式",
                    "topType": "textPopularize",
                    "topTypeTitle": "广告",
                    "items": [
                        {
                            "presetType": "imageTextAudit",
                            "type": "spamContact",
                            "subType": "contactWebsite",
                            "subTypeTitle": "网址",
                            "timeInSeconds": 101,
                            "startTimeInSeconds": 101,
                            "endTimeInSeconds": 104,
                            "confidence": 1.0,
                            "label": "REJECT",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rgguwriyuep77asyuzi/thumbnails/00101.jpg",
                                "location": {
                                    "leftOffsetInPixel": 173,
                                    "topOffsetInPixel": 192,
                                    "widthInPixel": 124,
                                    "heightInPixel": 18
                                }
                            }
                        }
                    ]
                }
            ],
            "createTime": "2025-07-07T10:42:52Z",
            "startTime": "2025-07-07T10:42:53Z",
            "finishTime": "2025-07-07T10:44:57Z",
            "streamId": "",
            "callbackType": "vcr",
            "ocrResults": [
                {
                    "text": "八一视频 905 海军某作皮援舰支管平湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 0
                },
                {
                    "text": "八一视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 1
                },
                {
                    "text": "八一视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 2
                },
                {
                    "text": "视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 3
                },
                {
                    "text": "视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 4
                },
                {
                    "text": "视频 海军某作战支援舰支队查于湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 5
                },
                {
                    "text": "视频 乐作 ",
                    "complex": false,
                    "timeInSeconds": 6
                },
                {
                    "text": "八一视频 好 ",
                    "complex": false,
                    "timeInSeconds": 7
                },
                {
                    "text": "六一视频 ",
                    "complex": false,
                    "timeInSeconds": 8
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 9
                },
                {
                    "text": "八一视频 上 ",
                    "complex": false,
                    "timeInSeconds": 10
                },
                {
                    "text": "八一视频 上 ",
                    "complex": false,
                    "timeInSeconds": 11
                },
                {
                    "text": "八一视频 I格 ",
                    "complex": false,
                    "timeInSeconds": 12
                },
                {
                    "text": "八一视频 ← ",
                    "complex": false,
                    "timeInSeconds": 13
                },
                {
                    "text": "一视频 一的 ",
                    "complex": false,
                    "timeInSeconds": 14
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 15
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 16
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 17
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 18
                },
                {
                    "text": "八一 视频 上 ",
                    "complex": false,
                    "timeInSeconds": 19
                },
                {
                    "text": "八一视频 上 官 ",
                    "complex": false,
                    "timeInSeconds": 20
                },
                {
                    "text": "八一视频 官 ",
                    "complex": false,
                    "timeInSeconds": 21
                },
                {
                    "text": "八一视频 上 叶 官 ",
                    "complex": false,
                    "timeInSeconds": 22
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 23
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 24
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 25
                },
                {
                    "text": "A 视频 ",
                    "complex": false,
                    "timeInSeconds": 26
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 27
                },
                {
                    "text": "1 ",
                    "complex": false,
                    "timeInSeconds": 28
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 29
                },
                {
                    "text": "视频 0 ",
                    "complex": false,
                    "timeInSeconds": 30
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 31
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 32
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 33
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 34
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 35
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 36
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 37
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 38
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 39
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 40
                },
                {
                    "text": "视频 C ",
                    "complex": false,
                    "timeInSeconds": 41
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 42
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 43
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 44
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 45
                },
                {
                    "text": "八一 视频 ",
                    "complex": false,
                    "timeInSeconds": 46
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 47
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 48
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 49
                },
                {
                    "text": "八一视频 刮门长 海军查干湖舰枪炮部门 陈 中国 ",
                    "complex": false,
                    "timeInSeconds": 50
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 中角 ",
                    "complex": false,
                    "timeInSeconds": 51
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 52
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 53
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 54
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 55
                },
                {
                    "text": "八一视频 副部门 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 56
                },
                {
                    "text": "八一视频 刮部门长 海军查干舰枪部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 57
                },
                {
                    "text": "八一视频 173 ",
                    "complex": false,
                    "timeInSeconds": 58
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 59
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 60
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 61
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 62
                },
                {
                    "text": "八 视频 ",
                    "complex": false,
                    "timeInSeconds": 63
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 64
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 65
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 66
                },
                {
                    "text": "A 视频 T 05-02 ",
                    "complex": false,
                    "timeInSeconds": 67
                },
                {
                    "text": "A 视频 间 05-02 ",
                    "complex": false,
                    "timeInSeconds": 68
                },
                {
                    "text": "A 视频 公 05-02 ",
                    "complex": false,
                    "timeInSeconds": 69
                },
                {
                    "text": "视频 医 T 05-02 ",
                    "complex": false,
                    "timeInSeconds": 70
                },
                {
                    "text": "视频 05-02 ",
                    "complex": false,
                    "timeInSeconds": 71
                },
                {
                    "text": "一视频 ",
                    "complex": false,
                    "timeInSeconds": 72
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 73
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 74
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 75
                },
                {
                    "text": "A 视频 ",
                    "complex": false,
                    "timeInSeconds": 76
                },
                {
                    "text": "一视频 ",
                    "complex": false,
                    "timeInSeconds": 77
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 78
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 79
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 80
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 81
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 82
                },
                {
                    "text": "八一视频 H ",
                    "complex": false,
                    "timeInSeconds": 83
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 84
                },
                {
                    "text": "八一视频 食 中国 中央电视台 ",
                    "complex": false,
                    "timeInSeconds": 85
                },
                {
                    "text": "八一视频 刮舰长 海军查干湖舰 中国 中央电视台 ",
                    "complex": false,
                    "timeInSeconds": 86
                },
                {
                    "text": "妆 品系业 3 ",
                    "complex": false,
                    "timeInSeconds": 87
                },
                {
                    "text": "八一视频 副舰长 海军查干湖舰 中国 中夹电视台 ",
                    "complex": false,
                    "timeInSeconds": 88
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 89
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 90
                },
                {
                    "text": "八一视频 S6 ",
                    "complex": false,
                    "timeInSeconds": 91
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 92
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 93
                },
                {
                    "text": "的 八一视频 ",
                    "complex": false,
                    "timeInSeconds": 94
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 95
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 96
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 97
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 98
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 99
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 100
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 101
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 102
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 103
                }
            ]
        },
        {
            "userName": "testjxm",
            "taskId": "rggu4n752x3ptrh3ds9",
            "source": "http://console.jfjmz.soap.com/web/0/f5c8f852695f3ac2c4e8685bc8c50c7e/2025/07/01/82c71bdc87db4626998cffedeeac2cec/82c71bdc87db4626998cffedeeac2cec_360p.mp4",
            "description": "",
            "preset": "推荐策略",
            "presetId": 22,
            "status": "SUCCESS",
            "label": "REJECT",
            "duration": 104,
            "notification": "",
            "icrCheckResults": [
                {
                    "presetType": "imageAudit",
                    "type": "terrorArmyForce",
                    "presetTypeDesc": "图像审核",
                    "typeTitle": "军事部队",
                    "topType": "imgTerror",
                    "topTypeTitle": "暴恐",
                    "items": [
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 17,
                            "startTimeInSeconds": 17,
                            "endTimeInSeconds": 27,
                            "confidence": 0.9821897157971564,
                            "label": "REJECT",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00017.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 29,
                            "startTimeInSeconds": 29,
                            "endTimeInSeconds": 31,
                            "confidence": 0.9698992864591605,
                            "label": "REJECT",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00029.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 0,
                            "startTimeInSeconds": 0,
                            "endTimeInSeconds": 1,
                            "confidence": 0.9728466336235303,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00000.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 9,
                            "startTimeInSeconds": 9,
                            "endTimeInSeconds": 10,
                            "confidence": 0.9677976840167429,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00009.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 33,
                            "startTimeInSeconds": 33,
                            "endTimeInSeconds": 35,
                            "confidence": 0.9736720204274362,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00033.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 39,
                            "startTimeInSeconds": 39,
                            "endTimeInSeconds": 40,
                            "confidence": 0.9797131691954082,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00039.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 42,
                            "startTimeInSeconds": 42,
                            "endTimeInSeconds": 44,
                            "confidence": 0.9866615675317444,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00042.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 47,
                            "startTimeInSeconds": 47,
                            "endTimeInSeconds": 50,
                            "confidence": 0.9667226338714224,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00047.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 58,
                            "startTimeInSeconds": 58,
                            "endTimeInSeconds": 62,
                            "confidence": 0.9914538559989079,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00058.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 64,
                            "startTimeInSeconds": 64,
                            "endTimeInSeconds": 67,
                            "confidence": 0.9955817311419616,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00064.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 76,
                            "startTimeInSeconds": 76,
                            "endTimeInSeconds": 84,
                            "confidence": 0.9974598852852778,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00076.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 89,
                            "startTimeInSeconds": 89,
                            "endTimeInSeconds": 101,
                            "confidence": 0.9992718950552444,
                            "label": "REJECT",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00089.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 5,
                            "startTimeInSeconds": 5,
                            "endTimeInSeconds": 8,
                            "confidence": 0.945705701048042,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00005.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 10,
                            "startTimeInSeconds": 10,
                            "endTimeInSeconds": 12,
                            "confidence": 0.8774928498998468,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00010.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 14,
                            "startTimeInSeconds": 14,
                            "endTimeInSeconds": 16,
                            "confidence": 0.9228148072961581,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00014.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 18,
                            "startTimeInSeconds": 18,
                            "endTimeInSeconds": 19,
                            "confidence": 0.9356925813675193,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00018.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 22,
                            "startTimeInSeconds": 22,
                            "endTimeInSeconds": 25,
                            "confidence": 0.9494381597546491,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00022.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 28,
                            "startTimeInSeconds": 28,
                            "endTimeInSeconds": 29,
                            "confidence": 0.8892724359270859,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00028.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 35,
                            "startTimeInSeconds": 35,
                            "endTimeInSeconds": 38,
                            "confidence": 0.9199686283191117,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00035.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 41,
                            "startTimeInSeconds": 41,
                            "endTimeInSeconds": 42,
                            "confidence": 0.9119382976570487,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00041.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 52,
                            "startTimeInSeconds": 52,
                            "endTimeInSeconds": 53,
                            "confidence": 0.6086976279485016,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00052.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorPolice",
                            "subTypeTitle": "警察部队",
                            "timeInSeconds": 67,
                            "startTimeInSeconds": 67,
                            "endTimeInSeconds": 70,
                            "confidence": 0.9421773002212186,
                            "label": "REVIEW",
                            "extra": "警察部队",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00067.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 1,
                            "startTimeInSeconds": 1,
                            "endTimeInSeconds": 3,
                            "confidence": 0.8769503841778726,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00001.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 32,
                            "startTimeInSeconds": 32,
                            "endTimeInSeconds": 33,
                            "confidence": 0.8801131526930951,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00032.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 44,
                            "startTimeInSeconds": 44,
                            "endTimeInSeconds": 47,
                            "confidence": 0.8905690621958207,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00044.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 63,
                            "startTimeInSeconds": 63,
                            "endTimeInSeconds": 64,
                            "confidence": 0.7611875285297494,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00063.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 75,
                            "startTimeInSeconds": 75,
                            "endTimeInSeconds": 76,
                            "confidence": 0.8433414156119732,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00075.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 97,
                            "startTimeInSeconds": 97,
                            "endTimeInSeconds": 98,
                            "confidence": 0.8280587523924072,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00097.jpg"
                            }
                        },
                        {
                            "presetType": "imageAudit",
                            "type": "terrorArmyForce",
                            "subType": "terrorWeapon",
                            "subTypeTitle": "军事武器",
                            "timeInSeconds": 101,
                            "startTimeInSeconds": 101,
                            "endTimeInSeconds": 102,
                            "confidence": 0.8554620617102721,
                            "label": "REVIEW",
                            "extra": "大型军事武器",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00101.jpg"
                            }
                        }
                    ]
                },
                {
                    "presetType": "audioTextAudit",
                    "type": "spamTerror",
                    "presetTypeDesc": "音频文本审核",
                    "typeTitle": "暴恐违禁",
                    "topType": "textTerror",
                    "topTypeTitle": "暴恐违禁",
                    "items": [
                        {
                            "presetType": "audioTextAudit",
                            "type": "spamTerror",
                            "timeInSeconds": 50,
                            "startTimeInSeconds": 50,
                            "endTimeInSeconds": 51,
                            "confidence": 0.8404718041419983,
                            "label": "REVIEW",
                            "extra": "暴恐违禁",
                            "evidence": {
                                "originalText": "箭炮对外射击。，"
                            }
                        }
                    ]
                },
                {
                    "presetType": "imageTextAudit",
                    "type": "spamContact",
                    "presetTypeDesc": "图文审核",
                    "typeTitle": "联系方式",
                    "topType": "textPopularize",
                    "topTypeTitle": "广告",
                    "items": [
                        {
                            "presetType": "imageTextAudit",
                            "type": "spamContact",
                            "subType": "contactWebsite",
                            "subTypeTitle": "网址",
                            "timeInSeconds": 101,
                            "startTimeInSeconds": 101,
                            "endTimeInSeconds": 104,
                            "confidence": 1.0,
                            "label": "REJECT",
                            "evidence": {
                                "thumbnail": "http://10.1.65.91:8701/videoai-middle/89515263c5c1787701c0e262e93e7269/rggu4n752x3ptrh3ds9/thumbnails/00101.jpg",
                                "location": {
                                    "leftOffsetInPixel": 173,
                                    "topOffsetInPixel": 192,
                                    "widthInPixel": 124,
                                    "heightInPixel": 18
                                }
                            }
                        }
                    ]
                }
            ],
            "createTime": "2025-07-07T10:34:48Z",
            "startTime": "2025-07-07T10:34:50Z",
            "finishTime": "2025-07-07T10:36:55Z",
            "streamId": "",
            "callbackType": "vcr",
            "ocrResults": [
                {
                    "text": "八一视频 905 海军某作皮援舰支管平湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 0
                },
                {
                    "text": "八一视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 1
                },
                {
                    "text": "八一视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 2
                },
                {
                    "text": "视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 3
                },
                {
                    "text": "视频 海军某作战支援舰支队查干湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 4
                },
                {
                    "text": "视频 海军某作战支援舰支队查于湖舰 展开全要素海上综合作战支援演练 ",
                    "complex": false,
                    "timeInSeconds": 5
                },
                {
                    "text": "视频 乐作 ",
                    "complex": false,
                    "timeInSeconds": 6
                },
                {
                    "text": "八一视频 好 ",
                    "complex": false,
                    "timeInSeconds": 7
                },
                {
                    "text": "六一视频 ",
                    "complex": false,
                    "timeInSeconds": 8
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 9
                },
                {
                    "text": "八一视频 上 ",
                    "complex": false,
                    "timeInSeconds": 10
                },
                {
                    "text": "八一视频 上 ",
                    "complex": false,
                    "timeInSeconds": 11
                },
                {
                    "text": "八一视频 I格 ",
                    "complex": false,
                    "timeInSeconds": 12
                },
                {
                    "text": "八一视频 ← ",
                    "complex": false,
                    "timeInSeconds": 13
                },
                {
                    "text": "一视频 一的 ",
                    "complex": false,
                    "timeInSeconds": 14
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 15
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 16
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 17
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 18
                },
                {
                    "text": "八一 视频 上 ",
                    "complex": false,
                    "timeInSeconds": 19
                },
                {
                    "text": "八一视频 上 官 ",
                    "complex": false,
                    "timeInSeconds": 20
                },
                {
                    "text": "八一视频 官 ",
                    "complex": false,
                    "timeInSeconds": 21
                },
                {
                    "text": "八一视频 上 叶 官 ",
                    "complex": false,
                    "timeInSeconds": 22
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 23
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 24
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 25
                },
                {
                    "text": "A 视频 ",
                    "complex": false,
                    "timeInSeconds": 26
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 27
                },
                {
                    "text": "1 ",
                    "complex": false,
                    "timeInSeconds": 28
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 29
                },
                {
                    "text": "视频 0 ",
                    "complex": false,
                    "timeInSeconds": 30
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 31
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 32
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 33
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 34
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 35
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 36
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 37
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 38
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 39
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 40
                },
                {
                    "text": "视频 C ",
                    "complex": false,
                    "timeInSeconds": 41
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 42
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 43
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 44
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 45
                },
                {
                    "text": "八一 视频 ",
                    "complex": false,
                    "timeInSeconds": 46
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 47
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 48
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 49
                },
                {
                    "text": "八一视频 刮门长 海军查干湖舰枪炮部门 陈 中国 ",
                    "complex": false,
                    "timeInSeconds": 50
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 中角 ",
                    "complex": false,
                    "timeInSeconds": 51
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 52
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 53
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 54
                },
                {
                    "text": "八一视频 副部门长 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 55
                },
                {
                    "text": "八一视频 副部门 海军查干湖舰枪炮部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 56
                },
                {
                    "text": "八一视频 刮部门长 海军查干舰枪部门 陈树 中国 ",
                    "complex": false,
                    "timeInSeconds": 57
                },
                {
                    "text": "八一视频 173 ",
                    "complex": false,
                    "timeInSeconds": 58
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 59
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 60
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 61
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 62
                },
                {
                    "text": "八 视频 ",
                    "complex": false,
                    "timeInSeconds": 63
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 64
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 65
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 66
                },
                {
                    "text": "A 视频 T 05-02 ",
                    "complex": false,
                    "timeInSeconds": 67
                },
                {
                    "text": "A 视频 间 05-02 ",
                    "complex": false,
                    "timeInSeconds": 68
                },
                {
                    "text": "A 视频 公 05-02 ",
                    "complex": false,
                    "timeInSeconds": 69
                },
                {
                    "text": "视频 医 T 05-02 ",
                    "complex": false,
                    "timeInSeconds": 70
                },
                {
                    "text": "视频 05-02 ",
                    "complex": false,
                    "timeInSeconds": 71
                },
                {
                    "text": "一视频 ",
                    "complex": false,
                    "timeInSeconds": 72
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 73
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 74
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 75
                },
                {
                    "text": "A 视频 ",
                    "complex": false,
                    "timeInSeconds": 76
                },
                {
                    "text": "一视频 ",
                    "complex": false,
                    "timeInSeconds": 77
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 78
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 79
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 80
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 81
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 82
                },
                {
                    "text": "八一视频 H ",
                    "complex": false,
                    "timeInSeconds": 83
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 84
                },
                {
                    "text": "八一视频 食 中国 中央电视台 ",
                    "complex": false,
                    "timeInSeconds": 85
                },
                {
                    "text": "八一视频 刮舰长 海军查干湖舰 中国 中央电视台 ",
                    "complex": false,
                    "timeInSeconds": 86
                },
                {
                    "text": "妆 品系业 3 ",
                    "complex": false,
                    "timeInSeconds": 87
                },
                {
                    "text": "八一视频 副舰长 海军查干湖舰 中国 中夹电视台 ",
                    "complex": false,
                    "timeInSeconds": 88
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 89
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 90
                },
                {
                    "text": "八一视频 S6 ",
                    "complex": false,
                    "timeInSeconds": 91
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 92
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 93
                },
                {
                    "text": "的 八一视频 ",
                    "complex": false,
                    "timeInSeconds": 94
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 95
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 96
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 97
                },
                {
                    "text": "视频 ",
                    "complex": false,
                    "timeInSeconds": 98
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 99
                },
                {
                    "text": "八一视频 ",
                    "complex": false,
                    "timeInSeconds": 100
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 101
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 102
                },
                {
                    "text": "中国军网 八一视频 WWW.81.CN ",
                    "complex": false,
                    "timeInSeconds": 103
                }
            ]
        }
    ]
const presetType = new Map([
    ['textAudit', '文本审核'],
    ['imageAudit', '图像审核'],
    ['imageTextAudit', '图文审核'],
    ['imageIdentify', '图像识别'],
    ['audioAudit', '音频语音审核'],
    ['audioTextAudit', '音频文本审核'],
    ['documentTextAudit', '文档文本审核']
]);

const oneType = new Map([
    ['violateTextGeneral', '百度违禁词库'],
    ['textLibSelfDef', '自定义文本库'],
    ['spamPolitic', '政治敏感'],
    ['spamPorn', '文本色情'],
    ['spamTerror', '暴恐违禁'],
    ['spamPopularize', '恶意推广'],
    ['spamContact', '联系方式'],
    ['spamPrivacy', '隐私信息'],
    ['spamVulgar', '低俗辱骂'],
    ['spamLowQuality', '低质灌水'],

    ['imgLibSelfDef', '自定义图片库'],
    ['figLibSelfDef', '自定义人脸'],
    ['publicFigure', '公众人物'],
    ['politicPolitic', '涉政人物'],
    ['politicSymbol', '涉政旗帜标志'],
    ['politicOther', '其他涉政识别'],
    ['pornSexual', '色情'],
    ['pornSexy', '性感'],
    ['pornIntimacy', '亲密行为'],
    ['pornCloseUp', '色情特写'],
    ['pornOther', '其他涉黄'],
    ['terrorRiotScene', '暴乱场景'],
    ['terrorBloodyScene', '血腥场景'],
    ['terrorArmyForce', '军事部队'],
    ['terrorSpecialDress', '特殊服饰'],
    ['badnessBadBehavior', '不良行为'],
    ['badnessCrime', '犯罪'],
    ['badnessOther', '其他违禁'],
    ['adDetect', '广告监测'],
    ['logoDetect', '品牌LOGO检测'],
    ['adCodeRec', '条型码二维码内容识别'],
    ['disgustDisgust', '恶心图像'],
    ['faceAudit', '用户头像'],
    ['liveScene', '直播场景'],
    ['quality', '图像质量'],

    ['pantDetect', '娇喘检测'],
    ['nationalAnthemDetect', '国歌识别'],
    ['emptyContentDetect', '无语音内容']
]);

const subType = new Map([
    ['textLibSelfDefBlack', '自定义文本黑库'],
    ['textLibSelfDefWhite', '自定义文本白库'],
    ['contactMobilePhoneNumber', '手机号'],
    ['contactWechat', '微信'],
    ['contactQQ', 'QQ号'],
    ['contactWebsite', '网址'],
    ['contactEmail', '邮箱'],
    ['privacyPii', '个人身份信息'],
    ['privacyPci', '个人财产信息'],
    ['sceneLibSelfDef', '自定义场景库'],
    ['imgLibSelfDefBlack', '自定义图片黑库'],
    ['imgLibSelfDefWhite', '自定义图片白库'],
    ['figLibSelfDefBlack', '自定义人脸黑库'],
    ['figLibSelfDefWhite', '自定义人脸白库'],
    ['numberOneLeader', '一号领导人'],
    ['positive', '涉政正面人物'],
    ['negative', '涉政负面人物'],
    ['politicOtherFig', '其他涉政人物'],
    ['badArtist', '劣迹艺人'],
    ['armband', '各类臂章'],
    ['emblem', '党旗、军旗、党徽及类似图形'],
    ['nationalFlag', '中国国旗及类似图形'],
    ['badge', '中国警徽及类似图形'],
    ['nationalMap', '中国地图及类似图形'],
    ['problemMap', '中国地图完整性'],
    ['otherNationalFlag', '各国旗帜标志'],
    ['terrorOrganizeLogo', '暴恐组织标志'],
    ['reactionDivision', '反动分裂标志'],
    ['evilCult', '邪教组织标志'],
    ['leaderInsinuation', '领导人影射'],
    ['leaderComic', '领导人漫画'],
    ['sensitiveEvent', '敏感事件'],
    ['sensitivePlaces', '敏感地点'],
    ['sensitiveGoods', '敏感物品'],
    ['religion', '宗教识别'],
    ['bannedMedia', '封禁媒体'],
    ['pornGeneral', '一般色情'],
    ['pornCartoon', '卡通色情'],
    ['pornArtwork', '艺术品色情'],
    ['pornSM', 'SM'],
    ['pornSexToy', '性玩具'],
    ['pornChild', '儿童裸露'],
    ['pornMaleSexy', '男性性感'],
    ['pornMaleExposed', '男性裸露'],
    ['pornFemaleSexy', '女性性感'],
    ['pornCartoonFemaleSexy', '卡通女性性感'],
    ['pornIntimate', '亲密行为'],
    ['pornCartoonIntimate', '卡通亲密行为'],
    ['pornPregnancyExposed', '孕肚裸露'],
    ['pornButtock', '臀部特写'],
    ['pornFoot', '脚部特写'],
    ['pornCrotch', '裆部特写'],
    ['pornSpecial', '特殊类'],
    ['pornVulgar', '低俗'],
    ['terrorExplode', '爆炸火灾'],
    ['terrorRiot', '暴乱'],
    ['terrorAccident', '车祸'],
    ['terrorBlood', '血腥'],
    ['terrorCorpse', '尸体'],
    ['terrorCarcass', '血腥动物或动物尸体'],
    ['terrorArmedPersonnel', '武装人员'],
    ['terrorPolice', '警察部队'],
    ['terrorWeapon', '军事武器'],
    ['terrorAmmunition', '弹药'],
    ['terrorFirearms', '枪械'],
    ['terrorCutter', '刀具'],
    ['terrorSpecialClothes', '特殊服饰'],
    ['badnessSmoke', '吸烟'],
    ['badnessDrink', '饮酒'],
    ['badnessTattoo', '纹身'],
    ['badnessGamble', '赌博'],
    ['badnessMiddleFinger', '竖中指'],
    ['badnessDrug', '毒品'],
    ['badnessWildAnimal', '野生动物制品'],
    ['badnessCard', '卡证'],
    ['badnessMoneyCoin', '涉警'],
    ['watermarkGeneral', '钱币'],
    ['advertisingQrCode', '通用水印'],
    ['advertisingBarCode', '二维码'],
    ['advertisingMiniProgramCode', '条形码'],
    ['logoLibSystem', '小程序码'],
    ['logoLibSystem', '官方LOGO库'],
    ['logoLibSelfDefBlack', '自定义LOGO黑库'],
    ['logoLibSelfDefWhite', '自定义LOGO白库'],
    ['advertisingRecBarCode', '识别条形码中内容'],
    ['advertisingRecQrCode', '识别二维码中内容'],
    ['disgustAnimal', '恶心动物'],
    ['disgustBloodinessBody', '人体血腥和尸体'],
    ['disgustCarcass', '动物血腥和尸体'],
    ['disgustDisease', '疾病表症'],
    ['disgustFeces', '排泄物'],
    ['disgustSexual', '性器官特写'],
    ['disgustSpoiledFood', '腐烂食物'],
    ['disgustTrypophobia', '密集恐惧症'],
    ['disgustViscera', '脏器'],
    ['faceAuditHuman', '图像中人脸必须是真人脸'],
    ['faceAuditSingle', '图像中的人脸必须为单人脸'],
    ['faceAuditGender', '图像中的人脸性别'],
    ['faceAuditTeenager', '图像中的人脸为未成年人'],
    ['faceAuditAngel', '人脸必须为正脸'],
    ['faceAuditOcclusion', '人脸不能有遮挡'],
    ['faceAuditCompleteness', '人脸占比'],
    ['faceAuditBlur', '人脸必须清晰'],
    ['bathroom', '卫生间场景'],
    ['carInterior', '车内场景'],
    ['bedroom', '卧室场景'],
    ['nonsenseScene', '无意义场景'],
    ['normalScene', '普通场景'],
    ['qualityClarity', '清晰度'],
    ['qualityAesthetic', '美观度']
]);

export {
    mnsj,
    presetType,
    oneType,
    subType
} 