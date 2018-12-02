/*jshint esversion: 6 */
export const validateEmail = email => {
  if (!email) return true
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  return !emailPattern.test(email)
}

export const validatePassword = password => {
  if (!password || password.length < 4) return true

  return !/^[a-zA-Z0-9 ]/i.test(password)
}

export const validateEmailId = email => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,2}$/i
  const length = email.length
  if (length > 0 && emailPattern.test(email)) return true
  else if (length > 0 && !emailPattern.test(email)) return false
  return null
}

export const validatePasswordData = password => {
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{5,}$/i
  // Minimum six characters, at least one letter, one number and one special character:
  if (!password) return null
  const length = password.length
  if (length > 5 && passwordPattern.test(password)) return true
  else if (length < 5 && length > 0 && !passwordPattern.test(password)) return false
  else if (length >= 5 && !passwordPattern.test(password)) return false
  else if (length === 0) return null
}

export const validateMobileNo = mobile => {
  const length = mobile ? mobile.length : 0
  if (length === 10) return true
  else if (length < 10 || length > 10) return false
  return null
}

export const validateNormalInput = text => {
  if (!text) return false
  if (text.length === 0) return false
  return /^(\w+ ?)*$/i.test(text)
}

export const validateInputWoSpecial = normal => {
  return /^(\w+ ?)*$/i.test(normal)
}

export const validateInputAndArray = (input, array) => {
  if (input !== undefined && input.length > 0 && array.length > 0) return true
  else return false
}
// Validation of Chapter for save chapter
export const validateChapter = chapter => {
  const result = { type: '', isValid: true, msg: '' }

  // validating colorpicker
  if (
    !chapter.color ||
    chapter.color === ' ' ||
    chapter.color.trim().length === 0 ||
    chapter.color === null
  ) {
    console.log('Invalid Color')
    result.type = 'color'
    result.isValid = false
    result.msg = 'Color should not be empty'
    return result
  }
  //validating Icon
  if (!chapter.icon || chapter.icon === ' ' || chapter.icon === null || chapter.icon.length < 1) {
    console.log('Invalid Icon')
    result.type = 'icon'
    result.isValid = false
    result.msg = 'Icon should not be empty'
    return result
  }
  //validating Chapter title/chapter name and length of chapter
  if (!chapter.title || chapter.title === '' || chapter.title.length < 1) {
    console.log('Invalid title')
    result.type = 'chapter title'
    result.isValid = false
    result.msg = 'Chapter name should not be empty'
    return result
  }
  //validating the length of sections
  if (!chapter.sections || chapter.sections.length < 1) {
    console.log('Invalid sections')
    result.type = 'sections'
    result.isValid = false
    result.msg = 'Sections should have atleast one section'
    return result
  }

  //validating section title
  chapter.sections.map(section => {
    if (!section.title || section.title === '' || section.title.length < 1) {
      console.log('Invalid Section Title')
      result.type = 'section title'
      result.isValid = false
      result.msg = 'section title should not be empty'
      return result
    }

    //validating columns length
    if (section.columns.length < 1) {
      console.log('Invalid Columns')
      result.type = 'columns'
      result.isValid = false
      result.msg = 'Section should have one column'
      return result
    }
    //validating question group length
    section.columns.map(column => {
      if (column.questiongroups.length < 1) {
        console.log('Invalid Questiongroup')
        result.type = 'questiongroup'
        result.isValid = false
        result.msg = 'Atleast one questiongroup should Dropped'
        return result
      }
    })
  })
  return result
}

//Validation of template
export const validateTemplate = (chaptersAdded, currentTemplate) => {
  const result = { type: '', isValid: true, msg: '' }
  //checting the current template title length
  if (!currentTemplate.title || currentTemplate.title.length < 1 || currentTemplate.count === '') {
    console.log('Invalid Template')
    result.type = 'templateTitle'
    result.isValid = false
    result.msg = 'Template name should not empty'
    return result
  }
  //validation of adding the chapters
  if (chaptersAdded.length < 1) {
    console.log('Invalid Chapter')
    result.type = 'chaptersAdded'
    result.isValid = false
    result.msg = 'Chapters should not empty'
    return result
  }
  return result
}

