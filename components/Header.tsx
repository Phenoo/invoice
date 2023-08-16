"use client"
import React from 'react'
import Container from './Container'
import { Button } from './ui/button';
import { PDFDownloadLink } from '@react-pdf/renderer'
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Header = () => {
  const router = useRouter()
  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-200 text-green-600";
      case "unpaid":
        return "bg-red-200 text-red-600";
      default:
        return "bg-yellow-200 text-yellow-600 ";
    }
  };

  return (
    <Container>
      <Button variant='ghost' onClick={() => router.back()}>
       <ChevronLeft /> Back
      </Button>
    </Container>

  )
}

export default Header