import React, { useState, useRef, useEffect } from 'react'
import { isMobile } from 'react-device-detect'

import {
  IoMdClose,
  IoIosArrowBack,
  IoIosArrowForward
} from 'react-icons/io'

import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

import pdfOne from '../assets/portfolio/110-2資訊科技_10908學習歷程.pdf'
import pdfTwo from '../assets/portfolio/台北市立中崙高中 陳莉軒_化學探究實作-反應熱及酸鹼稀釋和測定.pdf'
import pdfThree from '../assets/portfolio/台北市立中崙高中_陳莉軒 物理探究實作.pdf'


const PDFViewer = () => {
	const [displayPDF, setDisplayPDF] = useState(false)

  const [pdfFile, setPDFFile] = useState(null)

	const windowHeight = useRef(window.innerHeight)
  
	const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

	function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function pageNext() {
    setPageNumber(prevPageNumber => prevPageNumber + 1) 
  }

  function pageBack() {
    setPageNumber(prevPageNumber => prevPageNumber - 1) 
  }

  const [currentPDF, setCurrentPDF] = useState('')
  useEffect(() => {
    const handleStorage = () => {
      console.log('handling storage')
      const checker = {pdfOne: localStorage.getItem('pdfOne' || null), pdfTwo: localStorage.getItem('pdfTwo' || null), pdfThree: localStorage.getItem('pdfThree' || null)}
      for(const [key, value] of Object.entries(checker)) {
        if(value !== 'true') continue
        setDisplayPDF(true)
        switch (key) {
          case 'pdfOne': {
            setPDFFile(pdfOne)
            setCurrentPDF('pdfOne')
            break
          }
          case 'pdfTwo':  {
            setPDFFile(pdfTwo)
            setCurrentPDF('pdfTwo')
            break
          }
          case 'pdfThree': {
            setPDFFile(pdfThree)
            setCurrentPDF('pdfThree')
            break
          }
        }
        return console.log(pdfFile)
      }
      setDisplayPDF(false)
    }
    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener('storage', handleStorage)
    }
  })

  return (
    <Document className={`${displayPDF ? 'block' : 'hidden' } rounded-xl shadow-lg fixed w-full h-screen z-[1000]`} file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
      <Page pageNumber={pageNumber} height={isMobile ? windowHeight.current * 0.75 : windowHeight.current * 0.85} renderTextLayer={false} renderAnnotationLayer={false} />
      <div className='absolute bottom-[15%] flex gap-4 items-center w-full justify-center'>
        <button
          className='text-2xl bg-gray-600 text-white hover:bg-gray-500 py-2 px-6 rounded-md shadow-lg transition-colors'
          onClick={() => {
            localStorage.removeItem(currentPDF)
            window.dispatchEvent( new Event('storage') )
          }}
          >
          <IoMdClose />
        </button>
        <div className='bg-gray-600 text-white rounded-md shadow-lg flex'>
          <button
            className={`${pageNumber !== 1 && 'hover:bg-gray-500'} py-2 px-4 rounded-md transition-colors`}
            onClick={pageBack}
            disabled={pageNumber <= 1}>
            <IoIosArrowBack />
          </button>
          <span className='bg-gray-600 py-2 px-6 text-[1rem] font-medium flex-shrink-0'>
            {pageNumber} / {numPages}
          </span>
          <button
            className={`${pageNumber !== numPages && 'hover:bg-gray-500'} py-2 px-4 rounded-md transition-colors`}
            onClick={pageNext}
            disabled={pageNumber === numPages}>
            <IoIosArrowForward />
          </button>
        </div>     
      </div>
    </Document>
  )
}

export default PDFViewer