//validation of sections,mapping columns in sections
export const validateSection = sections => {
  const result = { type: '', isValid: true, msg: '' }
  sections.map(section => {
    section.columns.map(column => {
      if (column.questiongroups.length < 1) {
        console.log('Invalid Questiongroup')
        result.type = 'questiongroup'
        result.isValid = false
        result.msg = 'Atleast one questiongroup should Dropped'
        return result
      }
    })
  })
  return result
}

// validation for delete the section
export const validateRemoveSectionBtn = sections => {
  const result = { type: '', isValid: true, msg: '' }
  if (sections.length < 2) {
    console.log('Invalid sections')
    result.type = 'sections'
    result.isValid = false
    result.msg = 'Sections should have atleast one section'
    return result
  }
  return result
}

//function to match the old and new password if it exists
export const validatePasswordMatch = passswordReset => {
  const isValid = { type: '' }
  if (
    passswordReset.oldPassword.length > 0 ||
    passswordReset.newPassword.length > 0 ||
    passswordReset.confirmPassword.length > 0
  ) {
    if (
      passswordReset.newPassword.length > 0 &&
      passswordReset.confirmPassword.length > 0 &&
      passswordReset.newPassword === passswordReset.confirmPassword
    )
      if (passswordReset.oldPassword.length > 0) isValid.type = 'match'
      else isValid.type = 'matchedOldMissing'
    else isValid.type = 'noMatch'
    console.log('Password reset fields are entered')
  } else isValid.type = 'noReset'
  return isValid.type
}
//Validating question group count,length
export const ValidateQuestiongroup = initialQuestiongroup => {
  const result = { type: '', isValid: true, msg: '' }
  if (initialQuestiongroup.title.length < 1) {
    console.log('Invalid Questiongroup')
    result.type = 'emptyQgTitle'
    result.isValid = false
    return result
  }
  if (initialQuestiongroup.count === '' || initialQuestiongroup.count.length < 1) {
    console.log('Invalid QuestiongroupType')
    result.type = 'emptyQgType'
    result.isValid = false
    return result
  }
  if (initialQuestiongroup.questions.length < 1) {
    console.log('No Questions')
    result.type = 'noDroppedField'
    result.isValid = false
    return result
  }
  //Function to check empty field
  if (initialQuestiongroup.questions.length > 0)
    initialQuestiongroup.questions.map(question => {
      if (question.question === undefined) {
        console.log('Questionname is empty')
        result.type = 'noFieldSettings'
        result.isValid = false
        return result
      }
      //Function to check empty field label
      if (question.question !== undefined && question.question.length < 1) {
        console.log('Field Label is null')
        result.type = 'emptyFieldLabel'
        result.isValid = false
        return result
      }
      //Function to check empty choice
      if (question.answers) {
        question.answers.map(answer => {
          if ((answer.name && answer.name.length < 1) || answer.name === '') {
            console.log('Choice is null')
            result.type = 'emptyChoice'
            result.isValid = false
            return result
          }
          if (!answer.name) {
            console.log('No Selected yet')
            result.type = 'emptyChoice'
            result.isValid = false
            return result
          }
        })
        if (question.answers.length < 1) {
          console.log('Choice is null')
          result.type = 'noChoice'
          result.isValid = false
          return result
        }
      }
      if (question.commonAnswers)
        question.commonAnswers.map(commonAns => {
          if (question.commonAnswers.length !== 1 && (!commonAns._id || !commonAns.name)) {
            console.log('Added CommonChoice is not Selected')
            result.type = 'emptyCommonChoice'
            result.isValid = false
            return result
          }
        })
    })

  return result
}

export const validateQuesFieldSetting = question => {
  let result = true
  if (question) {
    if (!question.question) result = false
    if (question.answers)
      question.answers.map(answer => {
        if ((answer.name && answer.name.length < 1) || answer.name === '') result = false
        if (question.answers.length < 1 || !answer.name) result = false
      })
    if (question.commonAnswers)
      question.commonAnswers.map(commonAns => {
        if (question.commonAnswers.length !== 1 && (!commonAns._id || !commonAns.name))
          result = false
      })
    return result
  } else {
    console.log('Did not get the question Obj.')
    return false
  }
}
