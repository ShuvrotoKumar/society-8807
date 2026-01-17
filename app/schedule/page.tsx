'use client'

import React, { useMemo, useState } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Swal from 'sweetalert2'

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(14)
  const [selectedTime, setSelectedTime] = useState('')

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationPurpose: '',
    meetingPreference: 'virtual'
  })

  const timeSlots = [
    '9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'
  ]

  const calendarDays = useMemo(() => Array.from({ length: 31 }, (_, i) => i + 1), [])

  const calendarCells = useMemo(() => {
    const startOffset = 1
    const blanks: Array<number | null> = Array.from({ length: startOffset }, () => null)
    const cells: Array<number | null> = [...blanks, ...calendarDays]

    while (cells.length % 7 !== 0) cells.push(null)
    return cells
  }, [calendarDays])

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    Swal.fire({
      title: 'Confirm Appointment',
      html: `<div style="text-align: left;">
        <p><strong>Date:</strong> January ${selectedDate}, 2025</p>
        <p><strong>Time:</strong> ${selectedTime}</p>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Purpose:</strong> ${formData.consultationPurpose}</p>
        <p><strong>Meeting:</strong> ${formData.meetingPreference === 'virtual' ? 'Virtual Meeting' : formData.meetingPreference === 'phone' ? 'Phone Call' : 'In-Person Meeting'}</p>
      </div>`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#C9A961',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Confirm',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Appointment confirmed:', {
          date: selectedDate,
          time: selectedTime,
          ...formData
        })
        Swal.fire({
          title: 'Confirmed!',
          text: 'Appointment confirmed successfully! We will send you a confirmation email shortly.',
          icon: 'success',
          confirmButtonColor: '#C9A961'
        })
      } else {
        console.log('Appointment cancelled by user')
      }
    })
  }

  return (
    <div className="min-h-screen bg-[#F6F2E8]">
      <Header />

      <main>
        <section className="bg-[#1A1A1A] py-20 px-4">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="font-serif text-4xl font-medium leading-tight text-[#C9A961] sm:text-5xl md:text-6xl whitespace-nowrap">
              Ready to begin your wealth management <br /> journey?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
              Schedule a confidential consultation to discuss your financial goals and explore how we can serve you.
            </p>
          </div>
        </section>

        <section className="px-4 pb-20 pt-12">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="font-serif text-2xl font-medium text-neutral-800 sm:text-3xl">Select Your Preferred Time</h2>
              <p className="mt-2 text-sm text-neutral-500">Choose a date and time that works best for your schedule</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-neutral-900">January 2024</h3>
                  <div className="flex items-center gap-2">
                    <button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button type="button" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-700 hover:bg-neutral-50">
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-7 gap-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="py-2 text-center text-[11px] font-medium text-neutral-500">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {calendarCells.map((day, idx) => {
                    if (!day) {
                      return <div key={`blank-${idx}`} className="h-9" />
                    }

                    const isSelected = selectedDate === day
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setSelectedDate(day)}
                        className={
                          `h-9 rounded-md text-xs transition-colors ` +
                          (isSelected
                            ? 'bg-[#C9A961] text-black'
                            : 'text-neutral-800 hover:bg-neutral-100')
                        }
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-6 border-t border-neutral-100 pt-5">
                  <p className="text-xs font-medium text-neutral-800">Available Times - January {selectedDate}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={
                            `h-9 rounded-md border text-xs transition-colors ` +
                            (isSelected
                              ? 'border-[#C9A961] bg-[#C9A961]/15 text-neutral-900'
                              : 'border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50')
                          }
                        >
                          {time}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <h3 className="text-sm font-medium text-neutral-900">Your Information</h3>

                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700">Full Name *</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-2 block h-10 w-full rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700">Email Address *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                      className="mt-2 block h-10 w-full rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="mt-2 block h-10 w-full rounded-md border border-neutral-300 px-3 text-sm outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700">Consultation Purpose</label>
                    <textarea
                      name="consultationPurpose"
                      value={formData.consultationPurpose}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Briefly describe your financial goals or questions"
                      className="mt-2 block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-neutral-700">Meeting Preference</label>
                    <select
                      name="meetingPreference"
                      value={formData.meetingPreference}
                      onChange={handleInputChange}
                      className="mt-2 block h-10 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm outline-none focus:border-neutral-500"
                    >
                      <option value="virtual">Virtual Meeting (Video Call)</option>
                      <option value="phone">Phone Call</option>
                      <option value="inperson">In-Person Meeting</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 h-11 w-full rounded-md bg-[#C9A961] text-sm font-semibold text-black hover:bg-[#B99225]"
                  >
                    Confirm Appointment
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default SchedulePage