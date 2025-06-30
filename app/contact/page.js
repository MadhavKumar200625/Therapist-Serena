'use client'
import React from 'react'
import { useState } from 'react'

const Page = () => {

    const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreed: false
  })

  const [errors, setErrors] = useState({})
  const [showToast, setShowToast] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!(form.phone.trim())) newErrors.phone = 'Phone is required'
    if (!(form.phone.trim().length == 10)) newErrors.phone = '10 digits Phone required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid email is required'
    if (!form.message.trim()) newErrors.message = 'Please share what brings you here'
    if (!form.preferredTime.trim()) newErrors.preferredTime = 'Preferred time is required'
    if (!form.agreed) newErrors.agreed = 'You must agree to be contacted'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      setShowToast(true)
      setTimeout(() => setShowToast(false), 4000)
    }
  }


  return (
    <div className="bg-white px-6 py-12 max-w-2xl mx-auto ">
      {showToast && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-100 text-green-800 border border-green-300 px-6 py-3 rounded-md shadow">
          Dummy submission – data not saved.
        </div>
      )}

      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Contact Dr. Hahm</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">What brings you here?</label>
          <textarea
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Preferred time to reach you</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            value={form.preferredTime}
            onChange={(e) => setForm({ ...form, preferredTime: e.target.value })}
          />
          {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
        </div>

        <div className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={form.agreed}
            onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
            className="mt-1"
          />
          <label className="text-sm">I agree to be contacted</label>
        </div>
        {errors.agreed && <p className="text-red-600 text-sm">{errors.agreed}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Page