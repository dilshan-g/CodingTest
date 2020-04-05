const data = [
  {
    "name": "LOL-palooza",
    "bands": [
      {
        "name": "Winter Primates",
        "recordLabel": ""
      },
      {
        "name": "Jill Black",
        "recordLabel": "Fourth Woman Records"
      },
      {
        "name": "Frank Jupiter",
        "recordLabel": "Pacific Records"
      },
      {
        "name": "Werewolf Weekday",
        "recordLabel": "XS Recordings"
      }
    ]
  },
  {
    "name": "Small Night In",
    "bands": [
      {
        "name": "Squint-281",
        "recordLabel": "Outerscope"
      },
      {
        "name": "Yanke East",
        "recordLabel": "MEDIOCRE Music"
      },
      {
        "name": "The Black Dashes",
        "recordLabel": "Fourth Woman Records"
      },
      {
        "name": "Wild Antelope",
        "recordLabel": "Marner Sis. Recording"
      },
      {
        "name": "Green Mild Cold Capsicum",
        "recordLabel": "Marner Sis. Recording"
      }
    ]
  },
  {
    "name": "Trainerella",
    "bands": [
      {
        "name": "Manish Ditch",
        "recordLabel": "ACR"
      },
      {
        "name": "Adrian Venti",
        "recordLabel": "Monocracy Records"
      },
      {
        "name": "YOUKRANE",
        "recordLabel": "Anti Records"
      },
      {
        "name": "Wild Antelope",
        "recordLabel": "Still Bottom Records"
      }
    ]
  },
  {
    "name": "Twisted Tour",
    "bands": [
      {
        "name": "Summon",
        "recordLabel": "Outerscope"
      },
      {
        "name": "Auditones",
        "recordLabel": "Marner Sis. Recording"
      },
      {
        "name": "Squint-281"
      }
    ]
  },
  {
    "bands": [
      {
        "name": "Propeller",
        "recordLabel": "Pacific Records"
      },
      {
        "name": "Critter Girls",
        "recordLabel": "ACR"
      }
    ]
  }
];

/**
 * Inserts the restructured record labels into a result object.
 * Then creates the markup to display the list of record labels along with the relevant band and the music festival.
 *
 * @param  {object} data - festival record set.
 * @return {string } recordLabelList - markup for the record label list.
 */
function populateMusicFestivals(data) {
  const byRecordLabel = data.reduce((result, festivals) => (festivals.bands.forEach(rl => {
    // if result["record label"] doesn't exists, then create it as an empty object.
    if (!result[rl.recordLabel]) result[rl.recordLabel] = {};

    // if r["record label"]["band name"] doesn't exists, then create it as an empty array.
    if (!result[rl.recordLabel][rl.name]) result[rl.recordLabel][rl.name] = [];

    // Push the festival name into the array.
    result[rl.recordLabel][rl.name].push(festivals.name);

  }), result), {}); // {} is the initial value of result.

  // Creates the markup for our record label list.
  // If the template literal found empty/undefined, a default text will be printed.
  const recordLabelList = Object.entries(byRecordLabel).reduce((list, [recordLabel, ob]) => {

    list += `<li class="list-group-item list-group-item-secondary record-label">
      <h4>${recordLabel && recordLabel != 'undefined' ? recordLabel : 'The best unknown music record'}</h4>
      <ul class="list-group list-group-flush">`;

    Object.entries(ob).forEach(([band, festival]) => {
      list += `<li class="list-group-item list-group-item-success">
                <h5>${band ? band : 'The best unknown band'}</h5>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item list-group-item-primary">
                    ${festival ? festival : 'The best unknown music festival'}
                  </li>
                </ul>
              </li>`;
    });

    list += `</ul></li>`;
    return list
  }, '');

  return recordLabelList;
}

// Insert the built markup just before the end of the container.
document.querySelector('.music-festival--container').insertAdjacentHTML('beforeend', populateMusicFestivals(data));
