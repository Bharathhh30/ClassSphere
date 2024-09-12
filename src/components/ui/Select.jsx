import React, { createContext, useContext, useState } from 'react'

const SelectContext = createContext()

export function Select({ children, value, onValueChange }) {
  const [open, setOpen] = useState(false)

  return (
    <SelectContext.Provider value={{ value, onValueChange, open, setOpen }}>
      <div className="relative inline-block text-left">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export function SelectTrigger({ children, className }) {
  const { open, setOpen } = useContext(SelectContext)

  return (
    <button
      type="button"
      className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 ${className}`}
      onClick={() => setOpen(!open)}
      aria-haspopup="listbox"
      aria-expanded={open}
    >
      {children}
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  )
}

export function SelectValue({ placeholder }) {
  const { value } = useContext(SelectContext)
  return <span>{value || placeholder}</span>
}

export function SelectContent({ children, className }) {
  const { open } = useContext(SelectContext)

  if (!open) return null

  return (
    <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${className}`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <div className="py-1" role="none">
        {children}
      </div>
    </div>
  )
}

export function SelectItem({ value, children, className }) {
  const { onValueChange, setOpen } = useContext(SelectContext)

  return (
    <button
      type="button"
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
      role="menuitem"
      onClick={() => {
        onValueChange(value)
        setOpen(false)
      }}
    >
      {children}
    </button>
  )
}