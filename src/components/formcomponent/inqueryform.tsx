'use client'

import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Fade,
  Backdrop,
} from '@mui/material'

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#fff',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
}

const InquiryModal = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}) => {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string

    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.')
      return
    }

    if (phone && (!/^\d{10}$/.test(phone))) {
      alert('Phone number must be 10 digits.')
      return
    }

    const currentTime = new Date().toLocaleString()

    const templateParams = {
      name: formData.get('name'),
      email,
      phone,
      message: formData.get('message'),
      time: currentTime,
      title: `New Inquiry from ${formData.get('name')}`,
      to_email: 'pd@traverse.ventures',
      // To:'pd@traverse.ventures'

    }

    emailjs
      .send(
        'service_e2a3fkf',      // ✅ Your EmailJS service ID
        'template_wv4w42c',     // ✅ Your EmailJS template ID
        templateParams,
        'W4wcc2N1SUtdrgImx'     // ✅ Your EmailJS public key
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.reset()
          handleClose()
        },
        (error) => {
          console.error('EmailJS error:', error)
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          <Typography variant="h5" fontWeight="bold" mb={2} color="#2d6a63">
            Inquiry Form
          </Typography>
          <form ref={formRef} onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              type="tel"
              margin="normal"
              inputProps={{ maxLength: 10 }}
            />
            <TextField
              fullWidth
              label="Your Question"
              name="message"
              multiline
              rows={4}
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, bgcolor: '#2d6a63' }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Fade>
    </Modal>
  )
}

export default InquiryModal
