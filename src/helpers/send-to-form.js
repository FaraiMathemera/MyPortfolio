import { formUrl } from '../config'
import lang from 'lang'
//import sendMail from 'nodemailer'
//import smtpTransport from 'nodemailer-smtp-transport'

const langContext = lang.contact.form.validation



function validateName (name) {
  return !!name
}

function validateEmail (email) {
  if (email && email.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
    return true
  }

  return false
}

function validatePhone (phone) {
  return !!phone
}

function validateBudget (budget) {
  return !!budget
}

function validateFunctionality (functionality) {
  return !!functionality
}

function validateMessage (message) {
  return !!message
}

function validateGRecaptchaResponse (gRecaptchaResponse) {
  return !!gRecaptchaResponse
}


var service_id = "default_service"
var template_id = "template_mjzS3cY6"

async function sendData (name, email,phone, budget, functionality, message, gRecaptchaResponse) {
  let postData = JSON.stringify({
    name,
    email,
    phone,
    budget,
    functionality,
    message,
    'g-recaptcha-response': gRecaptchaResponse
  })

  }

function sendToForm (name, email,phone, budget, functionality, message, gRecaptchaResponse) {
  return new Promise((resolve, reject) => {
    if (!validateName(name)) {
      return reject(String(langContext.invalid_name))
    }

    if (!validateEmail(email)) {
      return reject(String(langContext.invalid_email))
    }

    if (!validatePhone(phone)) {
      return reject(String(langContext.invalid_phone))
    }

    if (!validateBudget(budget)) {
      return reject(String(langContext.invalid_budget))
    }

    if (!validateFunctionality(functionality)) {
      return reject(String(langContext.invalid_functionality))
    }

    if (!validateMessage(message)) {
      return reject(String(langContext.invalid_message))
    }

    if (!validateGRecaptchaResponse(gRecaptchaResponse)) {
      return reject(String(langContext.invalid_grecaptcha))
    }
    var template_params = {
       "reply_to": email,
       "from_name": name,
       "to_name": "Farai",
       "message_html": phone+" "+budget+" "+functionality+" "+message
    }
    sendData(name, email,phone, budget, functionality, message, gRecaptchaResponse)
    {
      emailjs.send(service_id, template_id, template_params).then((response) => {
       console.log('SUCCESS!', response.status, response.text);
       resolve(String(langContext.success));
    }, (err) => {
       console.log('FAILED...', err);
       reject(String(langContext.server_error));
    });
    }

  })
}

export default sendToForm
