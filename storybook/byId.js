const answers = [
  {
    _id: '1fd6af50-4f6a-11e5-86d7-0800278d2167',
    name: 'Mr.',
    class: 'Answer'
  },
  {
    _id: '1fd6b1a8-4f6a-11e5-86d7-0800278d2167',
    name: 'Mrs.',
    class: 'Answer'
  },
  {
    _id: '1fd6b2f2-4f6a-11e5-86d7-0800278d2167',
    name: 'Miss.',
    class: 'Answer'
  },
  {
    _id: '1fd6b3b0-4f6a-11e5-86d7-0800278d2167',
    name: 'Ms.',
    class: 'Answer'
  },
  {
    _id: '1fd6b45a-4f6a-11e5-86d7-0800278d2167',
    name: 'Prof.',
    class: 'Answer'
  },
  {
    _id: '1fd6b50e-4f6a-11e5-86d7-0800278d2167',
    name: 'Sir.',
    class: 'Answer'
  },
  {
    _id: '1fd6b5c2-4f6a-11e5-86d7-0800278d2167',
    name: 'Lady.',
    class: 'Answer'
  },
  {
    _id: '1fd6b66c-4f6a-11e5-86d7-0800278d2167',
    name: 'Dr.',
    class: 'Answer'
  },
  {
    _id: '1fd6b720-4f6a-11e5-86d7-0800278d2167',
    name: 'Male',
    class: 'Answer'
  },
  {
    _id: 'a_strained',
    name: 'Strained',
    class: 'Answer'
  },
  {
    _id: 'a_laboured',
    name: 'Laboured',
    class: 'Answer'
  },
  {
    _id: 'a_distressed',
    name: 'Distressed',
    class: 'Answer'
  },
  {
    _id: 'a_weak',
    name: 'Weak',
    class: 'Answer'
  },
  {
    _id: 'a_normal',
    name: 'Normal',
    class: 'Answer'
  },
  {
    _id: 'a_strong',
    name: 'Strong',
    class: 'Answer'
  },
  {
    _id: 'a_barrel',
    name: 'Barrel',
    class: 'Answer'
  },
  {
    _id: 'a_car',
    name: 'Pectus Carinatum',
    class: 'Answer'
  },
  {
    _id: 'a_exc',
    name: 'Pectus Excavatum',
    class: 'Answer'
  },
  {
    _id: 'P1',
    class: 'Procedure',
    name: 'Adrenalectomy - open',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P2',
    class: 'Procedure',
    name: 'Laparotomy - other - specify',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P3',
    class: 'Procedure',
    name: 'Major ventral hernia ',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P4',
    class: 'Procedure',
    name: 'Breast Reconstruction',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P5',
    class: 'Procedure',
    name: 'Modified Radical Mastectomy',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P6',
    class: 'Procedure',
    name: 'Simple Mastectomy',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P7',
    class: 'Procedure',
    name: 'Subcutaneous Mastectomy',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P8',
    class: 'Procedure',
    name: 'Wide excision / Quardantectomy',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P9',
    class: 'Procedure',
    name: 'Wide excision + Axillary dissection',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'P10',
    class: 'Procedure',
    name: 'Coronary artery grafting',
    specialty: 'surgical',
    severity: 2,
    procedureType: 1
  },
  {
    _id: 'nstemi',
    name: 'NSTEMI',
    class: 'Answer'
  },
  {
    _id: 'stroke',
    name: 'Stroke',
    class: 'Answer'
  },
  {
    _id: 'stemi',
    name: 'STEMI',
    class: 'Answer'
  },
  {
    _id: 'pe',
    name: 'PE',
    class: 'Answer'
  },
  {
    _id: 'iddm',
    name: 'IDDM',
    class: 'Answer'
  },
  {
    _id: 'niddm',
    name: 'NIDDM',
    class: 'Answer'
  },
  {
    _id: 'asthma',
    name: 'Asthma',
    class: 'Answer'
  },
  {
    _id: 'hypertension',
    name: 'Hypertension',
    class: 'Answer'
  },
  {
    _id: 'hypothyroidism',
    name: 'Hypothyroidism',
    class: 'Answer'
  }
]

console.log(answers.reduce((acc, answer) => ({ ...acc, [answer._id]: answer }), {}))
