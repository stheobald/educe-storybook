export const fixtures = {
  questiongroups: {
    byId: {
      pastProcedures: {
        _id: 'pastProcedures',
        title: 'Procedures',
        count: 'n',
        autoAdd: true,
        questions: ['1', '2', '3']
      },
      coMobDiag: {
        _id: 'coMobDiag',
        title: 'Co-morbidities / Diagnoses',
        count: 'n',
        autoAdd: true,
        questions: ['4', '7', '6']
      },
      funcStatus: {
        _id: 'funcStatus',
        title: 'Functional Status',
        questions: ['5', '4']
      }
    }
  },
  questions: {
    byId: {
      1: {
        _id: '1',
        question: 'Procedure',
        abbr: 'proc',
        questionType: 7,
        classes: 'autocompleteCombobox',
        ajax: 'procs',
        inputType: 7,
        answers: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'],
        commonAnswers: ['P3', 'P5', 'P8'],
        class: 'Question'
      },
      2: {
        _id: '2',
        question: 'Procedure Date',
        abbr: 'Proc Date',
        questionType: 4,
        inputType: 4
      },
      3: {
        _id: '3',
        question: 'Procedure Comments',
        abbr: 'Proc Cmnt',
        questionType: 2,
        inputType: 1
      },
      4: {
        _id: '4',
        question: 'Co-morbidity / Diagnosis',
        placeholder: 'Enter the Diagnosis here',
        abbr: 'Co Diag',
        questionType: 7,
        classes: 'il autocompleteCombobox',
        inputType: 1,
        commonAnswers: ['nstemi', 'iddm'],
        answers: [
          'nstemi',
          'iddm',
          'hypothyroidism',
          'pe',
          'hypertension',
          'stemi',
          'asthma',
          'stroke',
          'niddm'
        ]
      },
      5: {
        _id: '5',
        question: 'Functional Status',
        questionType: 2,
        inputType: 1
      },
      6: {
        _id: '6',
        question: 'Summary',
        questionType: 3,
        classes: 'il',
        inputType: 1,
        answers: [
          '1fd6fa5a-4f6a-11e5-86d7-0800278d2167',
          '1fd6fc80-4f6a-11e5-86d7-0800278d2167',
          '1fd6fb4a-4f6a-11e5-86d7-0800278d2167',
          '1fd6fad2-4f6a-11e5-86d7-0800278d2167'
        ]
      },
      7: {
        _id: '7',
        question: 'Event Comment',
        questionType: 2,
        placeholder: 'Enter Your Event Comments here',
        inputType: 1
      },
      8: {
        _id: '8',
        question: 'Diagnosis Date',
        questionType: 4,
        inputType: 2,
        answers: [
          '1fd6e7c2-4f6a-11e5-86d7-0800278d2167',
          '1fd6e740-4f6a-11e5-86d7-0800278d2167',
          '1fd6e6be-4f6a-11e5-86d7-0800278d2167'
        ]
      }
    }
  },

  answers: {
    byId: {
      '1fd6af50-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6af50-4f6a-11e5-86d7-0800278d2167',
        name: 'Mr.',
        class: 'Answer'
      },
      '1fd6b1a8-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b1a8-4f6a-11e5-86d7-0800278d2167',
        name: 'Mrs.',
        class: 'Answer'
      },
      '1fd6b2f2-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b2f2-4f6a-11e5-86d7-0800278d2167',
        name: 'Miss.',
        class: 'Answer'
      },
      '1fd6b3b0-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b3b0-4f6a-11e5-86d7-0800278d2167',
        name: 'Ms.',
        class: 'Answer'
      },
      '1fd6b45a-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b45a-4f6a-11e5-86d7-0800278d2167',
        name: 'Prof.',
        class: 'Answer'
      },
      '1fd6b50e-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b50e-4f6a-11e5-86d7-0800278d2167',
        name: 'Sir.',
        class: 'Answer'
      },
      '1fd6b5c2-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b5c2-4f6a-11e5-86d7-0800278d2167',
        name: 'Lady.',
        class: 'Answer'
      },
      '1fd6b66c-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b66c-4f6a-11e5-86d7-0800278d2167',
        name: 'Dr.',
        class: 'Answer'
      },
      '1fd6b720-4f6a-11e5-86d7-0800278d2167': {
        _id: '1fd6b720-4f6a-11e5-86d7-0800278d2167',
        name: 'Male',
        class: 'Answer'
      },
      a_strained: { _id: 'a_strained', name: 'Strained', class: 'Answer' },
      a_laboured: { _id: 'a_laboured', name: 'Laboured', class: 'Answer' },
      a_distressed: { _id: 'a_distressed', name: 'Distressed', class: 'Answer' },
      a_weak: { _id: 'a_weak', name: 'Weak', class: 'Answer' },
      a_normal: { _id: 'a_normal', name: 'Normal', class: 'Answer' },
      a_strong: { _id: 'a_strong', name: 'Strong', class: 'Answer' },
      a_barrel: { _id: 'a_barrel', name: 'Barrel', class: 'Answer' },
      a_car: { _id: 'a_car', name: 'Pectus Carinatum', class: 'Answer' },
      a_exc: { _id: 'a_exc', name: 'Pectus Excavatum', class: 'Answer' },
      P1: {
        _id: 'P1',
        class: 'Procedure',
        name: 'Adrenalectomy - open',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P2: {
        _id: 'P2',
        class: 'Procedure',
        name: 'Laparotomy - other - specify',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P3: {
        _id: 'P3',
        class: 'Procedure',
        name: 'Major ventral hernia ',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P4: {
        _id: 'P4',
        class: 'Procedure',
        name: 'Breast Reconstruction',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P5: {
        _id: 'P5',
        class: 'Procedure',
        name: 'Modified Radical Mastectomy',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P6: {
        _id: 'P6',
        class: 'Procedure',
        name: 'Simple Mastectomy',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P7: {
        _id: 'P7',
        class: 'Procedure',
        name: 'Subcutaneous Mastectomy',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P8: {
        _id: 'P8',
        class: 'Procedure',
        name: 'Wide excision / Quardantectomy',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P9: {
        _id: 'P9',
        class: 'Procedure',
        name: 'Wide excision + Axillary dissection',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      P10: {
        _id: 'P10',
        class: 'Procedure',
        name: 'Coronary artery grafting',
        specialty: 'surgical',
        severity: 2,
        procedureType: 1
      },
      nstemi: { _id: 'nstemi', name: 'NSTEMI', class: 'Answer' },
      stroke: { _id: 'stroke', name: 'Stroke', class: 'Answer' },
      stemi: { _id: 'stemi', name: 'STEMI', class: 'Answer' },
      pe: { _id: 'pe', name: 'PE', class: 'Answer' },
      iddm: { _id: 'iddm', name: 'IDDM', class: 'Answer' },
      niddm: { _id: 'niddm', name: 'NIDDM', class: 'Answer' },
      asthma: { _id: 'asthma', name: 'Asthma', class: 'Answer' },
      hypertension: { _id: 'hypertension', name: 'Hypertension', class: 'Answer' },
      hypothyroidism: {
        _id: 'hypothyroidism',
        name: 'Hypothyroidism',
        class: 'Answer'
      }
    }
  },
  createdTemplate: {
    id: 'c98136c3-f642-8559-ad89-eba2436f6d5d',
    title: 'Template',
    chapters: [
      {
        id: '0cfb2fca-8834-b3fe-c6b1-81ba9ade1bdb',
        title: 'Chapter 1',
        icon: 'rocket',
        color: '#d32f2f',
        sections: [
          {
            id: '048bff34-4ed8-cabb-7953-63f73aca6445',
            title: 'section 1',
            columns: [['pastProcedures', 'coMobDiag']]
          },
          {
            id: '30d610a4-dc8e-9067-00df-a5a885b5633c',
            title: 'section 2',
            columns: [['funcStatus', 'coMobDiag']]
          }
        ]
      },
      {
        id: '2536ba85-4d94-d70d-a062-aa15375d8b96',
        title: 'Chapter 2',
        icon: 'medkit',
        color: '#f06292',
        sections: [
          {
            id: '70e58b93-0fa1-5907-2453-aab44549f1a3',
            title: 'Section 4',
            columns: [['pastProcedures', 'funcStatus']]
          },
          {
            id: 'e3ad76c6-8a8e-0153-ed61-9fe4a68e5f03',
            title: 'Section 5',
            columns: [['funcStatus', 'coMobDiag']]
          }
        ]
      }
    ]
  },
  identity: {
    user: {
      _id: 'user-1',
      fullName: 'Shubham Kumar',
      dob: new Date('2001-05-03'),
      gender: 'Male',
      department: 'Cardiology',
      officialEmail: 'shubham@tandemnz.co.nz',
      personalEmail: 'shubham@gmail.com',
      officialPhNo: '5555555',
      personalMobileNo: '9999999',
      designation: 'Doctor',
      specialization: 'Cardiologist',
      role: 'teamlead',
      aboutMe: 'About user ',
      profilePic: '/static/images/bear.jpg',
      address: {
        laneNo: '146/23',
        city: 'Aukland',
        country: 'NewZealand',
        pincode: '560079'
      }
    },
    department: ['Anasthesia', 'Cardiology', 'ENT'],
    country: ['India', 'NewZealand', 'Australia']
  }
}
