
  var map = new Datamap({
      element: document.getElementById('container'),
      scope: 'usa',
      fills: {
            HIGH: '#8856a7',
            LOW: '#e0ecf4',
            MEDIUM: '#9ebcda',
            UNKNOWN: '#fde0dd',
            defaultFill: 'gray'
        },
        data: {
            SC: {
                fillKey: 'MEDIUM',
                numberOfThings: 14
            },
            NY: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            ME: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            AK: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            AZ: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            CT: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            DE: {
                fillKey: 'MEDIUM',
                numberOfThings: 14
            },
            FL: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            GA: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            HI: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            ID: {
                fillKey: 'LOW',
                numberOfThings: 10
            },
            IL: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            KS: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            LA: {
                fillKey: 'MEDIUM',
                numberOfThings: 14
            },
            MD: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            MS: {
                fillKey: 'MEDIUM',
                numberOfThings: 10
            },
            MI: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            NB: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            NV: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            NH: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            NM: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            NC: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            ND: {
                fillKey: 'MEDIUM',
                numberOfThings: 14
            },
            OH: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            OK: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            RI: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            SD: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            VT: {
                fillKey: 'MEDIUM',
                numberOfThings: 13
            },
            VA: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            WI: {
                fillKey: 'MEDIUM',
                numberOfThings: 12
            },
            WY: {
                fillKey: 'MEDIUM',
                numberOfThings: 11
            },
            AL: {
                fillKey: 'HIGH',
                numberOfThings: 17
            },
            AK: {
                fillKey: 'HIGH',
                numberOfThings: 18
            },
            KY: {
                fillKey: 'HIGH',
                numberOfThings: 18
            },
            MS: {
                fillKey: 'HIGH',
                numberOfThings: 15
            },
            MO: {
                fillKey: 'HIGH',
                numberOfThings: 15
            },
            TN: {
                fillKey: 'HIGH',
                numberOfThings: 17
            },
            TX: {
                fillKey: 'HIGH',
                numberOfThings: 16
            },
            WV: {
                fillKey: 'HIGH',
                numberOfThings: 17
            },
            UT: {
                fillKey: 'LOW',
                numberOfThings: 8
            },
            MT: {
                fillKey: 'LOW',
                numberOfThings: 9
            },
            NJ: {
                fillKey: 'LOW',
                numberOfThings: 9
            },

            CA: {
                fillKey: 'UNKNOWN',
                numberOfThings: 'N/A'
            },
            CO: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },
            IN: {
                ffillKey: 'UNKNOWN',
                numberOfThings: 'N/A'
            },
            IO: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },
            MN: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },
            OR: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },
            PA: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },
            WA: {
              fillKey: 'UNKNOWN',
              numberOfThings: 'N/A'
            },

        },
        geographyConfig: {
            popupTemplate: function(geo, data) {
                return ['<div class="hoverinfo"><strong>',
                        'Percentange in ' + geo.properties.name,
                        ': ' + data.numberOfThings,
                        '</strong></div>'].join('');
            }
        }
  });
