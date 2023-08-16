"use client"

import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const Currency = ({field} : any) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
    <SelectTrigger className="w-full bg-white">
      <SelectValue placeholder="Currency" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Currency</SelectLabel>
        <SelectItem value="usd">USD</SelectItem>
        <SelectItem value="euro"> EURO</SelectItem>
        <SelectItem value="nga">NAIRA</SelectItem>
        <SelectItem value="yen">YEN</SelectItem>
        <SelectItem value="cad">CAD</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
  )
}

export default Currency