import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import Hero from '../components/letter-page/Hero'
import { useEffect, useState, useMemo } from 'react'
import Invitation from '../components/letter-page/Invitation'
import TimeLocation from '../components/letter-page/TimeLocation'
import Schedule from '../components/letter-page/Schedule'
import Congrats from '../components/letter-page/Congrats'

import FooterLogo from '@/components/letter-page/FooterLogo'

import Modal from '../components/letter-page/sub-comp/Modal'
import { galleryImage } from '../utils/gallery-data'
import Sidebar from '../components/letter-page/sub-comp/Sidebar'
import YoutubeVideo from '../components/letter-page/YoutubeVideo'
import Snowfall from 'react-snowfall'

import leaveEffect from '../assets/home-image/leaveEffect.png'

import NavButton from '../components/letter-page/sub-comp/NavButton'
import Message from '@/components/letter-page/Message'
import Response from '@/components/letter-page/Response'
import Gallery1 from '@/components/letter-page/Gallery-1'
import LetterEnvelop from '@/components/letter-page/LetterEnvelop'

import { getDataApi } from '@/utils/axios'
import styles from './LetterPage.module.css'
import { useParams } from 'react-router-dom'
import SnowFall from '@/components/letter-page/SnowFall'
const LetterPage = () => {
  const { id } = useParams()

  const [isOpen, setIsOpen] = useState(false)
  const [letter, setLetter] = useState(null)
  const [isLetterOpen, setIsLetterOpen] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [index, setIndex] = useState(0)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const numberImage = galleryImage.length
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataApi(`/invitation-detail?_id=${id}`)
      console.log(data)
      setLetter(data.data)
    }
    fetchData()
  }, [])
  const bgColor = useMemo(() => {
    let style = ''

    if (0) {
      style = styles.pinkBg
    }

    if (0) {
      style = styles.grayBg
    }

    return style
  }, [])
  if (!isLetterOpen) {
    return (
      <div className='w-screen h-screen m-0 p-0 flex items-center justify-center bg-main'>
        <LetterEnvelop
          isLetterOpen={isLetterOpen}
          setIsLetterOpen={setIsLetterOpen}
        />
      </div>
    )
  }
  const {
    album,
    anotherProduct,
    backgroundColor,
    codeInvite,
    contentGuestBook,
    contentOfInvitation,
    coverImage,
    createTime,
    effectBackgroud,
    effectImage,
    eventOfProgram,
    fontStyleOfContent,
    fontStyleOfTitle,
    informationOfBride,
    informationOfGroom,
    isDisplayGonePeople,
    isEffectOfOpenning,
    isPaid,
    isUseConfirm,
    isUseGuestBook,
    password,
    productId,
    song,
    styleBackground,
    thumbnailImage,
    timeAndLocationOfEgagement,
    timeAndLocationOfInterrogation,
    timeAndLocationOfWedding,
    userId,
    videoLink,
  } = letter
  console.log(letter)
  return (
    <div className={`letter-wrapper ${bgColor}`}>
      <AnimationOnScroll
        animateIn='animate__zoomInDown'
        offset={10}
        animatePreScroll={false}
        duration={2}
        delay={0}
      >
        <div className={`letter-layout ${bgColor}`}>
          <SnowFall type={effectBackgroud.value} />
          <NavButton setIsNavOpen={setIsNavOpen} />

          <Hero
            setIsNavOpen={setIsNavOpen}
            manfirstName={informationOfGroom.firstName}
            coverImage={coverImage}
            manName={informationOfGroom.name}
            womanfirstName={informationOfBride.firstName}
            womanName={informationOfBride.name}
          />
          <Invitation
            informationOfBride={informationOfBride}
            informationOfGroom={informationOfGroom}
            contentOfInvitation={contentOfInvitation}
            timeAndLocationOfWedding={timeAndLocationOfWedding}
          />
          <Gallery1 />
          <YoutubeVideo videoLink={videoLink} />
          <TimeLocation
            timeAndLocationOfWedding={timeAndLocationOfWedding}
            timeAndLocationOfEgagement={timeAndLocationOfEgagement}
            timeAndLocationOfInterrogation={timeAndLocationOfInterrogation}
          />
          <Schedule />
          <Congrats setModalContent={setModalContent} setIsOpen={setIsOpen} />
          <Message />
          <Response />
          <FooterLogo />
        </div>
      </AnimationOnScroll>
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalContent={modalContent}
        index={index}
        numberImage={numberImage}
      />
    </div>
  )
}

export default LetterPage
