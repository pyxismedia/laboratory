import React, { Component } from 'react';
import * as mapbox from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

export class Mapbox extends Component {
  map;
  container;

  componentDidMount() {
    // @ts-ignore
    mapbox.accessToken = 'pk.eyJ1IjoiY3JlYXV4IiwiYSI6ImNqb244aGYzazE0aHkzd215eG13OG43ZWYifQ.j88ZxJGjQBZ2tVu416HSYQ';
    this.map = new mapbox.Map({
      container: this.container,
      style: 'mapbox://styles/creaux/cjorg0ynb72gv2rqska2l5nnt',
      center: [1.230, 52],
      zoom: 3,
    });

    const FILTER_OPERATIVE = ['any',
      // ISO 3166 Country Codes (A3) / http://www.virtualherbarium.org/vh/auth/country.html
      ['==', 'ISO_A2', 'CZ'],
      ['==', 'ISO_A2', 'GB'],
      ['==', 'ISO_A2', 'DE'],
      ['==', 'ISO_A2', 'DK'],
      ['==', 'ISO_A2', 'SK'],
      ['==', 'ISO_A2', 'PL'],
      ['==', 'ISO_A2', 'RU'],
      ['==', 'ISO_A2', 'CH'],
      ['==', 'ADM0_A3', 'FRA'],
    ];

    this.map.on('load', () => {
      this.map.addLayer({
        source: {
          type: 'vector',
          url: 'mapbox://creaux.ckydiapz',
        },
        'source-layer': 'ne_10m_ocean-09pfc4',
        id: 'SEA',
        type: 'fill',
        paint: {
          'fill-color': "#cad2d3",
        }
      });

      this.map.addLayer({
        source: {
          type: 'vector',
          url: 'mapbox://creaux.9za8hjsf',
        },
        'source-layer': 'ne_10m_admin_0_countries-7tjkr9',
        id: 'NON_OPERATIVE',
        type: 'fill',
        paint: {
          'fill-color': "#0D0D0D",
        }
      });

      this.map.addLayer({
        source: {
          type: 'vector',
          url: 'mapbox://creaux.9za8hjsf',
        },
        'source-layer': 'ne_10m_admin_0_countries-7tjkr9',
        id: 'OPERATIVE',
        type: 'fill',
        filter: FILTER_OPERATIVE,
        paint: {
          'fill-color': "#DDD13A",
          'fill-outline-color': '#0D0D0D',
        }
      });

      this.map.addLayer({
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-streets-v7'
        },
        'source-layer': 'country_label',
        id: 'CITIES',
        type: 'symbol',
        filter: ['any',
          // ISO 3166 Country Codes (A3) / http://www.virtualherbarium.org/vh/auth/country.html
          ['==', 'code', 'CZ'],
          ['==', 'code', 'GB'],
          ['==', 'code', 'DE'],
          ['==', 'code', 'DK'],
          ['==', 'code', 'SK'],
          ['==', 'code', 'PL'],
          ['==', 'code', 'RU'],
          ['==', 'code', 'CH'],
          ['==', 'code', 'FR'],
        ],
        layout: {
          "text-field": '{name_en}'
        },
      });
    });

    setTimeout(() => {
      this.map.easeTo({
        duration: 2000,
        pitch: 45,
        bearing: 10,
        easing: (t) => {
          return t * (2 - t);
        }
      });
    }, 500)
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    const style = {
      position: 'relative',
        height: '500px',
        width: '100%'
    };

    return <div style={style} ref={el => this.container = el} />;
  }
}
