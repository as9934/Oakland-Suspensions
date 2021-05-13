var config = {
    style: 'mapbox://styles/as9934/cknz91yxz0d4h17qg1nr26p0o',
    accessToken: 'pk.eyJ1IjoiYXM5OTM0IiwiYSI6ImNrbno4MmtndDAweG0yb2xjNm1mdm0xZXIifQ.JeD-i1p3iRFvjiovoM0ykA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: false,
    chapters: [
        {
            id: 'Intro',
            alignment: 'left',
            hidden: false,
            title: 'In 2015, Oakland Unified School District banned suspensions for "willful defiance"',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1415',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'black-1415',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Intro-2',
            alignment: 'left',
            hidden: false,
            title: 'That measure was the culmination of a series of expensive steps the District took to curb their suspension rate and the racial disparity in suspensions.',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1415',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'white-1415',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Intro-3',
            alignment: 'left',
            hidden: false,
            title: "But, except for a few outliers, things haven't changed much for most schools in the District.",
            image: '',
            description: 'Each dot represents a school in the district. The larger the dot the higher the suspension rate. Blue dots represent the suspnesion rate for White students. Orange dots represent the suspension rate for Black students.',
            location: {
                center: [-122.26, 37.78],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1516',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'black-1516',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 1-1',
            alignment: 'right',
            hidden: false,
            title: '2014-15',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1415', 
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'white-1415',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 1-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1415', 
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'black-1415',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 2-1',
            alignment: 'right',
            hidden: false,
            title: '2015-16',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1516',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'white-1516',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 2-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1516',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'black-1516',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 3-1',
            alignment: 'right',
            hidden: false,
            title: '2016-17',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1617',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'white-1617',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 3-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1617',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'black-1617',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 4-1',
            alignment: 'right',
            hidden: false,
            title: '2017-18',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1718',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'white-1718',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 4-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1718',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'black-1718',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 5-1',
            alignment: 'right',
            hidden: false,
            title: '2018-19',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'white-1819',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'white-1819',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Section 5-2',
            alignment: 'right',
            hidden: true,
            title: '',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'black-1819',
                    opacity: 1
                }
            ], 
            onChapterExit: [
                {
                    layer: 'black-1819',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Outro',
            alignment: 'left',
            hidden: false,
            title: 'We wanted to know why.',
            image: '',
            description: '',
            location: {
                center: [-122.26, 37.78],
                zoom: 11,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    // layer: 'white-1415',
                    // opacity: 1
                }
            ],
            onChapterExit: [
                {
                //     layer: 'white-1415',
                //     opacity: 1
                }
            ]
        }
    ]
};       
