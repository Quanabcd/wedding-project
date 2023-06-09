import React from 'react'

const InvitationDetail = ({ info, isBride }) => {
  console.log()
  if (isBride) {
    const {
      firstName,
      name,
      firstFatherNameOfBride,
      middleFatherNameOfBride,
      fatherNameOfBride,
      isOldBrotherBride,
      firstMotherNameOfBride,
      middleMotherNameOfBride,
      motherNameOfBride,
    } = info
    return (
      <div className='text-center px-4'>
        <h2 className='text-main'>Nhà Trai</h2>
        <p>Chú rể</p>
        <h1>{`${firstName} ${name}`}</h1>
        <p>{isOldBrotherBride ? 'Trưởng nữ' : 'Thứ nữ'}</p>
        <p>Bố</p>
        <p>
          Ông.{' '}
          {`${firstFatherNameOfBride} ${middleFatherNameOfBride} ${fatherNameOfBride}`}
        </p>
        <p>Mẹ</p>
        <p>
          Bà.{' '}
          {`${firstMotherNameOfBride} ${middleMotherNameOfBride} ${motherNameOfBride}`}
        </p>
      </div>
    )
  }
  const {
    firstName,
    name,
    firstFatherNameOfGroom,
    middleFatherNameOfGroom,
    fatherNameOfGroom,
    isOldBrotherGroom,
    firstMotherNameOfGroom,
    middleMotherNameOfGroom,
    motherNameOfGroom,
  } = info
  return (
    <div className='text-center px-4'>
      <h2 className='text-main'>Nhà Gái</h2>
      <p>Cô dâu</p>
      <h1>{`${firstName} ${name}`}</h1>
      <p>{isOldBrotherGroom ? 'Trưởng nam' : 'Thứ nam'}</p>
      <p>Bố</p>
      <p>
        Ông.{' '}
        {`${firstFatherNameOfGroom} ${middleFatherNameOfGroom} ${fatherNameOfGroom}`}
      </p>
      <p>Mẹ</p>
      <p>
        Bà.{' '}
        {`${firstMotherNameOfGroom} ${middleMotherNameOfGroom} ${motherNameOfGroom}`}
      </p>
    </div>
  )
}

export default InvitationDetail
